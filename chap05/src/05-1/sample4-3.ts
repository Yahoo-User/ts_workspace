import { join } from "./sample4-2";

console.clear()
console.group("src/05-1/sample4-3.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

4. Conversion Between String and Array

`, '\n')


// string[] -> string using "Array.join" method

console.log(join, '\n')                   // [Function: join]

/*
    // ---------------------------------------------------
    // (1) null == void 0   ?               true    (***)
    // (2) undefined == void 0  ?           true    (***)
    // ---------------------------------------------------
    // (3) NaN == void 0 ?                  false   (***)
    // (4) Infinity == void 0 ?             false   (***)
    // (5) Empty String('') == void 0 ?     false   (***)
    // ---------------------------------------------------

    function (strArray, delim) {
        if (delim === void 0) { delim = ""; }

        return strArray.join(delim);        <--- ***
    }
*/
console.log('join:\n\n%s', join, '\n')

console.log(
    join([ 'H', 'e', 'l', 'l', 'o' ], ''),      // Hello
    join([ 'H', 'e', 'l', 'l', 'o' ], '_'),     // H_e_l_l_o
    '\n'
)



console.groupEnd()


