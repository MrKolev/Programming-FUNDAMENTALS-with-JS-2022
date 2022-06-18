function factorialDivision(firstNumber, secondNumber) {
    let factorialFirst = factorial(firstNumber)
    let factorialSecond = factorial(secondNumber)
    return (factorialFirst / factorialSecond).toFixed(2)

    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result = result * i
        }
        return result;
    }
}
