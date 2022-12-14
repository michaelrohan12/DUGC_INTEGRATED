const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb+srv://suyash:dugcwebsite@cluster0.y63hylf.mongodb.net/test1"
);
var connection = mongoose.connection;

var a = 0;
var data1;
var data2;
var collection_whole;

const PORT = 8002;
connection.on("error", console.error.bind(console, "connection error:"));

app.get("/data", async (req, res) => {
  // connection.once("open", async function () {
  const collection = connection.db.collection("marks");
  const data = await collection.find({}).toArray();

  res.status(200).json(data);
  // });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
