const express = require('express')
const router = express.Router()

const posts = require('../data/posts');


//==============POSTS=================//
//GET - display all posts
router.get("/", (req, res)=> {
    res.json(posts);
});


//CREATE - POST - Add a new post to the database 
router.post("/", (req, res) => {
    if (req.body.manufacturer && req.body.color && req.body.antivirus) {
      
        const post = {
            id: posts[posts.length - 1].id + 1,
            manufacturer: req.body.manufacturer,
            color: req.body.color,
            antivirus: req.body.antivirus,
        };
        posts.push(post);
        res.json(posts[posts.length - 1])
    } else res.json({error: "Insufficient Data"});
});






module.exports = router