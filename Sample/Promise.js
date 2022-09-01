//Promise는 자바스크립트에서 비동기 처리에 사용되는 객체
//파일 쓰기, 데이터베이스 트랜잭션(CRUD)처리 등 비동기 함수를 실행할 때
//실행한 코드가 완료될 때까지 대기하지 않고 바로 다음 코드를 실행할 수 있도록 해줌
//요청에 대한 응답에 성공하면, resolve()함수에 결과를 전달
//요청에 대한 응답에 실패하면, reject() 함수에 에러를 전달
const promise = new Promise( (resolve, reject) => {
    if(true /*처리 성공*/){
        resolve("결과 데이터");
    }else{
        reject(new Error("에러"));
    }
});
