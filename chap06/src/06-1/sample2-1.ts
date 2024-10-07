import { range } from "../../../chap05/src/05-1/sample13-1";

console.clear()
console.group("src/06-1/sample2-1.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

2. "iterator" & "iterable" (== "iterator provider")

(1) In "05-1", "for...in" and "for...of" statement described.

    - "for...of" statement is used to get all items of an Array sequentially, regardless of an item type. <--- ***
    - "for...of" statement is often mentioned under "iterator" in other languages.  <--- ***

(2) "iterator" is the object have the following features in almost languages;       <--- ***
    - With "next" method.   (***)
    - This "next" method returns an object with two properties: "value" & "done". (***)

(3) "iterable" : Function which plays a role in providing "iterator".               <--- ***
    - called, "iterator provider".                                                  <--- ***
`, '\n')


const numbers: number[] = range(1, 7 + 1)
console.log("numbers:", numbers, '\n')      // [ 1, 2, 3, 4, 5, 6, 7 ]

for(let item of numbers)
    console.log(item)                       // 1 2 3 4 5 6 7

// -----------------------------------------

const strings: string[] = [ "Hello,", "World", "!!!" ]
console.log('\n\b', "strings:", strings, '\n')

for(let item of strings)
    console.log(item)                       // Hello, World !!!

console.log()

// -----------------------------------------

// The function "createRangeIterable" is so called, "iterator provider" (= "iterable")      <--- ***
//  - This function play a role in provding "iterator".                                     <--- ***
//  - This function returns an "iterator" which is an object with "next" method.            <--- ***
//  - This "next" method of an "iterator" returns an object with two properties: "value" & "done".  <--- ***

// "iterable" (= "iterator provider"): A function which returns an "iterator".              <--- ***

export
const createRangeIterable = (from: number, to: number) => {
     // "iterator provider" (= "iterable"):
     //     A function returns an object (= "iterator") with "next" method

    console.debug("createRangeIterable(%d, %d) invoked.", from, to)

    let currentValue = from

    return { // "iterator"

        next() {
            const value = ( currentValue < to  ) ? currentValue++ : undefined
            const done  = ( value == undefined )

            // return { value, done }               // OK : short-hand
            return { value: value, done: done }  // OK : long-hand
        } // next method

    } // return

} // createRangeIterable


/*
    createRangeIterable:

    function (from, to) {
        // "iterator provider" (= "iterable"):
        //     A function returns an object (= "iterator") with "next" method
        console.debug("createRangeIterable(%d, %d) invoked.", from, to);
        var currentValue = from;
        return {
            next: function () {
                var value = (currentValue < to) ? currentValue++ : undefined;
                var done = (value == undefined);
                return { value: value, done: done }; // OK : short-hand
                // return { value: value, done: done }  // OK : long-hand
            } // next method
        }; // return
    } // Anonymous Function = Function Expression -> First-class Function
*/
console.log("createRangeIterable:\n\n%s", createRangeIterable)



console.groupEnd()


