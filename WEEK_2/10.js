// Set
// 고유한 값을 저장하는 자료구조다
// 값만 저장한다, 키는 저장하지 않는다
// 값이 중복되지 않는 유일한 요소로만 구성된다.

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value5');
mySet.add('value8');

// console.log(mySet.size);
// console.log(mySet.has('value1'))

for(const value of mySet.values()) {
    console.log(value);
}