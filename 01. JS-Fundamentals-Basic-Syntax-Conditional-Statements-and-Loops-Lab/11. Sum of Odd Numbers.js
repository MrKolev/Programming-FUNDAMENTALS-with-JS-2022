function sumOfOddNumbers(num) {
    let nextNumber = 1;
    let sum = 0;
    let counter = 0;
    while (counter < num) {
        if (nextNumber % 2 !== 0) {
            console.log(nextNumber)
            counter++;
            sum += nextNumber;
        }
        nextNumber += 1;
    }
console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5)