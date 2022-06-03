function evenEndOddSubtraction(inputArr){
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of inputArr) {
        if (num % 2 == 0) {
            sumEven += Number(num)
        }else {
            sumOdd += Number(num)
        }
    }
    console.log(sumEven - sumOdd)
}
evenEndOddSubtraction([3,5,7,9])