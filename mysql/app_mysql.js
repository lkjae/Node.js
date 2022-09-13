const express = require("express");
//mysql 폴더에 있는 .env파일을 찾아서 환경 변수를 설정
require('dotenv').config({path: 'mysql/.env'});
const { cursorTo } = require("readline");
const mysql = require("./mysql"); //mysql 폴더의 index.js

const app = express();
//환경설정
app.use(express.json({
    limit: '50mb' // 최대 50메가
})); //클라이언트 요청 body를 json으로 파싱 처리


app.listen(3000, () => {
    //3000번 포트로 웹 서버 실행
    console.log("Server started. port 3000.");
});


app.get('/', function(req,res){
    res.send('Main Page')
});

app.get('/api/customers', async(req,res) =>{
    //localhost:3000/customers 접속 시 실행
    //sql.js 파일에 작성된 customerList쿼리를 실행
    const customers = await mysql.query('customerList'); 

    console.log(customers);
    res.send(customers); 
});

app.post('/api/customer/insert', async(req,res) =>{
    //삽입 기능
    const result = await mysql.query('customerInsert', req.body.param);
    res.send(result);
});
