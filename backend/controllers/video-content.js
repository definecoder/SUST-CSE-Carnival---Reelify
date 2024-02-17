const { getVideoPrompt } = require("../services/image-prompts");
const { getPrompt } = require("../services/prompt");
const { getImage } = require("../services/image");
const { getSpeech } = require("../services/text-to-speech");
const { getIPAddress } = require("../services/ip4address");
const VideoContents = require("../models/VideoContent");

const ipAddress = getIPAddress();
const baseImageUrl = "http://" + ipAddress + ":3000/api/get-image/";
const baseAudioUrl = "http://" + ipAddress + ":3000/api/get-speech/";

const getVideoContent = async (req, res) => {
  const { text } = req.body;
  // generate random Audio and Image Id alphanumeric string
  const audioId = Math.random().toString(36).substring(7);
  const imageId = Math.random().toString(36).substring(7);

  console.log("api hit, getting voice script");

  var videoScript = await getPrompt(text);
  var imagePrompts = await getVideoPrompt(videoScript);

  videoScript = JSON.parse(videoScript);
  imagePrompts = JSON.parse(imagePrompts);

  const imageScripts = Object.values(imagePrompts);
  const voices = Object.values(videoScript);
  const imageUrls = [];
  const audioUrls = [];

  for (let i = 0; i < imageScripts.length; i++) {
    console.log("getting image " + i);
    const fileName = await getImage(imageScripts[i], imageId, i);
    imageUrls.push(baseImageUrl + imageId + i + ".jpg");
  }

  for (let i = 0; i < voices.length; i++) {
    console.log("getting voice " + i);
    const audioUrl = await getSpeech(voices[i], audioId, i);
    const fileName = audioUrl.split("/").at(-1);
    audioUrls.push(baseAudioUrl + audioId + i + ".mp3");
  }

  const videoContent = new VideoContents({
    videoScript: voices,
    imageUrls,
    audioUrls,
  });

  videoContent.save();

  res.send({ videoScript: voices, imageUrls, audioUrls });
};

const getLatestVideoContent = async (req, res) => {
  const videoContent = await VideoContents.find()
    .sort({ createdAt: -1 })
    .limit(1);
  res.send(videoContent[0]);
};

module.exports = { getVideoContent, getLatestVideoContent };
