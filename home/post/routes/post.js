const express = require("express");
const router = express.Router();
const controller = require("../controller/Cpost");

router.get("/", controller.main);

router.post("/post", controller.postPost);

module.exports = router;
