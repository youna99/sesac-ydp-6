const dotenv = require('dotenv');
const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
  override: true,
});

if (process.env.DBUSER&&process.env.DBPW&&process.env.DB&&process.env.HOST&&process.env.DIALECT) {
  console.log('.env 파일을 확인해주세요');
}

const config = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
  },
  "production": {
    "username": "user",
    "password": "12345678",
    "database": "codingon",
    "host": "localhost",
    "dialect": "mysql"
  }
}

module.exports = config;