// Brute force solution - loops through each element
// and checks if there is a value that when added, equals the target
const twoSumBruteForce = (arr, target) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

// Hash table - one pass
const twoSumHash = (numbers, target) => {
    let numberIndex = new Map();
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let complement = target - num;

        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement);
            result[1] = i;
            return result;
        }
        numberIndex.set(num, i);
    }
    return result;
};

// Load in an arbitrary data set via csv to seed an array
const fs = require('fs');
const csvData = fs.readFileSync('numbers.csv').toString();
const csvArr = csvData.split('\n').map((n) => parseInt(n,10));


// Simple array with brute force 
console.log(twoSumBruteForce([1,2,3,4,5,6], 10));

// Larger array with hash table
console.log(twoSumHash(csvArr, 2794));

