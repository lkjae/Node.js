const express = require('express')
//DB설정 정보 가져오기
require('dotenv').config({path: 'mysql/.env'})

const mysql = require('./mysql')
const ejs = require('ejs')
const app = express();

/* 환경설정 */
//뷰엔진 설정
app.set('view engine', 'ejs')

app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended: true})); 

app.use(express.json({
    limit: '50mb'
}))

app.listen(3000, () => {
    console.log("Server Started port 3000...")
});

app.get('/', function(req, res){
    res.render('test1')
});

app.post('/customer/insert', async(req,res) => {
    var today = new Date;

    obj = {
        name: req.body.name,
        product: req.body.product,
        buytime: today.toLocaleString()
    }
    console.log(obj);
    req.body.param = obj;

    const result = await mysql.query('customerInsert', req.body.param);
    res.send('주문 완료')

   
});


app.get('/customer/purchase', async(req,res)=>{
    const purchase = await mysql.query('customerList');
    console.log(purchase);

    var obj = new Array();
    for(var i = 0; i < purchase.length; i++)
    {
        obj[i]={
            id:purchase[i].id,
            name:purchase[i].name,
            product: purchase[i].product,
            buytime: purchase[i].buytime}
    }
    res.render('result',{data:obj});
})