// 구조분해할당 : destructuring
// 배열인 경우
let [value1, value2] = [1, "new"];
console.log(value1);
console.log(value2);

// 객체인 경우
let user = {
    name: "nbc",
    age: 30
}

let {name, age} = {
    name: "nbc",
    age: 30
}
console.log(name,age);

let {name: newName, age: newAge} = user;
console.log(newName);
console.log(newAge);