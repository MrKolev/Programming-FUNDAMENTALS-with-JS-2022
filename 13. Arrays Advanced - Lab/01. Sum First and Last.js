function sumFirstAndLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());
    return first + last;
}
console.log(sumFirstAndLast(['20', '30', '40']))