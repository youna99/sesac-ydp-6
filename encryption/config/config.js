const dotenv = require('dotenv');
const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
  override: true,
});

const config = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
  },
  "production": {
    "username": "testuser",
    "password": "12345678",
    "database": "codingon",
    "host": "localhost",
    "dialect": "mysql"
  }
}

module.exports = config;