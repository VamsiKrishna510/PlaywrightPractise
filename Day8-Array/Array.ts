/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.
*/

// Approach 1: Using array literal
let names:string[]=[];
names[0]="vamsi";
names[1]="Krishna" 
console.log(names)

    //or can be implementedas below

let names1:string[]=["vamis",'Krishna']
console.log(names1)
console.log(names[1]); // Output: Smith
console.log(names[4]); // Output: undefined (index out of range)

// Approach 2: Using the generic Array<T> type

let empNames:Array<string>=["vamsi","krishna","Lakshmi","teja"]//string data
let empId:Array<number>=[1,2,3,4,5,6]//number data
let data:Array<string|number>=["vamsi",101,"krishna",2004,"Lakshmiteja"]//number and string data
let mixedData:Array<any>=['vamsi',101,`test`,true,null]//mixed data all boolean number string and null

console.log(empNames)
console.log(empId)
console.log(data)
console.log(mixedData)

// Example 1: Iterating over an array using a traditional for loop

console.log('*********empnames*********')

for (let i=0;i<empNames.length;i++)
{
    console.log(empNames[i])
}

// Example 2: Iterating using the 'for...in' loop (indexes)

console.log("**************empIds***********")

for(let values in empId)
{
    console.log(values)
}

// Example 3: Iterating using the 'for...of' loop (values)

console.log("*********mixedData**********")

for (let values1 of data)
{
    console.log(values1)
}

//Example 4: Passing an Array to the function 
//Search an element in a n array using function 

function search(ele: number, arr: number[]):boolean
{
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]===ele)
        {
            return true
        }
    }
    return false;
}
let arr:number[]=[1,2,3,4,5,6,7,8,9,10]

console.log(search (10,arr))
console.log(search (100,arr))

//Example 5 : A functions takes an Array and returns an array

function capitalizedWords(arr:string[]):string[]
{
    let result:string[]=[]
    for (let i=0;i<arr.length;i++)
    {
        result[i]=arr[i].toUpperCase()
    }
    return result
}
let word:string[]=["my","NAME","is","Vamsi","KrishnA"]
console.log(capitalizedWords(word))

