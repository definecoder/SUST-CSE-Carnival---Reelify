const express = require("express");
const { serveSpeech } = require("../services/text-to-speech");
const { getVideoContent } = require("../controllers/video-content");
const router = express.Router();

router.route("/get-video-content").post(getVideoContent);
router.route("/get-speech/:link").get(serveSpeech);

module.exports = router;
