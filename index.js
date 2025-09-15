const express = require("express");
const router = require("./routes/event");
const app = express();
const path = require("path");
const port = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use("/", router);


app.listen(port, () => {
    console.log("Server Started");
})