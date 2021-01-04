class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Name: ${this.name} Age: ${this.age}`)
    }
}

module.exports = Person;