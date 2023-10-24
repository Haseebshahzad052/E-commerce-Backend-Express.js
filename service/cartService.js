const { models } = require("../models/definitions");

module.exports = {
    addProductToCart: async (userID, productID) => {
        const result = await models.cart.findOne({ where: { userID } });
        if (result) {
          // Find the product based on the product ID
          const product = await models.products.findByPk(productID);
    
          if (product) {
            // Add the product to the user's cart
            await result.addProduct(product);
            return true;
          }
        }
    
        return false;
      },
};
