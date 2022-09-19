let puppeteer = require('puppeteer')

async function parse()
{
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080
    });

    await page.goto('https://corners.gmarket.co.kr/SuperDeals');

    let eh = await page.$('li.baby-product');  //단일  
    let ehList = await page.$$('li.baby-product'); //전체

    for(let eh of ehList){
        let title = await eh.$eval('div.name', function(el){
            return el.innerText;
        });
        let price = await eh.$eval('div.price strong', function(el){
            return el.innerText;
        });
    
        console.log(title);
        console.log(price);
    
    }
 
    browser.close();
}

parse();
