function smallestTwoNumbers(array) {
  array.sort((a, b) => a - b).splice(2);
return array.join(" ")
}
console.group(smallestTwoNumbers([1,34,3,43,55,66,77]))