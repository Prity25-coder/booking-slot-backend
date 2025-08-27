const { PORT, CORS_ORIGIN, FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

const ENV_CONFIG = Object.freeze({
  port: Number(PORT) || 4200,
  corsOrigin: CORS_ORIGIN || "*",
  firebase: {
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // fixes newline issue
  },
});

export default ENV_CONFIG;
