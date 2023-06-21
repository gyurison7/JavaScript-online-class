// for문
for(let i=0; i<10; i++) {
    console.log(i);
}

const arr = [1, 2, 3, 4, 5];
for(let i=0; i<arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

console.log("----------")
for(let i=0; i<=10; i++) {
    if(i>0 && i%2 == 0) {
        console.log(i);
    }
}

// for ~ in문
let person = {
    name : "John",
    age : 30,
    gender : "male"
}

for (let key in person) {
    console.log(key + " : " + person[key])
}