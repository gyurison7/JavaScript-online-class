// const person = {
//     name: "John",
//     age : 30,
//     isMarried: true,
//     sayHello: function() {
//         console.log('Hello, My name is ' + this.name);
//         console.log(`Hello, My name is ${this.name}`);
//     }
// }
// person.sayHello();



const person = {
    name: "John",
    age : 30,
    isMarried: true,
    sayHello: () => {
        // 화살표 함수는 this를 바인딩하지 않는다
        console.log(`Hello, My name is ${this.name}`); 
    }
}
person.sayHello();