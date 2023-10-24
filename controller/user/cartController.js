const cartService = require("../../service/cartService");

module.exports = {
    addProductToCart: async (req, res) => {
        const userID = req.params.userID;
        const productID = req.params.productID;
        const result = await cartService.addProductToCart(userID, productID);
        if (result) {
          res.send(result);
        } else {
          res.status(404).json({ message: "Product or Cart not found" });
        }
      },
};