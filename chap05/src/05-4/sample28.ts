console.clear()
console.group("src/05-4/sample28.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

4. Deep Copy And Shallow Copy

(1) "Copy" means that one variable's value assigned with the other variable's value
    in the programming languages. (***)

(2) There are two-type copys:
    a. "Deep" Copy
    b. "Shallow" / "Thin" Copy
    
(3) When implementing a "Pure Function" & processing "parameters",
    Function parameters should be copied through "Deep Copy" to keep their "immutable". <--- ***
    They are *NOT* changed then.

(4) "Deep Copy" makes 'original' variable "immutable", While "target" variable changed. <--- ***

(5) In TypeScript, "number" and "boolean" type copy act with "Deep Copy".               <--- ***

(6) But, "Object" and "Array" act with "Shallow Copy".                                  <--- ***
`, '\n')


// 1. Example of "Deep Copy".

let original: number = 1

let copied: number = original

// "original" variable's value *NOT* changed => "Deep Copy".
copied += 2

console.log(original, copied, '\n')                     // 1 3

// -----------------------------------------

// 2. Example of "Shallow Copy"

// Target Type for Copying is an Array.

const originalArray = [ 1, 2, 3, 4 ]

const shallowCopiedArray = originalArray
shallowCopiedArray[0] = 0

console.log(originalArray, shallowCopiedArray, '\n')    // [ 0, 2, 3, 4 ] [ 0, 2, 3, 4 ]



console.groupEnd()


