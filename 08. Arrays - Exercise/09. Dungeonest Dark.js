function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let newArr = arr.toString().replace(/\a/g, "o").split(" ");
    let isDead = false;
    let len = newArr.length;
    let roomCounter = 1;
    for (let i = 0, n = 1; i < len; i += 2, n += 2) {
        let objectInRoom = newArr[i];
        let numInRoom = Number(newArr[n]);
        if (objectInRoom === "potion") {
            if (health + numInRoom > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${numInRoom} hp.`);
            }
            console.log(`Current health: ${health} hp.`);

        } else if (objectInRoom === "chest") {
            coins += numInRoom;
            console.log(`You found ${numInRoom} coins.`);
        } else {
            health -= numInRoom;
            if (health > 0) {
                console.log(`You slayed ${objectInRoom}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${objectInRoom}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }
        roomCounter++;
    }
    if (!isDead) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
