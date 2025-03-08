const {DataTypes, ENUM} = require("sequelize");
const sequelize = require("../config/sequelize.config");

const order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // userId is a forign key
    // productId and quantity is multiple foriegn key
    address: {type: DataTypes?.STRING, allowNull: false},
    status: {
      type: DataTypes?.ENUM,
      default: "pending",
      values: ["pending", "paid"],
    },
  },
  {
    tableName: "orders",
    freezeTableName: true,
    timestamps: true,
  }
);

order.sync({alter: true});
