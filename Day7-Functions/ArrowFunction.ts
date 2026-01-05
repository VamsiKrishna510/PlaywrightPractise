///// Arrow Functions/Lamda Function

/* Lambda refers to anonymous functions in programming. 
   Lambda functions are a concise mechanism to represent anonymous functions. 
   These functions are also called as Arrow functions.


  There are 3 parts to a Lambda function.

  1.Parameters − A function may optionally have parameters
  2.The fat arrow notation/lambda notation (=>) − It is also called as the "goes to operator"
  3.Statements − represent the functions instruction set

  Syntax:

    let variable = (parameters) => 
    {
        // block of code
    }

    variable();

*/// Example 1: Arrow Function with No Parameters and No Return Type

let greetMsg =()=>
{
    console.log(`welcome to Arrow functions concept`)
}
greetMsg()

// Example 2: Arrow Function with Parameters and a Return Type
//(let addition)-"Storing in a variable"=((a:number,b:number))-"Parameters":(number)-"Returntype" =>


let addition=(a:number,b:number):number =>
{
    return a+b;
}
console.log(addition(10,20))

// Example 3: Arrow Function with Implicit Return

let add = (x:number,y:number):number => x+y
let mul = (x1:number,y1:number):number =>x1*y1

console.log(add(10,20))
console.log(mul(10,20))

// Example 4: Arrow Function with Optional Parameters

let displayDetails = (age:number,name:string,email?:string):void =>
{
    console.log("age is",age)
    console.log("Name is ",name)
    if(email!=undefined)
    {
    console.log("Email is",email)// if the email has not been passed to the
    //  function then this block returns undefined result and will not execute the code
    }
}
displayDetails(28,"vamsi","test@gmail.com")

// Example 5: Arrow Function with Default Parameters

let calculate = (price:number,rate:number=0.50):void =>
{
    let discount:number=price*rate
    console.log('discount amount is',discount)
}
calculate(100)

// Example 6: Arrow Function with Rest Parameters

let findElementsq = (...elements:(number|string)[]):number =>
{
return elements.length;
}
console.log(findElementsq(10,20,30,40,50,60))
console.log(findElementsq("Arrow","Function",'with','ssadwf' ,"Parameters"))
console.log (findElementsq(10,"vamsi","krishna",'panem'))