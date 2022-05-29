function integerAndFloat(numA, numB, numC){
    let result = numA + numB + numC;
    let output = result % 2 === 0 ? "Integer" : "Float";
    console.log(`${result} - ${output}`)
}
integerAndFloat(9,100,1.1)