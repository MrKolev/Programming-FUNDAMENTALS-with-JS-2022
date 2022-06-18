function addAndSubtract(first, second, third) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
    return subtract(sum(first, second), third)
}
addAndSubtract(2, 3, 4)