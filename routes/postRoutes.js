const express = require('express')
const router = express.Router()

const posts = require('../data/posts');


//==============POSTS=================//
//GET - display all posts
router.get("/", (req, res)=> {
    res.json(posts);
});


module.exports = router