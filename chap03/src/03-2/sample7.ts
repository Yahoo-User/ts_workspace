console.clear()
console.group("src/03-2/sample7.ts")

// *****************************************
// 03-2. Object & Interface
// *****************************************
// (1) `object` type cannot have primitive types. (***)
// (2) `object` type is the super-type of all reference types (class, interface, ...) (***)
// (3) `object` type have all object with various properties. (***)

console.log()
console.log('--------------------------------------------')
console.log('03-2. Object & Interface')
console.log('--------------------------------------------')
console.log()


let obj: object = { name: "Yoseph", age: 23 }
console.log('1. obj:', obj)

obj = { first: 1, second: 2 }
console.log('2. obj:', obj)



console.groupEnd()

