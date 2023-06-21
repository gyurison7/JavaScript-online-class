function solution(strings, n) {
    let newArr = [];
    for(let i=0; i<strings.length; i++) {
        let temp = strings[i][n] + strings[i];
        newArr.push(temp);
    }

    let resultArr = [];
    newArr.sort();
    for (let i=0; i<newArr.length; i++) {
        resultArr[i] = newArr[i].substr(1);
    }
    return resultArr;
}

console.log(solution(["sun", "bed", "car"], 1));

