// 8. some()
// Task:
// Given an array of numbers [3, 7, 11, 15, 19], use the some() method to check if at least one number in the array is even.

// Expected Output:
// false (because all numbers are odd)

let array=[3,7,11,15,19];

let array1=array.some((e)=>{
     return e%2==0;
});

console.log(array1);
