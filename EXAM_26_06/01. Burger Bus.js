function burgerBus(input){
    let citiNumber = Number(input.shift());
    let citiCount = 0;
    let totalProfit = 0;

    while (citiNumber > citiCount) {
        citiCount++;
        let cityName = input.shift();
        let profit = Number(input.shift());
        let expenses = Number(input.shift());
        if(citiCount % 3 === 0 && citiCount % 5 !== 0) {
            expenses *= 1.5;
        }
        if(citiCount % 5 === 0) {
            profit *= 0.9;
        }
        profit -= expenses;
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`)
        totalProfit += profit;
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}
burgerBus(["15","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20","Rennes",
"6320.60",
"5460.20",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])	

// In Lille Burger Bus earned 1025.40 leva.
// In Rennes Burger Bus earned 860.40 leva.
// In Reims Burger Bus earned -78.28 leva.
// In Bordeaux Burger Bus earned 4274.90 leva.
// In Montpellier Burger Bus earned 322.25 leva.
// Burger Bus total profit: 6404.67 leva.
