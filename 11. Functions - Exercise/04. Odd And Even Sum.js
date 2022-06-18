function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    for (let temp of num.toString()) {
        if (temp % 2 == 0) {
            evenSum += Number(temp);
        } else {
            oddSum += Number(temp);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)