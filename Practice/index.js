var express = require('express');  
var app = express();  

app.set('view engine', 'ejs');  //html template을 ejs로 사용하겠습니다.
app.set('views', './views');    //views 폴더를 ./views로 지정하겠습니다.  
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser'); 
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render('sub');
})

app.get('/view', (req, res) => {
    res.render('view');
})

app.post('/result', urlencodedParser,(req, res) => {
    obj = {
        plus: Number(req.body.num1) + Number(req.body.num2),
        min: req.body.num3 -  req.body.num4,
        sub: req.body.num5 * req.body.num6,
        div: req.body.num7 / req.body.num8
    }
    res.send(obj);

})
var server = app.listen(5000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("서버 시작 http://%s:%s", host, port)  
});
