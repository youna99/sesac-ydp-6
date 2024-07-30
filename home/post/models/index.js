const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const PostModel = require("./post")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Post = PostModel;

module.exports = db;
