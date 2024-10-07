// import { arrayLength2, isEmpty } from "./sample9-1";
import * as I from './sample9-1'

console.clear()
console.group("src/05-1/sample9-2.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

9. Generic-way Types
`, '\n')


let numArray: number[] = [ 1, 2, 3 ]
let strArray: string[] = [ "Hello", "World" ]

type IPerson = { name: string, age?: number }   // Anonymous Interface, age: optional property

let personArray: IPerson[] = [
    { name: "Jack" },
    { name: "Yoseph", age: 32 }
]

console.log(
    I.arrayLength2<number>(numArray),           // 3
    // I.arrayLength2(numArray),                   // 3 - Type Inference

    I.arrayLength2<string>(strArray),           // 2
    // I.arrayLength2(strArray),                   // 2 - Type Inference

    I.arrayLength2<IPerson>(personArray),       // 2
    // I.arrayLength2(personArray),                // 2 - Type Inference

    I.isEmpty<number>([]),                      // true
    // I.isEmpty([]),                              // true - Type Inference

    I.isEmpty<number>([1]),                     // false
    // I.isEmpty([1])                              // false - Type Inference
)



console.groupEnd()


