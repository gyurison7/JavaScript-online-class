var a = 1;
function outer() {
    function inner() {
        console.log("1",a)
        var a = 3;
    }
    inner()
    console.log("2",a)
}
outer()
console.log("3",a)