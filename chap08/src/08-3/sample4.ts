console.clear()
console.group("src/08-3/sample4.ts")

console.debug(`
******************************************
* 08-3. High-order Function & Curry      *
******************************************

1. What is a "High-Order Function" ?

(1) In TypeScript, A function is a "Function Expression" saved into the variable.

    - "Anonymous Function" == "Function Expression" == "First-class Function".      <--- ***
    - At this time, "Function Expression" is a kind of a "value".                   <--- ***
    - One "function" could be used as a "return value" of the other "function".     <--- *** 

(2) "High-order Function"
    
    - A "Function" returns "other Function".                                        <--- ***
        ① 1st-Order Function    : returns simply "a value".     (***)
            * Thus, if you want to receive a scalar, use "Function Call Operator, Symbol ()" "once".        (***)
        ② 2nd-Order Function    : returns "1st-Order Function". (***)
            * Thus, if you want to receive a scalar, use "Function Call Operator, Symbol ()" "twice".       (***)
        ③ 3rd-Order Function    : returns "2nd-order Function". (***)
            * Thus, if you want to receive a scalar, use "Function Call Operator, Symbol ()" "thirdly".     (***)

    - express in "Function Signature":
        ① export type FirstOrderFunc<T, R>    = (T) => R
        ② export type SecondOrderFunc<T, R>   = (T) => FirstOrderFunc<T, R>
        ③ export type ThirdOrderFunc<T, R>    = (T) => SecondOrderFunc<T, R>

(3) "Curry":
    
    - When invoking "High-Order Function",
      To use "Function Call Operator, Symbol ()" several times continuously is called, "Curry".

    - Example:

        add"(1)"        // When invoking "1st-Order Function" to get a return value(scalar)
        add"(1)(2)"     // When invoking "2nd-Order Function" to get a return value(scalar)
        add"(1)(2)(3)"  // When invoking "3rd-Order Function" to get a return value(scalar)
`, '\n')


// -----------------------------
// 1. Define "Type Alias" for High-Order Functions".
// -----------------------------

export
type FirstOrderFunc<T, R>   = (x: T) => R

export
type SecondOrderFunc<T, R>  = (x: T) => FirstOrderFunc<T, R>

export
type ThirdOrderFunc<T, R>   = (x: T) => SecondOrderFunc<T, R>


// -----------------------------
// 2. Using type aliases for "High-Order Functions", Declare functions.
// -----------------------------

export

// 2-1. "1st-Order Function Declared."
const inc: FirstOrderFunc<number, number>   = (x: number): number => x + 1       // OK

// const inc = (x: number) => x + 1                                                 // OK

/*
    inc: 
    
    function (x) {
        return x + 1;
    }  // "1st-Order Function"
*/
console.log("1. inc: %s", inc, '\n')

// -----------------------------------------

export

// 2-2. "2nd-Order Function Declared."
const add: SecondOrderFunc<number, number>  = 
    (x: number): FirstOrderFunc<number, number> => 
    (y: number): number => x + y                                                    // OK

// const add = (x: number) => (y: number) => x + y                                     // OK

/*
    add:

    function (x) {  // "High-Order Function"
        return function (y) { 
            return x + y; 
        }   // "1st-Order Function"
    } // "2nd-Order Function"
*/
console.log("2. add: %s", add, '\n')

// -----------------------------------------

export

// 2-3. "3rd-Order Function Declared."
const add3: ThirdOrderFunc<number, number> =
    (x: number): SecondOrderFunc<number, number>    =>
    (y: number): FirstOrderFunc<number, number>     =>
    (z: number): number                             =>   x + y + z                  // OK

// const add3 = (x: number) => (y: number) => (z: number) =>   x + y + z               // OK

/*
    add3:

    function (x) {  // High-Order Function
        return function (y) {   // High-Order Function
            return function (z) {
                return x + y + z;
            }   // 1st-order function
        } // 2nd-order function
    } // 3rd-order function
*/
console.log("3. add3: %s", add3, '\n')


// -----------------------------
// 3. Test code for "inc" - "1st-Order Function".
// -----------------------------

console.log("1.\t\b",
    inc(1),     // 2    - Returns a "Scalar".
    inc(2),     // 3    - Returns a "Scalar".
    inc(3),     // 4    - Returns a "Scalar".
    '\n'
)


// -----------------------------
// 4. Test code for "inc" - "2nd-Order Function".
// -----------------------------

console.log("2.")
console.log(
    "\t2-1. add(10): %s",           // function (y) { return x + y; }
     add(10),                   // Returns a "Function" => "1st-Order Function".
    '\n'
)
console.log(
    "\t2-2. add(10)(20): %s",       // 30
    add(10)(20),                // Returns a "Scalar".
    '\n'
)


// -----------------------------
// 5. Test Code for "add3" - "3rd-Order Function"
// -----------------------------

console.log("3.")
console.log(
    "\t3-1. add3(10): %s",          // function (y) { return function (z) { return x + y + z; }; }
     add3(10),                  // Returns a "Function" => "2nd-Order Function".
    '\n'
)
console.log(
    "\t3-2. add3(10)(20): %s",      // function (z) { return x + y + z; }
    add3(10)(20),               // Returns a "Function" => "1st-Order Function".
    '\n'
)
console.log(
    "\t3-3. add3(10)(20)(30): %s",  // 60
    add3(10)(20)(30),           // Returns a "Scalar".
    '\n'
)



console.groupEnd()



