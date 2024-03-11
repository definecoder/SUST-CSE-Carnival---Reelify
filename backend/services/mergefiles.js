const ffmpeg = require("fluent-ffmpeg");

const downloadLocation = `${__dirname}/../final_audio`;
console.log(downloadLocation);

const mergeFiles = async (files, name) => {
  try {
    const video = ffmpeg();
    files.forEach((file) => {
      video.input(file);
    });
    video.mergeToFile(`${downloadLocation}/${name}.mp3`, downloadLocation);
    return `${downloadLocation}/${name}.mp3`;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { mergeFiles };
