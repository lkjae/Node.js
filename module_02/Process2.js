const { nextTick } = require('process');
const process = require('process');

console.log('start');

setTimeout( () => {
    console.log('timeout callback');

}, 0);

nextTick( () => {
    console.log('nextTick callback');

});

console.log('end');

//이벤트 루프는 다른 콜백 함수보다 nextTick에 인수로 전달된
//콜백 함수를 우선처리 합니다.
