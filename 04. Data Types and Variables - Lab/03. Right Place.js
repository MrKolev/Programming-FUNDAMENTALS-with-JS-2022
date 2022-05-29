function rightPlace(a,b,c){
    let result = "";

    for(let i = 0; i < a.length; i++) {
        if(a[i] == "_"){
            result += b
        }else{
            result += a[i]
        }
    }
    if(result === c){
        console.log("Matched")
    }else{
        console.log("Not Matched")
    }
}

rightPlace('Str_ng', 'o', 'Strong')