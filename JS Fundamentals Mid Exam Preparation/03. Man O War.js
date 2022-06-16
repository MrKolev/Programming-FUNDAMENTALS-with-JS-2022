function manOWar(input) {
    let arr1 = input[0].split(">")
    let pirateShip = [];
    for (let i = 0; i < arr1.length; i++) {
        pirateShip.push(Number(arr1[i]));
    }
    let warShip = [];
    let arr2 = input[1].split(">");
    for (let i = 0; i < arr2.length; i++) {
        warShip.push(Number(arr2[i]));
    }
    let maxHealth = Number(input[2]);
    let inputL = input.length;

    for (let i = 3; i < inputL; i++) {
        let comand = input[i].split(" ");
        switch (comand[0]) {
            case "Retire":
                let pirateShipSum = 0;
                let warshipSum = 0;
                for (let num of pirateShip) {
                    pirateShipSum += num;
                }
                for (let num of warShip) {
                    warshipSum += num;
                }
                console.log(`Pirate ship status: ${pirateShipSum}`);
                console.log(`Warship status: ${warshipSum}`);
                return;
            case "Fire":
                let indexForAttack = Number(comand[1]);
                // Check if both indexes are valid
                if (indexForAttack >= 0 && indexForAttack < warShip.length) {
                    let damage = Number(comand[2]);
                    //pirate attacks the war ship
                    let resultAttack = warShip[indexForAttack] - damage;
                    if (resultAttack <= 0) {
                        //Check if section breaks (health <= 0)
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    } else {
                        warShip[indexForAttack] = resultAttack;
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(comand[1]);
                let endIndex = Number(comand[2]);
                // Check if both indexes are valid
                if (startIndex >= 0 && startIndex < pirateShip.length
                    && endIndex >= startIndex && endIndex < pirateShip.length) {
                    let damage = Number(comand[3]);
                    //warship attacks the pirate ship
                    for (let i = startIndex; i <= endIndex; i++) {
                        let resultAttack = pirateShip[i] - damage;
                        pirateShip[i] = resultAttack;
                    }
                    //Check if section breaks (health <= 0)
                    let youLost = false;
                    for (let num of pirateShip){
                        if(num <= 0){
                            youLost = true;
                        }
                    }
                    if (youLost) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
                break;
            case "Repair":
                let indexForRepair = Number(comand[1]);
                //    Check if the index is valid
                if (indexForRepair >= 0 && indexForRepair < pirateShip.length) {
                    //the crew repairs 
                    let health = Number(comand[2]);
                    pirateShip[indexForRepair] += health;
                    if (pirateShip[indexForRepair] > maxHealth) {
                        pirateShip[indexForRepair] = maxHealth;
                    }
                }
                break;
            case "Status":
                let lower20OfmaxHealth = maxHealth * 0.20;
                let count = 0;
                for (let num of pirateShip) {
                    if (num < lower20OfmaxHealth) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
    }
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

