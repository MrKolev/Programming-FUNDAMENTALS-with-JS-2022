function equalSums(array) {
  
    let arrayL = array.length;
    let result = "no";


    for (let i = 0; i < arrayL; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++) {
            sumLeft += array[l]
        }
        for (let r = i + 1; r < arrayL; r++) {
            sumRight += array[r]
        } 
        if(sumLeft == sumRight){
           result = i
        }
    }
    console.log(result)
}
equalSums([1, 2, 3, 3])