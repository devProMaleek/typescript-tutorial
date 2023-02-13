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
};

Abdulmalik = Eniola;

const nameAgeMap: { [index: string]: number } = {};
const nameBooleanMap: { [index: string]: boolean } = {};
nameAgeMap.malik = 12;
nameAgeMap.Eniola = 34;
nameAgeMap.damola = 45;

nameBooleanMap.malik = true;
nameBooleanMap.true = false;

// Literal Types

let username: 'Abdulmalik' | 'Adeola' | 'Adebayo';

username = 'Adeola';

type mathFunction = (x: number, y: number) => number;

interface MathFunction {
  (x: number, y: number): number;
}

const multiplyFunction: mathFunction = (x, y) => {
  return Math.pow(x, y);
};

// Optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === 'number') {
    //Type check/guard
    return a + b + c;
  }
  return a + b;
};

// custom type guard/check

const isNumber = (value: any): boolean => {
  return typeof value === 'number';
};

const isString = (value: any): boolean => {
  return typeof value === 'string';
};

// never type
const createError = (message: string): never => {
  throw new Error(message);
};

// use of never type

const numberOrString = (value: number | string): string => {
  if (isNumber(value)) {
    return 'number';
  }

  if (isString(value)) {
    return 'string';
  }

  return createError('Invalid');
};

// Type Casting || Type Assertion

type One = string;
type Two = string | number;
type Three = 'hello';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

let myVal: string = addOrConcat(10, 20, 'concat') as string;

let nextVal: number = addOrConcat(10, 20, 'concat') as number;

// Double Casting or Forced Casting
10 as unknown | number as string;

// Usage of Casting

const img = document.querySelector('img') as HTMLImageElement;

// img.src

//Typescript Classes (w3schools)

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.getArea());

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(length: number) {
    super(length, length);
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());

class Coder {
  public secondLanguage!: string;

  constructor(
    public readonly name: string,
    private age: number,
    public music: string,
    protected language: string = 'TypeScript'
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.language = language;
    this.secondLanguage = 'Python';
  }

  public getAge(): string {
    return `My age is ${this.age}`;
  }
}

const malik = new Coder('Abdulmalik', 25, 'Hip-Hop');
console.log(malik.getAge());

class WebDev extends Coder {
  constructor(name: string, age: number, music: string, public readonly framework: string = 'Next.js') {
    super(name, age, music);
    this.framework = framework;
  }

  public getLanguage(): string {
    return `My language is ${this.language} and my framework is ${this.framework}`;
  }
}

const malik2 = new WebDev('Abdulmalik', 25, 'Hip-Hop');
console.log(malik2.getLanguage());

interface Musician {
  name: string;
  instrument: string;
  play: (action: string) => string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  public play(action: string): string {
    return `${this.name} is ${action}ing on the ${this.instrument}`;
  }
}

const malik3 = new Guitarist('Abdulmalik', 'Guitar');
console.log(malik3.play('play'));

// Static Class Members

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

// Getters and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      this.dataState = value;
      return;
    } else {
      throw new Error('Data must be an array of strings');
    }
  }
}

// Index Signatures

interface TransactionObj {
  readonly [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: 10,
  Books: 20,
  Job: 30,
};

let prop: string = 'Pizza';

console.log((todaysTransactions['Books'] = 40));

const todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  for (let prop in transactions) {
    total += transactions[prop];
  }
  return total;
};

interface Student {
  // [key: string]: string | number |number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Abdulmalik',
  GPA: 4.27,
  classes: [100, 200, 300, 400, 500],
};

// KeyOf Assertions


for (const key in student) {
  console.log(key, student[key as keyof Student]);
}

console.log(typeof student)

Object.keys(student).map(key => {
  console.log(key, student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} is ${student[key]}`);
}

console.log(logStudentKey(student, 'name'));