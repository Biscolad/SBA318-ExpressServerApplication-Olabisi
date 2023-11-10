const express = require("express");
const app = express();
const port = 5000;

//IMPORT DATA
const products = require("./routes/productRoutes");
const posts = require ("./routes/postRoutes");
const comments = require("./routes/commentRoutes")


//MIDDLEWARE
app.use('/api/products', products);
app.use('/api/posts', posts);
app.use('/api/comments', comments);




//HOME ROUTE
app.get("/", (req, res) => {
    res.send("PRODUCT CATALOG");
});



app.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
})