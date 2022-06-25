function counterStrike(array) {
    let energy = Number(array.shift());
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (el === "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${energy}`)
            return
        }
        if(energy == 0){
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`)
            return;
        }
        let distance = Number(el);
        
        if (energy >= distance) {
            count++;
            energy -= distance
        } else {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`)
            return;
        }
        if (count % 3 === 0) {
            energy += count
        }
    }
}
counterStrike(["1",
    "1",
    "End of battle",
    "10",
    "1",
    "2",
    "3",
    "3",
    "70",
'1'])