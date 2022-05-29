function sortNumbers(a, b, c) {
    let first
    let second
    let third
    if (a >= b && a >= c) {
        first = a
        if (b >= c) {
            second = b
            third = c
        }
        if (c >= b) {
            second = c
            third = b
        }
    }
    if (b >= a && b >= c) {
        first = b
        if (a >= c) {
            second = a
            third = c
        }
        if (c >= a) {
            second = c
            third = a
        }
    }
    if (c > a && c >= b) {
    first = c
        if (a >= b) {
            second = a
            third = b
        }
        if (b >= a) {
            second = b
            third = a
        }
    }
    console.log(first)
    console.log(second)
    console.log(third)
}
sortNumbers(0,0,2)