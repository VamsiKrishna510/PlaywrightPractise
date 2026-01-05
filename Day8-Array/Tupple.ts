/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */

// Example 1: Tuple with two values

let person:[string,number]=["john",102];
console.log(person[0]);
console.log(person[1]);
console.log(person)

// Example 2: Tuple with multiple values

let multiValueTupple:[string,number,boolean,null,number,string]//Declaring a tuple variable
multiValueTupple=['vamsi',104,true,null,143,"krishna"]//Initializing the tuple
console.log(multiValueTupple)
console.log(multiValueTupple[0])
console.log(multiValueTupple[3])

// Example 3: Iterating over a tuple using a traditional for loop

for(let i=0;i<multiValueTupple.length;i++)
{
    console.log(multiValueTupple[i])
}

// Example 4: Iterating using a 'for...in' loop (index-based iteration)

for (let value in multiValueTupple)
{
    console.log(multiValueTupple[value])
}

// Example 5: Iterating using a 'for...of' loop (value-based iteration)

for (let txt of multiValueTupple)
{
    console.log(txt)
}

// Example 6: Tuple Array (Array of Tuples)

let studentDetails:[string,number][]=[["vamsi",101],["lakshmi",1042]];
console.log(studentDetails[0])
console.log(studentDetails[1])