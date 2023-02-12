"use strict";
// LESSON 1
// let username = 'Abdulmalik';
// let age = 25;
// let isMale = true;
// let hobbies = ['football', 'coding', 'reading'];
// let address = ['Nigeria', 'Lagos', 'Ikeja'];
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
