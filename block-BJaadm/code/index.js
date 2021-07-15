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

// Create an array peopleName and store value of name key from persons array
let peopleName =[];
function personsName(arr){
  return arr.name;
}
peopleName = persons.map(personsName);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade =[];
function personGrade(arr){
  return arr.grade;
}

personGrade = persons.map(personGrade);
console.log(personGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex =[];
function personsSex(arr){
  return arr.sex;
}
peopleSex = persons.map(personsSex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = persons.filter((startwithName)=>
{
  if(
    startwithName.name.startsWith("J") ||
    startwithName.name.startsWith("P") 
    
  )
  {
    return true;
  }
  else{
    return false;
  }
});
console.log(filterName,`Start with J or P`);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterName2 = persons.filter((startwithName)=>
{
  if(
    startwithName.name.startsWith("A") ||
    startwithName.name.startsWith("C") 
    
  )
  {
    return true;
  }
  else{
    return false;
  }
});
console.log(filterName2,`Start with A or C`);
console.log(filterName2.length);


// Log all the filtered male ('M') in persons array
let filterMan = persons.filter((male)=> {
  if(male.sex == 'M'){
    return true;
  }
  else{
    return false;
  }
});
console.log(filterMan,`Filtered male`);

// Log all the filtered female ('F') in persons array
let filterFemale = persons.filter((female)=> {
  if(female.sex == 'F'){
    return true;
  }
  else{
    return false;
  }
});
console.log(filterFemale,`Filtered Female`);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterFemaleCJ = persons.filter((female)=>
{
  if(female.sex == 'F'){
    if(
      female.name.startsWith("C") ||
      female.name.startsWith("J") 
    
    )
    {
      return true;
    }
    else{
      return false;
    }
  }  
});
console.log(filterFemaleCJ,`Female Start with C or J`);


// Log all the even numbers from peopleGrade array

function isEven(num){
  return num%2===0;
}
let numbersNew = personGrade.filter(isEven);
console.log(numbersNew);

// Find the first name that starts with 'J' in persons array and log the object

let firstName = peopleName.find(element => element.startsWith('J'));
console.log(firstName);

// Find the first name that starts with 'P' in persons array and log the object
 firstName = peopleName.find(element => element.startsWith('P'));
console.log(firstName);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
 firstName = persons.find(element => (element.name.startsWith('J')
                                               && element.grade >10 && element.sex == 'F'));
console.log(firstName);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((female)=> {
  if(female.sex == 'F'){
    return true;
  }
  else{
    return false;
  }
});
console.log(femalePersons,`Filtered Female`);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((male)=> {
  if(male.sex == 'M'){
    return true;
  }
  else{
    return false;
  }
});
console.log(malePersons,`Filtered male`);

// Find the sum of all grades and store in gradeTotal

function sumGrades(a,b){
  return a+b;
}
let grandTotal = personGrade.reduce(sumGrades);
console.log(grandTotal);


// Find the average grade

function averageGrades(num){
  
  return num/personGrade.length;
}

let avg = averageGrades(grandTotal);


// Find the average grade of male

let gradeOfMale = persons.filter((male)=> {
  if(male.sex == 'M'){

    return true;
  }
  else{
    return false;
  }
  
});




console.log(gradeOfMale,`Grade of male`);
let maleGrades =[];
function maleGradesfn(arr){
  return arr.grade;
}

maleGrades= gradeOfMale.map(maleGradesfn);
console.log(maleGrades);
let sumGradeOfMale = maleGrades.reduce(sumGrades);
let averageGradesOfMale = sumGradeOfMale/maleGrades.length;
console.log(averageGradesOfMale);



// Find the average grade of female

let gradeOfFemale = persons.filter((female)=> {
  if(female.sex == 'F'){

    return true;
  }
  else{
    return false;
  }
  
});




console.log(gradeOfFemale,`Grade of Female`);
let newFemaleArr =[];
function Gradesfn(arr){
  return arr.grade;
}

newFemaleArr= gradeOfFemale.map(Gradesfn);
console.log(newFemaleArr);
let sumGradeOfFemale = newFemaleArr.reduce(sumGrades);
let averageGradesOfFemale = sumGradeOfFemale/newFemaleArr.length;
console.log(averageGradesOfFemale);

// Find the highest grade
var max = personGrade.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);

// Find the highest grade in male
var max = maleGrades.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);
// Find the highest grade in female
var max = newFemaleArr.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);
// Find the highest grade for people whose name starts with 'J' or 'P'
let grades = filterName.map(getGrades);
function getGrades(arr){
  return arr.grade;
};

var max = grades.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
// console.log(personGrade.sort());

let numbersSort =[...personGrade];
numbersSort.sort(function(a, b) {
  return a - b;
});
console.log(numbersSort);
// Sort the peopleGrade in descending order
let numbersSort2 =[...personGrade];
numbersSort2.sort(function(a, b) {
  return  b-a;
});
console.log(numbersSort2);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let numbersSort3 =[...personGrade];
numbersSort3.sort(function(a, b) {
  return  b-a;
});
console.log(numbersSort3);

// Sort the array peopelName in ascending `ABCD..Za....z`
let names =[...peopleName];
names.sort();
console.log(names);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let names2 =[...peopleName];
names2.sort();
console.log(names2);