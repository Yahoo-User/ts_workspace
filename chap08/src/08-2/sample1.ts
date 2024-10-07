console.clear()
console.group("src/08-2/sample1.ts")

console.debug(`
******************************************
* 08-2. Generic Function                 *
******************************************

1. TypeScript's Generic Function Sentences

(1) In TypeScript, "Generic Type" could apply to the
        ① "Function"
        ② "Interface"
        ③ "Class"
        ④"Type Alias"
    and
        written like "<T>", "<T, Q>".

    - Example:

        function g1<T>(a: T): void {}
        function g2<T, Q>(a: T, b: Q): void {}
            
(2) Like this, A function defined using "Generic Type", this function could apply to any types.

    - "Generic Type" is applied to the 'a' "parameter" in 'g1' function.
    - "Generic Type" is applied to the 'a' & 'b' "parameters" each with different types in 'g2' function.

    - Example1: "Generic Type" applies to the "Arrow Function".

        const g3 = <T>(a: T): void => {}
        const g4 = <T, Q>(a: T, b: Q): void => {}

    - Example2: "Generic Type" applies to the "Type Alias"
    
        // Lvalue is "Type Alias", Rvalue is "Function Signature". (***)

        // --------------
        // 1st. method      (*NOT* recommended)
        // --------------
        // "T", "Q in "Rvalue" is a parameter name with "any" type, NOT "Generic Type"    <--- ***

        type Type1Func<T>       = (T) => void
        type Type2Func<T, Q>    = (T, Q) => void
        type Type3Func<T, Q, R> = (T, Q) => R

        // --------------
        // 2nd. method      (*Recommended*)
        // --------------
        type Type1Func<T>       = (a: T) => void
        type Type2Func<T, Q>    = (a: T, b: Q) => void
        type Type3Func<T, Q, R> = (a: T, b: Q) => R
`, '\n')

        
// -----------------------------
// 1. The following code shows that 
//    "Generic Type" applies to the "Function" with "Function" keyword.
// -----------------------------

function g1<T>(a: T): void {}

/*
    g1:

    function g1(a) { }
*/
console.log("g1:\n\n%s", g1, '\n')

// -----------------------------------------

function g2<T, Q>(a: T, b: Q): void {}

/*
    g2:

    function g2(a, b) { }
*/
console.log("g2:\n\n%s", g2, '\n')

// -----------------------------------------

g1<string>("Yoseph")
g2<string, number>("Yoseph", 23)


// -----------------------------
// 2. The following code shows that "Generic Type" applies to the "Arrow Function".
// -----------------------------

const g3 = <T>(a: T): void => {}

/*
    g3:

    function (a) { }
*/
console.log('g3:\n\n%s', g3, '\n')

// -----------------------------------------

const g4 = <T, Q>(a: T, b: Q): void => {}

/*
    g4:

    function (a, b) { }
*/
console.log('g4:\n\n%s', g4, '\n')

// -----------------------------------------

g3<number>(23)
g4<string, number>("Yoseph", 23)


// -----------------------------
// 3. The following code shows that "Generic Type" applies to the "Type Alias".
// -----------------------------

// ts(7051) - Parameter has a name but no type. Did you mean 'arg0: T'?                     <--- ***
//            (parameter) T: any    // T is the name of a parameter, *NOT* "Generic Type"   <--- ***
// type Type1Func<T>       = (T) => void

// Lvalue is "Type Alias", Rvalue is "Function Signature". (***)
type Type1Func<T>       = (a: T)       => void
type Type2Func<T, Q>    = (a: T, b: Q)    => void
type Type3Func<T, Q, R> = (a: T, b: Q)    => R

// error ts(2314) - Generic type 'Type1Func' requires 1 type argument(s).
// const g5: Type1Func = (a) => {}         // XX

const g5: Type1Func<number> = (a: number) => console.log(a, '\n')
g5(100)                 // 100

const g6: Type2Func<string, number> = (a: string, b: number) => console.log(a, b, '\n')
g6("Yoseph", 23)        // Yoseph 23



console.groupEnd()



