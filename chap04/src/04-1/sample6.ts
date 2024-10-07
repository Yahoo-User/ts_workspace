console.clear()
console.group("src/04-1/sample6.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

6. Optional Parameter

(1) Previouly 'optional property(?)' of the 'interface' mentioned.              (***)
(2) Like that, function also could have optional parameters tailed '?' symbol.  (***)
(3) These parameters tailed '?' symbol called, 'optional' parameters.           (***)
(4) 'Function Signature' have optional parameter is like the below:

    // optional type tailed with '?' symbol. (***)
    type OptionalArgFunc = (string, number?) => void
`, '\n')


console.log(`function fn(param1: string, param2?: number): void {}   // param2 is 'optional'.`)

// -----------------------------------------

console.log()

function fn(arg1: string, arg2?: number) { console.log(`arg1: ${arg1}, arg2: ${arg2}`) }

fn("Hello", 1)      // OK:  arg1: Hello, arg2: 1

// `arg2` is `undefined`. (***)
fn("Hello")         // OK: arg1: Hello, arg2: `undefined`

console.log()

// -----------------------------------------

type OptionalArgFunc = (string, number?) => void
const fn2: OptionalArgFunc =
        // 1. If return type is void, function body become `void` like the below. (***)
        // (name: string, age?: number) => void                         // OK

        // 2. Against `OptionalArgFunc` type (return type: void), function returns *value*.
        // (name: string, age?: number) => name + age                   // OK

        // 3. If age == `undefined` or `null`, then age is `falsy`. (***)
        (name: string, age?: number) => name + ( age ? age : "" )    // OK


console.log( fn2("Yoseph") )
console.log( fn2("Yoseph", 23) )



console.groupEnd()


