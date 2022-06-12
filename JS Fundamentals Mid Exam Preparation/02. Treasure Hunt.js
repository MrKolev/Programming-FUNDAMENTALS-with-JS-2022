function treasureHunt(arrayInput) {
    let startItem = arrayInput[0].split("|");
    let arrayL = arrayInput.length - 1;
    let newItemArray = "";

    for (let i = 1; i < arrayL; i++) {
        let comand = arrayInput[i].split(" ");
        if (comand[0] === "Yohoho!") {
            break;
        }
        switch (comand[0]) {
            case "Loot":
                checkItems(comand);
                break;
            case "Drop":
                let indexDrop = Number(comand[1]);
                if (indexDrop >= 0 && indexDrop <= startItem.length) {
                    let temp = startItem[indexDrop];
                    startItem.splice(indexDrop, 1);
                    startItem.push(temp);
                }
                break;
            case "Steal":
                let stealsItem = Number(comand[1]);
                if (stealsItem > startItem.length) {
                    console.log(startItem.join(", "))
                    startItem = [];
                } else {
                    let numOfLastItems = startItem.length - stealsItem;
                    let a = startItem.splice(numOfLastItems,);
                    console.log(a.join(", "));
                    break;
                }
        }
    }

    if (startItem.length > 0) {
        let averageGain = 0;
        let sumItem = 0;
        for (let i of startItem) {
            sumItem += String(i).length;
        }
        averageGain = sumItem / startItem.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
    }else{
        console.log("Failed treasure hunt.")
    }

    function checkItems(arr) {
        for (let i = 1; i < arr.length; i++) {

            if (startItem.includes(arr[i])) {

            } else {
                newItemArray = "";
                newItemArray += String(arr[i]);
                startItem.splice(0, 0, newItemArray)
            }
        }

    }

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])