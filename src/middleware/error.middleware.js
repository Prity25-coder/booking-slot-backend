export const errorHandler = (err, req, res, next) => {
  console.error(err);
  
  if (err.message.includes("already booked")) {
    return res.status(409).json({ 
      success: false, 
      message: err.message 
    });
  }
  
  if (err.message.includes("Invalid") || err.message.includes("not in bookable range")) {
    return res.status(400).json({ 
      success: false, 
      message: err.message 
    });
  }
  
  res.status(500).json({ 
    success: false, 
    message: "Internal server error" 
  });
};