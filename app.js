const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(cors());
}

//database connection
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", function () {
  console.log("We are connected to our database...");
});

const authRoute = require("./routes/auth");

app.use("/api/auth", authRoute);


if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}

app.listen(process.env.PORT || 7000, () => {
  console.log("Server is up and running");
});
