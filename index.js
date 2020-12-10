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



// Larger array with hash table
const expenses = twoSumHash(csvArr, 2020);
console.log(expenses);
console.log(csvArr[expenses[0]] * csvArr[expenses[1]]);