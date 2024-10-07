console.clear()
console.group("src/04-3/sample20.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

5. Implementing Arrow Function With 'Expression-oriented' Statement Style 

(1) If converting previoud 'function-style' function into the arrow function ;

    const isGreater = (a: number, b: number): boolean => { return a > b }   // 'Execution-style'

(2) But 'ESNext' & TypeScript provides syntax to make more concisely arrow function ;

    // 'Function Body' can be implemented as a 'Expression Statement' style.                    (***)
    // 'Expression Statement' returns 'evaluation' value, so 'return' keyword 'abbreviated'.    (***)

    const isGreater = (a: number, b: number): boolean => a > b              // 'Expression-style'

(3) The 'return' Keword can be used only in the 'Compound Statements'.  (***)
    (= 'Execution Statements')

    // Syntax Error because of the above 'return' keyword limit.
    const isGreater = (a: number, b: number): boolean => return a > b       // XX

    // That is, 'return' statement can be used only inside the symbol, '{}'
    // and should be 'compound-style statement';

    const isGreater = (a: number, b: number): boolean => { return a > b }   // OK

`, '\n')


// 1. The 'return' keyword can only be used inside the symbol, `{}`
//    and should be 'execution-style' statement.

const isGreater1 = (a: number, b: number): boolean => { return a > b }      // OK : execution-style
console.log(isGreater1(100, 200))       // false

// -----------------------------------------

// 2. Function Body implemented as a 'Expression-style' and 'return' keyword abbreviated.

const isGreater2 = (a: number, b: number): boolean => a > b                 // OK : expression-style
console.log(isGreater2(100, 200))       // false

// -----------------------------------------

// 3. The 'return' keword can be used only inside the symbol, `{}`.

// const isGreater3 = (a: number, b: number): boolean => return a > b          // XX : '{' expected. ts(1005)

const isGreater3                                                            // OK

// type compareTwoNumbers = (n1: number, n2: number) => boolean 
// const isGreater3: 
        // (a: number, b: number) => boolean                                   // OK : 1. Function Signature
        // compareTwoNumbers                                                   // OK : 2. Type Alias
        // Function                                                            // OK : 3. Built-in Function Class Type

        // This expression is not callable. Type '{}' has no call signatures. ts(2349)
        // object                                                              // OK??: But *NOT* callable. (***)

        // = (a: number, b: number): boolean => { return a > b }               // OK : execution-style
        // = (a: number, b: number): boolean => (a > b)                        // OK : expression-style
        = (a: number, b: number): boolean => a > b                        // OK : expression-style

console.log(isGreater3(100, 200))



console.groupEnd()



