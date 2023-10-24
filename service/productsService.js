const { models } = require("../models/definitions");
const products = require("../models/definitions/user/products")
const express = require('express')

module.exports = {
  getProducts: async () => {
    const result = await models.products.findAll();
    return result;
  },
  createProducts: async (data) => {
    console.log(data);
    const result = await models.products.create(data);
    return result;
  },


  getProductById: async (id) => {
    const result = await models.products.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      return result;
    }
  },
  
  updateProduct: async (id, data) => {
    const result = await models.products.findByPk(id);
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      result.name = data.name;
      result.description = data.description;
      result.price = data.price;
      result.inevntory = data.inevntory;

      await result.save();

      return result;
    }
  },
  deleteProduct: async (id) => {
    const result = await models.products.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      await result.destroy();
      return result;
    }
  },
};
