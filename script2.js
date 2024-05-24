//1)Print odd numbers in an array

var arr = [1, 2, 3, 4, 5];

var result = () => {
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
        console.log(arr[i]);
        }
    }
};

result();

//2)Convert all the strings to title caps in a string array

var strArray = ["cat","dog","cow"];
var capArray = [];
for(var i=0;i<strArray.length;i++){
    const res = (txt) => {
        var ans =  txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        capArray.push(ans);
    };
    res(strArray[i]);
}
console.log(capArray);

//3)Sum of all numbers in an array

var sum_arr = [1, 2, 3, 4, 5];
var sum = 0;
var answer = () => {
    for(var i=0;i<sum_arr.length;i++){
        sum += sum_arr[i];
    }
    console.log(sum);
};

answer();

//4)Return all the prime numbers in an array

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


var primeNumbers = (arr) => {
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


var isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

var palindromeArray = () => {
var palindromes = [];
for (var i = 0; i < strArray.length; i++) {
    if (isPalindrome(strArray[i])) {
        palindromes.push(strArray[i]);
    }
}
console.log(palindromes);
};

palindromeArray();
