console.clear()
console.group("src/04-1/sample4.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

4. Type Alias Using 'type' Keyword

(1) TypeScript provides 'type' keyword.
(2) 'type' keyword can use legacy types just changing the type names. (***)
(3) This feature called, 'Type Alias'.
(4) 'Function Type' == 'Function Signature' can prevent declaring incorrect functions
    other than the number and type of parameters, return type.
(5) Syntax: 
            type newTypeAliasName = legacyTypeName (***)
`, '\n')


// Parameter has a name but no type. Did you mean 'arg0: string'? ts(7051)
// (parameter) string: any
// type stringNumberFunc = (string, number) => void         // OK But *NOT* recommended

type stringNumberFunc = (a: string, b: number) => void   // OK : *Recommended*

// 'stringNumberFunc' only refers to a type, but is being used as a value here. ts(2693)
// console.log(stringNumberFunc)                            // XX

// -----------------------------------------

let f: stringNumberFunc = function (a: string, b: number): void {}      // OK
let g: stringNumberFunc = function (c: string, d: number): void {}      // OK
let h: stringNumberFunc = function () {}                                // OK

console.log(f)          // OK: [Function: f]
console.log(g)          // OK: [Function: g]
console.log(h)          // OK: [Function: h]

f("Yoseph", 23)         // OK
g("Trinity", 33)        // OK

// An argument for 'a' was not provided
h()                     // XX : error TS2554: Expected 2 arguments, but got 0.




console.groupEnd()


