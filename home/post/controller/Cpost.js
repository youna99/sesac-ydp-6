const { where } = require("sequelize");
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

// 등록
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

// 삭제
exports.deletePost = async (req, res) => {
  try {
    console.log(req.body);

    const { id } = req.body;
    const isDeleted = await Post.destroy({
      where: { id },
    });
    console.log("isDeleted", isDeleted);

    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (error) {
    console.error(error);
  }
};

// 하나 조회
exports.getPost = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const post = await Post.findOne({
      where: { id },
    });
    res.json(post);
  } catch (error) {
    console.error(error);
  }
};

// 수정
exports.patchPost = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);

    const { id } = req.params;
    const { title, content, writer } = req.body;

    const post = await Post.update(
      { title, content, writer },
      { where: { id } }
    );
    res.json(post);
  } catch (error) {
    console.error(error);
  }
};
