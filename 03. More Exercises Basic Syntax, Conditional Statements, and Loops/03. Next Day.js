function nextDay(year, month, day) {

    let data = new Date(year, month - 1, day + 1);
    console.log(`${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`)
}
nextDay(2016, 9, 30)