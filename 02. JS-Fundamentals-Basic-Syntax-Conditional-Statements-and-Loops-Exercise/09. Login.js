function login(input) {
    let index = 0
    let userName = input[index];
    index++
    let password = ""
    let caunteer = 0
    for (let i = (userName.length - 1); i >= 0; i--) {
        password += `${userName[i]}`
    }
    while (input[index] !== password) {
        caunteer++
        if (caunteer === 4){
            console.log(`User ${userName} blocked!`);
            return;
        }else{
            console.log("Incorrect password. Try again.")
        }
        index++
    }
    if(input[index] === password){
        console.log(`User ${userName} logged in.`)
    }
}