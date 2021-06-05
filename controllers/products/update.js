const {products} = require("../../data");

const update = (req, res, next) => {
    const {id} = req.params;
    const updateProduct = req.body;
    const idx = products.findIndex(({_id}) => id === _id);
    if(idx === -1){
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Product not found"
        })
    }

    if(!updateProduct.price || !updateProduct.name) {
        return res.status(400).json({
              status: "error",
              code: 400,
              message: "Missing name or price"
          })
      }
    
      products[idx] = updateProduct;
      res.json({
          status: "success",
          code: 200,
          data: {
              result: updateProduct
          }
      })
}

module.exports = update;