const express = require('express')
const router = express.Router()

const comments = require('../data/comments')


//==============COMMENTS====================//
//GET - display all comments
router.get("/", (req, res)=> {
    res.json(comments);
})






module.exports = router