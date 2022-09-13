const express = require("express");
//mysql 폴더에 있는 .env파일을 찾아서 환경 변수를 설정
require('dotenv').config({path: 'mysql/.env'});
const { cursorTo } = require("readline");
const mysql = require("./mysql"); //mysql 폴더의 index.js

const app = express();

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
})
