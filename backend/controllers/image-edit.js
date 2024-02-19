// edit an image with OpenAI's DALL-E model

const OpenAI = require("openai");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
const VideoContents = require("../models/VideoContent");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const downloadLocation = `${__dirname}/../images`;

const editImage = async (req, res) => {
  console.log("api hit for edit image");
  const { text, imageLink, promptIndex } = req.body;

  console.log(text, imageLink, promptIndex);
  try {
    const videoContents = await VideoContents.find()
      .sort({ createdAt: -1 })
      .limit(1);

    const videoContent = videoContents[0];

    // console.log(videoContent.imageScripts);
    videoContent.imageScripts[promptIndex] = text;

    await videoContent.save();

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: text,
    });

    const response = await axios.get(image.data[0].url, {
      responseType: "stream",
    });

    const imageName = imageLink.split("/").at(-1);

    const imagePath = path.join(downloadLocation, imageName);
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);
    writer.on("finish", () => {
      const fileName = imagePath.split("/").at(-1);
      res.sendStatus(200);
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { editImage };
