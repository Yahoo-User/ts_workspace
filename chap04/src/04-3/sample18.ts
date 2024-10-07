console.clear()
console.group("src/04-3/sample18.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

3. Function Body & Compound Statements

(1) Function with 'function' keyword have to wrap up the function body by symbol, '{}'. (***)
    Here, symbol '{}' means 'Compound Execution Statements'.                            (***)

    So 'Function body' can be consisted with 'multiple'(= compound) statements.

        function f() {
            let x = 1, y = 2
            let result = x + y + 10
        } // f

(2) The variable scope in the compound statements :
    - 'Compound' statements limit the scope of a variable to the 'local' scope.     (***)
    - So, Event thougn two functions have the same variable in each function body,
      Each variable only limited in each function body, Each variable do *NOT* intercept each other. (***)

        function f() { let x = 1 }
        function g() { let x = 2 }

`, '\n')






console.groupEnd()


