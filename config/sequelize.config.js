const {Sequelize} = require("sequelize");
require("dotenv").config();

const dbConfig = {
  staging: {
    db_name: "mysqlproj",
    db_user: "root",
    db_pass: "Test@1234",
    cont_type: "mysql",
    port: "localhost",
  },
  development: {
    db_name: "mysqlproj",
    db_user: "staging_user",
    db_pass: "staging_pass",
    cont_type: "mysql",
    port: 3306,
  },
  production: {
    db_name: "prod_db",
    db_user: "prod_user",
    db_pass: "prod_pass",
    cont_type: "mysql",
    port: 3306,
  },
};

const environment = process.env.NODE_ENV || "staging";
const currentConfig = dbConfig[environment];

const sequelize = new Sequelize(
  currentConfig.db_name,
  currentConfig.db_user,
  currentConfig.db_pass,
  {
    host: currentConfig.port,
    dialect: currentConfig.cont_type,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully! 🚀"))
  .catch(err => console.error("Error connecting to the database:", err));

module.exports = sequelize;
