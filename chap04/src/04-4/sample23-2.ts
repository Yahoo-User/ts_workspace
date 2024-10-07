import { init } from './sample23-1';

console.clear()
console.group("src/04-4/sample23-2.ts")

console.debug(`
*************************************************
* 04-4. First-Class Function                    *
*************************************************

1. Callback Function

(4) "First-class" function => "Function Expression" => "Anonymous Function"         <--- ***

(5) Callback Function is useful to implements Framework API.
    - What is a Framework ?
        In general, A framework is a library which desinged to build a whole program structure. (***)

    - A framework provides functions which many programs should implement commonly,
      In the name of "API" (Application Programming Interface).     (***)

    - 'Callback functions' is very useful to implement a 'framework API'.
      Because that a framework API supports for implementing 
      more easily necessary features which required to each program.

`, '\n')


console.log(init, '\n')       // [Function: init]

init(
    // First-class function => Function Expression => Anonymous Function (***)
    () => console.log("\t+ 'Function Expression' invoked through the 'callback' named parameter.") 
)

console.log()


console.groupEnd()



