const express = require('express');
const router = express.Router();
const datafile = require('../data/data.json')
let albums = datafile.albums

router.get('/discuss', (req, res)=>{
    
    res.render('discuss', {
        albums: albums
    })
})



module.exports = router;
