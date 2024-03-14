// import fs from "fs";
// import path from "path";
// import OpenAI from "openai";

const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// check if speeches folder exists, if not create it
const speechLocation = `${__dirname}/../speeches`;
if (!fs.existsSync(speechLocation)) {
  fs.mkdirSync(speechLocation);
}

async function getSpeech(text, id, no) {
  const speechFile = path.resolve("./speeches/" + id + no + ".mp3");
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);

  return speechFile;
}

// getSpeech(
//   "News of the baby show spread like wildfire, and proud mothers from far and near hurried to showcase their precious little ones. But among them all, none arrived earlier than Mother Monkey, bursting with pride as she cradled her baby in her loving embrace.",
//   "abc",
//   "2"
// );

const serveSpeech = (req, res) => {
  res.sendFile("./speeches/" + req.params.link, {
    root: __dirname + "/..",
  });
};

const serveMergedAudio = (req, res) => {
  res.sendFile("./final_audio/" + req.params.link, {
    root: __dirname + "/..",
  });
};

module.exports = { getSpeech, serveSpeech, serveMergedAudio };
