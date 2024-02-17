const fs = require("fs");

const path = require("path");

// load assistant-message-1.txt

const assistantMessage1 = fs.readFileSync(
  path.resolve(__dirname, "services/assistant-message-1.txt"),
  "utf8"
);

let messages = JSON.parse(assistantMessage1);

const scirpts = Object.values(messages);

console.log(scirpts);

// "audioUrls": [
// "/Users/shawonmajid/Documents/Web/gpt/speeches/arfasd0.mp3",
// "/Users/shawonmajid/Documents/Web/gpt/speeches/arfasd1.mp3",
// "/Users/shawonmajid/Documents/Web/gpt/speeches/arfasd2.mp3",
// "/Users/shawonmajid/Documents/Web/gpt/speeches/arfasd3.mp3",
//
// ]

const url = "/Users/shawonmajid/Documents/Web/gpt/speeches/arfasd4.mp3";

const fileName = url.split("/").at(-1);

console.log(fileName);
