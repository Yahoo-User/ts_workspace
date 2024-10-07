import { range } from "./sample3";
import { createRangeIterable } from "./sample2-1";

console.clear()
console.group("src/06-1/sample4-1.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

4. "for...of" statement & "[Symbol.iterator]" method

(1) "range" function used with "for...of" statement like the following:

        import { range } from "./range"

        for(let value of range(1, 3 + 1))   // OK
            console.log(value)

(2) But if "iterator" returned by "createRangeIterable" function ("iterable" == "iterator provider")
    used with "for...of" statement, An error raised like the following:

        import { createRangeIterable } from "./createRangeIterable"

        const iterator = createRangeIterable(1, 3 + 1)

        //                        ----------------- "iterator" -----------------            - ① -             - ② -
        // error ts(2549) - Type '{ next(): { value: number; done: boolean; }; }' is not an "array" type or a "string" type 
        //                  or does not have a *"[Symbol.iterator]()"* method that returns an "iterator".
        //                                     ********  ③  ********************************************
        for(let value of iterator)          // XX
            console.log(value)

(3) Error occured in (2) means that "createRangeIterable" function must convert into 
    the like "RangeIterable" class which implements "[Symbol.iterator]" method.

        class RangeIterable {   // "iterable" == "iterator provider"
            constructor(public from: number, public to: number) {}
        
            [Symbol.iterator] () {
                // Very famous JavaScript code trick
                // that Compiler do *NOT* translate "this" inside "[Symbol.iterator]" method 
                // into the "this" inside "next" method in the "iterator".                  <--- ***
                const that = this
                let currentValue = that.from
        
                return { // "iterator"
                    next() {
                        const value = (currentValue < that.to) ? currentValue++ : undefined
                        const done  = (value == undefined)
                        // return { value: value, done: done }  // long-hand
                        return { value, done }  // short-hand
                    } // net
                } // return
            } // [Symbol.iterator]
        } // end class

(4) Class's method is also a functions made with "function" keyword.
    - Just JavaScript's "function" keyword just omitted, 
      Class's method is a function using "function" keyword in fact. (***)
    - Then, Inside a function using "function" keyword, "this" keyword could be used. (***)
`, '\n')


// 1. "range" function could be used with "for...of" statement.

for(let value of range(1, 3 + 1))
    console.log(value)              // 1 2 3

// -----------------------------------------

// 2. "iterator" returned by "createRangeIterable" ("iterable", "iterator provider")
//    used with "for...of" statement, An error raised like the following:

const iterator = createRangeIterable(1, 3 + 1)
console.log("iterator: %s", iterator, '\n')   // { next: [Function: next] }

//                        ----------------- "iterator" -----------------            - ① -             - ② -
// error ts(2549) - Type '{ next(): { value: number; done: boolean; }; }' is not an "array" type or a "string" type 
//                  or does not have a *"[Symbol.iterator]()"* method that returns an "iterator".
//                                     ********  ③  ********************************************

// for(let value of iterator)          // XX
//     console.log(value)

// -----------------------------------------

// 3. Error occured in 2 means that "createRangeIterable" function must convert into 
//    the like "RangeIterable" class which implements "[Symbol.iterator]" method.  <--- ***

export
class RangeIterable {   // "iterable" == "iterator provider"

    constructor(public from: number, public to: number) {}

    [Symbol.iterator] () {
        console.debug("RangeIterable::[Symbol.iterator]() invoked.")        // <--- *** : called back

        // Very famous JavaScript code trick
        // that Compiler do *NOT* translate "this" inside "[Symbol.iterator]" method 
        // into the "this" inside "next" method in the "iterator".          <--- ***
        const that = this

        let currentValue = that.from

        return { // "iterator"
            next() {
                const value = (currentValue < that.to) ? currentValue++ : undefined
                const done  = (value == undefined)

                // return { value: value, done: done }  // long-hand
                return { value, done }  // short-hand
            } // net
        } // return
    } // [Symbol.iterator]

} // end class

/*
    function RangeIterable(from, to) {
        this.from = from;
        this.to = to;
    }
*/
// console.log("RangeIterable:\n\n%s", RangeIterable, '\n')


console.groupEnd()


