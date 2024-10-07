console.clear()
console.group("src/04-4/sample25-1.ts")

console.debug(`
*************************************************
* 04-4. First-Class Function                    *
*************************************************

3. High-order Function & Closure and Partial Function

(1) High-order Function
    - A function returns the 'other' function.                                              <--- ***
    - In functional languages, a function is a 'value' just called a 'function expression'. <--- ***
      So a function can return other function.
    - If no 'High-order function' existed, functional programming might be impossible.      <--- ***
      So 'High-order function' is the most important feature.
    - This *requires* "Closure" feature.                                                    <--- ***

(2) The general form of high-order function like the following :

    const add1 = (a: number, b: number): number => a + b                                // 'General' function

                               Function Signature
                              --------------------
    const add2 = (a: number): (number)  =>  number  =>  (b: number): number => a + b    // 'High-order' function
                              --------------------
                                   Return Type

(3) A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.   <--- ***

`, '\n')


// 1. 1-D (general) function
const add1D = (a: number, b: number): number => a + b
console.log('1. add1D: %s', add1D)

// -----------------------------------------

// 2. 2-D (high-order) function : returns 1-D (general) function
const add2D = (a: number): (b: number) => number => (b: number): number => a + b
console.log('2. add2D: %s', add2D, '\n')

// -----------------------------------------

// 3. Invoke High-Order Function
let returnValue = add2D(1)                      // returns 1-D function: (b: number) => number
console.log('returnValue: %s', returnValue)     // returnValue: function (b) { return a + b; }

// Type 'number' is not assignable to type '(b: number) => number'.ts(2322)
// let returnValue: (b: number) => number
// returnValue = add2D(1)(2)                    // XX

let returnVal = add2D(1)(2)
console.log(returnVal)                          // 3

// -----------------------------------------

// 4. Re-factor 2-D high-order function to understand more easily.
export
type NumberToNumberFunc = (b: number) => number

// export
// const add3 = (a: number): NumberToNumberFunc => {
//     // returns NumberToNumbeFunc type function. (***)
// } // add3

// export
// const add3 = (a: number): NumberToNumberFunc => {
//     // Nested Function
//     const _add: NumberToNumberFunc = (b: number): number => {
//         // return number type value. (***)
//     } // _add

//     return _add
// } // add3

export
const add3 = (a: number): NumberToNumberFunc => {
    // Nested Function
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b    // *** Closure ***
    } // _add

    return _add         // Returns a nested (1-D) function
} // add3 - High-Order Function (2-D)

console.log('\nadd3:\n%s', add3)


console.groupEnd()

