console.clear()
console.group("src/04-1/sample2.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

2. 'void' Return Type

(1) Return Type that don't return value at all.
(2) This can be used with return type of a function.

`, '\n')


function printMe(name: string, age: number): void {
    console.debug(`printMe(name: ${name}, age: ${age}) invoked.`)
} // printMe


printMe("Yoseph", 23)

console.log()



console.groupEnd()

