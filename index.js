const express = require("express");
const app = express();
var fs = require("fs");

app.use(express.json());


app.post("/account", (req, res) => {
  let params = req.body;

  fs.readFile("accounts.json", "utf8", (err, data) => {
    console.log(err);

    try {
      let json = JSON.parse(data);
      console.log(json);

      res.send("post account");
    } catch (err) {
      res.send("erro");
    }


  });

  // fs.appendFile("accounts.json", JSON.stringify(params), err => {
  //   console.log(err);
  // });
});

app.listen(3000, () => {
  try {
    fs.readFile("accounts.json", "utf8", (err, data) => {
      console.log(err);
      console.log(data);  
    });
  } catch (err) {
    console.log(err);
  }
  console.log("API started");
});