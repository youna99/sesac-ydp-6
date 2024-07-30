const Sequelize = require('sequelize');
const config = require(__dirname+'/../config/config.js')[process.env.NODE_ENV];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Member = require('./member')(sequelize, Sequelize);
const Board = require('./board')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Member = Member;
db.Board = Board;

// 모델 간 관계 설정
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;