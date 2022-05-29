function distanceBetweenPoints(x1, y1, x2, y2) {
    let a = (x2 - x1);
    let b = (y2 - y1);
    let d = Math.pow(a, 2) + Math.pow(b, 2)
    console.log(Math.sqrt(d));
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)