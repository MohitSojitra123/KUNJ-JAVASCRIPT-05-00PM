// Mission: Grade Analyzer (Advanced Range Programs)
// Ek program likho jo futuristic students ke grades ko analyze kare.

// Input: Marks (0-100)
// Conditions:
// Agar marks divisible by 5 aur 10 hain, toh output: Elite Performer.
// Agar marks 90-99 ke beech hain, toh output: Top Futuristic Student.
// Agar marks 70-89 ke beech hain, toh output: Almost There!.
// Agar marks 50-69 ke beech hain, toh output: Keep Working Hard!.
// Agar marks 50 se kam hain, toh output: Back to Basics!.


let Marks=54;

if(Marks%5==0 && Marks%10==0){
      console.log("Elite Performer");
}else if(Marks>=90 && Marks<=99){
      console.log("Top Futuristic Student");
}else if(Marks>=70 && Marks<90){
      console.log("Almost There!");
}else if(Marks>=50 && Marks<70){
     console.log("Keep Working Hard!"); 
}else{
    console.log("Back to Basics!");
}