const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "bulbasaur", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
