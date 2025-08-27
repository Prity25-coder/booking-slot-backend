/* import admin from "firebase-admin";

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); */


import admin from "firebase-admin";
import ENV_CONFIG from "./env.config.js";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: ENV_CONFIG.firebase.projectId,
      clientEmail: ENV_CONFIG.firebase.clientEmail,
      privateKey: ENV_CONFIG.firebase.privateKey,
    }),
  });
}

export const db = admin.firestore();
export { admin };
