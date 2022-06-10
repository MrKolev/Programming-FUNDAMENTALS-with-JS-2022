function addAndSubtract(inputArr) {
    let originalArrSum = 0;
    let newArraySum = 0;
    let indexL = inputArr.length
    for (n = 0; n < indexL; n++) {
        // let curentNum = inputArr[n];
        originalArrSum += inputArr[n];
        if (inputArr[n] % 2 == 0) {
            inputArr[n] += n
        }else {
            inputArr[n] -= n;
        }
        newArraySum += inputArr[n]
    }
    console.log(inputArr)
    console.log(originalArrSum)
    console.log(newArraySum)
}
addAndSubtract([5, 15, 23, 56, 35])