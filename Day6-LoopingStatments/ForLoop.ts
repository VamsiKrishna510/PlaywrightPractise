// For Loop: A for loop is typically used when the number of iterations is known beforehand.

/* Syntax:

for(inilization; condition ; inc/dec)
{
 //statements;
}

*/

//Example 1:  print 1......10

for (let i=1 ; i<=10 ; i++)
{
    console.log(i)
}


//Example 2: print even numbers between 1---10

//Method1:
for(let i1=2;i1<=10;i1+=2)
{
    console.log(i1)
}

//Method 2

for(let i2=2;i2<=10;i2+=2)
{
    if(i2%2==0)
    {
    console.log(i2)
    }
}

// Example 3: 10 to 1
 for (let i3=10; i3>=1;i3--)
 {
    console.log(i3)
 }

 //Example4:
 /*
let i:number;  //global


for(i=1;i<=5;i++)
{
    console.log(i);  //1......5
}

console.log(i);//6

*/

//Example:
let i:number;

for(i=1;i<=5;i++);

console.log(i); //6
