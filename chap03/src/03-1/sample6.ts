console.clear()
console.group("src/03-1/sample6.ts")

// *****************************************
// 03-1. Template String
// *****************************************
// Syntax: `... ${variableName} ...`
// Also called, `backtick` string

console.log()
console.log('--------------------------------------------')
console.log('03-1. Template String')
console.log('--------------------------------------------')
console.log()


// let count: number = 10, message: string = "Your Count"   // Block-scoped variable with `Type Annotations`
let count = 10, message = "Your Count"                      // Block-scoped variable with `Type Inference`

// Block-scoped variable initialized with `Template String` with escape characters.
let result: string = `${message} is\t${count}\n`

console.log(result)     // Your Count is 10



console.groupEnd()

