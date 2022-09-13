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

//고객 정보 수정 라우터
app.put('/api/customer/update', async (req,res) => {
    const result = await mysql.query('customerUpdate', req.body.param);
    res.send(result); //결과를 클라이언트로 보냄
});
//'param'키로 2개의 배열에 담아서 보냄
//첫 번째 배열에 담긴 데이터는 고객 정보 중 수정하려는 필드에 대한 컬렴명과 값
//두 번째 배열에 담긴 데이터는 customers 테이블에서 변경할 대상이 되는 고객 id 값

//고객 정보 삭제 라우터
app.delete('/api/customer/delete/:id', async(req,res) =>{
    const {id} = req.params; //라우트 경로의 :id에 매핑되는 값
    const result = await mysql.query('customerDelete',id);
    res.send(result);
});
//요청 URL: http://localhost:3000/api/customer/delete/2
//id 2번을 삭제

