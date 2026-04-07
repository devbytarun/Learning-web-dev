const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome Home!</h1>");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Tarun",
    age: 19,
    city: "Sri Ganganagar"
  });
});

app.get("/error", (req, res) => {
  res.status(404).send("Yeh page nahi mila!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});