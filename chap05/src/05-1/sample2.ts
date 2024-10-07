console.clear()
console.group("src/05-1/sample2.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

2. In JavaScript, Array is a Object

(1) In Javascript, "Array" is the "Object".     <--- ***
(2) Array is an instance of "Array" class.     <--- ***
    - Instance of an class is an object.
(3) Array provides some methods to be necessary to use an Array.
    - "Array.isArray" method notifies 
      whether an argument passed to a parameter is an "Array" or an "Object".

`, '\n')


// 1. Array.isArray Method

let a = [ 1, 2, 3 ]
let o = { name: "Yoseph", age: 23 }

console.log( Array.isArray(a), Array.isArray(o) )   // true: Array false: Object



console.groupEnd()


