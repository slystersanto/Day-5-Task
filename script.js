// Anonymous function.
//Print odd numbers in an array.

var arr = [12,13,14,15,17,19,21]
var result =[];
var odd = function(arr){
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd(arr)); //output:[13,15,17,19,21]


//Convert all the strings to title caps in a string array.

var stringArray = ["hello", "world"];

var result = stringArray.map(function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
});

console.log(result); //output: ["Hello", "World"]


//Sum of all numbers in an array

var arr=[2,4,5,6,8];
var count=0;
var sum=function(arr){
  for(var i=0;i<arr.length;i++){
    count=count+arr[i];
  }
  return count;
}
console.log(sum(arr));//output:[25]


//Return all the prime numbers in an array

var arr=[2,3,4,5,6,7,8,9,10];
var getPrimeNumbers = function(arr) { 
  var primeNumbers = []; 
  for (var i = 0; i < arr.length; i++) { 
    var prime = true; 
    for (var j = 2; j < arr[i]; j++) { 
      if (arr[i] % j == 0) { 
        prime = false; 
        break; 
      } 
    } 
    if (prime) { 
      primeNumbers.push(arr[i]); 
    } 
  } 
  return primeNumbers; 
}; 


console.log(getPrimeNumbers(arr)); //output: [2,3,5,7]


//Return all the palindromes in an array

let arr = ["malayalam", "bob", "jim", "hannah", "racecar"];

let palindromes = arr.filter(function(word) {
  let reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
});

console.log(palindromes); //output: ["malayalam", "bob", "hannah", "racecar"]


//Return median of two sorted arrays of the same size.

let arr1=[1,2,3,6,7];
let arr2=[4,6,8,10,11];
function medianOfTwoSortedArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let midIndex = Math.floor(mergedArray.length / 2);
  let median;
  
  if (mergedArray.length % 2 === 0) {
    median = (mergedArray[midIndex-1] + mergedArray[midIndex]) / 2;
  } else {
    median = mergedArray[midIndex];
  }
  
  return median;
}

console.log(medianOfTwoSortedArrays(arr1,arr2));//output:6


//Remove duplicates from an array

let arr = [1,2,2,3,3,4,5];

let result = arr.filter(function(item,index){
  return arr.indexOf(item) === index;
});

console.log(result);  //output: [1, 2, 3, 4, 5]


//=> Arrow Functions.

//Print odd numbers in an array

var odd = (arr)=>{
    var result =[];
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd([12,13,14,15,17,19,21]));// output:[ 13, 15, 17, 19, 21 ]

//=>Convert all the strings to title caps in a string array.

let strArray = ["hello","world","welcome","to","guvi"];

let titleCaps = strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(titleCaps); // Output: ["Hello", "World", "Welcome", "To", "guvi"]



//=>Sum of all numbers in an array


var sum=(arr)=>{
    var count=0;
  for(var i=0;i<arr.length;i++){
    count=count+arr[i];
  }
  return count;
}
console.log(sum([2,4,5,6,8]));//output:25


//=>Return all the prime numbers in an array


var getPrimeNumbers = (arr)=> { 
  var primeNumbers = []; 
  for (var i = 0; i < arr.length; i++) { 
    var prime = true; 
    for (var j = 2; j < arr[i]; j++) { 
      if (arr[i] % j == 0) { 
        prime = false; 
        break; 
      } 
    } 
    if (prime) { 
      primeNumbers.push(arr[i]); 
    } 
  } 
  return primeNumbers; 
}; 


console.log(getPrimeNumbers([2,3,4,5,6,7,8,9,10])); //output: [2,3,5,7]

//=>Return all the palindrome
const palindrome = (arr) => { 
 
    const result = arr.filter(str => { 
      const reversed = str.split("").reverse().join(""); 
      return str === reversed; 
    }); 
   
    return result; 
  } 
    
  console.log(palindrome(["malayalam"]));//output:malayalam