//step1: write a signatures of functions
//step2: implement a function
//step3: calling function


//Example1: Different parameter Types(data types)

function getInfo(Id:number):string
function getInfo(name:string):string

function getInfo(param : number | string):string
{
    if (typeof param==="number")
    {
       // console.log(`Id is ${param}`) 
        return(`Id is ${param}`)
    }
    else
    {
        //console.log(`name is ${param}`) 
         return(`name is ${param}`)
    }
}
//getInfo(20)
console.log(getInfo(20))
//getInfo("vamsi")
console.log(getInfo("vamsi"))

//Example 2:  Different Number of Parameters

function addition(a:number,b:number):number
function addition (a:number,b:number,c:number):number

function addition(a:number,b:number,c?:number):number

{
if(c!==undefined)
{
    return a+b+c;
}

    return a+b;
}
console.log(addition(10,20,15))


//Example 3: different return types

function processInput(ip:number):number;
function processInput(ip:string):string;

function processInput(ip:string|number):string|number
{
    if(typeof ip==="string")
    {
        return ip.toUpperCase();
    }
    else
        {
            return ip*2;
        }
}
//console.log(processInput(10))
console.log(processInput("My self vamsi krishnA"))


//Example 4: different no of parameters and different return types

function greet (name : string):string
function greet (age : number):number
function greet (isMarried: boolean):boolean

function greet(value:string|number|boolean):string
{
if(typeof value==="string")
{
    return `helo ${value}`
}
else if (typeof value=== "number")
{
    return `you are ${value} years old`
}
else
{
let res:string=value?"marrried":"single"
return res;
}
}

console.log(greet(true))