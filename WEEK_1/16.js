let fruits = ["사과", "바나나"];

let number = new Array(5);
// console.log(number);
// console.log(number.length);

// console.log(fruits[0])

fruits.push("오렌지");
console.log(fruits);

fruits.pop(); // 마지막 요소 삭제
console.log(fruits);

fruits.shift() // 첫번째 요소 삭제
console.log(fruits);

fruits.unshift("포도") //맨 앞에 추가
console.log(fruits);

fruits.splice(1, 1, "키위"); // 1번자리에서 시작해서 1개 지우고 "키위" 넣기
console.log(fruits);

let fruits2 = ["사과", "바나나", "키위"];
slicedFruits = fruits2.slice(1,2) // 1번자리에서 시작해서 2번 앞까지 새로운 배열을 만들어서 반환
console.log(slicedFruits)


let numbers = [1, 2, 3, 4, 5];
// 매개변수 자리에 함수를 넣는 것 : 콜백함수
numbers.forEach(function(item){
    console.log(item);
})

// map : 기존의 배열을 가공해서 새로운 배열 생성
// 항상 원본 배열의 길이만큼 return 된다.
let newNumbers = numbers.map(function(item){
    return item * 2;
})
console.log(newNumbers);

// filter : 조건에 해당하는 값만 리턴
let fiteredNumbers = numbers.filter(function(item){
    return item == 5;
})
console.log(fiteredNumbers)

// find : 조건에 해당하는 값 1개만 리턴
let findNumbers = numbers.find(function(item){
    return item > 3;
})
console.log(findNumbers)
