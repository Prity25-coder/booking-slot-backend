import { isValidDate, isValidTime } from "../utils/time.utils.js";

export const validateBooking = (req, res, next) => {
  const { date, time } = req.body;
  
  if (!date || !time) {
    return res.status(400).json({ 
      success: false, 
      message: "Date and time are required" 
    });
  }
  
  if (!isValidDate(date)) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid date format (YYYY-MM-DD)" 
    });
  }
  
  if (!isValidTime(time)) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid time format (HH:MM)" 
    });
  }
  
  next();
};

export const validateSlotQuery = (req, res, next) => {
  const { date } = req.query;
  
  if (!date) {
    return res.status(400).json({ 
      success: false, 
      message: "Date query parameter is required" 
    });
  }
  
  if (!isValidDate(date)) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid date format (YYYY-MM-DD)" 
    });
  }
  
  next();
};