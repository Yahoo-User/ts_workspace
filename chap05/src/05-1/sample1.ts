console.clear()
console.group("src/05-1/sample1.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

1.'[]' Short-hand Sentence Structure

(1) Using "Array" class, Making an Array is slightly complicated.
(2) So JavaScript provides short-hand sentence structure with Symbol, "[]".

    - Example: Using [] short-hand sentence to make an Array

        let numbers = [ 1, 2, 3 ]
        let strings = [ 'Hello', 'World' ]
        
        console.log(numbers, strings)   // [ 1, 2, 3 ] [ 'Hello', 'World' ]
`, '\n')


// let numbers = [ 1, 2, 3]                        // OK
let numbers: number[] = [ 1, 2, 3 ]             // OK

// function Array() { [native code] } -> Constructor Function
console.log('%s', numbers.constructor)
console.log('%s', numbers.constructor.name)             // Array : Constructor Function Name

console.log(numbers); console.table(numbers)            // [ 1, 2, 3 ]

// -----------------------------------------

// let strings = [ "Hello", "World" ]              // OK
let strings: string[] = [ "Hello", "World" ]    // OK

console.log('\n\b', strings); console.table(strings)    // [ 'Hello', 'World' ]




console.groupEnd()


