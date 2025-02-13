class student{
   
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }

    getDetail() {
       console.log(`Student Name Is ${this.name} Student age Is ${this.age} Student Course Is ${this.course}`);    
    }

}


console.log("----------------------------");
let stu1=new student("Mohit",18,"BCA");
console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.course);
console.log("----------------------------");



let stu2=new student("Rohit",21,"BAMS");
console.log(stu2.name);
console.log(stu2.age);
console.log(stu2.course);
console.log("----------------------------");


let stu3=new student("Jeel",20,"B.Tech");
console.log(stu3.name);
console.log(stu3.age);
console.log(stu3.course);
console.log("----------------------------");

console.log("----------------------------");
console.log("Method Called");
console.log("----------------------------");
stu1.getDetail();
console.log("----------------------------");
stu2.getDetail();
console.log("----------------------------");
stu3.getDetail();
console.log("----------------------------");