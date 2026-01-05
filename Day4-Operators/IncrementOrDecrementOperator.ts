//Increment or Decrement operator 
// Increment   ++
// Decrement  --
console.log("******Increment operator******")
let x:number=10;
//x++   //post increment    //x=x+1;
++x;
console.log(x)  //11

let res:number=x++;
console.log(res) //11
console.log(x)  //12

let res1:number=++x;
console.log(res1) //13
console.log(x)  //13

console.log("******Decrement operator******")
let y:number=10;
//x--   //post decrement    //x=x-1;
--y;
console.log(y)  //9

let res2:number=y--;
console.log(res2) //9
console.log(y)  //8

let res3:number=--y;
console.log(res3) //7
console.log(y)  //7


