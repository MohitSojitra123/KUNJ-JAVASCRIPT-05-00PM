class Teacher{
    
    constructor(name,subject,experience){
       this.name=name;
       this.subject=subject;
       this.experience=experience;
    }

    introduce(){
        console.log(`Teacher Name Is ${this.name} Teacher Subject Name ${this.subject} Teacher Experience ${this.experience}`);
    }

}


let Teacher1=new Teacher("RajSir","Python","4");
let Teacher2=new Teacher("KevalSir","C#","6");
let Teacher3=new Teacher("VimalSir","Advanced Java","12");


Teacher1.introduce();
console.log("---------------------------------");
Teacher2.introduce();
console.log("---------------------------------");
Teacher3.introduce();
console.log("---------------------------------");