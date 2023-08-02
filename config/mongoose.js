const mongoose = require("mongoose");
// const url = "mongodb://0.0.0.0:27017/db";
// mongoose.connect('url')
mongoose.connect('mongodb+srv://niteshkumarranjan534:nitesh123@cluster0.xnngdvj.mongodb.net/db');

const db = mongoose.connection;

//If any Error then Getting this Line
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB ");
});

module.exports = db; //Exports db
