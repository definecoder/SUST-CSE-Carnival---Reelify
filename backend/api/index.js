const express = require("express");
const prompts = require("../routes/prompt");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const VideoContents = require("../models/VideoContent");
dotenv.config();

const dbUrl = require("../db/database").dbUrl;

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
      "People love to have fun and enjoy entertainment in moderation.",
      "It is a good thing to engage in activities that bring joy and laughter.",
      "However, it is important to remember that nothing extreme is good.",
      "Balancing fun and responsibilities is key to a healthy and fulfilling life.",
      "Excessive indulgence in entertainment can lead to negative consequences.",
      "Remember to enjoy life but always in moderation.",
    ],
    imageUrls: [
      "http://10.100.161.49:3000/api/get-image/g037v0.jpg",
      "http://10.100.161.49:3000/api/get-image/g037v1.jpg",
      "http://10.100.161.49:3000/api/get-image/g037v2.jpg",
      "http://10.100.161.49:3000/api/get-image/g037v3.jpg",
      "http://10.100.161.49:3000/api/get-image/g037v4.jpg",
      "http://10.100.161.49:3000/api/get-image/g037v5.jpg",
    ],
    audioUrls: [
      "http://10.100.161.49:3000/api/get-speech/g037v0.mp3",
      "http://10.100.161.49:3000/api/get-speech/g037v1.mp3",
      "http://10.100.161.49:3000/api/get-speech/g037v2.mp3",
      "http://10.100.161.49:3000/api/get-speech/g037v3.mp3",
      "http://10.100.161.49:3000/api/get-speech/g037v4.mp3",
      "http://10.100.161.49:3000/api/get-speech/g037v5.mp3",
    ],
    finalAudioUrl: "http://10.100.161.49:3000/api/get-audio/g037v.mp3",
    imageScripts: [
      "show a group of people having fun at a party, laughing and enjoying the moment",
      "show the same group doing activities that make them happy and cause them to laugh out loud",
      "show a person flipping a coin with 'fun' on one side and 'responsibility' on the other",
      "show a balancing scale with fun activities on one side and responsibilities on the other",
      "show a person sad and facing negative consequences due to excessive indulgence in entertainment",
      "show the group enjoying life in moderation, balancing fun and responsibilities",
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

module.exports = app;
