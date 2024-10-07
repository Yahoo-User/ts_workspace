console.clear()
console.group('src/03-1/sample3.ts')

// ********************************
// 03-1. Type Inference
// ********************************
// TypeScript can emit `Type Annotation` compatible with JavaScript.
// In this case, TypeScript do inference type of a variable.
// Variable type is determined by `initial` value. After type fixed. (***)

console.log()
console.log('--------------------------------------------')
console.log('03-1. Type Inference')
console.log('--------------------------------------------')
console.log()


let n3 = 1                              // OK : Type Inference - number
let b3 = true                           // OK : Type Inference - boolean
let s3 = "Yoseph"                       // OK : Type Inference - string

let o5 = {}                             // OK : Type Inference - object
let o6 = { name: "Yoseph", age: 23 }    // OK : Type Inference - object

// error TS2451: Cannot *redeclare* `block-scoped` variable 's3'.
// let s3 = 1                              // XX : Type Mismatch  - string -> number


console.log('n3:', n3, ', typeof n3:', typeof n3)
console.log('b3:', b3, ', typeof b3:', typeof b3)
console.log('s3:', s3, ', typeof s3:', typeof s3)
console.log('o5:', o5, ', typeof o5:', typeof o5)
console.log('o6:', o6, ', typeof o6:', typeof o6)


console.groupEnd()
