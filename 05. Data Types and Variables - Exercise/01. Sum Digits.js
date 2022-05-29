function sumDigits(num) {
    num = String(num);
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        let digit = num[i];
        sum += parseInt(digit)
    }
    console.log(sum);
}
sumDigits(245678)