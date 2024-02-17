// edit an image with OpenAI's DALL-E model

const OpenAI = require("openai");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const downloadLocation = `${__dirname}/../images`;

const editImage = async (req, res) => {
  const { text, imageLink } = req.body;

  console.log(text, imageLink);
  try {
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
  }
};

module.exports = { editImage };
