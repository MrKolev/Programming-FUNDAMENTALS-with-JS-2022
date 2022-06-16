function theLift(input) {
    let people = Number(input[0]);
    let lift = input[1].split(' ');
    let liftL = lift.length;

    for (let i = 0; i < liftL; i++) {
        let freeSpace = 4;
        let wagon = Number(lift[i]);
        if (wagon < 4 && people > 0) {
            freeSpace -= wagon;
            if (people > freeSpace) {
                people -= freeSpace;
                lift[i] = 4;
            } else {
                freeSpace -= people;
                lift[i] = 4 - freeSpace;
                people = 0;
                break;
            }
        }
    }
    let liftIsFull = true;
    for (let wagon of lift) {
        if (wagon < 4) {
            liftIsFull = false;
        }
    }
    if (people <= 0 && !liftIsFull) {
        console.log("The lift has empty spots!");
        console.log(lift.join(" "));
    }
    if (liftIsFull && people <= 0) {
        console.log(lift.join(' '));
    }

    if (people > 0 && liftIsFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(" "));
    }

}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   
)