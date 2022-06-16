function arrayModifier(input) {
    let array = input[0].split(' ');
    let arrL = input.length;
    for (let i = 1; i < arrL; i++) {
        let comand = input[i].split(' ');
        switch (comand[0]) {
            case 'end':
                console.log(array.join(", "));
                break;
            case `swap`:
                let temp = array[comand[1]];
                array[comand[1]] = array[comand[2]];
                array[comand[2]] = temp;
                break;
            case `multiply`:
                array[comand[1]] *= array[comand[2]];
                break;
            case `decrease`:
                for (let j = 0; j < array.length; j++) {
                    array[j] -= 1;
                }
                break;
        }
    }
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
)

//1, 11, 3, 0