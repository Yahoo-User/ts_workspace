console.clear()
console.group("src/05-1/sample7.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

7. "for ... in" Statement

(1) ESNext JavaScript & TypeScript provide "for...in" statement to use "for" statement more easily.
(2) Target is a "Object".                                       <--- ***
(3) Array is also a Object. So it can be used for an Array.
(4) Traverse all "indexes" of an "Array".                       <--- ***
    But traverse all "properties" of an "Object".               <--- *** 
(5) Syntax:

    for(variable in Object) {
        ...
    } // for...in
`, '\n')


// 1. To traverse all `indexes` of an `Array`.

let names = [ "Jack", "Jane", "Steve" ]

for(let index in names) {   // For an Array.
    const name = names[index]
    console.log(`[${index}]: ${name}`)  // [0]: Jack [1]: Jane [2]: Steve
} // for...in

// -----------------------------------------

// 2. To traverse all `properties` of an `Object`.

let jack = { name: "Jack", age: 23 }

for(let property in jack) { // For an Object.
    console.log(`${property}: ${jack[property]}`)   // name: Jack age: 23
} // for...in



console.groupEnd()



