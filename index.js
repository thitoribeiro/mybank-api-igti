const express = require("express");
const app = express();


app.post("/account", (req, res) => {
  console.log('post account');
});



app.listen(3000, () => {
  console.log("API started");
});