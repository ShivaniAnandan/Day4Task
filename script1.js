//1) Print odd numbers in an array
var arr= [1,2,3,4,5];

var result = function(){
    for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
    console.log(arr[i]);
    }
    }
}
result();

//2)Convert all the strings to title caps in a string array

var strArray = ["cat","dog","cow"];
var capArray = [];
for(var i=0;i<strArray.length;i++){
    const res = function(txt){
        var ans =  txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        capArray.push(ans);
    }
    res(strArray[i]);
}
console.log(capArray);

//3)Sum of all numbers in an array

var sum_arr = [1,2,3,4,5];
var sum = 0;
var answer = function(){
    
    for(var i=0;i<sum_arr.length;i++){
        sum += sum_arr[i];
    }
    console.log(sum);
}
answer();

//4)Return all the prime numbers in an array


var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var isPrime = function(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


var primeNumbers = function(arr) {
    const primes = [];
    for (let num of numberArray) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }

console.log(primeNumbers()); 

//5)Return all the palindromes in an array


var strArray = ["madam", "hello", "racecar", "world", "level", "javascript"];


var isPalindrome = function(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};


var palindromes = [];

for (var i = 0; i < strArray.length; i++) {
    if (isPalindrome(strArray[i])) {
        palindromes.push(strArray[i]);
    }
}

console.log(palindromes); 

//6)Return median of two sorted arrays of the same size.


var medianOfTwoSortedArrays = (function(arr1, arr2) {
    
    var mergedArray = arr1.concat(arr2);

   
    mergedArray.sort((a, b) => a - b);

    
    var n = mergedArray.length;
    var mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
       
        return mergedArray[mid];
    }
})([1, 3, 5], [2, 4, 6]);

console.log(medianOfTwoSortedArrays); 

//7)Remove duplicates from an array


var arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 1];

var uniqueArray = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === item) {
                found = true;
                break;
            }
        }
        if (found==false) {
            result.push(item);
        }
    }
    return result;
})(arrayWithDuplicates);

console.log(uniqueArray); 

//8)Rotate an array by k times


var array = [1, 2, 3, 4, 5];


var rotateArray = (function(arr, k) {
    var n = arr.length;
    
    var rotations = k % n;
   
    for (var i = 0; i < rotations; i++) {
        var lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
})(array, 2); 

console.log(rotateArray); 











