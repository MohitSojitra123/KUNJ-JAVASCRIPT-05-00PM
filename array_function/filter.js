// 2. filter()
// Task:
// Given an array of numbers [12, 5, 8, 20, 3], use the filter() method to create a new array containing only numbers greater than 10.

// Expected Output:
// [12, 20]

let array1=[12,5,8,20,3];

array1.filter((e)=>{
    if(e>10){
        console.log(e);
    }
});