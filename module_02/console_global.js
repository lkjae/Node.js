console.log('hello world');
console.log('hello %s', 'world');

const world = 'world';
console.log(`hello ${world}`);

//에러 출력
console.error(new Error('에러 메시지 출력'));

const arr = [
    {name: 'John Doe', email: 'john@mail.com'},
    {name: 'Jeremy Go', email: 'jeremy@mail.com'}
];
console.table(arr);

const obj = {
    students: {
        grade1: {class1:{}, class:{}},
        grade2: {class1:{}, class:{}},
        teachers: ['John Doe', 'Jeremy Go']
    }
}
// console.log(obj);
console.dir(obj, {depth:1, colors: true});  // 출력할 객체의 깊이와 메시지 출력
console.time('time for for-loop');  //실행시간 측정 시작
for(let i = 0; i < 9999999 ; i++){}
console.timeEnd('time for for-loop'); //실행시간 측정 끝
