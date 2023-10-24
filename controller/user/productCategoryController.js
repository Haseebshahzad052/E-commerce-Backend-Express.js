const productCategoryService = require("../../service/productCategoryService");
//const ProductCategoryService = require("../../service/productCategoryService");

module.exports = {
  createProductCategory: async (req, res) => {
    const result = await productCategoryService.createProductCategory(req.body);
    res.json(result);
  },
};
