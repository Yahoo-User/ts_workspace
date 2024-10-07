console.clear()
console.group("src/04-1/sample3.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

3. Function Signature

(1) Function have a *type* at the same as a *variable*.
(2) *Type of function* called, *Function Signature*.        (***)
    - function type == function signature                   (***)
(3) Syntax: (param1: typeAnnotation1, param2: typeAnnotation2 [, ...]) => *returnType*     <--- ***

`, '\n')


//                    *Function Signature*
//            -----------------------------------
let printMe2: (name: string, age: number) => void =
            function (name: string, age: number): void {
                console.debug("printMe2(%s, %d) invoked.", name, age)

            } // printMe2

printMe2("Yoseph", 23)
console.log(printMe2, '\n')



console.groupEnd()

