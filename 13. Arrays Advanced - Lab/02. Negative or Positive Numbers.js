function negativeOrPositiveNumbers(array){
    let result =[];
    for(let el of array){
        if(Number(el) < 0){
            result.unshift(el);
        }else{
            result.push(el);
        }
    }
return result.join('\n');
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));