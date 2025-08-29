import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import ENV_CONFIG from "./env.config.js";

// import  serviceAccountKey from "../../slot-booking-app-32275-firebase-adminsdk-fbsvc-63f4ff9048.json" with { type: "json" };


const { firebaseConfig, firebaseAdminConfig } = ENV_CONFIG;
console.log(firebaseAdminConfig);


// Initialize App
const app = admin.initializeApp({
  credential: admin.credential.cert(firebaseAdminConfig),
});

const db = getFirestore(app);
export { db };
