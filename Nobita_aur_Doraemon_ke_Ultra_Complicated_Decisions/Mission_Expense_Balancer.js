// Mission: Expense Balancer (Logical Operations)
// Nobita ka ek futuristic expense balancing system design karo.

// Input:
// Monthly Income
// Monthly Expenses (Food, Transport, Gadgets)
// Conditions:
// Agar total expenses > income, output: System Warning: Bankrupt in Future!.
// Agar total expenses < income, output: Future Secure!.
// Agar total expenses == income, output: Zero Savings: Future Risky!.

let Monthly_Income=120000;
let Food=20000;
let Transport=50000;
let Gadgets=40000;

if(Food+Transport+Gadgets>Monthly_Income){
    console.log("System Warning: Bankrupt in Future!");
}else if(Food+Transport+Gadgets<Monthly_Income){
    console.log("Future Secure!");
}else if(Food+Transport+Gadgets==Monthly_Income){
    console.log("Zero Savings: Future Risky!");
}