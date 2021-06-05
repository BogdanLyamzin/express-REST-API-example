const {products} = require("../../data");
// axios.get(`/products/${_id}`)
// /products?posiion=10
const getOne = (req, res, next) => {
    // console.log(req.params);
    const {id} = req.params;
    // try {
    //     const result = await Product.find({id});
    //     if(!result){
    //         return res.status(404).json({
    //             status: "error",
    //             code: 404,
    //             message: "Product not found"
    //         })
    //     }
    
    //     res.json({
    //         status: "success",
    //         code: 200,
    //         data: {
    //             result
    //         }
    //     })
    // }
    // catch(error){
    // error.code = 
    //     next(error)
    // }
    const result = products.find(({_id}) => id === _id);
    if(!result){
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Product not found"
        })
    }

    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getOne;