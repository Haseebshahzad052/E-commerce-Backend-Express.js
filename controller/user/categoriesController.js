const categoriesService = require("../../service/categoriesService");

module.exports = {
  getCategories: async (req, res) => {
    const data = await categoriesService.getCategories();
    res.send(data);
  },
  createCategories: async (req, res) => {
    const data = await categoriesService.createCategories(req.body);
    res.send(data);
  },
};