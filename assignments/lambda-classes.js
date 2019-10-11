// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor (instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject) {
        return  `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor (stAttributes) {
        super(stAttributes);
        this.previousBackground = stAttributes.previousBackground;
        this.className = stAttributes.className;
        this.favSubjects = stAttributes.favSubjects;
        this.grade = stAttributes.grade;
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
        }
    
    PRAssignment(student, subject) {
       return  `${student.name} has submitted a PR for ${subject}.`
    }
    springChallenge(student, subject) {
        `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class SL extends Instructor {
    constructor(SLAttributes) {
        super(SLAttributes);
        this.gradClassName = SLAttributes.gradClassName;
        this.favInstructor = SLAttributes.favInstructor;
    }
    standup() {
        return `${this.name} announces to ${this.channel} @channel standy times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}.`
    }
}

// usage

const Houston = new Instructor({
    name: 'Houston',
    age: 30,
    location: `Bluffton`,
    gender: 'Male',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Make it so'
});
const Theresa = new Instructor({
    name: 'Theresa',
    age: 49,
    location: `Bluffton`,
    gender: 'Female',
    specialty: 'Back-end',
    favLanguage: 'Javascript',
    catchPhrase: 'As you Wish'
});
const Jordan = new Student({
    name: 'Jordan',
    age: 21,
    location: `Bluffton`,
    gender: 'Male',
    favSubjects: ['CSS', 'Ruby'],
    grade: 100
});
const Ali = new Student({
    name: 'Ali',
    age: 29,
    location: 'Ossian',
    gender: 'Female',
    favSubjects: ['Python', 'Ruby'], 
    grade: 65,
});

const Anthony = new SL ({
    name: 'Anthony',
    age: 27,
    location: "Bluffton",
    gender: 'Male',
    gradClassName: "WEBPT11",
    favInstructor: "Pace",
});

// logs

console.log(Houston.speak());
console.log(Theresa.grade(Jordan, "Javascript"));

