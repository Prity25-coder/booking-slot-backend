import express from "express";
import cors from "cors"
import bookingRouter from "./routes/booking.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import ENV_CONFIG from "./config/env.config.js";

const app = express();

app.use(cors({ origin: ENV_CONFIG.corsOrigin }));
app.use(express.json());

app.use("/api", bookingRouter);

app.use(errorHandler);

export default app;



