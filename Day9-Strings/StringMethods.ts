// Text value or a combination of charecters

//1.Single quote - Single Literal('single quote')
//2.Double Quote- Double litran ("Double quote")
//3. backtick (``) - String template - `When we try to use a string variable inside another sting value ${variable}`
// index in string starts with 0
//'' or "" or ``(backtick)
//Declartion of strings

let str1:string='this is a string using single quote';
let str2:string="This is a string using double quote";
let str3:string=`this is a stroing using back tick operation`;

console.log(str1)
console.log(str2)
console.log(str3)

//When to use back tick
let num:number=10  

console.log(`number is : ${num}`)
console.log("Number is:", num);  //10   //valid
console.log("Number is: ${num}"); //not valid
console.log('Number is: ${num}'); //not valid

///************String Methods**************

let str:string='Hello TypeScript!'

//1.Length- Finds the length of an array including the special charecters 
console.log("*****************LENGTH****************")
console.log("length of the given string is :",str.length)

//2.ToUpperCase()--Converts the given string into upper case
//ToLowerCase()---Conberts the given array in lower case 
console.log("*****************ToUpperCase && ToLowerCase***************")
console.log("Converting into uppercase:",str.toUpperCase())

console.log("Converting into lowercase:",str.toLowerCase())

//3.charAt(index)--it takes index as an paramter
//indexOf(string)--it takesstring as an parameter

console.log("*****************charAt(index) && indexOf(string)****************")

console.log("charecter at 4th index :",str.charAt(4))//o
console.log("index of charecter l:",str.indexOf("l"))//2

//4.substring  -- Extract some portion of an given array
//4. substring(starting index, ending index)
// ending index is exclussive
console.log("*****************subString(Starting Index, Ending Index****************")

console.log(str.substring(0,8))//Hello Ty

//5.includes()--Returns true or false (boolean)
//string value is case senstive
console.log("*****************Includes****************")

console.log(str.includes("o"))
console.log(str.includes("hello"))
console.log(str.includes("void"))
console.log(str.includes("orange"))
console.log(str.includes("i"))

//6.Startswith and endswith -Returns boolean value 

console.log('*********Startswith && Endswith***********')

console.log(str.startsWith('Hello'))
console.log(str.endsWith('!'))
console.log(str.endsWith('typescript'))

//7.Replace():Replace the string with original string

console.log('***************Replace()***************')

console.log(str.replace('TypeScript','World'))

//8.Split()-break the string into multiple parts based on the delimeter, returns an array

console.log('***************Split()***************')
//Ex1
let words:string[]=str.split("")
console.log(words)
//Ex2
let mystring:string="abc@gmail.com,xyz"

let arr:string[]=mystring.split(",")
console.log(arr)
console.log(arr[0])
console.log(arr[1])

//9;trim(),trimstart(),trimend()
console.log('***************trim() && trimstart() && trimend()***************')
mystring="   welcome to typeript   "
console.log(mystring)
console.log(mystring.trim())
console.log(mystring.trimStart())
console.log(mystring.trimEnd())

//10. concat()
console.log('***************Concat()***************')

let string1:string='Welcome'
let string2:string='to TypeScript'
let string3:string='And Java Script'
console.log(string1.concat(string2))
console.log(string1.concat(string2.concat(string3)))
console.log(string1+string2+string3)

// Concept of string immutability (immutable - cannot change original))

//num=10;

let res=num+5;
console.log(res); //15
console.log(num);;//10


str1="welcome";
let modifiedstring=str1.concat("to typecript");
console.log(str1); //welcome


//Multiline string with backtik ``

let multiline:string=`welcome
                      to typescript`;

console.log(multiline);

