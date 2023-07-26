// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
var value = null;




app.get("/set/:id", (req, res) => {
  res.json({ message: "Value set: "+req.params.id });
  this.value = req.params.id;
});

app.get("/get", (req, res) => {
  res.json({ message: this.value });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});