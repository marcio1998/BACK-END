const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('Another MiddleWare');
    console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop')
});

module.exports = router;