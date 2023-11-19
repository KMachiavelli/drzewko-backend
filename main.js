const express = require("express");

const app = express();
app.use(express.json());

app.get("/date", (req, res) => {
  const date = new Date();
  res.json({ iso: date.toISOString() });
});

app.listen(8000, () => {
  console.log("server started");
});
