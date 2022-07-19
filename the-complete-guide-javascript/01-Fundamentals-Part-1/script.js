// let js = 'Amazing';
// if(js === 'Amazing'){
//   alert('javascript Is Fun!!!');
// }

//VALUES AND VARIABLES......................
//declare a variable
let firstName = 'Márcio Gabriel';
console.log(firstName);
//ASSIGNMENTS
let country = 'Brazil';
let continent = 'South America';
let population = 215690.923;
console.log('Assignment Values and Variables: ');
console.log(country, continent, population);

//DATA TYPES......................
let javascpritIsFun = true; //boolean
console.log(javascpritIsFun);
console.log(typeof javascpritIsFun);
console.log(typeof 23);
console.log(typeof 'Márcio');
javascpritIsFun = 'YES!!';
console.log(javascpritIsFun);
console.log(typeof javascpritIsFun);
let year;
console.log(typeof year);
console.log(typeof null); //bug
console.log('Assignment Data Types: ');
let isIsIsland = false;
console.log(country, continent, population, isIsIsland);

//LET CONST AND VAR..........................
let age = 30;
age = 31;

const birthYear = 1998;
//birthYear = 2000; -> error cannot reassigned. is immutable.
//const job; -> const has to be initialized.

var job = 'Programmer'
job = 'Teacher';
console.log('Assignment Data Types: ');
const language = 'Portuguese';
console.log(country, continent, population, isIsIsland, language);