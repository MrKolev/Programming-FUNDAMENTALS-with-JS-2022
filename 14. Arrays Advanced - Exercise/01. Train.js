function train(input) {
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());
    for (let el of input) {
        el = el.split(" ");
        if (el[0] === "Add") {
            wagons.push(Number(el[1]));
        } else {
            let passengers = Number(el[0]);
            for (let i = 0; i < wagons.length; i++) {
                let sumPasses = wagons[i] + passengers;
                if (sumPasses <= maxCapacity) {
                    wagons[i] = sumPasses;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])