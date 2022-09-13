module.exports = {
    customerList: `select * from customers`
    customerInsert: 'insert into customers set ?', // 물음표(?)는 클라이언트에서 전송한 데이터가 오브젝트형인 경우에는 각 키(key)를 컬럼명으로,
                                                    //값(value)을 컬럼에 들어갈 값으로 변환
    customerUpdate: 'update customers set ? where id = ?', // 쿼리문의 물음표와 배열의 길이가 일치해야 하고 배열에 담긴 데이터 순서대로 쿼리문의 각 물음표가 매핑
                                                            //body -> raw-> JSON선택
    customerDelete: 'delete from customers where id=?' 
}
