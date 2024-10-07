console.clear()
console.group("src/04-2/sample12.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

6. Function Invocation Operator

(1) If a variable saves 'function expression' (= anonymous function),
    You can invoke the function using the variable name tailed with \
    function invocation operator, '( arguments )'.
(2) 'Function Invocation' means the body of the function expression (= anonymous function) is executed. (***)
(3) If a function requires some parameters,
    You can declare that parameters in the function invocation operator, '()' :

                        * Function Expression *
            ---------------------------------------------------
                       * Parameter Declaration Section *
                       --------------------------------
                          * Declared Parameters *
                         --------------------------
    let f = function   (  param1,  param2  [, ... ]   )      {}       // Anonymous Function

`, '\n')


let functionExpression = function(a, b) { return a + b }    // `Lazy` Evaluation Applied.

// Using `function expression` saved in the variable,
// `Eager` evaluation applied and a `value` made.
let value = functionExpression(1, 2)                        // Function Invocation Operator, `( arguments )`

console.log(value, '\n')                                    // 3, `Eager` Evaluation Applied.




console.groupEnd()


