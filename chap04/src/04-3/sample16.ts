console.clear()
console.group("src/04-3/sample16.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

1. Execution Statement & Expression Statement

(1) For a long time, Programming language distinguished
    from 'Execution-Oriented' language and 'Expression-Oriented' language.      (***)

(2) Representational 'Execution-Oriented' Language    : C
    Representational 'Expression-Oriented' Language   : Scala

(3) JavaScript 'ES5'    -> 'Execution-Oriented' Language.

(4) ESNext & TypeScript -> Simultaneously supports both 'Execution-Oriented' and 'Expression-Oriented' Language. 
                        -> So called, 'Multi-Paradigm Language'. (***)

(5) 'Execution'-Oriented Statements (= 'Statements')
    - In programming lanugage, this means that 'statements' are executed in the CPU.    (***)
    - The result of statements are *NOT* returned.                                      (***)
    - If you want the result of statements, You must use 'return' keyword.              (***)

(6) 'Expression'-Oriented Statements
    - These statements are also executed in the CPU.
    - But These statements return the value of execution without 'return' keyword.      (***)

`, '\n')


// 1. `Assignment` statement of a variable is representationally `Execution`-oriented statement.

let x

console.log('1.', x, typeof x)      // 1. undefined undefined

x = 1                               // Enough

console.log('2.', x, typeof x)      // 2. 1 number

// -----------------------------------------

let x2 = 10

// 2. If CPU evaluates `x2 > 0` and do *NOT* returns a value, 
//    this 'if' statement doesn't work correctly.                      (***)

    if(x2 > 0)                  // OK
        x2 = 1

// -----------------------------------------

// 3. Then if codes are like the below, Coding must be very complicated.    (***)

    // if( return x2 > 0 )       // XX
    //     x2 = 1

// -----------------------------------------

// 4. Even though it excuted in the CPU equally,
//    Sometime, We need the `executed` statement returns the `result` value
//    without `return` keyword like `x > 0`.

//    We called this statement, especially * `Expression Statement` *.      <--- ***

// -----------------------------------------

// 5. `Execution-Oriented` languages called 'if statement', as `if execution statement`.  (***)
//    On the other hand, `Expression-Oriented` languages called, `if expression`.         (***)

//    As `if expression` returns result value, the following statement is possible
//    but *NOT* in the `Execution-Oriented` languages:

    // let a = 10, b = 5
    // let returnValue = if(a > b) a else b  // XX : Syntax Error



console.groupEnd()

