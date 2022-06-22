function numbers(input) {
    let array = input.split(" ").map(Number);
    let average = 0;
    for (let el of array) {
        average += el
    }
    average /= array.length;
    let result = array.filter(x => x > average);

    let sortedArray = result.sort((a, b) => b - a).slice(0, 5);
    if (sortedArray.length == 0) {
        return "No"
    }
    return sortedArray.join(" ")
}
console.log(numbers('-1 -2 -3 -4 -5 -6'))