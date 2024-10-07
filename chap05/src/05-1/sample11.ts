console.clear()
console.group("src/05-1/sample11.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

11. Function Signature of Generic Function

(1) In chap04, Function Type (== Function Signature) described.

(2) TypeScript acquires that in some cases, you should specify a "Variable Name"
    at the 'parameter declaring section' of the "Function Signature".             <--- ***

    - "Generic function" also have same problems.   (***)
    - Problem resolution is the same.               (***)
`, '\n')


// error ts(7051) - Parameter has a name but no type. Did you mean 'arg0: number'?
// (parameter) number: any  (***)
// const error1 = (cb: (number) => number): void => {}         // XX

const fixed1 = (cb: (a: number) => number): void => {}      // OK
console.log('fixed1: %s', fixed1, '\n')     // fixed1: function (cb) {}

// -----------------------------------------

// error ts(7051) - Parameter has a name but no type. Did you mean 'arg0: number'?
// error ts(2300) - Duplicate identifier 'number'.  (***)
// (parameter) number: any  (***)
// const error2 = (cb: (number, number?) => number): void => {}        // XX

// You should specify a "Variable Name"
// at the parameter declaring section of the "Function Signature".
const fixed2 = (cb: (a: number, b?: number) => number): void => {}
console.log('fixed2: %s', fixed2, '\n')     // fixed2: function (cb) {}

// -----------------------------------------

// '?' at the end of a type is not valid TypeScript syntax.   <--- ***

// warning ts(7051) - Parameter has a name but no type.
//                    Did you mean 'arg0: T', 'arg1: number'?

// (parameter) T: any
// (parameter) number: any
// const error3 = <T>(cb: (T, number?) => number): void => {}           // XX

const fixed3 = <T>(cb: (a: T, b?: number) => number): void => {}        // OK
console.log('fixed3: %s', fixed3, '\n')     // fixed3: function (cb) {}



console.groupEnd()


