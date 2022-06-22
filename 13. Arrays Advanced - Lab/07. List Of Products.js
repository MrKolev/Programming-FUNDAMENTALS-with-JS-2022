function listOfProducts(array) {
    array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}
listOfProducts(["12","asda","asdasd","asdg","ffdghg","ftjhre","dasdaetg","hnvc","vz","fdr","frh","ytj","ghbv","zs"])