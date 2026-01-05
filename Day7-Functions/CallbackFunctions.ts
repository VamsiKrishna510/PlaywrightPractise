//Callback Function: A callback function is a function that is passed as an 
// argument to another function and gets executed later

//Example-1
//Function that takes callbackfunction as an parameter

function greet1(name:string,callback:(message:string)=>void)
{
    console.log(name)
    callback("Hello call backfunction")
}
//callback function 
function showMessage (message:string)
{
    console.log(`hello callback function is implemented`)
}

//calling the functionby using callback

greet1("vamsi",showMessage)


//example-2

//Function that takes callbackfunction as an parameter

function sum(a:number,b:number,callback1:(Result:number)=>void)
{
    let res=(a+b);
    callback1(res);
}

//Callback

function displayResult(Result:number)
{
    console.log(Result)
}
sum(10,20,displayResult)