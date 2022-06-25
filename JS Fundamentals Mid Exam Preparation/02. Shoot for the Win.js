function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);
    let count = 0;

    for (let comand of input) {
        if (comand !== "End") {
            let index = Number.parseInt(comand);
            if (index >= 0 && index < targets.length) {
                count++;
                if (targets[index] !== -1) {
                    let targetValue = targets[index];
                    targets[index] = -1;
                    for (let i = 0; i < targets.length; i++) {
                        let el = targets[i];
                        if(el == -1) {
                            continue;
                        }
                        if(el > targetValue) {
                            el -= targetValue;
                            targets[i] = el;
                        }else{
                            el += targetValue;
                            targets[i] = el;
                        }
                    }
                }
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
shootForTheWin((["30 30 12 60 54 66",
"  5",
"2",
"4",
"0",
"End"])

)