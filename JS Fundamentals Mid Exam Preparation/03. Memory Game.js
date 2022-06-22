function memoryGame(input) {
    let gameArray = input.shift().split(' ');
    let gameArrayLength = gameArray.length;
    let moves = 0;

    for (let comand of input) {
        if (comand === "end") {
            console.log("Sorry you lose :(");
            console.log(gameArray.join(" "))
            break;
        }
        moves++;
        let indax = comand.split(" ").map(Number).sort((a, b) => a - b)
        let firstIndex = indax[0];
        let secondIndex = indax[1];
        if (firstIndex >= 0 && firstIndex < gameArrayLength
            && secondIndex >= 0 && secondIndex < gameArrayLength
            && firstIndex != secondIndex) {
            if (gameArray[firstIndex] === gameArray[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${gameArray[firstIndex]}!`);
                let temp = gameArray[firstIndex];
                gameArray.splice(firstIndex, 1);
                secondIndex = gameArray.indexOf(temp);
                gameArray.splice(secondIndex, 1)
            } else {
                console.log("Try again!")
            }

        } else {
            gameArray.splice((gameArray.length / 2), 0, `-${moves}a`, `-${moves}a`)
            console.log("Invalid input! Adding additional elements to the board");
        }
        if (gameArray.length === 0 || gameArray.length === 1) {
            console.log(`You have won in ${moves} turns!`);
            return
        }
    }
}
memoryGame(["", "2 5", "end"])