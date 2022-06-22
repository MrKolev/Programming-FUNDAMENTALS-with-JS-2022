function lastKNumbersSequance(numberN, numberK) {
    let result = [1];
    for (let i = 1; i < numberN; i++) {
        let sequenceK = result.slice(-numberK);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        result.push(sum);
    }
    return result.join(' ');
}
console.log(lastKNumbersSequance(6, 3))