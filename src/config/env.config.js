const {
  PORT,
  CORS_ORIGIN,
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
  universe_domain,
} = process.env;

const ENV_CONFIG = Object.freeze({
  port: Number(PORT) || 4200,
  corsOrigin: CORS_ORIGIN || "*",
  
  firebaseConfig: {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  },
  firebaseAdminConfig: {
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
    universe_domain,
  },
});

export default ENV_CONFIG;
