console.clear()
console.group("src/04-4/sample24.ts")

console.debug(`
*************************************************
* 04-4. First-Class Function                    *
*************************************************

2. Nested Functions

(1) In "functional language", Function is a "expression" which assigned into a variable.    <--- ***
    So, We can implment a "Nested Functions" inside the function.                           <--- ***

(2) "Callback" function == "Function Expression" == "Anonymous" Function                    <--- ***

`, '\n')


//                                   Function
//                                   Signature
//                                ----------------
const calc = ( value: number, cb: (number) => void ): void => {
    console.debug("calc(value: %s, cb: %s) invoked.", value, cb)

    // let add = (a, b) => a + b                   // OK : Nested Function #1
    let add = (a: number, b: number) => a + b   // OK
    // let add: (a: number, b: number) => number = (a: number, b: number) => a + b     // OK

    console.log("\t+ 1st. Nested Function - add: %s     // Function Expression. (= Anonymous Function)", add)

    // -----------------------------------------

    // function mul(a, b) { return a * b }                  // OK : Nested Function #2
    function mul(a: number, b: number) { return a * b }  // OK
    // function mul(a: number, b: number): number { return a * b }     // OK

    console.log("\t+ 2nd. Nested Function - mul: %s     // Function-style Function.", mul)

    // -----------------------------------------

    let result = mul( add(1, 2), value )        // Using Nested Functions #1, #2
    console.log('\n', "\t+ Invoked Nested Functions 'add', 'mul'.")

    // -----------------------------------------

    cb(result)                                  // Invoke Callback Function
    console.log('\n', "\t+ Invoked Callback Function.", '\n')
} // calc


calc( 30, (result: number) => console.log('\n', `\t\t- The result is ${result}.`) )



console.groupEnd()


