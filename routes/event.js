const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/event");
const Booking = require("../models/booking");
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
router.get("/events/:id", async(req, res) => {
    const id = req.params.id;
    const event = await Event.findOne({id});
    
    return res.render("eventforbooking", {
        event
    });

});
router.post("/events/:id/book", async (req, res) => {
    const id = req.params.id;
    const { emailId, userName, seatsBooked } = req.body;
    const book = await Booking.create({
      emailId,
      eventId: id, 
      userName,
      seatsBooked
    });
    const event = await Event.findOneAndUpdate(
      { id: id },                          
      { $inc: { bookedSeats: seatsBooked } },
      { new: true }
    );
    return res.render("sucess", { event, book });

});
router.get("/events/:id/bookings", async (req, res) => {
    const Id = req.params.id;
    const allBooking = await Booking.find({ eventId: Id });
    const event = await Event.findOne({ id: Id});
    return res.render("allbook", {
        allBooking, 
        event,
    })
});
router.delete("/bookings/:emailId", async (req, res) => {
        const emailId = req.params.emailId;
        const booking = await Booking.findOneAndDelete({ emailId });
        if(!booking){
            return res.status(404).send("Booking not found");
        }
        await Event.findOneAndUpdate(
            { id: booking.eventId }, 
            { $inc: { bookedSeats: -booking.seatsBooked }}
        );
        return res.redirect(`/events/${booking.eventId}/bookings`);
});


module.exports = router;
// POST /events/:id/book: Book seats for an event.
// Reject if bookedSeats + seatsBooked > capacity.
// Increment bookedSeats on success.
// GET /events/:id/bookings: List all bookings for an event.
// DELETE /bookings/:id: Cancel a booking and decrement bookedSeats.

