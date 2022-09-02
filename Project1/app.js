var express = require('express');  
var app = express();  

app.set('view engine', 'ejs');  //html template을 ejs로 사용하겠습니다.
app.set('views', './views');    //views 폴더를 ./views로 지정하겠습니다.  
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser'); 
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render('free_board');
})

app.post('/result', urlencodedParser,(req, res) => {
    obj = {
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // res.end(JSON.stringify(obj));


    var html = `
        <table border="1">
            <tr>
                <td>이름</td>
                <td>${obj.name}</td>
            </tr>
            <tr>
                <td>제목</td>
                <td>${obj.title} </td>
            </tr>
            <tr>
                <td>내용</td>
                <td>${obj.content} </td>
            </tr>
        </table>`;

    //res.end(`<h1>${obj.name}</h1>`);
    res.end(html);   //html로 표현
    console.log(obj)
});




var server = app.listen(5000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("서버 시작 http://%s:%s", host, port)  
});
