const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

//console.log(myMap.keys());
for (const key of myMap.keys()) {
    //console.log(key);
}

for (const value of myMap.values()) {
    //console.log(value);
}

for (const entry of myMap.entries()) {
    console.log(entry);
}

console.log(myMap.size);
console.log(myMap.has("two"));