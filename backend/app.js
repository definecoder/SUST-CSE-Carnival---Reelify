const express = require("express");
const prompts = require("./routes/prompt");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use("/api", prompts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
