console.clear()
console.group("src/04-2/sample13.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

7. Anonymous Function

(1) In fact, 'function expression' is a other presence of the 'anonymous function' in almost languages.

    *** Function Expression == Anonymous Function ***

(2) You first must understand priorites between operators.
    - Function Invocation Operator, '( 1, 2 )' has 'very high' priority.                                (***)
    - Round bracket, '()' needs to notify the start & end of the function expression to the 'compiler'. (***)

    let val1 = ( function(a,b) { return a + b } ) (1, 2)
    console.log(val1)        // 3

(3) The following codes equals to the above codes to understand more easily.

    let val2 =                                  ① Lvalue, block-scoped variable.

    //              Rvalue
    //  ------------------------------------
    //       * Function Expression *             => 'Lazy' evaluation applied and evaluation defered.        (***)
    //    --------------------------------
        ( function (a, b) { return a + b } )    ②

    // ② '( function expression )' to notify 'start & end' of the 'function expression' to the compiler.    (***)

    // ③ Invoke the function using function invocation operator, '( arguments )'
    //    Compiler applys 'eager' evaluation to the 'body' of the 'function expression' and makes a value.   (***)
    //    This value assigned to the Lvalue variable.
        (1, 2)                                  ③

`, '\n')



console.groupEnd()

