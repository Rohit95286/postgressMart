const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize.config");

const product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes?.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes?.STRING,
      allowNull: false,
    },
    img: {type: DataTypes?.STRING, allowNull: false},
    categories: {type: DataTypes.JSON},
    size: {type: DataTypes?.STRING},
    color: {type: DataTypes?.STRING},
    price: {type: DataTypes?.INTEGER, allowNull: false},
  },
  {
    tableName: "products",
    freezeTableName: true,
    timestamps: true,
  }
);

product.sync({alter: true});

module.exports = product;
