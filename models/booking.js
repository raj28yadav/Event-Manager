const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
    },
    eventId: {
        type: String, 
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    seatsBooked: {
        type: Number,
        
    }
});
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;