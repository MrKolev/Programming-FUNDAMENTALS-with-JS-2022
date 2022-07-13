function cats(catInput) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let catArr = [];
    for (let catData of catInput) {
        let token = catData.split(' ');
        let catName = token[0];
        let catAge = token[1];
        let myCat = new Cat(catName, catAge);
        catArr.push(myCat);
    }
    for (let el of catArr) {
        el.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])