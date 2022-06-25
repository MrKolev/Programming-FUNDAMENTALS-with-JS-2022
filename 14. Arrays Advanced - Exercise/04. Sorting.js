function sorting(input) {
    let result = [];
    input.sort((a, b) => b - a);
    let inputL = input.length / 2;
    for (let i = 0; i < inputL; i++) {
        let temp = input.shift();
        result.push(temp);
        temp = input.pop();
        result.push(temp);
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])