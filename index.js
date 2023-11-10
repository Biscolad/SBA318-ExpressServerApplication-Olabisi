const express = require("express");
const app = express();
const port = 5000;

//IMPORT DATA
const products = require("./routes/productRoutes");
const posts = require ("./routes/postRoutes");
const comments = require("./routes/commentRoutes")

//CUSTOM MIDDLEWARE
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());

app.use('/api/products', products);
app.use('/api/posts', posts);
app.use('/api/comments', comments);
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})


//ERROR HANDLING MIDDLEWARE
app.get("/", (err, req, res, next)=> {
    res.status(500).send('Something broke!')
})



//HOME ROUTE
app.get("/", (req, res) => {
    res.send("PRODUCT CATALOG");
});



app.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
})