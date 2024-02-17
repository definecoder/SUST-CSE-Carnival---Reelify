const { OpenAI } = require("openai");
// read file for content
const fs = require("fs");
const path = require("path");

// load system-message.txt
const systemMessage = fs.readFileSync(
  path.resolve(__dirname, "system-message.txt"),
  "utf8"
);

const userMessage1 = fs.readFileSync(
  path.resolve(__dirname, "user-message-1.txt"),
  "utf8"
);

const assistantMessage1 = fs.readFileSync(
  path.resolve(__dirname, "assistant-message-1.txt"),
  "utf8"
);

let converstationHistory = [
  {
    role: "system",
    content: systemMessage,
  },
  {
    role: "user",
    content: userMessage1,
  },
  {
    role: "assistant",
    content: assistantMessage1,
  },
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getPrompt = async (prompt) => {
  let result = "";

  converstationHistory.push({
    role: "user",
    content: prompt,
  });

  while (result.length < 2000) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: converstationHistory,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const content = response.choices[0].message.content;

    result += content;

    if (content[content.length - 1] === "}") {
      break;
    }

    const newPrompt = "Please complete it";

    converstationHistory.push(
      {
        role: "assistant",
        content: content,
      },
      {
        role: "user",
        content: newPrompt,
      }
    );
  }

  return result;
};

module.exports = { getPrompt };
