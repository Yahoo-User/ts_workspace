console.clear()
console.group("src/05-5/index.ts")

console.debug(`
*************************************************
* 05-5. Understanding Tuple                     *
*************************************************

0. Background

(1) There is a "Tuple" type in some programming languages.

(2) But In JavaScript, No "Tuple" type.                 <--- ***
    - Just manipulated as a kind of an *Array*.         <--- ***

(3) The following codes, declaring an Array against many types;

        let tuple: any[] = [ true, "the result is ok" ]     // "Tuple" => a kind of an "Array".

    - But "any[]" type "disables" TypeScript type features.
    - So TypeScript can declare Tuple" type differently from an "Array":

        const array: number[] = [ 1, 2, 3, 4 ]                              // Array
        const tuple: [ boolean, string ] = [ true, "the result is ok" ]     // Tuple <--- ***
`, '\n')


let tuple1 = [ true, "the result is ok"]                      // OK : Array

// `any[]` "disables" TypeScript type features.                 <--- ***
let tuple2: any[] = [ true, "the result is ok" ]              // OK : Array

let tuple3: [ boolean, string] = [ true, "the result is ok"]  // OK : Tuple   <--- ***


// [ true, 'the result is ok' ] [ true, 'the result is ok' ] [ true, 'the result is ok' ]
console.log(tuple1, tuple2, tuple3, '\n')


console.groupEnd()



