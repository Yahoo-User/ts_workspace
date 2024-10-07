console.clear()
console.group('src/03-1/sample1.ts')

// *****************************************
// 03-1. `let` & `const` Keyword
// *****************************************
// Syntax:
//      (1)   let variableName: TypeAnnotation [ = initialValue ]
//      (2) const variableName: TypeAnnotation   = initialValue

console.log()
console.log('--------------------------------------------')
console.log('03-1. `let` & `const` Keyword')
console.log('--------------------------------------------')
console.log()


let n: number = 1
let b: boolean = true
let s: string = "Yoseph"

let o1: object = {}                                                     // OK
let o2: object = { name: "Yoseph", age: 23 }                            // OK
let o3: { name: string, age: number } = { name: "Trinity", age:23 }     // OK

// error TS2739: Type '{}' is missing the following `properties` from type '{ name: string; age: number; }': name, age
// let o4: { name: string, age: number } = {}                              // XX

console.log('+ n:', n)
console.log('+ b:', b)
console.log('+ s:', s)
console.log('+ o1:', o1)
console.log('+ o2:', o2)
console.log('+ o3:', o3)
// console.log('\t+ o4:', o4)      // XX



console.groupEnd()

