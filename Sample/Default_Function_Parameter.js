// function say(message){
//     if(message != undefined){
//         console.log(message);
//     }else{
//         console.log("파라미터가 넘어오지 않았습니다.");
//     }
// }
// say();

//Default Function Parameter
function say(message = "파라미터가 넘어오지 않았습니다."){
    console.log(message)
}   // 기본 값이 파라미터에 선언, 함수를 호출 할 때 파라미터 값을 전달하지 않아도 사용가능
say(); // 파라미터 값을 전달하지 않음
