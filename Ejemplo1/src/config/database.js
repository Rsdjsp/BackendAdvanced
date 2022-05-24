const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect("mongodb+srv://RobertSantos:Kakaroto123@cluster0.be29z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  console.log("Connection established ...");
}

module.exports = { mongoose, connection };
