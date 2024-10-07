console.clear()
console.group("src/05-1/sample4-1.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

4. Conversion Between String and Array

(1) In some languages, String regards as an array of characters.    <--- ***
(2) In TypeScript,
    - There is *no* type for a character.                   <--- ***
    - String cannot be changed, that is "Immutable".        <--- ***
(3) Because of (2),
    - To manipulate a string, converting a string into an array is required firstly.    <--- ***
        ( string -> string[] )
    - To convert a string into an "string[]" array, "String.split" method used.         <--- ***
    - "String.split" method :
        a. Accept a delimeter to split a string into each characters.
        b. As a result, converting a string into an "string[]" type's array.            <--- ***
        c. Usage: String.split(delimeter: string): string[]                             <--- ***

    - Example:

        // ---------------------------------------------------
        // (1) null == void 0   ?               true    (***)
        // (2) undefined == void 0  ?           true    (***)
        // ---------------------------------------------------
        // (3) NaN == void 0 ?                  false   (***)
        // (4) Infinity == void 0 ?             false   (***)
        // (5) Empty String('') == void 0 ?     false   (***)
        // ---------------------------------------------------

        const split = (str: string, delim: string = ''): string[] => str.split(delim)
`, '\n')


export
const split = (str: string, delim: string = ''): string[] => str.split(delim)   // delimeter: empty string, ''

/*
    function (str, delim) {        
        if (delim === void 0) { delim = ''; }

        return str.split(delim);        <--- ***
    }
*/
console.log('split:\n\n%s', split)



console.groupEnd()


