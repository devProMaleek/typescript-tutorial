"use strict";
// My solution
const year = document.getElementById('year');
year.innerText = new Date().getFullYear().toString();
// Instructor solution
// const year = document.getElementById('year') as HTMLSpanElement;
// const thisYear: string  = new Date().getFullYear().toString();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear
