const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/About", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/Works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/Gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log("Lisentrning on port 3000");
});
