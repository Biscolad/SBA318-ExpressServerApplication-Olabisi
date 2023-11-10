const express = require('express')
const router = express.Router();

const products = require('../data/products')


//===============PRODUCTS=================//
//GET - Get all Products
router.get("/", (req, res)=> {
    res.json(products);
})


//CREATE - POST - Add a new product to database 
router.post("/", (req, res) => {
    if (req.body.productName && req.body.price && req.body.quantity) {
        // if(products.find((p) => p.productName == req.body.productName)) {
        //     res.json({error: "Product Name already exists"})
        //     return;
        // }

        const product = {
            id: products[products.length - 1].id + 1,
            productName: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
        };
        products.push(product);
        res.json(products[products.length - 1])
    } else res.json({error: "Insufficient Data"});
});


//SHOW - GET - get one product




module.exports = router;