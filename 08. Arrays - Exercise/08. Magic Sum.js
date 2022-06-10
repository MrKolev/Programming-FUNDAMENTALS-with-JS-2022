function magicSum(array, magicNumber) {
    let arrayL = array.length;
    for (let i = 0; i < arrayL; i++) {
        for (let j = i + 1; j < arrayL; j++) {
            if (array[i] + array[j] == magicNumber) {
                console.log(array[i] + " " + array[j])
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
