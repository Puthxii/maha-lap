const express = require("express");
const MahaLap = require("./maha-lap");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("เจริญ พร"));
app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const theHolyNumber = MahaLap.namo(day, story, time);
  res.json({
    result: theHolyNumber
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
