function bombNumbers(array, bomb) {
    let bombNumbers = bomb[0];
    let bombPower = bomb[1];
    while (array.includes(bombNumbers)) {
        let indexBombs = array.indexOf(bombNumbers);
        let startIndex = indexBombs - bombPower;
        let deleteCount = bombPower * 2 + 1;
        if (startIndex < 0) {
            deleteCount += startIndex
            startIndex = 0;
        }
        array.splice(startIndex, deleteCount);
    }
    let sum = 0;
    array.forEach((el) => sum += el)
    console.log(sum);
}
bombNumbers([1, 2, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 2])