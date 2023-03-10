"use strict";
// LESSON 1
// let username = 'Abdulmalik';
// let age = 25;
// let isMale = true;
// let hobbies = ['football', 'coding', 'reading'];
// let address = ['Nigeria', 'Lagos', 'Ikeja'];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log(address, hobbies, isMale, age, username);
// let a: number = 10;
// let b: number = 20;
// let c: number = a + b;
// console.log(c);
// LESSON 2: BASIC TYPES
// let username: string;
let meaningOfLife;
let isLoading;
let album;
// union type
let person;
let postId;
let isActive;
// LESSON 3
let array = ['abdul', 'malik', 25, { name: 23, isAdmin: true }, undefined, null, true, false];
// Tuple
let myTuple = ['Abdulmalik', 25, true, 24, false, 'Adeola'];
myTuple.push(24);
myTuple.push(false);
myTuple.push('Adeola');
let Abdulmalik = {
    name: 'Adeola',
    age: 25,
    isAdmin: true,
    gender: 'Male',
};
let Eniola = {
    name: 'Ibrahim',
    age: 28,
    isAdmin: true,
    gender: 'Female',
};
Abdulmalik = Eniola;
const nameAgeMap = {};
const nameBooleanMap = {};
nameAgeMap.malik = 12;
nameAgeMap.Eniola = 34;
nameAgeMap.damola = 45;
nameBooleanMap.malik = true;
nameBooleanMap.true = false;
// Literal Types
let username;
username = 'Adeola';
const multiplyFunction = (x, y) => {
    return Math.pow(x, y);
};
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c === 'number') {
        //Type check/guard
        return a + b + c;
    }
    return a + b;
};
// custom type guard/check
const isNumber = (value) => {
    return typeof value === 'number';
};
const isString = (value) => {
    return typeof value === 'string';
};
// never type
const createError = (message) => {
    throw new Error(message);
};
// use of never type
const numberOrString = (value) => {
    if (isNumber(value)) {
        return 'number';
    }
    if (isString(value)) {
        return 'string';
    }
    return createError('Invalid');
};
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
let myVal = addOrConcat(10, 20, 'concat');
let nextVal = addOrConcat(10, 20, 'concat');
// Double Casting or Forced Casting
10;
// Usage of Casting
const img = document.querySelector('img');
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());
class Coder {
    constructor(name, age, music, language = 'TypeScript') {
        this.name = name;
        this.age = age;
        this.music = music;
        this.language = language;
        this.name = name;
        this.age = age;
        this.music = music;
        this.language = language;
        this.secondLanguage = 'Python';
    }
    getAge() {
        return `My age is ${this.age}`;
    }
}
const malik = new Coder('Abdulmalik', 25, 'Hip-Hop');
console.log(malik.getAge());
class WebDev extends Coder {
    constructor(name, age, music, framework = 'Next.js') {
        super(name, age, music);
        this.framework = framework;
        this.framework = framework;
    }
    getLanguage() {
        return `My language is ${this.language} and my framework is ${this.framework}`;
    }
}
const malik2 = new WebDev('Abdulmalik', 25, 'Hip-Hop');
console.log(malik2.getLanguage());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action}ing on the ${this.instrument}`;
    }
}
const malik3 = new Guitarist('Abdulmalik', 'Guitar');
console.log(malik3.play('play'));
// Static Class Members
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Data must be an array of strings');
        }
    }
}
const todaysTransactions = {
    Pizza: 10,
    Books: 20,
    Job: 30,
};
let prop = 'Pizza';
console.log((todaysTransactions['Books'] = 40));
const todaysNet = (transactions) => {
    let total = 0;
    for (let prop in transactions) {
        total += transactions[prop];
    }
    return total;
};
const student = {
    name: 'Abdulmalik',
    GPA: 4.27,
    classes: [100, 200, 300, 400, 500],
};
// KeyOf Assertions
for (const key in student) {
    console.log(key, student[key]);
}
console.log(typeof student);
Object.keys(student).map((key) => {
    console.log(key, student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} is ${student[key]}`);
};
console.log(logStudentKey(student, 'name'));
// Generics
const echo = (arg) => arg;
function echo2(arg) {
    return arg;
}
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj('Abdulmalik'));
console.log(isObj(true));
console.log(isObj([1, 2, 3, 4, 5]));
console.log(isObj({}));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg: arg, is: false };
    }
    return { arg, is: !!arg };
};
const updateAssignment = (assignment, changes) => {
    return Object.assign(Object.assign({}, assignment), changes);
};
const assignment1 = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100,
};
console.log(updateAssignment(assignment1, { grade: 90, verified: true }));
// Record Utility Type
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
};
// Return Type Utility Type
const createNewAssign = (title, points) => {
    return { title, points };
};
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .catch((error) => {
        if (error instanceof Error) {
            console.log(error.message);
        }
    });
    return data;
});
