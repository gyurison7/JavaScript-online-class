let person = {
    name : "홍길동",
    age: 30,
    gender: "남자"
}

function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// let person1 = new Person("홍길동", "30", "남자");
// let person2 = new Person("홍길순", "20", "여자");

let keys = Object.keys(person)
console.log("keys => ", keys)

let values = Object.values(person)
console.log("values => ", values)

let entries = Object.entries(person)
console.log("entries => ", entries)

// 객체 복사
let newPerson = {}
Object.assign(newPerson, person, {age : 31})
console.log("newPerson => ", newPerson)

let person1 = {
    name : "홍길동",
    age: 30,
    gender: "남자"
}

let person2 = {
    name : "홍길동",
    age: 30,
    gender: "남자"
}

console.log(person1 == person2)
console.log(JSON.stringify(person1) == JSON.stringify(person2))

let person3 = {
    name : "홍길동",
    age: 30
}

let person4 = {
    gender: "남자"
}

// 객체 병합
let perfectMan = {...person3, ...person4}
console.log(perfectMan)
