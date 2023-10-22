const { models } = require("../models/definitions");

module.exports = {
  getCategories: async () => {
    const result = await models.categories.findAll();
    return result;
  },
  createCategories: async (data) => {
    console.log(data);
    const result = await models.categories.create(data);
    return result;
  },
};
