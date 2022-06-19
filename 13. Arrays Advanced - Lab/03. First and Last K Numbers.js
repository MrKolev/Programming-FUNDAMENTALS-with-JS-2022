function firstAndLastKNumbers(array) {
    let k = array.shift();
    let firstK = array.slice(0, k);
    let lastK = array.slice(-k);
    return `${firstK.join(" ")} \n${lastK.join(" ")}`;
}
console.log(firstAndLastKNumbers([2, 
    7, 8, 9]
    ))