// Combine multiple array methods to solve this problem:

// Task:
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the filter() method to keep only even numbers, then use the map() method to square each of those numbers.

// Expected Output:
// [4, 16, 36, 64, 100]

// Filter =>  Map

let array1=[1,2,3,4,5,6,7,8,9,10];

let array2=array1.filter((e)=>{
   return e%2==0;
}).map((e)=>{
     return e*e;
});

console.log(array2);