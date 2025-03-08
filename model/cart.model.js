const {DataTypes, ENUM} = require("sequelize");
const sequelize = require("../config/sequelize.config");

const cart = sequelize.define(
  "cart",
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
    tableName: "orders",
    freezeTableName: true,
    timestamps: true,
  }
);

order.sync({alter: true});
