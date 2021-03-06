function gladiatorExpenses
    (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let shield = 0;
    let expenses = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice
        } if (i % 3 === 0) {
            expenses += swordPrice
        } if (i % 6 === 0) {
            expenses += shieldPrice
            shield++
            if (shield % 2 === 0) {
                expenses += armorPrice
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)