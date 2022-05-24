const express = require("express");
const { connection } = require("./config/database");
const userModel = require("./models/users");

const app = express();

connection();

app.get("/", async (req, res) => {
  const user = await userModel.find({});
  return res.json({
    nombre: "robert",
  });
});

app.get("/contacto", (req, res) => {
  return res.json({
    nombre: "Tzuzul",
    correo: "mail@tzuzulcode.com",
    texlefono: 123546542458,
  });
});

app.listen(4000, () => {
  console.log("Escudhando en http://localhost:4000");
});
