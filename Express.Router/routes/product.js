const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    res.send('product 라우트 루트');
});

router.post('/insert', function(req,res){
    res.send('/product/insert 라우트');
});

//router.put 생략 
//router.delete 생략

module.exports = router;
