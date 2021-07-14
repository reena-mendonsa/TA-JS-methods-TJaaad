let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns
// the longest word from the array. (Use above array "words" to test it).
// If there are 2 with the same length, it should return the first occurrence.
let longestStr=" ";

longestStr= words.reduce(function(a,b){
  
  return a.length > b.length ? a : b;
  
});

  console.log(longestStr);

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map(wordLen => wordLen.length));

// - Create a new array that only contains word with atleast one vowel.

let vowel = words.filter((vowelWords)=>
{
  if(
    vowelWords.toLowerCase().includes("a") ||
    vowelWords.toLowerCase().includes("e") ||
    vowelWords.toLowerCase().includes("i") ||
    vowelWords.toLowerCase().includes("o") ||
    vowelWords.toLowerCase().includes("u") 
  )
  {
    return true;
  }
  else{
    return false;
  }
});
console.log(vowel,`Vowels`);

// - Find the index of the word "rhythm"
console.log(words.indexOf(`rhythm`));
// - Create a new array that contians words not starting with vowel.
let vowelWords = words.filter((startwithVowel)=>
{
  if(
    startwithVowel.toLowerCase().startsWith("a") ||
    startwithVowel.toLowerCase().startsWith("e") ||
    startwithVowel.toLowerCase().startsWith("i") ||
    startwithVowel.toLowerCase().startsWith("o") ||
    startwithVowel.toLowerCase().startsWith("u") 
  )
  {
    return true;
  }
  else{
    return false;
  }
});
console.log(vowelWords,`Start with Vowels`);

// - Create a new array that contianse words not ending with vowel

let endvowelWords = words.filter((endwithVowel)=>
{
  if(
    endwithVowel.toLowerCase().endsWith("a") ||
    endwithVowel.toLowerCase().endsWith("e") ||
    endwithVowel.toLowerCase().endsWith("i") ||
    endwithVowel.toLowerCase().endsWith("o") ||
    endwithVowel.toLowerCase().endsWith("u") 
  )
  {
    return true;
  }
  else{
    return false;
  }
});
console.log(endvowelWords,`End with Vowels`);



/***************************** */
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter,
// and calculate the sum of all its numbers


function sumArray(a,b){
  return a+b;
}
let sum = numbers.reduce(sumArray);
console.log(sum);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiplyBy3(num){
  return num *3;
}
let multiplyArray = numbers.map(multiplyBy3);
console.log(multiplyArray);


// - Create a new array that contains only even numbers

function isEven(num){
  return num%2===0;
}
let numbersNew = numbers.filter(isEven);
console.log(numbersNew);

// - Create  a new array that contains only odd numbers.
function isOdd(num){
  return num%2!==0;
}
let numbersOdd = numbers.filter(isOdd);
console.log(numbersOdd);


// - Create a new array that should have true for even number and false for odd numbers.
function isEvenT(num){
  return num%2===0 ? true : false;
}
let numbersNew2 = numbers.map(isEvenT);
console.log(numbersNew2);


// - Sort the above number in assending order.

let numbersSort =[...numbers];
numbersSort.sort(function(a, b) {
  return a - b;
});
console.log(numbersSort);
// - Does sort mutate the original array?
//yes it does mutate the Array.
// - Find the sum of the numbers in the array.
function sumArray(a,b){
  return a+b;
}
let sum2 = numbers.reduce(sumArray);
console.log(sum2);

//- Write a function averageNumbers that receives an array of numbers and 
//calculate the average of the numbers
function averageNumbers(num){
  let sumOfNum = num.reduce(sumArray);
  return sumOfNum/num.length;
}

let avg = averageNumbers(numbers);


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2
// and calculate the average length of the words.


function averageWordLength(strings){
  let length =strings.map(strLen => strLen.length);
  console.log(length);
  let sumOfLen = length.reduce(sumArray);
  return sumOfLen/strings.length;
  
}

console.log(averageWordLength(strings));