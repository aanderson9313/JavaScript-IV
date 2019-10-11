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
        return  `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeAdjust(student) {
        let points = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= points;
            return `${points} points are subtracted from ${student.name}'s grade. ${student.name}'s grade is ${student.grade}`;
        } else {
            student.grade += points;
            return `${points} points are added to ${student.name}'s grade. ${student.name}'s current grade is ${Student.grade}`;
        }
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
     for (let i = 0; i < this.favSubjects.length; i++){
         console.log(this.favSubjects[i]);
     }
     }

    PRAssignment(student, subject) {
       return  `${student.name} has submitted a PR for ${subject}.`
    }
    springChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
    iGraduated() {
        if (this.grade >= 75) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let difference = 75 - this.grade;
            this.grade += difference;
            return `After more grading, ${difference} points were earned and ${this.name} has graduated with a final grade of ${this.grade}`;
        }
    }
}
class SL extends Instructor {
    constructor(SLAttributes) {
        super(SLAttributes);
        this.gradClassName = SLAttributes.gradClassName;
        this.favInstructor = SLAttributes.favInstructor;
    }
    standup(slack) {
        return `${this.name} announces to ${slack} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// usage
// person
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
// students
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
    grade: 100,
});
// SLs
const Anthony = new SL ({
    name: 'Anthony',
    age: 27,
    location: "Bluffton",
    gender: 'Male',
    gradClassName: "WEBPT11",
    favInstructor: "Pace",
});
const Zoey = new SL ({
    name: 'Zoey',
    age: 32,
    location: "Bluffton",
    gender: 'Female',
    gradClassName: "UX-UI2",
    favInstructor: "Brandi",
});
// tests

console.log(Houston.speak());
console.log(Theresa.grade(Jordan, "Javascript"));
console.log(Houston.demo("Javascript"));
console.log(Jordan.listsSubjects());
console.log(Ali.PRAssignment(Ali, 'Javascript'));
console.log(Jordan.springChallenge(Jordan, 'User-Interface-I'));
console.log(Anthony.standup('WebPT11'));
console.log(Zoey.debugsCode(Jordan, 'HTML'));

console.log(Zoey.gradeAdjust(Ali));
console.log(Ali.iGraduated(Zoey));