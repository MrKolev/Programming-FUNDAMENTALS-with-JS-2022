function theatrePromotions(day, age) {
    if (age >= 0 && age <= 122) {
        let prices;
        switch (day) {
            case "Weekday":
                if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                    prices = 12
                } else if ((age > 18 && age <= 64)) {
                    prices = 18
                }
                break;
            case "Weekend":
                if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                    prices = 15
                } else if (age > 18 && age <= 64) {
                    prices = 20
                }
                break;
            case "Holiday":
                if (age >= 0 && age <= 18) {
                    prices = 5
                }
                else if (age > 64 && age <= 122) {
                    prices = 10
                }
                else if (age > 18 && age <= 64) {
                    prices = 12
                }
                break;
        }
        console.log(prices + "$")
    } else {
        console.log("Error!")
    }
}