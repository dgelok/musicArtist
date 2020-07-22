const express = require('express');
const router = express.Router();
const dataFile = require('../data/data.json') 
let albums = dataFile.albums

router.get('/albums', (req, res)=>{
    
    res.render('albums', {
        albums: albums
    })
})

router.get('/albums/:albumID', (req, res)=>{

    res.render('albums', {
        albums: albums
    })
})

module.exports = router;
