console.clear()
console.group('src/03-1/sample2.ts')

// ********************************
// 03-1. Type Annotation
// ********************************

console.log()
console.log('--------------------------------------------')
console.log('03-1. Type Annotation')
console.log('--------------------------------------------')
console.log()


let n2: number = 1
let b2: boolean = false
let s2: string = "hello"
let o: object = {}

// n2 = 'a'                             // XX: number   -> string
// b2 = 1                               // XX: boolean  -> number
// s2 = false                           // XX: string   -> boolean

o = { name: 'Yoseph', age: 23 }         // OK: object with properties: name, age

// `object` type don't have any properties. (***)
// Property 'name' does not exist on type 'object'. ts(2339)
// console.log(o.name)                 // XX


console.groupEnd()
