
// Variables are hoisted but initialized as undefined.
// 	Mutable
console.log(a1);
var a1=10;

// Variables are hoisted but not initialized (temporal dead zone).
// Mutable	
console.log(a2);
let a2=100;

// Variables are hoisted but not initialized (temporal dead zone).
// Immutable
console.log(a3);
const a3=1000;