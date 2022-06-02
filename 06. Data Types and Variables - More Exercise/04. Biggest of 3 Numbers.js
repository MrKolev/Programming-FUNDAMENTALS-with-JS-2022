function biggestOf3Numbers(a, b, c) {
    let first
    if (a >= b && a >= c) {
        first = a
    }
    if (b >= a && b >= c) {
        first = b
    }
    if (c > a && c >= b) {
        first = c
    }
    console.log(first)
}
biggestOf3Numbers (-2,
    7,
    3
    )