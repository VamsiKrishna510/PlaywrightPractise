class person
{
    public name:string;
    protected age:number;
    private ssn:number;
    constructor(name:string,age:number,ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }
    public displayPublic()
    {
        console.log(`Name:${this.name}`);
    
        console.log(`Age:${this.age}`);
    
        console.log(`SSN:${this.ssn}`);
    }   
}

//child class

class Employee extends person   
{
    private empId:number;
    constructor(name:string,age:number,ssn:number,empId:number)
    {
        super(name,age,ssn);
        this.empId=empId;
    }
    public showEmployeeDetails()
    {
        console.log(`Name:${this.name}`);
    
        console.log(`Age:${this.age}`);
        //console.log(`SSN: ${this.ssn}`); // Error: Property 'ssn' is private and only accessible within class 'person'.
        console.log(`Employee ID:${this.empId}`);
    }
}
let emp=new Employee("John",30,123456789,101);
    emp.showEmployeeDetails();
    
console.log(emp.name); // accessible 
//console.log(emp.age); // Not accessible 
//console.log(emp.ssn); // Not accessible