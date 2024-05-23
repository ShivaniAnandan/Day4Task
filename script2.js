//1)Print odd numbers in an array

var arr = [1, 2, 3, 4, 5];

var result = () => {
    arr.forEach(item => {
        if (item % 2 !== 0) {
            console.log(item);
        }
    });
};

result();

//2)Convert all the strings to title caps in a string array

var stringArray = ["hello world", "this is a test", "javascript is fun"];

var titleCasedArray = (() => {
    return stringArray.map(str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
})();

console.log(titleCasedArray);

//3)Sum of all numbers in an array

var sum_arr = [1, 2, 3, 4, 5];
var sum = 0;
var answer = () => {
    sum_arr.forEach(num => {
        sum += num;
    });
    console.log(sum);
};

answer();

//4)Return all the prime numbers in an array

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

var primeNumbers = numberArray.filter(num => isPrime(num));

console.log(primeNumbers);

//5)Return all the palindromes in an array

var strArray = ["madam", "hello", "racecar", "world", "level", "javascript"];

var isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

var palindromes = strArray.filter(str => isPalindrome(str));

console.log(palindromes);
