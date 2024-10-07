import { split } from "./sample4-1";

console.clear()
console.group("src/05-1/sample4-2.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

4. Conversion Between String and Array

(4) "Array.join" Method
    - To convert into "string[] -> string" reversely.        <--- ***
    - through the parameters: "string[]" & "delimeter(string)", 
      Returns new string to join each character & delimeter using "Array.join" method.

    - Example:

        export const join = (strArray: string[], delim: string = ''): string => strArray.join(delim)

`, '\n')


console.log(
    split("Hello"),                 // [ 'H', 'e', 'l', 'l', 'o' ]
    split("H_e_l_l_o", "_"),        // [ 'H', 'e', 'l', 'l', 'o' ]
    '\n'
)

// -----------------------------------------

// string[] -> string using "Array.join" method

export
const join = (strArray: string[], delim: string = ""): string => strArray.join(delim)


console.groupEnd()


