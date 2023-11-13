const express = require('express')
const router = express.Router();



// const forms = require('./formSubmission')

//CREATE - POST - Add a new post to handle form submission 
router.post("/", (req, res) => {
 
    const productName = req.body.productName;
    const productColor = req.body.productColor;
    const productDescription = req.body.productDescription;

    res.redirect('/');

    posts.push({
        name: productName,
        color: productColor,
        description: productDescription,
    });

    res.json({message: 'Product successfully Added'});
   
});







module.exports = router;