// var 
// Functioin Scope

function print_age(){
    var age=19;
    console.log(age);
    
    // Allowed within the same scope	
    // Re-assignment Allowed
    var age='raj';
    console.log(age);

}
print_age();

// Not Print Because Var Is Function Scope Not Used In OutSide Of The Function... 
// console.log(age);

// Let
// Block Scope

{
    let a1=20;
    console.log(a1);

    // Not allowed within the same scope
    //    let a1=100;
    //    console.log(a1);

    // Re-assignment Allowed
    a1=45;

{
    let a1=200;
    console.log(a1);
}

}

// Not Print Because Let Is Block Scope Not Used In OutSide Of The Block Scope... 
// console.log(a1);


// const

const b1=21;
console.log(b1);

// Re-assignment Not allowed
// b1=22;
// console.log(b1);


