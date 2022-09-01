//Promise와 동일한 목적으로 사용, 비동기 실행
async function myFunction() {
    const r = await asyncFunction();
}

const myFunction2 = async() => {
    const r = await asyncFunction();
}
