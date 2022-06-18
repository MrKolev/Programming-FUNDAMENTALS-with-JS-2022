function loadingBar(num) {

    let loadingFull = "%".repeat(num / 10);
    let loadingEmpty = ".".repeat(10 - loadingFull.length);

    num === 100 ? console.log(`100% Complete! \n[${loadingFull}]`) : 
    console.log(`${num}% [${loadingFull}${loadingEmpty}] \nStill loading...`);
}
//let loading = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",];
// if (num === 100) {
//     console.log(`100% Complete!`)
//     console.log("[%%%%%%%%%%]")
// } else {
//     let index = num / 10;
//     for (let i = 0; i < index; i++) {
//         loading[i] = "%"
//     }
//     console.log(`${num}% [${loading.join("")}]`)
//     console.log("Still loading...")
// }

loadingBar(100);