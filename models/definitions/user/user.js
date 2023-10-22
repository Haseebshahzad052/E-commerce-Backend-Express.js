const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const user = sequelize.define(
  "user",
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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "user",
  }
);
module.exports = user;
