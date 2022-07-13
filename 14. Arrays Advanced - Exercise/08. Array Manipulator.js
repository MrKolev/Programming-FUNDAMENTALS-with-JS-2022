function arrayManipulator(array, comands) {
    for (let i = 0; i < comands.length; i++) {
        let a = comands[i].split(" ");
        let comand = a[0];
        let index = a[1];
        let element = a[2];

        switch (comand) {
            case "add":
            array.splice(index, 0, element);
            break;

            case "addMany":
                
            case "contains":
            case "remove":
            case "shift":
            case "sumPairs":
            case "print":

        }
    }

}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)
arrayManipulator()