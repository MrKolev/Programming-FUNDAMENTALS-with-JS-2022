function carWash(array) {
    let result = 0;
    for (let comand of array) {
        switch (comand) {
            case 'soap': result += 10;
                break;
            case `water`: result *= 1.2;
                break;
            case 'vacuum cleaner': result *= 1.25;
                break;
            case `mud`: result *= 0.9;
                break;

        }
    }
return `The car is ${result.toFixed(2)}% clean.`
}

console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]))