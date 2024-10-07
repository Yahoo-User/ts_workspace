console.clear()
console.group("src/05-1/sample8.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

8. "for...of" Statement

(1) ESNext & TypeScript provide "for...of" statement slight other tan "for...in" statement.

(2) "for...in" : traverse all "indexes" of an "Array".      <--- ***
                 traverse all "properties" of an "Object".  <--- ***

(3) "for...of" : traverse all "items" of an "Array".        <--- ***
                 *NOT* traverse an Object.                 <--- ***
(4) Syntax:

    for(let variable of Object) {
        ...
    } // for...of
`, '\n')


// 1. Traverse all indexes of an Array.

for( let name of [ "Jack", "Jane", "Steve" ] ) {
    console.log(name)       // Jack  Jane  Steve
} // for...of

// -----------------------------------------

// 2. Traverse an Object ?? ---> XX

// error ts(2549) - Type '{ name: string; age: number; }' is *NOT* an "array" type or a "string" type or 
//                  does not have a '[Symbol.iterator]()' method that returns an iterator.
/* 
    for( let what of { name: "Yoseph", age: 23 }) {     // XX
        ...
    } // for...of
 */

// -----------------------------------------

// 3. Anonymouse Interface with members declared by ',' or ';'.

// let obj: { name: string, age: number } = { name: "Yoseph", age: 23 }    // OK: by ','
let obj: { name: string; age: number } = { name: "Yoseph", age: 23 }    // OK: by semi-colon, ';'

console.log('\n\b', obj)    // { name: 'Yoseph', age: 23 }



console.groupEnd()



