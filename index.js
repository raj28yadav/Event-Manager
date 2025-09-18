const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/event");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const port = 8001;

mongoose.connect("mongodb://localhost:27017/eventmanager")
.then(() => {
    console.log("MongoDB Connnected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use("/", router);


app.listen(port, () => {
    console.log("Server Started");
})