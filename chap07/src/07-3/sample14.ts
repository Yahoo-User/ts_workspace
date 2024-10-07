import { test1, test2 } from "./sample13-1";


console.clear()
console.group("src/07-3/sample14.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

3. The two features of an "async" Function

(1) A function with "async" function modifier have the following features:
    a. Can be used as a "general" function.
    b. Can be used as a "Promise" object.       <--- ***
`, '\n')


// The following code shows that "async" function used as a "Promise" object.   <--- ***

// The result of the below two functions shows
// that these are executed "synchronously" and "sequentially" : test1 "resolved" by test2 "resolved".  <--- ***

// 1. test1(): Promise<void>
test1().    // 1    1
    then(
        // 2. test2(): Promise<void>
        () => test2()   // hello    hello
    )



console.groupEnd()


