function coffeeLover(input) {
    let coffeeLine = input.shift().split(" ");
    let countOfCommands = Number(input.shift());
    let count = 0;
    while (countOfCommands > count) {
        count++;
        let element = input.shift().split(" ");
        let command = element[0];
        switch (command) {
            case "Include":
                coffeeLine.push(element[1]);
                break;
            case "Remove":
                let position = element[1];
                let numOfCoffee = Number(element[2]);
                if (numOfCoffee < coffeeLine.length) {
                    if (position == "first") {
                        coffeeLine.splice(0, numOfCoffee);
                    } else if (position == "last") {
                        while(numOfCoffee > 0) {
                            numOfCoffee--;
                            coffeeLine.pop();
                        }
                    }
                }
                break;
            case "Prefer":
                let coffeeIndex1 = Number(element[1]);
                let coffeeIndex2 = Number(element[2]);
                if (checkIndex(coffeeIndex1) && checkIndex(coffeeIndex2)) {
                    let temp = coffeeLine[coffeeIndex1];
                    coffeeLine[coffeeIndex1] = coffeeLine[coffeeIndex2];
                    coffeeLine[coffeeIndex2] = temp;
                }
                break;
            case "Reverse":
                coffeeLine.reverse()
                break;


        }
    }
console.log(`Coffees: \n${coffeeLine.join(" ")}`)
    function checkIndex(index) {
        if (index >= 0 && index < coffeeLine.length) {
            return true;
        } else {
            return false;
        }
    }

}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Prefer 1 7",
"Remove first 2",
"Remove last 4",
"Prefer 3 1",
"Reverse"])

// Coffees:
// StrongCoffee Magnistipula Robusta BulkCoffe Charrieriana
