const { models } = require("../models/definitions");

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
};
