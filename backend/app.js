const express = require("express");
const prompts = require("./routes/prompt");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const VideoContents = require("./models/VideoContent");
dotenv.config();

const dbUrl = require("./db/database").dbUrl;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
    process.exit();
  });

const app = express();

const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.post("/api/fixed-response", (req, res) => {
  // Fixed response object
  const fixedResponse = {
    videoScript: [
      "Dinosaurs are a diverse group of reptiles belonging to the clade Dinosauria.",
      "They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
      "After the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
      "Their dominance continued throughout the Jurassic and Cretaceous periods.",
      "The fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
      "Birds are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
      "Dinosaurs can be categorized into avian dinosaurs, which are birds, and non-avian dinosaurs, which are all dinosaurs other than birds.",
    ],
    imageUrls: [
      "http://10.100.161.49:3000/api/get-image/dino0.jpg",
      "http://10.100.161.49:3000/api/get-image/dino1.jpg",
      "http://10.100.161.49:3000/api/get-image/dino2.jpg",
      "http://10.100.161.49:3000/api/get-image/dino3.jpg",
      "http://10.100.161.49:3000/api/get-image/dino4.jpg",
      "http://10.100.161.49:3000/api/get-image/dino5.jpg",
      "http://10.100.161.49:3000/api/get-image/dino6.jpg",
    ],
    audioUrls: [
      "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino4.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino5.mp3",
      "http://10.100.161.49:3000/api/get-speech/dino6.mp3",
    ],
  };

  // add the fixed response to the database
  const videoContent = new VideoContents({
    videoScript: fixedResponse.videoScript,
    imageUrls: fixedResponse.imageUrls,
    audioUrls: fixedResponse.audioUrls,
  });

  videoContent.save();

  // Sending the fixed response
  res.json(fixedResponse);
});

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
