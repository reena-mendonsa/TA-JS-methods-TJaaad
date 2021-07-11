let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');

console.log(fruits);
// Remove the last element from fruits array

fruits.pop();
console.log(fruits);

// Log the current length of fruits array
console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
fruits.shift();
// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift 
//all the values to one lower index (use shift method)
fruits.unshift("Pear");
delete fruits[0];
if(fruits[0]==undefined && fruits[1]=="Banana"){
fruits.shift();
}
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava");
// Add a new element to the start ('Dragon Fruit') and 
//shift the index of all other to one higher value
fruits.unshift("Dragon Fruit");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' 
//or not
if(fruits.indexOf(`Dragon Fruit`)==0 && fruits.indexOf(`Guava`)==1){
    console.log(true);
}
else{
    console.log(false);
}
// Update the value of index 1 to `Pears`
fruits.splice(1,1,"Pears");
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,"kiwi","Lemon");
// Remove (slice) all the element from index 5
fruits.slice(0,5);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits=["Berries","Melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
moreFruits=moreFruits.concat("Grapes","Water Melon","Pears","Coconut");
// Log the name of all fruit in console
console.log(moreFruits);
// Convert each fruit name to lowercase and log it
function toLowerCase(string)
{
    return string.toLowerCase();
}
let lowercaseFruits = fruits.map(toLowerCase);
console.log(lowercaseFruits);
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
function toLowerCase(string)
{
    return string.toLowerCase();
}
let lowercaseFruits = fruits.map(toLowerCase);
console.log(lowercaseFruits);


// Convert all fruits name into uppercase and store in new array named uppercaseFruits

function toUpperCase(string)
{
    return string.toUpperCase();
}
let uppercaseFruits = fruits.map(toUpperCase);
console.log(uppercaseFruits);

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers=numbers.flat();

// Convert the numbersTwo array to one level element. Remove all sub-arrays to
// individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo = numbersTwo.flat(2);
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update 
//the value of numbersThree to the new flat array.
let numberThree = numbersThree.flat(4);
// Use forEach to log all the elements of numberThree array

function log(fruits)
{
    console.log(fruits);
}
numberThree.forEach(log);
// Create a new variable named doubleNumbers that store the numberThree array
// (each element should be multiplied by 2). Use map
let doubleNumbers =[];
function double(num)
{
    return num*2;
}
doubleNumbers=numberThree.map(double);

// Create a new variable named tripleNumbers that store the
// numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers =[];
function triple(num)
{
    return num*3;
}
tripleNumbers=numberThree.map(triple);

// Create a new variable named halfNumbers that store
// the numberThree array (each element should be divided by 2). Use map
let halfNumbers;
function half(num)
{
    return num/2;
}
halfNumbers=numberThree.map(half);

// Create a new variable named oddNumbers that store all the odd numbers
// in numbersThree array
let oddNumbers;
function odd(num)
{
    
    return num%2 !== 0;
        
}
oddNumbers=numberThree.filter(odd);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers;
function even(num)
{
    
    return num%2 === 0;
        
}
evenNumbers=numberThree.filter(even);
// Find the index of 10 in numbersThree array
numbersThree.flat(4).indexOf(10);
// Reverse the values of numbersThree array
numbersThree.flat(4).reverse();
// Reverse the values of numbersTwo array
numbersTwo.flat(2).reverse();
// Join all fruits with '-', convert to uppercase and log it
let allFruits="";
function join(fruits)
{
    allFruits=allFruits+fruits +"-";
    allFruits.toUpperCase();
    console.log(allFruits);
}
fruits.forEach(join);
// Join all fruits with '&', convert to lowercase and log it
let allFruits="";
function join(fruits)
{
    allFruits=allFruits+fruits +"&";
    allFruits.toLowerCase();
    console.log(allFruits);
}
fruits.forEach(join);