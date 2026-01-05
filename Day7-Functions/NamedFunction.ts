// Named Function: A function that is declared with a name.

/* Syntax

function functionName(parameter): returnType 
{
    // block of code
}

functionName();    // calling the function/invoking the function


*/

// Example 1: Named Function with no parameters and no return type

function displayMsg () : void
{
    console.log('welcome to playwright functions')
}
displayMsg()


// Example 2: Named function with parameters and return type

function AddOfTwoNumbers(x:number, y:number):number
{
    return x+y;
}
let res:number=AddOfTwoNumbers(10,20)
console.log(res)
   //or we can also declare as below
console.log(AddOfTwoNumbers(15,20))

//console.log(addNumbers(1,2,3)); // Compiler Error: Expected 2 arguments, but got 3.
//console.log(addNumbers(1)); // Compiler Error: Expected 2 arguments, but got 1.

//Example 3: Named function with  Rest parameters - same type
// Rest parameters dont restrict the number of values that you can pass to a function. 

function addNumber(...nums:number[])
    {
        let i;
        let sum:number=0;
        for (i=0;i<nums.length;i++)
        {
        sum=sum+ nums[i];
        }
         console.log("sum of the number",sum);
        
    }
    addNumber(10,20)
    addNumber(1,1,1,1,1,1,1,1,1,1,1,1,1,)
//Example 4: Named function with  Rest parameters - multiple types

function findElements(...elements:(number | string)[]):number
{
    return elements.length;
}

console.log(findElements(1,1,'vamsi',24,"teju"))
console.log(findElements(1,1,'vamsi',24,"teju",25,15))

// Example 5: Named function with Optional Parameters

/* function displayDetails(id:number, name:string, mailId?:string)

{
    console.log("ID is",id);
    console.log("Name is ",name)
    console.log("email id ",mailId)
}

displayDetails(1245,"vamsi","text@gmail.com"); */

//If the email id is optional and doesnt enter in the input parameters we 
// can excludeit by adding an if block to the optionalparameter

function findElement(...elements:(number | string)[]):number
{
    return elements.length;
}

console.log(findElement(1,1,'vamsi',24,"teju"))
console.log(findElement(1,1,'vamsi',24,"teju",25,15))

// Example 5: Named function with Optional Parameters

/* /* function displayDetail(id:number, name:string, mailId?:string)

{
    console.log("ID is",id);
    console.log("Name is ",name)
   
    if(mailId!=undefined){
      console.log("email id ",mailId)  
    }
} */

/* displayDetail(1245,"vamsi",'teju@gmail.com'); */

// Example 6: Named function with Default Parameters (Rate=0.50)

function calculateDiscount(price:number ,rate:number=0.50):void
{
    let discount:number=price*rate
    console.log("Discount is",discount);
}
calculateDiscount(10)