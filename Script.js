

// Print odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Anonymous function
const printOddNumbers = function(arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers(numbers);
//IIFE
(function(arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})(numbers);

// Convert all the strings to title caps in a string array
const strings = ['hello', 'world', 'javascript'];
// Anonymous function
const convertToTitleCaps = function(arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};
// IIFE
const titleCapsArray = (function(arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(strings);
console.log(titleCapsArray);

// Sum of all numbers in an array
// Anonymous function - Sum of all numbers in an array
const sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  console.log(sumArray(numbers));
// IIFE - Sum of all numbers in an array
(function(arr) {
console.log(arr.reduce((acc, curr) => acc + curr, 0));
})(numbers);
  
// Return all the prime numbers in an array
// Anonymous function 
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

const primeNumbers = function(arr) {
return arr.filter(num => isPrime(num));
};
console.log(primeNumbers(numbers));
// IIFE
(function(arr) {
console.log(arr.filter(num => isPrime(num)));
})(numbers);
  
// Return all the palindromes in an array
// Anonymous function 
const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  const palindromes = function(arr) {
    return arr.filter(word => isPalindrome(word));
  };
  console.log(palindromes(["level", "hello", "radar", "world"]));
// IIFE 
(function(arr) {
    console.log(arr.filter(word => isPalindrome(word)));
  })(["level", "hello", "radar", "world"]);
  
// Return median of two sorted arrays of the same size.
// Anonymous function 
const medianOfArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    if (length % 2 === 0) {
      return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  };
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  console.log(medianOfArrays(arr1, arr2));
  // IIFE 
  (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    if (length % 2 === 0) {
      console.log((mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2);
    } else {
      console.log(mergedArray[Math.floor(length / 2)]);
    }
  })(arr1, arr2);
  
// Remove duplicates from an array
// Anonymous function - Remove duplicates from an array
const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 6, 4]));
  // IIFE - Remove duplicates from an array
  (function(arr) {
    console.log(arr.filter((value, index, self) => self.indexOf(value) === index));
  })([1, 2, 3, 2, 4, 5, 6, 4]);
  
// Rotate an array by k times
// Anonymous function 
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  console.log(rotateArray(numbers, 3));
  // IIFE 
  (function(arr, k) {
    const rotations = k % arr.length;
    console.log(arr.slice(rotations).concat(arr.slice(0, rotations)));
  })(numbers, 3);
  

//Do the below programs in arrow functions.
// Print odd numbers in an array
const printOddNumber = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  printOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // Convert all the strings to title caps in a string array
  const ConvertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  };
  console.log(ConvertToTitleCaps(['hello', 'world', 'javascript']));
  
  // Sum of all numbers in an array
  const SumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
  console.log(SumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // Return all the prime numbers in an array
  const isprime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const PrimeNumbers = arr => arr.filter(num => isprime(num));
  console.log(PrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // Return all the palindromes in an array
  const ispalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  const Palindromes = arr => arr.filter(word => ispalindrome(word));
  console.log(Palindromes(["level", "hello", "radar", "world"]));
  
  // Median of two sorted arrays of the same size
  const MedianOfArrays = (arr1, arr2) => {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    if (length % 2 === 0) {
      return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  };
  console.log(MedianOfArrays([1, 3, 5], [2, 4, 6]));
  
  // Remove duplicates from an array
  const RemoveDuplicates = arr => arr.filter((value, index, self) => self.indexOf(value) === index);
  console.log(RemoveDuplicates([1, 2, 3, 2, 4, 5, 6, 4]));
  
  // Rotate an array by k times
  const RotateArray = (arr, k) => {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  console.log(RotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
  
  
  
