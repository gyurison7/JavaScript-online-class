// 일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// const sayHello = function() {
//     console.log('Hello');
// }

// 2. 함수를 인자로 하여 다른 함수에 전달할 수 있다.
// 콜백함수 : 매개변수로 쓰이는 함수
// 고차함수 : 함수를 인자로 받거나 리턴하는 함수
function callFunc(func) {
    func(); // 매개변수로 받은 변수가 함수이다.
}
const sayHello = function() {
    console.log('Hello');
}
callFunc(sayHello);

// 3. 함수를 반환할 수 있다.
function createAdder (num) {
    return function(x) {
        return x + num;
    }
}

const addFive = createAdder(5);
console.log(addFive(10));