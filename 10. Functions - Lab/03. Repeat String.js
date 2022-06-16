function repeatString(stringInput, rotations) {
    let result = "";
    for (let i = 1; i <= rotations; i++) {
        result += stringInput
    }
    console.log(result)
}
repeatString("abc", 3)