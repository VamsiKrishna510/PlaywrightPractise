let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["apple","Banana",`Orange`,'Mango'];

console.log("Number of array:",numbers);   //Number of array: [ 1, 2, 3, 4, 5 ]
console.log('Fruits Array:',fruits);   //Fruits Array: [ 'apple', 'Banana', 'Orange', 'Mango' ]

//length - attribute (Not a method)

console.log('Size of an Number Array:',numbers.length)
console.log('Sizeof an fruits array:',fruits.length)

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

numbers.push(6,7)
console.log("After push:",numbers)  //After push: [1, 2, 3, 4,5, 6, 7]

// 2. pop() - Removes the last element from an array
// Syntax: array.pop()
let lastFruit=fruits.pop()
console.log('After pop:',fruits)//After pop: [ 'apple', 'Banana', 'Orange' ]

console.log('before pop:',lastFruit)//before pop: Mango

// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let shiftNumber=numbers.shift()
console.log("After shift:",numbers)//After shift: [ 2, 3, 4, 5, 6, 7 ]
console.log("Before Shift:",shiftNumber)//Before Shift: 1

// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)

fruits.unshift("pineapple","strawberry",`kiwi`)
console.log("After unshift:",fruits)///After unshift: [ 'pineapple', 'strawberry', 'kiwi', 'apple', 'Banana', 'Orange' ]

// 5. concat() - Combines two or more arrays of same type
// Syntax: array.concat(array1, ..., varrayN)

let combinedArray=numbers.concat([8,9,10],[11])
console.log("Combined Array:",combinedArray) //Combined Array: [2, 3, 4,  5,  6,7, 8, 9, 10, 11]

// 6. slice() - Extracts a section of an array
// Sarting Index starts from Zero
// Ending Index will be exclussive. Ex: If 3 is Ending Index It will consider 2   (3-1=2)
// Syntax: array.slice(start, end)

let extraxtArray=fruits.slice(1,4)
console.log("Before Extract",fruits)//Before Extract [ 'pineapple', 'strawberry', 'kiwi', 'apple', 'Banana', 'Orange' ]
console.log("After extract:",extraxtArray)//After extract: [ 'strawberry', 'kiwi', 'apple' ]

let extractedArray2=fruits.slice(1,3)
console.log('After extraction:',extractedArray2)//After extraction: [ 'strawberry', 'kiwi' ]


// 7. splice() - Adds/removes elements from an array(From everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("Current elements available in fruits array:",fruits)//Current elements available in fruits array: [ 'pineapple', 'strawberry', 'kiwi', 'apple', 'Banana', 'Orange' ]
//Ex1: only removing
let afterSplice=fruits.splice(1,2)//// here 1 is startign index, 2 is represent how many elements to be removed
console.log("After splice the fruits array:",fruits)//After splice the fruits array: [ 'pineapple', 'apple', 'Banana', 'Orange' ]
console.log("removed elements:",afterSplice)//removed elements: [ 'strawberry', 'kiwi' ]

//Ex2: not removed but added

fruits.splice(1,0,"Grapes","Sapota")
console.log("Splice splice(1,0,'Grapes','Sapota')",fruits)//[ 'pineapple', 'Grapes', 'Sapota', 'apple', 'Banana', 'Orange' ]

//Ex3:  both remove and add

fruits.splice(1,2,"Amla","Blueberry")
console.log("After splice 1,2,'Amla','Blueberry'",fruits)//[ 'pineapple', 'Amla', 'Blueberry', 'apple', 'Banana', 'Orange' ]

// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement)   (or)  array.indexOf(searchElement,Starting Index)

let blueberryIndexOf=fruits.indexOf("Blueberry")
console.log("Index of selected fruit is ",blueberryIndexOf) // 2

let bananaIndex=fruits.indexOf("Banana")
console.log("Index of selected fruit is ",bananaIndex) // 4

let orangeIndex=fruits.indexOf("orange")
console.log("Index of selected fruit is ",orangeIndex) // -1

// 9. includes() - Checks if an element exists
//Returns True or false
// Syntax: array.includes(searchElement, fromIndex)

let fruitsIncludes=fruits.includes('apple')
console.log('Does fruit includes apple',fruitsIncludes) //true

let fruitsIncludes1=fruits.includes('dragonfruit')
console.log('Does fruit includes apple',fruitsIncludes1) //false

// 10. toString() - Converts array to string
// Syntax: array.toString()

console.log(numbers)
let convertString=numbers.toString()
console.log("Convert numbers to string",convertString)//2,3,4,5,6,7

let myArray:String[]=['w','e','l','c','o','m','e']
console.log(myArray)//['w', 'e', 'l','c', 'o', 'm','e']

let str:string=myArray.toString()
console.log(str)//w,e,l,c,o,m,e

//========  forEach(), map(), filter(), reduce(), some(), every() ==============