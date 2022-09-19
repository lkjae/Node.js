const express = require('express')
let puppeteer = require('puppeteer')
require('dotenv').config({path: 'mysql/.env'})

const mysql = require('./mysql')
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json({
    limit: '50mb'
}))


async function parse()
{
    await mysql.query('truncate');
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080
    });

    await page.goto('https://www.coupang.com/np/campaigns/82/components/194176?listSize=60&brand=&offerCondition=&filterType=&isPriceRange=false&minPrice=&maxPrice=&page=1&channel=user&fromComponent=N&selectedPlpKeepFilter=&sorter=bestAsc&filter=&component=194176&rating=0');

    let eh = await page.$('li.baby-product');  //단일  
    let ehList = await page.$$('li.baby-product'); //전체

    for(let eh of ehList){
        let name = await eh.$eval('div.name', function(el){
            return el.innerText;
        });
        let price = await eh.$eval('div.price strong', function(el){
            return el.innerText;
        });
        
        obj = {
            name:name,
            price:price
        }
        
        const result = await mysql.query('insert', obj)
        
        console.log(name);
        console.log(price);
    }
    console.log(ehList.length);
    browser.close();
}
parse();

app.get('/', async(req, res) => {
    const products = await mysql.query('productList');
    var i;
    const obj = [];

    for(i = 0; i < products.length; i++){
        obj[i] ={
        id : products[i].id,
        name : products[i].name ,
        price: products[i].price}
    }
    
    res.render('test1', {data:obj});
    
});


app.listen(3000, () => {
    console.log("Server Started port 3000...")
});