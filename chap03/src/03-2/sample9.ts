console.clear()
console.group("src/03-2/sample9.ts")

// *****************************************
// 03-2. Optional Properties With `?` Symbol In The `interface`
// *****************************************
// Syntax:
//          interface IPerson2 {
//              ...,
//              optionalProperty?: typeAnnotation,   // `,` Symbol is optional, *NOT* required. (***)
//              ...
//          } // end interface

console.log()
console.log('--------------------------------------------')
console.log('03-2. Optional Properties With `?` Symbol In The `interface`')
console.log('--------------------------------------------')
console.log()


interface IPerson2 {
    // Required Property
    name: string;                // OK: *Standard Procedure(`;`)*, `,` Symbol is *optional*, *NOT* required. (***)

    // Required Property
    age: number;

    // *Optional* Property
    etc?: boolean;
} // end interface

// -----------------------------------------

const person1: IPerson2 = { name: "Yoseph", age: 23 }               // OK: `etc` property is *optional* (***)

console.log(person1); console.table(person1)                        // { name: 'Yoseph', age: 23 }
console.log('name:', person1['name'], ', age:', person1['age'], ', etc:', person1['etc'])

// -----------------------------------------

const person2: IPerson2 = { name: "Yoseph", age: 23, etc: true }    // OK

console.log()
console.log(person2); console.table(person2)                        // { name: 'Yoseph', age: 23, etc: true }

// Each property of a object is `index` to refer to the specific property of the object.
console.log('name:', person2['name'], ', age:', person2['age'], ', etc:', person2['etc'])


console.groupEnd()
