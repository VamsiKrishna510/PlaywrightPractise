/*
1) Premitive Data Types(Built-in)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void


2) Non-Premitive Data Types(Objects)
Array
Class
Function
Interface
Touple etc..

*/

// 1. NUMBER TYPE
// Represents both integers and floating-point numbers
console.log('************Number Data Type****************');
let age = 25;
console.log(age);
console.log(typeof(age));
let price:number = 295.65;
console.log(price);
console.log(typeof(price));
let contactNumber = 9642227474744744447;
console.log(contactNumber);
console.log(typeof(contactNumber));

// 2. STRING TYPE
// Represents textual data

/*
1. SingleQuote ('') 
2. DoubleQuote (" ")
3. Backtick(``)
*/

console.log('************String Data Type****************');

let firstName = "vamsi"
let lastName = 'Krishna'
let surName =  `Panem`

console.log('Hello',surName,firstName,lastName)


var res:string = `Hello ${surName}${firstName}${lastName}`
console.log(res)    

// 3. BOOLEAN TYPE
// Represents true/false values

console.log('************Boolean Data Type****************');

var isStudent:boolean = true;
const hasJob = false 

console.log("Is Student" ,isStudent)
console.log("Has any job",hasJob)

//4. NULL & UNDEFINED
// Special types for absence of value

console.log('************Null/Undefined Data Type****************');

let emptyValue:null = null;
let undefinedValue:undefined =undefined;

console.log(emptyValue)
console.log(undefinedValue)

/* let price:number; //undefined
console.log(price) */

// 5. ANY TYPE
//loses TypeScript benefits

console.log('************Any Data Type****************');

let value:any="Welcome";
console.log(typeof(value))

value=100;
console.log(typeof(value))

value=true;
console.log(typeof(value))

console.log(value);

// 6. UNION TYPE - Combine multiple types
console.log('************Union Data Type****************');

let id:number | string | boolean;

id=20
console.log(id)
console.log(typeof(id))

id='vamsi'
console.log(id)
console.log(typeof(id))

id= false
console.log(id)
console.log(typeof(id))

// 7. VOID TYPE
// Used for functions that don't return anything
//Example 1


console.log('************Void Type****************');
function show(): void
{
    console.log("Example of void return type");
}show()

//Example 2

function sum(x: number , y: any):void
{
  return x+y
}
let res1=sum(10,20)
console.log(res1)
