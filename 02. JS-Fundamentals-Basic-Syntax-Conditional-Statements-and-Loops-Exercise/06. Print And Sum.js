function printAndSum(a, b) {
    let totalSum = 0;
    let print = ""
    for (let i = a; i <= b; i++) {
        totalSum += i
        print += ` ${i}`

    }
    console.log(print)
    console.log(`Sum: ${totalSum}`)
}