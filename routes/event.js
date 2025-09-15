const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/event");
const router = express.Router();

router.get("/eventregister", (req, res) => {
    return res.render("event");
});
router.post("/events", async(req, res) => {
    const {id, name, date, capacity, bookedSeats} = req.body;
    const event = await Event.create({
        id, 
        name,
        date, 
        capacity,
        bookedSeats,
    });
    return res.render("sucess", {
        event
    });
});
router.get("/events", async(req, res) => {
    const events = await Event.find({});
    return res.render("allEvent", {
        events
    });
});

module.exports = router;
// POST /events: Create an event with date and capacity.
// GET /events: List all upcoming events.
// POST /events/:id/book: Book seats for an event.
// Reject if bookedSeats + seatsBooked > capacity.
// Increment bookedSeats on success.
// GET /events/:id/bookings: List all bookings for an event.
// DELETE /bookings/:id: Cancel a booking and decrement bookedSeats.