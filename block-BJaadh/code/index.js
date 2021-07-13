// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
let string2 =["called","sentance"];
strings=strings.concat(string2);
// - Again convert the updated array (strings) into sentance like
// "This is a collection of words called sentance"
console.log(strings.join(' '));
// - Remove the first word in the array (strings)
stringsClone=[...strings];
stringsClone.shift();
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes('is'));
let allIs =strings.filter((string) => string.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
let index=strings.indexOf('is');
console.log(strings[index]);
//other way
let allISAgain = strings.filter(
  (string)=>string.indexOf("is") !== -1
);
// - Check if all the numbers in numbers array are divisible by three use 
//array method (every)
function isDivisibleBy3(num){
     
    return num%3==0;
}
console.log(numbers.every(isDivisibleBy3),`divisble by3`);

// -  Sort Array from smallest to largest
let numbersSort =[...numbers];
numbersSort.sort(function(a, b) {
  return a - b;
});
console.log(numbersSort);
// - Remove the last word in strings
let newString = [...strings];
newString.pop();
// - Find largest number in numbers
var max = numbers.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(max);
//other way
let largest = numbers.sort((a,b)=>a-b).pop();

// - Find longest string in strings
let longestStr= strings.reduce(function(a,b){
   return a.length > b.length ? a : b;
});
console.log(longestStr);
// - Find all the even numbers
function isEven(num){
  return num%2===0;
}

let numbersNew = [...numbers];
console.log(numbersNew.filter(isEven));
// - Find all the odd numbers
function isOdd(num){
  return num%2!==0;
}

let numbersOdd = [...numbers];
console.log(numbersOdd.filter(isOdd));

// - Place a new word at the start of the array use (unshift)
strings.unshift('Hi');
// - Make a subset of numbers array [18,9,7,11]
let subset = [...numbers].slice(3,7);
console.log(subset);
// - Make a subset of strings array ['a','collection']
console.log([...strings].slice(3,5));
// - Replace 12 & 18 with 1221 and 1881
let index1 = numbers.indexOf(12);
numbers.splice(index1,1,1221);

index1= numbers.indexOf(18);
numbers.splice(index1,1,1881);
console.log(numbers);
// - Replace words in strings array with the length of the word
let newArrStr=[];
for(let i=0;i<strings.length;i++){
  newArrStr[i]=strings.splice(strings[i],1,strings[i].length);
}
console.log(newArrStr);
// - Find the sum of the length of words using above question
let sum = strings.reduce(function(a,b){
  return a+b;
});
console.log(sum);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filterCust = customers.filter((customer)=>
custimer.firstname.startsWith("J"));
// - Create new array with only first name
let firstNameCust = customers.map(
  (customer)=>customers.firstname
);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map(
  (customer)=>
   `${customers.firstname} ${customers.lastname}`
);

// - Sort the array created above alphabetically
[...fullName].sort();
// - Create a new array that contains only user who has at least one
// vowel in the firstname.
let vowel = customers.filter((customer)=>
{
  if(
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u") 
  )
  {
    return true;
  }
  else{
    return false;
  }
});