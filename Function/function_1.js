function outerfunction(){
     let name="Om";
     function innerfunction(){
         return  `Name Is ==> ${name}`;
     }
     return innerfunction();
}


console.log(outerfunction());