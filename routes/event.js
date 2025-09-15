const express = require("express");
const router = express.Router();

router.get("/eventrender", (req, res) => {
    return res.render("event");
});


module.exports = router;
// POST /events: Create an event with date and capacity.
// GET /events: List all upcoming events.
// POST /events/:id/book: Book seats for an event.
// Reject if bookedSeats + seatsBooked > capacity.
// Increment bookedSeats on success.
// GET /events/:id/bookings: List all bookings for an event.
// DELETE /bookings/:id: Cancel a booking and decrement bookedSeats.