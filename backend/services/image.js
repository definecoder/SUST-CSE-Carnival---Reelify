const OpenAI = require("openai");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

// console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const downloadLocation = `${__dirname}/../images`;

async function getImage(text, id, no) {
  try {
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: text,
    });

    // return image.data[0].url;
    const response = await axios.get(image.data[0].url, {
      responseType: "stream",
    });

    const imagePath = path.join(downloadLocation, id + no + ".jpg");
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);
    writer.on("finish", () => {
      const fileName = imagePath.split("/").at(-1);
      return fileName;
    });
  } catch (e) {
    console.log(e);
  }
}

// getImage(
//   "show two aggressive roosters in a farmyard, with a clear dislike for each other"
// );

const serveImage = (req, res) => {
  res.sendFile("./images/" + req.params.link, {
    root: __dirname + "/..",
  });
};

module.exports = { getImage, serveImage };
