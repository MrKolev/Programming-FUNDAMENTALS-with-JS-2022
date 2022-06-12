function nonDecreasingSubset(array){
    let newArray = [];
    let theBigNumber = 0;
    for(let num of array) {
        if(num >= theBigNumber){
            newArray.push(num);
            theBigNumber = num;
        }
    }
console.log(newArray.join(" "))
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])