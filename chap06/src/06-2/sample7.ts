console.clear()
console.group("src/06-2/sample7.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

2. "function*" Keyword

(1) "generator" function have two differences then general function:
    a. declared by "function*" keyword.             <--- ***
    b. "yield" statement in the "function body".    <--- ***

(2) "generator" : a function declared with "function*" keyword.
    - *ONLY* can be declared with "function*" keyword.                      <--- ***
    - Thus, "generator" cannot be declared by "Arrow Function".             <--- ***
    - Act as a "iterable"(= "iterator provider") to provide a "iterator".   <--- ***

(3) "function*" is a keyword.
    - "generator" is different from general funtion in terms of a "function*" keyword.
    - Another caution is "function*" itself is a keyword.                               (***)
    - This, "Arrow Function" without a "function" keyword cannot make a "generator".    (***)
    - "function" and "*" have nothing to do with spaces.                                (***)
`, '\n')



console.groupEnd()


