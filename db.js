const Sequelize = require('sequelize');

// Call Database and give credetials to access it from .env file--------------------------------->
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Create Table and export to database------------------------------------------------------------->
const url = sequelize.define('url', {
  longurl: {
    type: Sequelize.STRING,
  },
  shorturl: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();


sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;
