function theAngryCat(priceRatings, entryPoint, typeItems) {
    let left = priceRatings.slice(0, entryPoint)
    let right = priceRatings.slice(entryPoint + 1)
    let sumLeft = 0;
    let sumRight = 0;
    let entryPointValue = priceRatings[entryPoint]
    for (let el of left) {
        if (typeItems === "cheap") { 
            if(el < entryPointValue){
                sumLeft += el;
            }
        }else if (typeItems === "expensive"){
            if (el >= entryPointValue){
                sumLeft += el;
            }
        }
    }
    for (let el of right) {
        if (typeItems === "cheap") { 
            if(el < entryPointValue){
                sumRight += el;
            }
        }else if (typeItems === "expensive"){
            if (el >= entryPointValue){
                sumRight += el;
            }
        }
    }
    if(sumLeft >= sumRight){
        console.log(`Left - ${sumLeft}`)
    }else{
        console.log(`Right - ${sumRight}`)
    }
}
theAngryCat([1, 5, 1],1,
    "cheap")
    