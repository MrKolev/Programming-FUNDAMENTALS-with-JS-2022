function movingTarget(input) {
    let target = input.shift().split(" ").map(Number);
    for (let el of input) {
        el = el.split(" ");
        let comand = el[0];
        let index = Number(el[1]);
        switch (comand) {
            case "Shoot":
                if (checkIndex(index)) {
                    target[index] -= Number(el[2]);
                    if (target[index] <= 0) {
                        target.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (checkIndex(index)) {
                    target.splice(index, 0, Number(el[2]))
                } else {
                    console.log("Invalid placement!")
                }
                break;
            case "Strike":
                let radius = Number(el[2])
                let startIndex = index - radius;
                let deleteCountRange = radius * 2 + 1;
                if (checkIndex(startIndex) && checkIndex(deleteCountRange)) {
                    target.splice(startIndex, deleteCountRange);
                } else {
                    console.log("Strike missed!")
                }
                break;
            case "End":
                console.log(target.join("|"));
                break;
        }
    }

    function checkIndex(index) {
        if (index >= 0 && index < target.length) {
            return true;
        } else {
            return false;
        }
    }
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
