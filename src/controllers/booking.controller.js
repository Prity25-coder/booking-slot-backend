import { BookingService } from "../services/booking.service.js";

export const BookingController = {
  async getSlots(req, res, next) {
    try {
      const { date } = req.query;

      if (!date) {
        return res.status(400).json({ success: false, message: "Date is required" });
      }

      const available = await BookingService.getAvailableSlots(date);

      res.json({
        success: true,
        date,
        available
      });
    } catch (error) {
      console.error("Error in getSlots:", error.message);
      res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
  },

  async bookSlot(req, res, next) {
    try {
      const { date, time } = req.body;
      console.log({date, time});
      

      if (!date || !time) {
        return res.status(400).json({ success: false, message: "Date and time are required" });
      }

      const booking = await BookingService.createBooking({ date, time });

      res.status(201).json({
        success: true,
        message: "Slot booked successfully",
        booking
      });
    } catch (error) {
      console.error("Error in bookSlot:", error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  }
};

