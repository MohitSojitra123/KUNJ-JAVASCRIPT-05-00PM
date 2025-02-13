// 5. findIndex()
// Task:
// Given an array of numbers [7, 14, 21, 28, 35], use the findIndex() method to find the index of the first number that is divisible by 7 and greater than 20.

// Expected Output:
// 2 (because 21 is the first number that meets the condition)

let array1=[7,14,21,28,35];

let array2=array1.findIndex((e)=>{
    return e > 20 && e % 7 == 0;
});

console.log(array2);