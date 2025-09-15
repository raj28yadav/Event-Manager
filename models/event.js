const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    bookedSeats: {
        type: Number,
        required: true,
    },
});
const eventschema = mongoose.model("eventschema", eventSchema);
model.export = eventschema;