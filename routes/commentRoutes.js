const express = require('express')
const router = express.Router()

const comments = require('../data/comments')


//==============COMMENTS====================//
//GET - display all comments
router.get("/", (req, res)=> {
    res.json(comments);
})


//CREATE - POST - Add new comments to the database 
router.post("/", (req, res) => {
    if (req.body.comments.customerName && req.body.comments.review) {
      
        const comment = {
            id: comments[comments.length - 1].id + 1,
            comments: req.body.comments.customerName,
            comments: req.body.comment.review
        }; 
           
        comments.push(comment);
        res.json(comments[commentss.length - 1])
    } else res.json({error: "Insufficient Data"});
});






module.exports = router