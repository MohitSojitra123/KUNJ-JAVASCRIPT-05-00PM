// Mission: Logical Number Sorter (Complex Array Programs)
// Ek futuristic number sorting system likho jo:

// Ek array of numbers input lega (minimum 5 numbers).
// Conditions:
// Agar number odd hai, toh uska cube calculate karo.
// Agar number even hai, toh uska square calculate karo.
// Final sorted array return karo (descending order mein).

let array=[100,30,20,50,40,70,60,90,80,10];

for(let i=0; i<array.length; i++){
    if(array[i]%2==0){
       array[i]=array[i]*array[i];
    }else{
       array[i]=array[i]*array[i]*array[i];
    }
}

console.log(array);

let n = array.length;

for (let i = 0; i < n - 1; i++) {
 
    for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);