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


//SHOW - GET - show info for one post
router.get("/:id", (req, res, next)=> {
    const comment = comments.find((c) => c.id == req.params.id);

    console.log(comment);
      //if post exist, display the json data
      if (comment) res.json(comment);
      else next()
});



//UPDATE - PUT/PATCH - update a commentt
router.patch("/:id", (req, res, next)=> {
    const comment = comments.find((c, i)=> {
        if(c.id == req.params.id) {
            for(const key in req.body) {
                comments[i][key] = req.body[key];
            }
            return true
        }
    });
    
    if (comment) res.json(comment);
    else next();
});






module.exports = router