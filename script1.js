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


var stringArray = ["hello world", "this is a test", "javascript is fun"];


var titleCasedArray = (function(arr) {
    return arr.map(function(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
})(stringArray);

console.log(titleCasedArray);

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


var primeNumbers = numberArray.filter(function(num) {
    return isPrime(num);
});

console.log(primeNumbers); 

//5)Return all the palindromes in an array


var strArray = ["madam", "hello", "racecar", "world", "level", "javascript"];


var isPalindrome = function(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};


var palindromes = strArray.filter(function(str) {
    return isPalindrome(str);
});

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
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
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











