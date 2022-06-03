function reverseAnArrayOfNumbers(n, inputArr) {
    let newArray = [];
    for (let i = n -1; i >= 0; i--){
        newArray.push(inputArr[i]);
    }
    console.log(newArray.join(" "));
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);