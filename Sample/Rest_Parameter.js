//몇개의 파라미터가 전달될지 모를 경우 사용
function sum(x1, x2){
    let y = x1 + x2;
    return y;
}
console.log(sum(5, 7));

function sum2(x1, x2, x3, x4){
    let y = x1+x2+x3+x4;
    return y;
}
console.log(sum2(5,6,7,8));

function sum3(...args){
    let total = 0;
    for(let x of args){
        total += x;
    }
    return total;
}
console.log(sum3(3,2,5,7,4,23));
console.log(sum3(3,2,5));
