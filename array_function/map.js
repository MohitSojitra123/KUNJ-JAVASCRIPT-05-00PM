// 1. map()
// Task:
// Given an array of numbers [1, 2, 3, 4, 5], use the map() method to create a new array where each number is multiplied by 10.

// Expected Output:
// [10, 20, 30, 40, 50]

let array1=[1,2,3,4,5];

let array2=array1.map((e)=>{
    return e*10;
});

console.log(array2);
