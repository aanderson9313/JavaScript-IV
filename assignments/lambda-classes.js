// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}
class Instructor {
    constructor (instAttributes) {
        super (instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(Subject) {
        console.log (`Today we are learning about ${this.subject}`)
    }
    grade(Student) {
        console.log (`${student.name} receives a perfect score on ${this.subject}`)
    }
}