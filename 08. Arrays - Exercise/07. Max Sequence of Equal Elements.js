function maxSequenceOfEqualElements(inputArray) {

    let longArray = [];
    let inputL = inputArray.length;

    for (let i = 0; i < inputL; i++) {
        let newArray = [];
        for (let j = i; j < inputL; j++) {
            if (inputArray[i] === inputArray[j]) {
                newArray.push(inputArray[j]);
            } else {
                break;
            }
        }
        if (newArray.length > longArray.length) {
            longArray = newArray;
        }
    }
    console.log(longArray.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])