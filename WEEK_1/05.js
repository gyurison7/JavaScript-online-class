// 암시적 형변환
let result1 = 1 + "2";
console.log(result1); // 12
console.log(typeof result1); // 문자열

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2); // 문자열

let result3 = 1 - "2";
console.log(result3); // -1
console.log(typeof result3); // 숫자

let result4 = "2" * "3";
console.log(result4); // 6
console.log(typeof result4); // 숫자

// 명시적 형변환
let result5 = String(123);
console.log(typeof result5);

let result6 = String(true);
console.log(typeof result6);

let result7 = String(false);
console.log(typeof result7);

let result8 = String(null);
console.log(typeof result8);

let result9 = String(undefined);
console.log(typeof result9);
