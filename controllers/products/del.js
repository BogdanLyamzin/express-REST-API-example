const {products} = require("../../data");

const del = (req, res, next) => {
    const {id} = req.params;
    const idx = products.findIndex(({_id}) => id === _id);
    if(idx === -1){
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Product not found"
        })
    }
    products.slice(idx, 1);
    res.status(204).json({
        status: "success",
        code: 204,
    })
}

module.exports = del;