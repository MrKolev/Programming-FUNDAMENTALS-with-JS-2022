function computerStore(arrayInput) {
    let totalWithhoutTaxes = 0;
    let isSpecial = false;
    let taxes = 0;
    let totalPrice = 0;
    for (let element of arrayInput) {
        if (Number(element) >= 0) {
            totalWithhoutTaxes += Number(element);
        } else if (Number(element) < 0) {
            console.log("Invalid price!")
        } else {
            switch (element) {
                case 'special':
                    isSpecial = true;
                    break;
            }
        }
    }
    taxes = (totalWithhoutTaxes * 1.2) - totalWithhoutTaxes;
    if (isSpecial) {
        totalPrice = totalWithhoutTaxes + taxes
        totalPrice *= 0.9;
    } else {
        totalPrice = totalWithhoutTaxes + taxes;
    }
    if (totalPrice === 0) {
        console.log("Invalid order!")
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalWithhoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------")
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }

}
computerStore(([
    'regular'
])

)
