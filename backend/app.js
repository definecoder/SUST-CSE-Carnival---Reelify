const express = require("express");
const prompts = require("./routes/prompt");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log("post request test");
  console.log(req.body);
  res.send(req.body);
});

app.use(express.json());
app.use("/api", prompts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
