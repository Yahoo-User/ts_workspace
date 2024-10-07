console.clear()
console.group("src/08-4/sample9.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

3. Analysis of "pipe" & "compose" Functions

(1) "pipe" function act with "variadic argument parameter": "pipe(f)", "pipe(f, g)", "pipe(f, g, h)".

    - ①  Thus, parameter shoud be declared like the following:

            export const pipe = (... functions)

    - ②  Then, It is difficult to determine "type" of variadic argument parameter, "functions".

        For instance, The "function signature" of "f", "g", "h are different each other:
      
            a. "f" : (number)      => string
            b. "g" : (string)      => string[]
            c. "h" : (string[])    => number

    - Like this, If each function have different "function signature",
      It's difficult to apply "Generic Type" to include all functions.

    - ③  Thus, "functions" parameter should be type of JavaScript's functions: "Function[]".

            export const pipe = (... functions: Function[])

    - ④  Because "pipe" function should return a "function" 
         through the combination of functions of "functions" Array, The "return" type should be "Function".

            export const pipe = (...functions: Function[]): Function

    - Then, The "arity" of "Result Function" of combination of functions by "pipe" is 1.
      So, Declare a function with a parameter "x".

      ⑤  But If This function is presented by "Generic Type",
         It returns a "function" whose function signature is "(T) => R" like the following:

            export const pipe = <T, R>(...functions: Function[]): Function => (x: T): (T) => R

    - This time, The step to implemet a function body.

      ⑥  If It assumes that current "functions" array have [ f, g, h ],
         A function body should be implemented to return a result, "h(g(f(x)))" like the following:

            export const pipe = <T, R>(...functions: Function[]): Function => (x: T): (T) => R => {
                // Current "functions" array : [ f, g, h ]

            } // pipe

    - The "Array.reduce" method that an Array provides is very important to implement function body.
      ⑦  If Parameter, "x" is set to the "initial value" of "Array.reduce" method,
         The "<callback>" should be just only implemented like the following :
      
            export const pipe = <T, R>(...functions: Function[]): Function => (x: T): (T) => R => {
                return functions.reduce( <callback>, x)
            } // pipe

    - In previous, "functions" array assume "[ f, g, h]".
      Thus, The change of parameters of "<callback>" of "Array.reduce" method is like the following:

        * <callback> : (prevValue, nextValue) => result

            x (Initial Value) ~> f ~> "f(x)" ~> g ~> "g(f(x))" ~> h ~> "h(g(f(x)))" ~> Returned

      ⑧  If last "h" of "functions" array assigned to the <callback> parameter, "func" of "Array.reduce",
         Last result value becomes "h(g(f(x)))", and this result returned.

(2) The "compose" function is the "opposite" of the order of paramemeters in "pipe" function.
    That is, "pipe(f, g, h)" equals to "compose(h, g, f)".

    - ①  Thus, "functions.reverse" method should be invoked at first in tuition.
       After that, The rest codes are be equals to the "pipe" codes I guess.

    - But, "compose" function should be a "Pure Function".

    - ②  So, "Deep Copy" of "functions" array using "Spread Operator" required like the following:

        export const compose = <T, R>(...functions: readonly Function[]): Function => (x: T): (T) => R => {
            const deepCopiedFunctions = [ ...functions ]
            deepCopiedFunctions.reverse()
            
        } // compose

    - In previous, "deepCopiedFunctions.reverse()" equals to the "functions" array of "pipe" function.

      ③  Using the rest code of "pipe" function, The "compose" function is completed like the following:
      
        export const compose = <T, R>(...functions: readonly Function[]): Function => (x: T): (T) => R => {
            const deepCopiedFunctions = [ ...functions ]    // For "Pure Function"

            // x : intialValue
            // Array.reduce( callback: (prevValue, nextValue) => accumulatedResult, intialValue )
            deepCopidFunctions.reverse().reduce( (value, func) => func(value), x )
        } // compose
`)



console.groupEnd()




