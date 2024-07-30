const { Post } = require("../models/index");

// 글 목록
exports.main = async (req, res) => {
  try {
    const post = await Post.findAll();
    // res.json(post);
    res.render("index", { post });
  } catch (error) {
    console.error(error);
  }
};

exports.postPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, content, writer } = req.body;
    const post = await Post.create({
      title,
      content,
      writer,
    });
    res.json(post);
  } catch (error) {
    console.error(error);
  }
};
