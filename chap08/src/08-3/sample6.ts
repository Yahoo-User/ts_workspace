console.clear()
console.group("src/08-3/sample6.ts")

console.debug(`
******************************************
* 08-3. High-order Function & Curry      *
******************************************

3. Closure

(1) What is "Closure ?

    - The "Persistent Effective Scope" whose the variables declared
      in the "Body" of a "High-Order Function".                                                     <--- ***

    - Example:  Declare a "High-Order(2rd) Function" named, "add".

                                      1. Return Type
                                    2. Function Signature
                                     ------------------
            function add(x: number): (number) => number {   // 1. Start "Outer" Scope.
                return function(y: number): number {        // 2. Start "Inner" Scope.
                    // In the "INNER" scope, Variable "x" is "*UNKNOWN*".
                    // Like this, "*UNKNOWN*" variables in the effective scope called,
                    // "Free Variable".                                                             <--- ***
                    return x + y                            // 3. Closure.                          <--- ***
                } // inner 1st-order function               // 4. End "Inner" Scope.
            } // outer 2nd-order function                   // 5. End "Outer" Scope.

    - In effective scope, A "*UNKNOWN*" variable" is called, "Free Variable".                       <--- ***

    - In TypeScript, If "Free Variables" exists, 
      It looks for their meanings(= "Variable Declarations" ) in the "OUTER" effective scope.       <--- ***

      If their meanings found in the "OUTER" scope, Code compiled normally.

(2) The reason why "Closure" is said, "A Persistent Effective Scope" ?

    - "Free Variables" *NOT* released from the memory, Even though "High-Order Function"
       invocation finished.                                                                         <--- ***

(3) The "Effective Scope" that all "Free Variables" are released from the memory is called, "Closure"
    When "High-Order Function" return a value(= "Scalar"), *NOT* "Partial (Applied) Function".      <--- **********

    - Example:

            // "Free Variables: x" *KEPT* in the memory => "Closure" created. (***)
            const add1 = add(1)

            // "Free Variables: x" *RELEASED* from the memory
            //  after a returned value saved into "result" variable. =>  => "Closure" destroyed. (***)
            const result = add1(2)

            console.log(result, '\n')   // 3, equals to "add(1)(2)"

(4) If implementing a "High-Order Function", "Closure" feature *required*.

    - Both TypeScript and all programming laugages supports "High-Order" Statements provide "Closure" feature.
    - In some programming languages express "Closure" like tied up "High-Order Function" + "Closure.

(5) "Closure" could be *NOT* released and persisted from the memory until the program terminated. 

    - Please refer to the example code 2.
`, '\n')


// -----------------------------
// 1. The following code shows that 
//    "High-Order Function" has "Free Variables" and "Closure".
// -----------------------------

// High-Order(2nd) Function
function add(x: number): (y: number) => number {    // outer scope
    console.debug("add(%d) invoked.", x)

    return function (y: number): number {           // inner scope
        console.debug("Anonymous function(%d) invoked.", y)
        // Variable, "x" is *UNKNOWN* in the "inner" scope.
        // Thus, "x" is "Free Variable". -> search for "x" in the "outer" scope.
        return x + y                                            // Closure of variable: "x", "y"
    } // Anonymous Function == Function Expression

} // add

console.log("1. add:\n\n%s", add)

// -----------------------------------------

// "Free Variables" are *NOT* released after "High-Order Function" call finished.

// "add"    : 2rd-Order
// "add(1)" : returns "1st-Order", "Partial (Applied) Function"
// "add1"   : 1st-Order
const add1 = add(1)     // "Free Variables: x" kept in the memory.

// "Free Variables: x" released from the memory
//  after a returned value saved into "result" variable.
const result = add1(2)

console.log(result, '\n')   // 3, equals to "add(1)(2)"


// -----------------------------
// 2. The following code show that
//    "Closure" *NOT* released & kept in/from the memmory until the program terminated.
// -----------------------------

const makeNames = (): () => string => {
    console.debug("* makeNames() invoked.")

    const names = [ "NAME_1", "NAME_2", "NAME_3" ]      // "Free Variable"
    let index = 0                                       // "Free Variable"

    return (): string => {  // "Free Variables" : index, names
        console.debug("\t* 1st-order, Anonymous Function() invoked.")

        if( index == names.length) {
            index = 0
        } // if

        console.log("\t\t+ index: %d", index)
        return names[index++]
    } // anonymous function == function expression.
} // makeNames

console.log("2. makeNames:\n\n%s", makeNames, '\n')

// -----------------------------------------

// "Free Variables in "Closure" could be *KEPT*, NOT release in/from the memory.    (***)

// Because that the "Partial (Applied) Function", "makeName" function, 
// Until the "makeName" keeps used, the "Closure" persistenly alived.   (***)
const makeName: () => string = makeNames()      // "makeNames()": 1st-order, Partial (Applied) Function

console.log(
    [ 1, 2, 3, 4, 5, 6, 7 ].map( n => makeName() )  // [ 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_1' ]
)



console.groupEnd()



