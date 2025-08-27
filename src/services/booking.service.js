import { Booking } from "../models/booking.schema.js";
import { generateSlots, isValidDate, isValidTime } from "../utils/time.utils.js";

export const BookingService = {
  async getAvailableSlots(date) {
    if (!isValidDate(date)) {
      throw new Error("Invalid date format");
    }

    const allSlots = generateSlots();

    let bookings = [];
    try {
      bookings = await Booking.findByDate(date);
    } catch (err) {
      console.error("Error fetching bookings:", err.message);
      bookings = []; // fallback so API still works
    }

    const bookedTimes = new Set(bookings.map((b) => b.time));
    return allSlots.filter((time) => !bookedTimes.has(time));
  },

  async createBooking(bookingData) {
    const { date, time } = bookingData;

    if (!isValidDate(date) || !isValidTime(time)) {
      throw new Error("Invalid date or time format");
    }

    const validTimes = generateSlots();
    if (!validTimes.includes(time)) {
      throw new Error("Time not in bookable range");
    }

    // Prevent double booking
    const existing = (await Booking.findByDate(date))
      .find(b => b.time === time);

    if (existing) {
      throw new Error("Slot already booked");
    }

    return await Booking.create(bookingData);
  }
};




