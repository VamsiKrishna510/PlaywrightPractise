// =========  forEach(), map(), filter(), reduce(), some(), every() ==============


// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

// Ex 1: Get index of all the fruites along with value.

let fruits2:string []=["Mango","Banana","Strawberry","Kiwi","Sapota"]
console.log("Printing Fruits along with the index by using for -in")

for (let i in fruits2)
{
    console.log(i,fruits2[i])
}

console.log("Printing the fruits names by using for each loop")

fruits2.forEach(function(element , index)
{
console.log(`${index}, ${element}`);
}); 

//Using arrow function

console.log("Using Arrow Function")

fruits2.forEach((element , index)=>
{
//console.log(`${index}, ${element}`);//Print the values as string
console.log(index,element)////Printing values directly
});

//// Ex 2: Print all fruite names in uppercase:

console.log("Printing all the fruits2 name in upper case");

fruits2.forEach((elements)=>
{
    console.log(elements.toUpperCase())
});


// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})

// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers2:number[]=[1,2,3,4,5]

let squareNumber=numbers2.map((num)=>
{
    console.log(num*num)
})

//squaredNumbers

let diffApproachSquaredNumber=numbers2.map((num)=>num*num)
console.log(diffApproachSquaredNumber)

//Ex2: Double each number  [1,2,3,4,5] --->  [2,4,6,8,10]

let doubleNumber=numbers2.map((num1)=>num1*2)
console.log(doubleNumber)
            //or
numbers2.map((num3)=>
{
    console.log(num3*2)
})


// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.
// Syntax: array.filter(function(currentValue, index, array){})

// Ex1: Get the only even numbers from an array

let evenNumber=numbers2.filter((num4)=>
{
    return num4%2===0;
})

console.log(evenNumber)

// Ex2: Get the only numbers greater than 3 from an array
let greaterNumber=numbers2.filter((num)=>num>3)
console.log(greaterNumber)

// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed
//Ex1: Get the total (sum) of all the elements in an array
// Using Traditional loop

let total=0;
for(let i=0;i<numbers2.length;i++)
{
    total=total+numbers2[i]
}
console.log(total)

//or

let reducedResult=numbers2.reduce((total,element)=>
{
    return total+element
})
console.log(reducedResult)


// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})

let positiveNumber=numbers2.some((element)=>element>0)
console.log(positiveNumber)

let negativeNumber=numbers2.some((element)=>element<0)
console.log(negativeNumber)

// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})
//EX:1 Even number
let evenNumber1=numbers2.every((element)=>element%2==0)
console.log(evenNumber1)
//All numbers greater than 1

let greaterNumber1=numbers2.every((element1)=> element1>=1)
console.log(greaterNumber1)

//All numbers are positive or not

let allPositiveNumbers=numbers2.every((num)=>num>0)
console.log(allPositiveNumbers)