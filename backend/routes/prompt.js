const express = require("express");
const { serveSpeech, serveMergedAudio } = require("../services/text-to-speech");
const {
  getVideoContent,
  getLatestVideoContent,
} = require("../controllers/video-content");
const { serveImage } = require("../services/image");
const router = express.Router();

router.route("/get-video-content").post(getVideoContent);
router.route("/get-speech/:link").get(serveSpeech);
router.route("/get-image/:link").get(serveImage);
router.route("/get-latest-video-content").get(getLatestVideoContent);
router.route("/get-audio/:link").get(serveMergedAudio);

module.exports = router;
