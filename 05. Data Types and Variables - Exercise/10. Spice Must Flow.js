function spiceMustFlow(startingъield) {
    let dayCount = 0;
    let total = 0;
    while (startingъield >= 100) {
        dayCount++;
        total += startingъield - 26;
        startingъield -= 10;
    }
  //  console.log(dayCount);
    //. console.log(dayCount,"\n" , dayCount !== 0 ? total - 26 : total)
  //  console.log(dayCount !== 0 ? total - 26 : total)


   let a = dayCount !== 0 ? total - 26 : total
   console.log(a);
}
spiceMustFlow(111)