function sortaArrayBy2Criteria(array){
    let sortArray = array.sort((a,b)=> {
       return a.length - b.length || a.localeCompare(b);
    })
    console.log(sortArray.join('\n'));
}
sortaArrayBy2Criteria(['alpha', 'beta', 'gamma'])