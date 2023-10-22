const productsService = require("../../service/productsService");

module.exports = {
  getProducts: async (req, res) => {
    const data = await productsService.getProducts();
    res.send(data);
  },
  createProducts: async (req, res) => {
    const data = await productsService.createProducts(req.body);
    res.send(data);
  },
};