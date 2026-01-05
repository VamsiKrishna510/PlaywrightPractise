//// Anonymous Function (Unnamed Function/Nameless Function)

/*
   An anonymous function is a function that does not have a name.
   Instead, it is assigned to a variable, which acts as its name.

   Syntax:

   let variable = function(parameters) 
   {
       // function body
   };

   variable(); // Calling the function
*/
//Example 1: Anonymous function
 
/* let msg=function():string
{
    return 'Hello typescript '
}
console.log(msg()) */


// Example 2: Anonymous Function with Parameters

let multiply=function(ax:number,by:number):number
{
    return ax*by;
}
console.log(multiply(50,30));