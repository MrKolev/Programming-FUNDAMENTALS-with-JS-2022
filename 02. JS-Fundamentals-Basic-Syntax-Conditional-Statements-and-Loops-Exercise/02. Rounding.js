function rounding(nomb,precision){
    if (precision > 15){
        precision = 15;
    }
    console.log(parseFloat(nomb.toFixed(precision)));
}