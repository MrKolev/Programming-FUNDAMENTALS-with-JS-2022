function nextDay(year, month, day) {

    //let a = new Date(year, month, day)
    var today = new Date(year, month, day)
    var tomorrow = today.add(1, 'days');
    console.log(tomorrow)
}
nextDay(2016, 9, 30)