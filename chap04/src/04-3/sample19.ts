console.clear()
console.group("src/04-3/sample19.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

4. 'return' Keyword

(1) 'Execution' Statement do *NOT* return result value.  (***)

(2) For instance, 
    'function body' is consisted of 'compound' statements *NOT* returning 'evaluation' value.  (***)

    *** 'compound' statements == 'execution' statements.    <--- ***

    Example:

        function isGreater(a: number, b: number): boolean {
            a > b           <--- *** : Don't return 'evaluation' value
        } // isGreater

(3) 'Execution-oriented' language provides 'return' keyword to resolve the above problem.

        function isGreater(a: number, b: number): boolean {
            return a > b    <--- *** : Using 'return' keyword to return 'evaluation' value.
        } // ifGreater

    * But 'return' keyword can be used only in the 'function body'.     <--- ***
      This limit prevent the following wrong coding as you mis-understand syntax.

        // 'return' keyword used incorrectly, *NOT* in the 'function body'.
        if(return x > 0) x = 1

`, '\n')


// function isGreater(a: number, b: number) {
//     a > b
// } // isGreater

// Type 'void' is not assignable to type 'boolean'. ts(2322)
// let resultVal: boolean = isGreater(1, 2)     // XX

// -----------------------------------------

function isGreater(a: number, b: number) {
    return a > b
} // isGreater

let resultVal: boolean = isGreater(1, 2)        // OK
console.log(resultVal)                          // false

// -----------------------------------------

// Expression expected. ts(1109)
// if(return x > 0) x = 1                       // XX



console.groupEnd()



