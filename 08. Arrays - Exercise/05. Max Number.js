function maxNumber(array) {
    let arrL = array.length;
    let newArray = [];

    for (let i = 0; i < arrL; i++) {
        let num1 = array[i];
        let theBigNumber = true;
        for (let k = i + 1; k < arrL; k++) {
            let num2 = array[k];
            if (num1 <= num2) {
                theBigNumber = false;
            }
        }
        if(theBigNumber) {
            newArray.push(num1)
        }
    }

    console.log(newArray.join(' '));
}
//maxNumber([4, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])