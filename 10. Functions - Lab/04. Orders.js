function orders(produkt, quantity){
    let total = 0;
    switch(produkt){
        case 'coffee': total = quantity * 1.5; break;
        case 'water': total = quantity * 1; break;
        case 'coke': total = quantity * 1.4; break;
        case 'snacks': total = quantity * 2; break;
    }
    return total.toFixed(2);
}