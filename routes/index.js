const express = require('express');
const { response } = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs')
})


module.exports = router