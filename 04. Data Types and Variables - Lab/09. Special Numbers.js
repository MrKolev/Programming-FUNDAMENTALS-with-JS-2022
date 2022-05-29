function specialNumbers(n) {
    for (let num = 1; num <= n; num++) {
        let sum = 0;
        num = num.toString();
        for (let i = 0; i < num.length; i++) {
            let digit = num[i];
            sum += parseInt(digit);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }
}
specialNumbers(20)