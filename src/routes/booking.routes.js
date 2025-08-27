import { Router } from "express";
import { BookingController } from "../controllers/booking.controller.js";
import {
  validateBooking,
  validateSlotQuery,
} from "../middleware/validation.middleware.js";

const bookingRouter = Router();

bookingRouter.get("/slots", validateSlotQuery, BookingController.getSlots);

bookingRouter.post("/book", validateBooking, BookingController.bookSlot);

export default bookingRouter;


