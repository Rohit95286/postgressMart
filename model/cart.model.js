const {DataTypes, ENUM} = require("sequelize");
const sequelize = require("../config/sequelize.config");

const cart = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // userId is a forign key
    // productId and quantity is multiple foriegn key
  },
  {
    tableName: "carts",
    freezeTableName: true,
    timestamps: true,
  }
);

cart.sync({alter: true});

module.exports = cart;
