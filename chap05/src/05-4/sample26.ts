console.clear()
console.group("src/05-4/sample26.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

2. "readonly" Type Modifier

(1) TypeScript provides "readonly" keyword to implement a "Pure Function".  <--- ***
    - If trying to change "readonly" parameters,
      This modifier notifies problems to prevent becoming a "Impure" function.

(2) Why is a "readonly" "Type Modifier" necessary in spite of "const" keyword ?
    - In TypeScript, "interface" / "class" / "function parameters"
      could be declared without "let" or "const" keyword.                   <--- ***

    - So To grant the effect like "const" to the above symbols, 
      "readonly" type modifier required.                                    <--- ***
`, '\n')


// 1. When trying to change "readonly" parameters,

// function forcePure(array: readonly number[]) {
//     // error ts(2339) - Property 'push' does not exist on type 'readonly number[]'.
//     array.push(1)       // XX
// } // forcePure



console.groupEnd()


