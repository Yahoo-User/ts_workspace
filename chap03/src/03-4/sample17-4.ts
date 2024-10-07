import { IPerson, ICompany } from "./sample17-2";
import { jack, jane, apple, ms } from "./sample17-3";

console.clear()
console.group("src/03-4/sample17-4.ts")

// *****************************************
// 03-4. De-structuring Assignment - 4
// *****************************************

console.log()
console.log('--------------------------------------------')
console.log("03-4. De-structuring Assignment - 4")
console.log('--------------------------------------------')
console.log()


console.log('Step.4 De-structuring Assignment.')
console.log()

// -----------------
// 1st. method - Using dot(.) operator refering to properties of object.
// -----------------
// let name = jack.name, age = jack.age
// console.log(`name: ${name}, age: ${age}`)        // name: Jack, age: 22


// -----------------
// 2nd. method - Using de-structuring assignment.
// -----------------

// (1)
// const { name, age } = jack                       // OK
const { name, age }: IPerson = jack              // OK
// const { name1, age1 } = jack                     // XX - Property 'name1' does not exist on type 'IPerson'.ts(2339)
// const { name: string, age: number } = jack       // XX - error TS2304: Cannot find name 'age'.

console.log(jack); console.table(jack)          // { name: 'Jack', age: 22 }
console.log(`name: ${name}, age: ${age}`)       // name: Jack, age: 22

// (2)
// const { name, age } = jane                      // OK

// console.log(jane); console.table(jane)          // { name: 'Jane', age: 33 }
// console.log(`name: ${name}, age: ${age}`)       // name: Jane, age: 33

// (3)
// const { name, age } = apple                     // OK
// const { name, age }: ICompany = apple           // OK

// console.log(apple); console.table(apple)        // { name: 'Apple Computer, Inc.', age: 34 }
// console.log(`name: ${name}, age: ${age}`)       // name: Apple Computer, Inc., age: 34

// (4)
// const { name, age } = ms                        // OK   

// console.log(ms); console.table(ms)              // { name: 'Microsoft', age: 44 }
// console.log(`name: ${name}, age: ${age}`)       // name: Microsoft, age: 44



console.groupEnd()
