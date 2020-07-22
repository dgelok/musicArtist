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

    let albumsArray = dataFile.albums;
    let singlealbum = [];

    albumsArray.forEach((album) => {
        if(album.shortname == req.params.albumID) {
            singlealbum.push(album)
        }
    })
    res.render('albums', {
        albums: singlealbum
    })
})

module.exports = router;
