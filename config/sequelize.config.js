const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("ecommerce", "root", "Test@1234", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully! 🚀"))
  .catch(err => console.error("Error connecting to the database:", err));

module.exports = sequelize;
