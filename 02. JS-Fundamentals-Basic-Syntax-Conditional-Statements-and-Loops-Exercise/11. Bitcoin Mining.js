function bitcoinMining(input) {
    let index = 0;
    let day = 0;
    let priceBitcoin = 11949.16;
    let oneGramOfGold = 67.51;
    let myMoney = 0;
    let myBitcoin = 0;
    let dayOfTheFirst = 0;

    for (let i = 0; i < input.length; i++) {
        day++;
        let goldPerDay = input[index];
        index++;
        if (day % 3 === 0) {
            goldPerDay = goldPerDay * 0.70;
        }
        myMoney += goldPerDay * oneGramOfGold;
        while (myMoney > priceBitcoin) {
            myMoney -= priceBitcoin;
            myBitcoin++;
            if (dayOfTheFirst === 0) {
                dayOfTheFirst = day
            }
        }

    }
    console.log(`Bought bitcoins: ${myBitcoin}`)
    if (myBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirst}`)
    }
    console.log(`Left money: ${myMoney.toFixed(2)} lv.`)
}
bitcoinMining([50, 100])