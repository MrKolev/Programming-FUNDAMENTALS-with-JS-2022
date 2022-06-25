function houseParty(input) {
    let result = [];
    for (let el of input) {
        let elArray = el.split(' ');
        let name = elArray[0];
        if (elArray.length === 3) {
            result.includes(name) ? console.log(`${name} is already in the list!`) : result.push(name);
        } else {
            if (!result.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = result.indexOf(name);
                result.splice(index, 1);
            }
        }
    }
    console.log(result.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)