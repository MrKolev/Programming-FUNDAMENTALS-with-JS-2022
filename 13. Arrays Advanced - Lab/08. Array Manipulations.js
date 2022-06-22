function arrayManipulations(input) {
    let array = input.shift().split(' ').map(Number);
    for (let el of input) {
        let comand = el.split(' ');
        let num = Number(comand[1]);
        let index = Number(comand[2]);
        switch (comand[0]) {
            case 'Add':
                array.push(num);
                break;
            case 'Remove':
                array = array.filter(el => el !== num);
                break;
            case "RemoveAt":
                array.splice(num, 1);
                break;
            case "Insert":
                array.splice(index, 0, num);
                break;

        }
    }
    return array.join(' ');
}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
))