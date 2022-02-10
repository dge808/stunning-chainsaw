const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/dogs", function (req, res) {
  res.set("Content-Type", "application/json");
  res.status(200);
  res.send([
    {
      name: "Qiwi",
      breed: "Boxer",
      sex: "girl",
      tail: ["long", "strong", "beautiful"],
    },
    {
      name: "Houston",
      breed: "Pug",
      sex: "boy",
      tail: ["short", "twisted", "beautiful"],
    },
    {
      name: "Loki",
      breed: "Border Collie",
      sex: "boy",
      tail: ["long", "fluffy", "beautiful"],
    },
    {
      name: "Loki",
      breed: "Border Collie",
      sex: "boy",
      tail: ["long", "fluffy", "beautiful"],
    },
    {
      name: "Loki",
      breed: "Border Collie",
      sex: "boy",
      tail: ["long", "fluffy", "beautiful"],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = { app };
