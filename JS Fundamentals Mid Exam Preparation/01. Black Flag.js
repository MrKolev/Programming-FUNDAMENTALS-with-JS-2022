function blackFlag(inputArray) {
    let days = Number(inputArray[0]);
    let dailyPlunder = Number(inputArray[1]);
    let expectedPlunder = Number(inputArray[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        } 
        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        let percentage = (totalPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

blackFlag(["15","20","400"])


