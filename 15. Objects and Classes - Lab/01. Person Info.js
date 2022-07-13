function personInfo(firstName, lastName, age) {
let object = {}
object.firstName = firstName;
object.lastName = lastName;
object.age = age;
return object
}
console.log(personInfo("Peter", "Pan", "20"))