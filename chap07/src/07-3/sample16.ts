console.clear()
console.group("src/07-3/sample16.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

5. Exception Handling of "async" Function

(1) If a "exception" occurred in "async" function, the program terminated unnormally.       <--- ***

(2) To prevent a program termination when an exception occurred,
    *NOT* simply "fn()" function call mode,
    But handle an exception to invoke "Promise.catch" method in the "Promise" object
    which the "fn()" function returns.                                                      <--- ***

(3) But If raising a "Promise.reject" value in the "await" sentence,
    The program terminated anormally.                                                       <--- ***
`, '\n')


// 1. When an exception occurred,

// const asyncException1 = async () => {
//     console.debug("* asyncException1() invoked.", '\n')

//     throw new Error("TEST1")
// } // "async" function

// asyncException1()    // terminated anormally.

// -----------------------------------------

// 2. Handling an exception by using "Promise.catch" method.

// const asyncException2 = async () => {
//     console.debug("* asyncException2() invoked.", '\n')

//     throw new Error("TEST2")
// } // "async" function

// asyncException2().
//     catch((err) => console.log("err:\n\n%s", err, '\n'))

// -----------------------------------------

// 3. If raising a "Promise.reject" value in the "await" sentence,
//    The program also terminated anormally.

// const awaitReject1 = async () => {
//     console.debug("* awaitReject1() invoked.", '\n')

//     await Promise.reject(new Error("TEST3"))
// } // "async" function


// awaitReject1()       // terminated anormally.

// -----------------------------------------

// 4. As mentioned earlier, handle exception with "Promise.catch" method
//    to prevent program termination anormally.

const awaitReject2 = async () => {
    console.debug("* awaitReject2() invoked.", '\n')

    await Promise.reject(new Error("TEST4"))
} // "async" function


awaitReject2().catch( (err) => console.log("err:\n\n%s", err, '\n') )



console.groupEnd()


