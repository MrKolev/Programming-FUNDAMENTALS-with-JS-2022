function softUniReception(input) {
    let sumPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let studentsCount = Number(input[3]);
    let needHours = 0;

    while (0 < studentsCount) {
        needHours++;
        if (needHours % 4 === 0) {
        }
        if (needHours % 4 !== 0) {
            studentsCount -= sumPerHour;
        }
    }
    console.log(`Time needed: ${needHours}h.`)
}

softUniReception(['3','2','5','40'])