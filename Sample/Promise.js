const promise = new Promise( (resolve, reject) => {
    if(true /*처리 성공*/){
        resolve("결과 데이터");
    }else{
        reject(new Error("에러"));
    }
});
