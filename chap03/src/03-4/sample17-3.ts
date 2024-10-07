console.clear()
console.group("src/03-4/sample17-3.ts")

// *****************************************
// 03-4. De-structuring Assignment - 3
// *****************************************

console.log()
console.log('--------------------------------------------')
console.log("03-4. De-structuring Assignment - 3")
console.log('--------------------------------------------')
console.log()


console.log('Step.3 Using Structured Types.', '\n')

// -----------------------------------------

import { IPerson, ICompany } from "./sample17-2";

// -----------------------------------------

export
let jack: IPerson = { name: "Jack", age: 22 },
    jane: IPerson = { name: "Jane", age: 33 }

console.log(jack); console.table(jack)              // { name: 'Jack', age: 22 }
console.log()
console.log(jane); console.table(jane)              // { name: 'Jane', age: 33 }

// -----------------------------------------

export
let apple:  ICompany = { name: "Apple Computer, Inc.", age: 34 },
    ms:     ICompany = { name: "Microsoft", age: 44 }

console.log(apple); console.table(apple)            // { name: 'Apple Computer, Inc.', age: 34 }
console.log()
console.log(ms); console.table(ms)                  // { name: 'Microsoft', age: 44 }




console.groupEnd()
