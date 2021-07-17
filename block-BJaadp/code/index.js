let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
function avgGrade(){
  let sum = persons.reduce((acc,person) =>
  {
    acc = acc + person.grade;
    return acc;
  },0);
  console.log(sum);
  return sum / persons.length;
}

console.log(avgGrade());


// Find the average grade of male

function avgGradeMale(){
  let gradeM=persons.filter((p)=>p.sex=='M');
 let sum= gradeM.reduce((acc,cv)=> {
    acc = acc + cv.grade;
    
  
  return acc;
 },0);
   
  
  
  return sum/gradeM.length;
}
console.log(avgGradeMale());


// Find the average grade of female
function avgGradeFemale(){
  let gradeF= persons.filter((p)=> p.sex=='F');
 let sum= gradeF.reduce((acc,cv)=> {
    acc = acc + cv.grade;
    
  
  return acc;
 },0);
  
  return sum/gradeF.length;
}
console.log(avgGradeFemale());

// Find the highest grade
let peopleGrade =[];

personGrade = persons.map((p)=> p.grade);
console.log(personGrade);
var max = personGrade.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(`highest grade:`, max);
// Find the highest grade in male
let highestMaleGrade = persons.filter((p)=>p.sex=='M').map((p)=> p.grade);
var max = highestMaleGrade.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max,`Highest grade in male`);

// Find the highest grade in female

let highestFemaleGrade = persons.filter((p)=>p.sex=='F').map((p)=> p.grade);
var max = highestFemaleGrade.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max,`Highest grade in Female`);

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestPeopleGrade = persons.filter((p)=> (p.name.startsWith('J')|| p.name.startsWith('P'))).map((p)=>p.grade);
var max = highestPeopleGrade.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max,`Highest grade in People with J & P`);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/


function fruit(){
return fruitBasket.reduce((acc,fruits)=>{
  if(fruits in acc)
  {
   acc[fruits]++; 
  }
  else{
    acc[fruits] =1;
  }
  return acc;
},{});

}

console.log(fruit(),`Fruits`);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

function fruitArr(){
  let newArr ={};
  newArr= fruitBasket.reduce((acc,fruits)=>{
    if(fruits in acc)
    {
     acc[fruits]++; 
    
    }
    else{
      acc[fruits] =1;
      
    }
    return acc;
  },{});
  let entries = Object.entries(newArr);
  return entries;
  }
  
  console.log(fruitArr(),`FruitsArray`);



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

let flattened = data.reduce(
  function(acc, cv) {
    return acc.concat(cv)
  },
  []
);
console.log(`Flattened data array:`,flattened);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

function flatten(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
console.log(`Flattened dataTwo array:`,flatten(dataTwo));


/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half
  
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple
];

// Find the output using pipeline2 the initial value if 8

function increment(num){
  num = num +1;
  return num;
}




 function half(num){
  num = Math.round(num/2);
  return num;
}



function double(num){
  num = num * 2 ;
  return num;
}



function decrement(num){
  num = num -1;
  return num;
}





function triple(num){
  num = num *3;
  return num;
}




pipeline.reduce((acc,cv)=>{
acc = cv(acc);
return acc;
},3);

pipeline2.reduce((acc,cv)=>{
  acc = cv(acc);
  return acc;
  },8);
  