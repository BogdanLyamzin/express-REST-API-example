const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const api = require("./api");

const app = express();

app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

app.use("/api/v1/products", api.products);
// app.use("/api/v2/products", api.products);
app.use("/api/v1/users", api.users);

app.use((_, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    });
});

app.use((error, _, res, __)=>{
    const code = error.code || 500;
    const message = error.message || "Server error";
    // const {code = 500, message = "Server error"} = error;
    res.status(code).json({
        status: "fail",
        code,
        message
    })
})

app.listen(3000);