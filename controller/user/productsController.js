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

  getProductById: async (req, res) => {
    try {
      const result = await productsService.getProductById(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
  updateProduct: async (req, res) => {
    const result = await productsService.updateProduct(req.params.id, req.body);
    res.send(result);
  },
  deleteProduct: async (req, res) => {
    const result = await productsService.deleteProduct(req.params.id);
    res.send(result);
  },
};
