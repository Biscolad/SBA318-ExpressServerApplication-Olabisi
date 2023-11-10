const express = require('express')
const router = express.Router();

const products = require('../data/products')


//===============PRODUCTS=================//
//GET - Get all Products
router.get("/", (req, res)=> {
    res.json(products);
})

//CREATE - POST - Add a new product to the catalog database 
// router.post("/", (req, res) => {
//     if (req.body.name &&)
// })




module.exports = router;