let a:number=10 ,b:number=20

//Arithamatic operators
console.log("*******Arithematic operators ********")

console.log(a+b) //30
console.log(a-b)//-10
console.log(a*b)//200
console.log(a/b)//0.5
console.log(a%b)//10
console.log(a**2)//100

//Assaignment operators
console.log("*******Assaignment operators ********")

console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)
console.log(a**2)

//Relational/Comparison Operators
//Returns boolean- true/ false
//   >  <  >=  <=  ==  !=  ===(Strict equality)
console.log("*******Relational/Comparison operators ********")
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)

console.log(a===b)//strict equality


//Difference between ==(equaltiy)       ===(strict equality)

console.log("******** Difference between ==  === *********")
let num1:any=10;   //number type
let num2:any="10"   // string

console.log(num1==num2)
console.log(num1===num2)


//Logical Operators   &&  ||  !
// returns true/false (boolean)
// works between boolean variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true
//false     true    false       true           true
// false    false   false       false


console.log("******Logical Operators*****")

let b1:boolean=true
let b2:boolean = false;

console.log(b1 && b2)
console.log(b1 || b2)
console.log(!b1)
console.log(!b2)

//combination of logical & Relational operators

console.log("******combination of logical & Relational operators*****")

console.log (10>15 && 15>10)
console.log (10>15 ||15<20)
console.log(10==10 && 10==10)


