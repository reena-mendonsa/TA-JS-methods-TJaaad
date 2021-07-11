Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:.
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
Parameter:The join() method creates and returns a new string by concatenating all of the elements in an array separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
join()
join(separator)

Return:A string with all array elements joined. 

Example:
```js
var a = ['Wind', 'Water', 'Fire'];
a.join(' + '); // 'Wind + Water + Fire'
```

3. `flat` 

Parameter:flat()
flat(depth) The depth level specifying how deep a nested array structure should be flattened. 

Return:A new array with the sub-array elements concatenated into it.

Example:
```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```
4. `push`
The push() method adds one or more elements to the end of an array and returns the new length of the array.

Parameter: push(element0, element1, ... , elementN)

Return:The new length property of the object upon which the method was called.

Example:
```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
```
5. `indexOf`
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

Parameter:
indexOf(searchElement)
indexOf(searchElement, fromIndex)

Return:The first index of the element in the array; -1 if not found.

Example:
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1
```
6. `lastIndexOf`
The lastIndexOf() method returns the last index at which a given element can be found in the array.

Parameter:lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)

Return:The last index of the element in the array; -1 if not found.

Example:
```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

```
7. `includes`
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


Parameter:
includes(searchElement)
includes(searchElement, fromIndex)

Return:A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

Example:
```js
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```
8. `reverse`
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

Parameter:
reverse();
Return:The reversed array.
Example:
```js
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

```
9. `every`
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

Parameter:
callbackFn
Return:true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
Example:
```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

```
10. `shift`
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
Parameter:
shift();
Return:
The removed element from the array; undefined if the array is empty.
Example:
```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```
11. `splice`

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
Parameter:
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

Return:
An array containing the deleted elements.

Example:
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

```
12. `find`
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 

Parameter:
  callbackFn
Return:
The value of the first element in the array that satisfies the provided testing function.
Example:
```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```
13. `unshift`
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Parameter:
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
Return:
The new length property of the object upon which the method was called.

Example:
```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

```
14. `findIndex`
The findIndex() method returns the index of the first element in the array.
Parameter:callbackFn
Return:The index of the first element in the array that passes the test. 
Example:
```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```
15. `filter`
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Parameter:callbackFn
Return:A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
Example:
```js
function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
```
17. `forEach`
The forEach() method executes a provided function once for each array element.
Parameter:callbackFn
Return:undefined.
Example:
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

```
18. `map`
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Parameter:
callbackFn
Return:A new array with each element being the result of the callback function.
Example:
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

19. `pop`
The pop() method removes the last element from an array and returns that element. 
Parameter:pop()
Return:The removed element from the array; undefined if the array is empty.
Example:
```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

```
20. `reduce`
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
Parameter:callbackFn
Return:The single value that results from the reduction.
Example:
```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```
21. `slice`
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

Parameter:
slice()
slice(start)
slice(start, end)

Return:
A new array containing the extracted elements.


Example:
```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```
22. `some`
The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
Parameter:
callback
Return:
true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
Example:
```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

```
