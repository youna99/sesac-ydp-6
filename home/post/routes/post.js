const express = require("express");
const router = express.Router();
const controller = require("../controller/Cpost");

router.get("/", controller.main);

router.get("/post/:id", controller.getPost);

router.post("/post", controller.postPost);

router.delete("/post", controller.deletePost);

router.patch("/post/:id", controller.patchPost);

module.exports = router;
