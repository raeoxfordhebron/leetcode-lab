// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSums(nums, target){
    for(let i=0; i<=nums.length; i+=1){
        for(let n=0; n<nums.length; n++){
        if(nums[i] + nums[n] == target){
             return [i, n]
        }
    }
    }
}

console.log(twoSums([1, 2 ,3, 4, 5, 6, 7], 3));

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
//Given n, calculate F(n).

function fibo(number){
   let a = 0, b = 1, c = number;
   for(let i=2; i<=number; i++){
    c = a+b;
    a = b;
    b = c;
    }
    return c;
}

console.log(fibo(0));


let arr = [100, 102, 103, 104, 105, 106, 50]
const twoSum2 = function (numbers, target){
    for(let i=0; i<numbers.length; i+=1){ // loop through for the first index
        for(let j=i+1; j<numbers.length; j+=1){ // loop through for the second index (need the i+1 to move forward)
            console.log(`1st grabbed item: ${numbers[i]} 2nd item: ${numbers[j]}`) // making sure we grabbed the first index and the second index
            if(numbers[i] + numbers[j] === target){ // sum
                return [i, j]
            }
        }
    }
}

console.log(twoSum2(arr, 156))

const fib = function(n){
    let collection = [0, 1]
    for(let i=2; i<=n; i+=1){
        collection.push(collection[i-1] + collection[i-2]);
    }
    return collection[n]
}

console.log(fib(6))