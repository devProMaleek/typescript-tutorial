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

let username: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

// union type
let person: string | number;

let postId: number | string;
let isActive: boolean | number;

// LESSON 3
let array = ['abdul', 'malik', 25, { name: 23, isAdmin: true }, undefined, null, true, false];

// Tuple
let myTuple: [string, number, boolean, number, boolean, string] = ['Abdulmalik', 25, true, 24, false, 'Adeola'];
myTuple.push(24);
myTuple.push(false);
myTuple.push('Adeola');

type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
  gender: string;
};

let Abdulmalik: Person = {
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
}

Abdulmalik = Eniola

const nameAgeMap: { [index: string]: number } = {};
const nameBooleanMap: { [index: string]: boolean } = {};
nameAgeMap.malik = 12
nameAgeMap.Eniola = 34
nameAgeMap.damola = 45

nameBooleanMap.malik = true
nameBooleanMap.true = false
