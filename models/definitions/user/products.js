const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const products = sequelize.define(
  "products",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING,
      },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    inventory:{
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "products",
  }
);
module.exports = products;
