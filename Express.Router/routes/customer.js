const express = require('express');
const router = express.Router();

//고객 정보 조회를 위한 라우트
router.get('/', function(req,res){
    res.send('customer 라우트 루트');
});

router.post('/insert', function(req,res){
    res.send('/customer/insert 라우트');
});

//router.put 생략 
//router.delete 생략

module.exports = router;
