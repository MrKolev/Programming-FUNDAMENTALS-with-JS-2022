function rotateArray(arrayInput) {
    let array = arrayInput;
    let rotations = Number(array[array.length - 1]);
    array.pop();
    let arrayLength = array.length - 1;
    while (rotations > 0) {
        for (let i = 0; i < arrayLength; i++){
           let temp = array[i];
           array[i] = array[arrayLength];
           array[arrayLength] = temp;
        }
        rotations--;
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '0'])