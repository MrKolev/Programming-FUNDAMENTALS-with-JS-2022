function tseamAccount(array) {
    let account = array[0].split(' ');
    let arrayL = array.length - 1;
    for (let i = 1; i < arrayL; i++) {
        let comand = array[i].split(' ');

        if (comand[0] === 'Play!') {
            break;
        }
        switch (comand[0]) {
            case 'Install':
                if (account.includes(comand[1])) {
                    break;
                } else {
                    account.push(comand[1]);
                }
                break;
            case `Uninstall`:
                if (account.includes(comand[1])) {
                    let index = account.indexOf(comand[1]);
                    account.splice(index, 1)
                }
                break;
            case `Update`:
                if (account.includes(comand[1])) {
                    let index = account.indexOf(comand[1]);
                    let temp = account[index];
                    account.splice(index, 1);
                    account.push(temp);
                }
                break;
            case `Expansion`:
                let gameOfExpansion = comand[1].split("-");
                if (account.includes(gameOfExpansion[0])) {
                    let index = account.indexOf(gameOfExpansion[0]);
                    let expansionGame = `${gameOfExpansion[0]}:${gameOfExpansion[1]}`
                    account.splice(index + 1, 0, expansionGame);
                }

        }
    }
    console.log(account.join(" "))

}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)