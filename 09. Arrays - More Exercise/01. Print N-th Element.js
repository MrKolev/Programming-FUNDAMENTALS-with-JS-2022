function printN_Element(array) {
    let stepN = Number(array[array.length - 1]);
    let arrayL = array.length - 1;
    let newArray = [];
    for (let i = 0; i < arrayL; i+= stepN) {
        newArray.push(array[i]);
    }
console.log(newArray.join(' '));
}
printN_Element(['5', '20', '31', '4', '20', '2'])