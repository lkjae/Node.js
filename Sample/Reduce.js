let points = [40, 100, 1, 5, 25, 10];

let sum = points.reduce(function(total, currentValue){
    return total + currentValue;
}, 0); // 배열에 담긴 데이터의 합계를 구할 때 가장 많이 사용

console.log(sum);
