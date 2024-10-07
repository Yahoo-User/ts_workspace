console.clear()
console.group("src/04-2/sample11.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

5. Evaluation

(1) When compiler meets a expression, it make a value by applying some 'evaluation'. (***)

(2) 2-types Evaluations:

    a. 'Eager' Evaluation - Immediately makes a value
        Example: If compiler meets a expression like '1 + 2', 
                 'Eager' evaluation applied and makes a value, 3.

    b. 'Lazy'  Evaluation
        Example1: If compiler meets a 'function expression' (== anonymous function)
                  like 'function (a, b) { return a + b}', It applys 'Lazy' evalution.
                  So evaluation defered until compiler don't know symbols, 'a', 'b'.

        Example2: If function invoked using a variable have function expression
                  with function invocation operator '( arguments '),
                  Then it applys 'Eager' evaluation to the 'function 'body' of the function 'expression'
                  and a value is made. (***)

`, '\n')


// 1. Eager Evaluation Example.

let sum = 1 + 2
console.log(sum)                                // 3, `Eager` Evaluation Applied.

// -----------------------------------------

// 2. Lazy Evaluation Example.

let add = function (a, b) { return a + b }      // [Function: add], `Lazy` Evaluation Applied.

console.log(add);
console.log( add(1, 2), '\n' )                  // 3, `Eager` Evaluation Applied.



console.groupEnd()


