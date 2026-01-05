/////////////////////////////////////////////////

// Topic:  TypeScript Variables 

/////////////////////////////////////////////////////


//Syntax of variable declaration:
// keyword(var/let/const) variablename : datatype(optional) = value

//Uasge of different keywords:
//var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.



// =======================================
// 1. Scope : Function Scope vs. Block Scope
// =======================================

// Example 1:var (Functionalscope)

/* function varScope()
{
if (true)
{
    var msg = "Hello world"
}
console.log(msg)
}
varScope() */

// Example 2: let and const (Block Scope)

/* function blockScope()
{
    if(true){

    let msg='Hello world'
    let greet ="How are you"
    console.log(msg) // Allowed within the same scope
    console.log(greet)  // Allowed within the same scope
    }
    console.log(msg)  //Error: msg is not defined
    console.log(greet)  //Error: msg is not defined
}
blockScope() */

// Example 3: Scope Difference (Function vs. Block Scope)
/* 
function scopeDiff()
{
    if (true)
    {
        var num1 =10;
        let num2=20;
        const num3 = 30;
        console.log(num1)// Works: (Functional-scoped)
        console.log(num2)// Works: (block-scoped)
        console.log(num3)// Works: (block-scoped)
    }
     console.log(num1) //Works: (Functional-scoped)
     console.log(num2) // Error: num2 is not defined (block-scoped)
     console.log(num3) // Error: num2 is not defined (block-scoped)
}
scopeDiff() */

// =======================================
// 2. Value Assignment/Initialize at Declaration
// =======================================

// Example 1: var can be declared without initialization
/* var x;
console.log(x); */ // Output: undefined


// Example 2: let can also be declared without initialization
/* let y;
console.log(y); */ // Output: undefined


// Example 3: const must be initialized at declaration
// const z; // Error: Missing initializer in `const` declaration
/* const z=50; // Works
console.log(z); */



// =======================================
// 3. Re-declaration 
// =======================================

//var - allows the Re-declaration
//let and const - not allows the Re-declaration (making code safer)


// Example 1: var allows re-declaration
/* var city= "india"
var city="USA"  // var allows re-declaration in the same scope, which can lead to accidental overwriting.
console.log(city)

//Example2 : let (Not allowed Re-declaration)

let cityName="Canada"
//let cityName="Australia"//Error: Cannot redeclare block-scoped variable 'country'
console.log(cityName)

//Example 3: const (Not allowed Re-declaration)

const movieName="Avatar"
//const movieName="chirutha"  //Error: Cannot redeclare block-scoped variable 'planet'
console.log(movieName) */


// =======================================
// 4. Re-assignment/Reinitialization
// =======================================

//var and let - Re-assignment Allowed
//const  - Re-assignment Not allowed (Only constants allowed- cannot change the value)
//var example---// Example 1: var allows re-assignment

/* var indiaCrickerScore = '150'
var indiaCrickerScore="250"
console.log(indiaCrickerScore) //output=250

//Let example---// Example 2: let allows re-assignment

let id = 125
id = 52
console.log(id) //Output=52

//const Example--// Example 3: const does not allow re-assignment

const termId = 1254
//termId=2456 // Error: Assignment to constant variable
console.log(termId) */

// =======================================
// 5. Hoisting 
// ======================================


//Example1 : var (Hoisted with undefined) , let and const (Not Initialized)


//console.log(a)// Undefined (var is hoisted)
var aa =20
console.log(aa)

//console.log(b)// ReferenceError: Cannot access 'b' before initialization
let bb=50
console.log(bb)

//console.log(c)// ReferenceError: Cannot access 'c' before initialization
let c =150
console.log(c)