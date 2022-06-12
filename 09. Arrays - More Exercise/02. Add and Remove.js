function addAndRemove(array) {
    let newArray = [];
    let numberCount = 1;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'add': newArray[index] = numberCount;
                index++;
                break;
            case 'remove':
                newArray.pop()
                index > 0 ? index-- : index = 0;
                break;
        }
        numberCount++;
    }
    if (newArray.length === 0) {
        console.log("Empty")
    } else {
        console.log(newArray.join(' '));
    }
}
addAndRemove(["remove", "remove", "add", "add", "add"])