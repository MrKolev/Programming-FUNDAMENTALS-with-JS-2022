function palindromeIntegers(array) {
    for (let element of array) {
        let result = false;
        let elementToString = element.toString();
        let elementReverse = elementToString.split("").reverse().join("");
        if (elementToString === elementReverse) {
            result = true;
        }
        console.log(result);
    }
}
palindromeIntegers([32,2,232,1010])