function condenseArrayToNumber(inputArr) {
    let condenseArr = [];
    let sum = 0;
    for (let i = 0; i < inputArr.length -1; i++) {
        let numA = Number(inputArr[i]);
        let numB = Number(inputArr[i + 1]);
        condenseArr.push(numA + numB);
    }
    for (let p of condenseArr) {
        sum += p
    }
    console.log(sum);
    //console.table(condenseArr)
}
condenseArrayToNumber([2, 10, 3])