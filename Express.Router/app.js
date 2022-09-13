const express = require('express');
const { nextTick } = require('process');
const customerRoute = require('./routes/customer'); //customer 라우트 추가
const productRoute = require('./routes/product');   //product 라우트 추가
const app = express();

//7.4 Express 정적 파일 제공하기
app.use('/static',express.static('public')); //public폴더에 있는 모든 정적 파일을 URL로 제공할 수 있게 됩니다.

app.use(express.json({
    limit: '50mb'//최대 50메가
}));


//Root
app.get('/', function (req,res){
    res.send('Main Page'); // 클라이언트에 문자열 전송
});

//7.2.7 express.Router 클래스
app.use('/customer', customerRoute); //customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use('/product', productRoute);   //product 라우트를 추가하고 기본 경로로 /product 사용

app.listen(3000, () => {
    console.log('Server started. port 3000.');
});

