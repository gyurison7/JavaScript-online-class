let y = 20;
result = y > 10 ? "크다" : "작다";
console.log(result)

function add (x, y) {
    let result = x + y;
    return result;
}

let add2 = function (x, y) {
    let result = x + y;
    return result;
}

console.log(add(2,3));
console.log(add2(10,20));