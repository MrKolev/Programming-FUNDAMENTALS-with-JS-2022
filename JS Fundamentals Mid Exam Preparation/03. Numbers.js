function numbers(input) {
    let array = input.split(" ").map(Number);
    let average = 0;
    for (let el of array) {
        average += el
    }
    average /= array.length;

    let result = [];
    for (let el of array) {
        if (el > average) {
            result.push(el);
        }
    }
    let sortedArray = result.sort((a, b) => b - a).slice(0, 5);
    if (sortedArray.length == 0) {
        return "No"
    }
    return sortedArray.join(" ")
}
console.log(numbers('1 3 6 7 22 4 34 67 5 64 5 6'))