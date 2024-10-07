console.clear()
console.group("src/05-2/sample14.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

1. What is "Imperative Programming" ?

(1) Program fundamental form:
    a. Get Input Data
    b. Processing Input Data and Generate Output Data
    c. Print Output Data

(2) In "imperative" programming, 
    program which targeted for multiple data implemented with "for" statement.  <--- ***

    for( ; ; ) {
        Get Input Data
        Processing Input Data & Generate Output Data
        Print Output Data
    }

(3) "Declarative" programming more concentrate on the structure of 
    consistent problem solving than the effective use of system resources.      <--- ***

    - Don't use "for statement" like "Imperative" programming. (***)
    - Put all data into an Array. (***)
    - Processing one Array into the other Array constantly
      until solving problem. (***)

      A. Putting all necessary data to solve the problem into an Array.
      B. Processing an Input Array & Generate Output Array.
      C. Print all items in the output Array.
`, '\n')



console.groupEnd()


