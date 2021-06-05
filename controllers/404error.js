const error404 = (_, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    });
}

module.exports = error404;