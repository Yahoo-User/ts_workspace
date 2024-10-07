console.clear()
console.group("src/04-3/sample15.ts")

console.debug(`
*************************************************
* 04-3. Arrow Function and Expression Statement *
*************************************************

(1) 'ESNext' and TypeScrit  provide 'Arrow Function'.   (***)

(2) Arrow Function Syntax:

    const functionName = ( param1: typeAnnotation1, param2: typeAnnotation2 [, ...] ): returnType => functionBody

(3) The 'body of a arrow function can abbreviate symbols, '{}' if possible *NOT like 'function' function. (***)

    Ex1) const arrow1 = (a: number, b: number): number => { return a + b }  // 'Execution Statement'  Type Body.
    Ex2) const arrow2 = (a: number, b: number): number => a + b             // 'Expression Statement' Type Body.

(4) According to the use of the symbol, '{}', 
    The arrow function 'body' act as 'Execution' statements (= 'statement') or 'Expression' statements.   (***)

`, '\n')





console.groupEnd()

