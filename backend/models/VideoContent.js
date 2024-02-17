const mongoose = require("mongoose");

// add createdAt and updatedAt fields

const videoContentSchema = new mongoose.Schema({
  videoScript: [
    {
      type: String,
    },
  ],
  imageUrls: [
    {
      type: String,
    },
  ],
  audioUrls: [
    {
      type: String,
    },
  ],
  imageScripts: [
    {
      type: String,
    },
  ],
  finalAudioUrl: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VideoContent = mongoose.model("VideoContent", videoContentSchema);

module.exports = VideoContent;
