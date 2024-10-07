console.clear()
console.group("src/03-2/sample8.ts")

// *****************************************
// 03-2. Interface Declaration
// *****************************************
// (1) TypeScript provides `interface` keyword to define the object type. (***)
// (2) The purpose of `interface` is to define the object type. (***)
//
// Syntax:
//          interface InterfaceName {
//              propertyName[?]: propertyType[, ...]    // Here, `,` Symbol is optional. (***)
//          } // end interface

console.log()
console.log('--------------------------------------------')
console.log('03-2. Interface Declaration')
console.log('--------------------------------------------')
console.log()


// 1. Interface Declaration.

interface IPerson {
    name: string;           // OK: *Standard Procedure(`;`)*, `,` Symbol is *optional*, *NOT* required. (***)
    age: number;
} // end interface


// 2.To declare a object following with the `IPerson` interface.

let good: IPerson = { name: "Yoseph", age: 23 }
console.log(good, ', typeof good:', typeof good)            // { name: 'Yoseph', age: 23 }
console.table(good)

// error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'IPerson'.
// let bad1: IPerson = { name: "Yoseph" }                      // XX : Without property 'age'

// error TS2741: Property 'name' is missing in type '{ age: number; }' but required in type 'IPerson'.
// let bad2: IPerson = { age: 23 }                             // XX : Without property 'name'

// error TS2739: Type '{}' is missing the following properties from type 'IPerson': name, age
// let bad3: IPerson = {}                                      // XX : Without properties, 'name' and 'age'

// error TS2322: Type '{ name: string; age: number; etc: boolean; }' is not assignable to type 'IPerson'.
//               Object literal may only specify known properties, and 'etc' does not exist in type 'IPerson'.
// let bad4: IPerson = { name: "Yoseph", age: 23, etc: true }  // XX : Not existed property, 'etc'



console.groupEnd()

