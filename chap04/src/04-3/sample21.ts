console.clear()
console.group("src/04-3/sample21.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

6. The difference between 'Expression' and 'Expression Statement'

(1) 'Expression'
    - 'Execution-oriented' Language (Like 'C') : 
        a. The 'part' of a 'Execution Statement'.               <--- ***
        b. Itself is *NOT* 'Execution Statement'.               <--- ***

        Example:
                let a = 1, b = 0

                // Here, 'a > b' condition of 'if' statement is a 'Expression'.
                // But,  'a > b' condition itself is *NOT* a 'Execution Statement'.
                if(a > b) console.log('a > b')

    - 'Expression-oriented' Language (Like 'TypeScript')  :
        a. Itself is the 'Expression Statement'.                <--- ***

        Example:
                let a = 1, b = 0

                // Here, 'a > b' condition itself is the 'Expression Statement'.    (***)
                const isGreater = (a: number, b: number): boolean => a > b

(2) As a result, 'Expression' term have two meanings.
    To distinguish from these two meanings, 'Expression' & 'Expression Statement' could be used.

`, '\n')


// XX : If commented the below statement,
let a = 1, b = 0

// 'If' condition, `a > b` : `Eager Evaluation` must be applied.    (***)

// So if two variables, 'a' & 'b' does *NOT* defined, The below error occurred.
// XX : Then, error TS2304: Cannot find name 'a', 'b'.
if(a > b) console.log('a > b')      // a > b

// 'a > b' `Expression Statement` in the function body, 'Lazy Evaluation' Applied.
const isGreater4 = (a: number, b: number): boolean => a > b



console.groupEnd()



