// 5️⃣ Mission: Robo-Shop Assistant (Nested If-Else)
// Doraemon ek futuristic shopping mall ka code optimize karna chahta hai.

// Input:
// User ka budget
// Ek list of items with prices
// Conditions:
// Agar budget sufficient hai, toh output: Shopping Successful!.
// Agar budget kam hai, toh suggest: Buy Fewer Items or Cheaper Alternatives!.


let user_budget=12000;

let item_1=300;
let item_2=600;
let item_3=900;
let item_4=1200;
let item_5=1900;


if(item_1+item_2+item_3+item_4+item_5<=user_budget){
      console.log("Shopping Successufull !...");
}else{
    console.log(" Buy Fewer Items or Cheaper Alternatives!.");
}