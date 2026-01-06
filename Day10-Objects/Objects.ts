//object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:

// employee --name, desig, sal, dep
//              bonus(), getemdetails(), setdetails()


//student - name, sid,grade
            // getdetails(), setdetails()


// Different ways to create an oject in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)



// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.
let employe1:object={
    name:"John",age:30,
    job:"Engineer",
    salary:50000,
}   

let employee={
    name:"John",age:30,
    job:"Engineer",
    salary:50000,
    getDetails:function():string{
        return `${this.name} works as ${this.job} earning ${this.salary}`;
    }
}
console.log(typeof employee)//object

//Accessing object properties by using dot notation approach-1
console.log(employee.name, employee.age, employee.job, employee.salary);//John 30 Engineer 50000
console.log(employee.getDetails()); //John works as Engineer earning 50000
//Accessing objects properties by using bracket nottation approach 2
console.log(employee['name'],employee['age'], employee['job'], employee['salary']);// John 30 Engineer 50000
console.log(employee['getDetails']())//John works as Engineer earning 50000

//Modifying object values
employee.job="Manager"
employee.salary=70000
console.log(employee.getDetails())//John works as Manager earning 70000

// 2. Inline Type Object - We also define the datatype of the keys

let student:{name:string,age:number, StudentId:Number, grade:String

    getSummary :()=>string
}=
{
    name:'vamsi',age:25,
    StudentId:101,
    grade:'A',
    getSummary:function(){
        return `${this.name}is ${this.age} years old and scored a grade of ${this.grade}`
    }
}
console.log(student.getSummary())//vamsiis 25 years old and scored a grade of A

// Problem with Inline Type object: Need to repeat structure for every object

let student2:{name:string,age:number, StudentId:Number, grade:String

    getSummary :()=>string
}=
{
    name:'lakshmi',age:25,
    StudentId:1015,
    grade:'A+',
    getSummary:function(){
        return `${this.name}is ${this.age} years old and scored a grade of ${this.grade}`
    }
}
console.log(student2.getSummary())//lakshmiis 25 years old and scored a grade of A+

//==================================================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

type product={
    name:string,price:number,
    getInfo:()=>string
};

let book1:product={

    name:'Learn Java',
    price:400,
    getInfo : function()
    {
        return `${this.name} and ${this.price}`
    }
}
    let book2:product={

    name:'Learn python',
    price:500,
    getInfo : function()
    {
        return `${this.name} and ${this.price}`
    }
}
 let book3:product={

    name:'Learn AI',
    price:600,
    getInfo : function()
    {
        return `${this.name} and ${this.price}`
    }
 }

 console.log(book1.getInfo())//Learn Java and 400
 console.log(book2.getInfo())//Learn python and 500
 console.log(book3.getInfo())//Learn AI and 600

 // Example 2: Intersection Types

 type person ={personName:string, personAge:number}

 type contact={emailId:string,contactNumber:number}

 type candiate = person & contact &
 {
    getContactInfo : () =>string;
 }
 
let cand:candiate={

    personName:"Vamsi Krishna",personAge:25
    ,emailId:'vamsipkrishna@gmail.com',contactNumber:96548552145
    ,
    getContactInfo:function() {
        return `${this.personName} can be contacted at ${this.emailId} or ${this.contactNumber}`
    }
    }

    
    console.log(cand.getContactInfo())//Vamsi Krishna can be contacted at vamsipkrishna@gmail.com or 96548552145

    // ==================================================
// 4. Using the classes (JS ES16/TS)

class Person{ssn:string;personFirstName:string;personLastName:string

    constructor(ssn:string,personFirstName:string,personLastName:string)
    {
        this.ssn=ssn;
        this.personFirstName=personFirstName;
        this.personLastName=personLastName;
    }

    getFullName():string{
        return `${this.personFirstName} ${this.personLastName}`
    }
    getDetals():string{
        return `${this.ssn} and ${this.getFullName()}`
    }
}
//object creation

let person1=new Person('121','vamsi','krishna')
console.log(person1.getDetals())//121 and vamsi krishna

let person2=new Person('22222222','David','D');
console.log(person2.getDetals());//22222222 and David D

let person3=new Person('5555555','Scott','S');
console.log(person3.getDetals());//5555555 and Scott S