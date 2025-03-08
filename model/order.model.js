const {DataTypes, ENUM} = require("sequelize");
const sequelize = require("../config/sequelize.config");
const User = require("./user.model");

const order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes?.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
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

User.hasOne(order, {
  foreignKey: "userId",
});
order.belongsTo(User, {
  foreignKey: "userId",
});
order.sync({alter: true});

module.exports = order;
