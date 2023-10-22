const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const categories = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    categoryname: {
      allowNull: true,
      unique: true,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "categories",
  }
);
module.exports = categories;
