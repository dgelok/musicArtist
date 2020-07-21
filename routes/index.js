const express = require('express');
const { response } = require('express');
const router = express.Router();
const dataFile = require('../data/data.json')


router.get('/', (req, res)=>{
    
    let albums = dataFile.albums
    console.log(albums)
    res.render('index.ejs', {
        albums: albums
    })


})


module.exports = router