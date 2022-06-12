function numbers(input) {
    let array = input.split(" ");
    let sumAllNum = 0;
    let result = [];
    let printResult = [];
    for (let num of array) {
        sumAllNum += Number(num);
    }
    let averageNumbe = sumAllNum / array.length
    for (let num of array) {
        if (Number(num) > averageNumbe) {
            result.push(num);
        }
    }
    console.log(result.sort(function(a, b){return a - b}));

}
numbers('10 20 30 40 50')