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
img.src;
