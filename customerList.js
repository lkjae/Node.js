res.send는 마지막에 한 번만 쓰여야하고, for문 안에서는 작동이 안됨
html을 for문 밖에 선언하여 마지막에 보낼 수 있게 하여, 여러 테이블이 출력은 됨
그런데 undefined가 앞 뒤로 붙는 문제 발생

app.get('/api/customersList', async(req, res) => {
    const customers = await mysql.query('customerList');
    console.log(customers);
    var html;
    for(var i in customers){
        html += `
        <table border="1">
            <tr>
                <td>아이디</td>
                <td>${customers[i].id}</td>
            </tr>
            <tr>
                <td>이름</td>
                <td>${customers[i].name}</td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td>${customers[i].phone}</td>
            </tr>
        </table>`;
       console.log(html);
       
    }
    //res.send(customers);
    
    res.send(html);
    
});
