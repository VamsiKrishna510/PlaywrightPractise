//Conditional Statments
//if statement

/* Syntax:
        if(condition)
        {
        //statements
        }
 */

// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

let age:number=20;

if(age>=15)
{
    console.log("eligible to vote")
}

//if else statement

/* Syntax:
    if(condition)
        {
            Statements;
        }
    else
        {
            Statements
        }

*/

//Example 2:  Print number is even is odd

let num:number=10;
if(num%2==0)
{
    console.log(`${num} even number`)

}
else
{
    console.log(`${num} Odd number`)
}

//Nested if-else Statement
/* Syntax: 
if(condition 1)
{
    statements;
}
else if(condition 2)
{
    statements;
} 
else
{
    statements;
}
    */


//Example3: Depending on the marks, display appropriate grade.

let marks:number=100

if(marks>=90 && marks<=100)
{
    console.log("Grade A")
}
else if(marks>=75 && marks<90)
{
    console.log('Grade B')
}
else if (marks>=60 && marks <70)
{
    console.log(`Grade c`)
}
else 
{
    console.log(`Nill grade`)
}

//Example 4: Browser selection

let browser:string='chrome';

if (browser=='chrome')
{
    console.log('Selected chrome Browser')
}
else if (browser=='edge')
{
    console.log('SelecteEdge Browser')
}
else if (browser == 'safari')
{
    console.log('You have selected safari browser')
}
else
    {
        console.log('None of the browserhas been selected')
}

//switch-case Statement
/* Syntax:

  switch ( expression ) {
   case value1:
       // statement 1
       break;
   case value2:
       // statement 2
       break;
   case valueN:
       // statement N
       break;
   default: 
       // 
    }
*/

//Example 5 : Depending on the value of day, print the corresponding day of the week.

let value:number = 5;
switch(value)
{
    case 1 :
    console.log('Selected Monday'); 
    break;

    case 2 :
    console.log('Selected tuesday'); 
    break;

    case 3 :
    console.log('Selected wednesday'); 
    break;

    case 4 :
    console.log('Selected thursday'); 
    break;

    case 5 :
    console.log('Selected Friday'); 
    break;

    default : console.log('none of the week is selected')
}

//Example:2
//Including expression 

let x=50 ,y=30

switch(x-y)
{
    case 0 : console.log('result 10'); break;
    case 10 : console.log('result 5'); break;
    case 20 : console.log('result 20'); break;
    case 3 : console.log('result 15'); break;
    default: console.log('None')
}
