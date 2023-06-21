// 단축 속성명: property shorthand
const name = "name";
const age = 30;

// 키-밸류가 똑같으면 생략할 수 있음
const obj = {name,age}

// 전개 구문
let arr = [1, 2, 3];
console.log(arr);
console.log(...arr);

let newArr = [...arr, 4];
console.log(newArr);

let user = {
    name : "nbc",
    age : 30
}

let user2 = {...user};
console.log(user);
console.log(user2);

// 나머지 매개변수
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args);
}
exampleFunc(1,2,3,4,5,6,7);

// 템플릿 리터럴
const testValue = "안녕!";
console.log(`${testValue}`);
console.log(`
    Hello
        my name is Jacascript!!
`)
