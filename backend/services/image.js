const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getImage(text) {
  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: text,
  });

  // console.log

  return image.data[0].url;
}

// getImage(
//   "show two aggressive roosters in a farmyard, with a clear dislike for each other"
// );

module.exports = { getImage };
