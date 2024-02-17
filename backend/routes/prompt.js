const express = require("express");
const { serveSpeech } = require("../services/text-to-speech");
const { getVideoContent } = require("../controllers/video-content");
const { serveImage } = require("../services/image");
const router = express.Router();

router.route("/get-video-content").post(getVideoContent);
router.route("/get-speech/:link").get(serveSpeech);
router.route("/get-image/:link").get(serveImage);

module.exports = router;
