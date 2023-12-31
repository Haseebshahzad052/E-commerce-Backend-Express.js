const { models } = require("../models/definitions");
const products = require("../models/definitions/user/products");

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
      removeProductFromCart: async (userID, productID) => {
        const result = await models.cart.findOne({ where: { userID } });
        if (!result) {
          throw new Error("Cart not found for this user");
        }
        const product = await models.products.findByPk(productID);
        if (!product) {
          throw new Error("Product not found");
        }
        try {
          // Remove the product from the user's cart
          await result.removeProduct(product);
    
          return product; // Return the removed product
        } catch (error) {
          throw error;
        }
      },
};
