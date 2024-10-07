console.clear()
console.group("src/03-5/sample21-2.ts")

// *****************************************
// 03-5. Type Assertion (== Type Conversion)
// *****************************************
// 1. In TypeScript, `Type Conversion` called, `Type Assertion`. (***)
// 2. 2-Way syntax of `Type Assertion`:
//      (1) ( <targetType> referenceVariable )
//      (2) ( referenceVariable as targetType ) 
//
//    * These all *NOT* `ES5` statements. (***)
//      So To distinguish from JavaScript `type conversion`, used `Type Assertion`.

console.log()
console.log('--------------------------------------------')
console.log('03-5. Type Assertion - 2')
console.log('--------------------------------------------')
console.log()


let obj: object = { name: "jack" }

console.log(obj); console.table(obj)                // { name: 'jack' }

// `object` type don't have any properties. (***)
// Property 'name' does not exist on type 'object'. ts(2339)
// console.log(obj.name)                               // XX

// -----------------------------------------

import INameable from "./sample21-1";


// (1) ( <targetType> referenceVariable )
let name1: string = ( <INameable> obj ).name
console.log(name1)                                  // jack

// (2) ( referenceVariable as targetType )
let name2: string = ( obj as INameable ).name
console.log(name2)                                  // jack




console.groupEnd()


