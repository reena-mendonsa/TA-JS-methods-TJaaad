Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
     -Parameter : no parameters are needed,directly
     -Return : A new string representing the calling string converted to upper case.
     -Example: 
     ```js
       let username ="arya stark";
       username.toUpperCase();
       //output : "ARYA STARK";

     ```
     The `toUpperCase()` method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

3. `toLowerCase`
      -Parameter :none
     -Return :A new string representing the calling string converted to lower case.
     -Example:
     ```js
       let username ="ARYA STARK";
       username.toUpperCase();
       //output : "arya stark";

     ```
     The toLowerCase() method returns the calling string value converted to lower case.
4. `trim`
       -Parameter :
     -Return :
     -Example:
5. `trimEnd`
     -Parameter :none

     -Return :A new string representing str stripped of whitespace from both its beginning and end.If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown.

     -Example:
     ```js
     let hello ="             Hello World            ";
     hello.trim();
     //output "Hello World"
     ```
     The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) 
6. `trimStart`
     -Parameter :none
     -Return : A new string representing str stripped of whitespace from both its beginning.
     -Example: 
     ```js
     let hello ="             Hello World";
     hello.trim();
     //output "Hello World"
     ```
     To return a new string with whitespace trimmed from just one end,ie from the start.

7. `concat`
     -Parameter :concat(str1, str2, ... , strN),strN One or more strings to concatenate to str.
     -Return :A new string containing the combined text of the strings provided.
     -Example:
     ```js
     const str1 = 'Hello';
     const str2 = 'World';

    str1.concat(' ', str2);
    // expected output: "Hello World"

     ```
     The concat() method concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`
     -Parameter :endsWith(searchString)
                 endsWith(searchString, length)
      searchString:The characters to be searched for at the end of str.
      length Optional:If provided, it is used as the length of str. Defaults to str.length.   
     -Return :true if the given characters are found at the end of the string; otherwise, false.

     -Example:
```js
     let str ="World is full of wonders!";
     str.endsWith('wonders'); ----false
     str.endsWith('wonders!'); ----true
     str.endsWith('!');-----true
```

9. `includes`
     -Parameter :includes(searchString)
                 includes(searchString, position)
                 searchString :A string to be searched for within str.
                 position Optional :The position within the string at which to begin searching for searchString. (Defaults to 0.)

     -Return :true if the search string is found anywhere within the given string; otherwise, false if not.


     -Example:
     ```js
     let story ="The Great Adventure!";
     story.includes('Great'); -----------true
     story.includes('great');--------------false
     ```
     The includes() method is case sensitive.
     The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`
     -Parameter :indexOf(searchValue):The string value to search for.
                indexOf(searchValue, fromIndex):An integer representing the index at which to start the search. Defaults to 0.

     -Return :  The index of the first occurrence of searchValue, or -1 if not found.
     -Example:
     ```js
     let str="Blue whale";
     'Blue Whale'.indexOf('Blue')      // returns  0
      str.indexOf('Blute')     // returns -1
      str.indexOf('Whale', 0)  // returns  5
      str.indexOf('Whale', 5)  // returns  5
      str.indexOf('Whale', 7)  // returns -1
      str.indexOf('')          // returns  0
      str.indexOf('', 9)       // returns  9
      str.indexOf('', 10)      // returns 10
      str.indexOf('', 11)      // returns 10
     ```
11. `lastIndexOf`
     -Parameter :lastIndexOf(searchValue):A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
                 lastIndexOf(searchValue, fromIndex)
     -Return :The index of the last occurrence of searchValue; 
     -Example:
     ```js
      let string ='Hello World!';
      string.lastIndexOf('e');----1
          string.lastIndexOf('H');----0
           string.lastIndexOf('h'); ----- -1

     ```
     Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character is str.length - 1.


12. `padEnd`
     -Parameter :padEnd(targetLength)
      padEnd(targetLength, padString)

    -Return :A String of the specified targetLength with the padString applied at the end of the current str.

    -Example:
    ```js
    let string ='Hello World';
    string.padEnd(15,'...');---------"Hello World...."
    string.padEnd(35,'...');---------"Hello World........................"
    string.padEnd(5,'...');------"Hello World"

    ```

13. `padStart`
       -Parameter :padStart(targetLength),padStart(targetLength, padString)
     -Return :A String of the specified targetLength with padString applied from the start.


     -Example:
     ```js
     'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
     ```
     The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.


14. `repeat`
     -Parameter :repeat(count)An integer between 0 and +Infinity, indicating the number of times to repeat the string.
     -Return :A new string containing the specified number of copies of the given string.
     -Example:
     ```js
     'abc'.repeat(1)     // 'abc'
     'abc'.repeat(2)     // 'abcabc'
     'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
     ```
     The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
15. `replace`
     -Parameter :replace(substr, newSubstr)
     -Return :A new string, with some or all matches of a pattern replaced by a replacement.


     -Example:
     ```js
     let str = 'apples are round, and apples are juicy.';
     let newstr = str.replace('apples', 'oranges');
     ```
     The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 


16. `slice`
     -Parameter :slice(beginIndex),slice(beginIndex, endIndex)
     -Return :A new string containing the extracted section of the string.

     -Example:
     ```js
     const str = 'The quick brown fox jumps over the lazy dog.';

      str.slice(31);
//  output: "the lazy dog."

str.slice(4, 19);
// output: "quick brown fox"
     ```
     The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
17. `split`
     -Parameter :split(),split(separator),split(separator, limit)

    -Return :An Array of strings, split at each point where the separator occurs in the given string.

      -Example:
      ```js
     let str = 'The quick brown fox jumps over the lazy dog.';
      str.split(' ');---["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
     ```
18. `substring`

       -Parameter :substring(indexStart),substring(indexStart, indexEnd)
     -Return :A new string containing the specified part of the given string.
     -Example:
```js
 let str = 'Mozilla';

str.substring(1, 3);
//output: "oz"

str.substring(2);
// output: "zilla"
```
