console.clear()
console.group("src/05-1/sample9-1.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

9. Generic-way Types

(1) When making a function to manipulate an Array,
    It's convenient to present a type of items of an Array in the way of "T[]", 
    but *NOT* fixed item type like 'number[]'

(2) Generic Type: deals a type as a kind of a variable like 'T' (called, "Type Variable").  <--- ***

(3) Let's think of a method to apply TypeScript "generic type" to the JavaScript "function":

    - Example1: The following function gets the length of an Array in JavaScript.

        const arrayLength = (array) => array.length

    - Example2: To enable this function to apply to all Arrays have various item types,
                like number[], string[], IPerson[], Do present "Type Annotation" of an Array as "T[]":

        const arrayLength = (array: T[]): number => array.length

        But to do this, The compiler can know the meaning of a "T".
        That is, "T" should be known as a "Type Variable" to the compiler
        in the way of "Generic Function Style", Like the following:

        export const arrayLength = <T>(array: T[]): number => array.length
        export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0
`, '\n')


// 1. The following function gets the length of an Array in JavaScript.

const arrayLength = (array) => array.length
console.log(arrayLength([ 1, 2, 3 ]))               // 3

// -----------------------------------------

// 2. Apply Generic Type Variable, "T" to the JavaScript Function In TypeScript.

export
const arrayLength2 = <T>(array: T[]): number => array.length

// function (array) { return array.length; }
console.log('arrayLength2:\n\n\t%s', arrayLength2, '\n')
console.log(arrayLength2<number>([ 1, 2, 3 ]))      // 3

export
const isEmpty = <T>(array: T[]): boolean => ( arrayLength2<T>(array) == 0 )

// isEmpty: function (array) { return ( 0, exports.arrayLength )(array) == 0; }
console.log('isEmpty:\n\n\t%s', isEmpty, '\n')
console.log(isEmpty<number>([ 1, 2, 3, 4, 5 ]))     // false

// -----------------------------------------

// 3. `exports.<exportedModuleName>`.

// function (array) { return array.length; }
console.log('exports.arrayLength:\n\n\t%s', exports.arrayLength, '\n')

// function (array) { return (0, exports.arrayLength)(array) == 0; }
console.log('exports.isEmpty:\n\n\t%s', exports.isEmpty, '\n')



console.groupEnd()


