 import admin from "firebase-admin";
import { db } from "../config/firebase.config.js";

const COLLECTION = "bookings";

export const Booking = {
  // Create new booking with transaction (prevents double-booking)
  async create(bookingData) {
    const docId = `${bookingData.date}_${bookingData.time}`;
    const docRef = db.collection(COLLECTION).doc(docId);

    await db.runTransaction(async (tx) => {
      const existing = await tx.get(docRef);
      if (existing.exists) {
        throw new Error("This slot is already booked");
      }
      tx.create(docRef, {
        ...bookingData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    return { id: docId, ...bookingData };
  },

  // ✅ Safe query by date
  async findByDate(date) {
    try {
      const snap = await db
        .collection(COLLECTION)
        .where("date", "==", date)
        .get();

      if (snap.empty) {
        return []; // no bookings found, return empty list
      }

      return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      console.error("Firestore query failed:", err.message);
      return []; // ✅ fallback safe return
    }
  },
}; 
