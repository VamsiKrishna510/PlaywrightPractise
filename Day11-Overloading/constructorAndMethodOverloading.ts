// Method Overloading and Constructor Overloading in TypeScript

//Constructor overloading 
class Calculator
{
constructor ();//default constructor 
constructor(a:number,b:number);

constructor(a?:number,b?:number)
{
    if(a!==undefined && b!==undefined)
    {
        console.log("constructor with two parameters ",(a+b))
    }
    else
    {
        console.log("Default constructor")
    }
}
//Method overloading

add(a:number,b:number):number;
add(a:number,b:number,c:number):number;

add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c;
    }
    return a+b;
}
}

//usage

let obj1=new Calculator();
let obj2=new Calculator(10,20);  


//Method overloading
console.log("Adding 2 numbers from s1:",obj1.add(10,20));
console.log("Adding 3 numbers from s1:",obj1.add(10,20,30));


console.log("Adding 2 numbers from s2:",obj2.add(10,20));
console.log("Adding 3 numbers from s2:",obj2.add(10,20,30));
