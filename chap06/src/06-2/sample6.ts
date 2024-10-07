console.clear()
console.group("src/06-2/sample6.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

1. The similarity between a "setInterval" function and a "generator"

(1) "Semi-coroutine" : a way of "generator"(= function with "function*" and "yield" keywords) acting.   <--- ***
    - The feature that like TypeScript, "single-threaded" language acts like "multi-threaded" language. (***)

(2) "setInterval" function: A function that JavaScript provides by default.
    - This invokes a "callback function" by specified interval repeatedly infinitely.   <--- ***    
        Syntax: const intervalId = setInterval(callback, interval)                      <--- ***
    - This function can be stopped by "clearInterval" function.                         <--- ***
        Syntax: clearInterval(intervalId)

(3) The difference between "semi-coroutine" and "coroutine":
    - "generator" is a "semi-coroutine" academically.                                                   <--- ***
    - "generator" is "semi-coroutine". it's executed repeatedly but *NOT* automatically.                <--- ***
    - "generator" is executed *ONCE* only when "next" method of "iterator" made by "generator" invoked. <--- ***
      "generator" is a half of "semi-coroutine" thus.                                                   <--- ***
    - If "next" method invoked repeatedly in "while" statement,
      "generator" is executed *ONCE* and stopped *immediately* *ONLY* when "next" method invoked.
      like this, "generator" is *NOT* executed automatically, So it's called "semi-coroutine".          <--- ***
    - "coroutine" is the "application-level thread".                                                    <--- ***
    - "coroutine" is a thread. so executed automatically repeatedly by specific period.                 <--- ***
    - The purpose of "coroutine" is to use threads to the full in the application, *NOT* giving overload to OS.
    - "Closure" is the language to load "coroutine" for the first time. (***)
    - "Go" made by Google uses the "go-routine" word. but "go-routine" is also "coroutine". (***)
    - "thread" is the limited services provided by the OS.
    - Limitation of threads is 2000.    (***)
    - if specific application uses very much threads, it's overloaded to the OS.
      This is the reason to start studing "coroutine". (***)
`, '\n')


// The following code is an example that output 1, 2, 3 by 1 second interval using "setInterval" function.
//  - The output is similar to the output by a "generator".    (***)
//  - The generator acts in other way of TypeScript code.      (***)

const period = 1000 * 1     // In milliseconds
let count = 0

console.log("* Program started.")

const id = setInterval(() => {
    console.debug("callback() invoked, count(%d) by period(%s ms).", count, period)

    if(count >= 3) {
        clearInterval(id)
        console.log("* Program finished.")
    } else 
        console.log(++count)    // 1 2 3
}, period)



console.groupEnd()


