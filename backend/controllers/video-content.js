const { getVideoPrompt } = require("../services/image-prompts");
const { getPrompt } = require("../services/prompt");
const { getImage } = require("../services/image");
const { getSpeech } = require("../services/text-to-speech");

const getVideoContent = async (req, res) => {
  const { text } = req.body;

  var videoScript = await getPrompt(text);
  var imagePrompts = await getVideoPrompt(videoScript);

  videoScript = JSON.parse(videoScript);
  imagePrompts = JSON.parse(imagePrompts);

  const imageScripts = Object.values(imagePrompts);
  const voices = Object.values(videoScript);
  const imageUrls = [];
  const audioUrls = [];

  for (let i = 0; i < imageScripts.length; i++) {
    const imageUrl = await getImage(imageScripts[i]);
    imageUrls.push(imageUrl);
  }

  for (let i = 0; i < voices.length; i++) {
    const audioUrl = await getSpeech(voices[i], "arfasd", i);
    const fileName = audioUrl.split("/").at(-1);
    audioUrls.push("http://localhost:3000/api/get-speech/" + fileName);
  }

  res.send({ videoScript, imageUrls, audioUrls });
};

module.exports = { getVideoContent };
