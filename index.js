//                                          Assignment 1


//Q1:-
// function sum (number1 , number2){
//     return number1 + number2;
// }
// console.log("sum of first number & second number is: " + sum(20,5));

//Q2:-
// function isPrime(number) {
//     if (number <= 1) {
//       return false; 
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false; 
//       }
//     }
//     return true; 
//   }
// console.log(isPrime(7));

//Q3:-
// function reverseWord (word){
//     return word.split("").reverse().join("");
// }
// console.log(reverseWord("hello"));

//Q4:-
// function largestNumber (arr){
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(largest < arr[i]){
//             largest = arr[i]
//         }
//     }
//     return largest;
// }
// console.log(largestNumber([1,3,7,2,4]));

//Q5:-
// function evenNumber (arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(evenNumber([1,2,3,4,5,6]));

//Q6:-
// function reverseWords(word){
//     let reversed = '';
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
//   }
//   return reversed;
// }
// console.log(reverseWords("route"));

//Q7:-
// function average (arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//        sum += arr[i]
//     }
//     return sum/arr.length;
// }
// console.log(average([1, 2, 3, 4, 5]))

//Q8:-
// function whichDay (number){
//     if(number == 7){
//         console.log("weekend")
//     }
//     else if(number >=1 && number <=6){
//         console.log("weekday")
//     }
//     else{
//         console.log("please enter a number between 1-7");
//     }
// }
// whichDay(6);

//Q9:-
// function divisable (arr){
//     return arr.filter(number => number % 2 === 0 || number % 3 === 0);   
// }
// console.log(divisable([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Q10:-
// function findIndex (arr,element){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//           return i;
//         }
//       }
//       return -1; 
// }
// console.log(findIndex([1, 2, 3, 4, 5], 3)); 
// console.log(findIndex([1, 2, 3, 4, 5], 10));

//Q11:-
// function factorial(num) {
//     if (num < 0) {
//       return "negative numbers";
//     } 
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i; 
//     } 
    
//     return result;
//   }
//   console.log(factorial(5)); 

//Q12:-
// function getObjectKeys(obj) {
//     return Object.keys(obj);
//   }
// const inputObject = { name: "John", age: 30 };
// const result = getObjectKeys(inputObject);
// console.log(result);

//Q13:-
// function getUniqueNumbers(arr) {
//     return arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number));
//   }
// console.log(getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

//Q14:-
// function countCharacter (word){
//     let count = {};
//     for(let char of word){
//         count[char] = (count[char] || 0) + 1;
//     }
//     return count;
// }
// console.log(countCharacter("hello"));

//Q15:-
// function sortArr(arr) {
//     return arr.sort((a, b) => a - b);
//   }
//   console.log(sortArr([5, 3, 8, 1, 2]));

//Q16:-
// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }
  
//     const firstSortedStr = str1.split('').sort().join('');
//     const secondSortedStr = str2.split('').sort().join('');
  
//     return firstSortedStr === secondSortedStr;
//   }
//   console.log(areAnagrams("listen", "silent"));

//Q17:-
// function removeFalsyValues(arr) {
//     return arr.filter(Boolean);
//   }
//   console.log(removeFalsyValues([0, false, "Hello", "", null, undefined, NaN, 42]))

//Q18:-
// function car (model,year){
//     return {
//         model: model,
//         year: year,
//         display: function() {
//           return `Model: ${this.model}, Year: ${this.year}`;
//         }
//       };
// }
// const details = car("Toyota", 2020);
// console.log(details.display());

//Q19:-
// function check (obj,property){
//     return obj.hasOwnProperty(property);
// }
// console.log(check({ name: "Alice", age: 25 }, "name")); 
// console.log(check({ name: "Alice", age: 25 }, "address"));

//Q20:-
// function vowelsCounter(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) { 
//       if (vowels.includes(char)) {
//         count++; 
//       }
//     }
//     return count; 
//   }
  
//   console.log(vowelsCounter("Hello World"));

//Q21:-
// function splitSpaces(setence){
//     return setence.split(" ");
// }
// console.log(splitSpaces("The quick brown fox"));

//Q22:-
// function calculate(number1, number2, operator) {
//     switch (operator) {
//       case '+':
//         return number1 + number2; 
//       case '-':
//         return number1 - number2;
//       case '*':
//         return number1 * number2;
//       case '/':
//         return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
//       default:
//         return "Invalid operator"; 
//     }
//   }
//   console.log(calculate(5, 3, "+"));
//   console.log(calculate(5, 3, "%"));