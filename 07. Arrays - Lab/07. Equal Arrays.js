function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let index = 0;
    let i = 0
    for (let num1 of firstArr) {
        for (i; i < secondArr.length;) {
            let num2 = secondArr[i];
            i++;
            if (num1 === num2) {
                sum += Number(num1);
                index++;
                break;
            } else {
                console.log(`Arrays are not identical. Found difference at ${index} index`)
                return;
            }
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`)

}
equalArrays(['5'], ['1'])


function eqlArr(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            sum += Number(arr1[i])
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

eqlArr(['5'], ['1'])