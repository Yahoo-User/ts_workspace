import { Person } from "./sample26";

console.clear()
console.group("src/04-5/sample29.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

4. Apply De-structuring Assignment To The Function Parameters.

(1) In 03-4, De-structuring Assignment to an Object.

(2) The function's parameters are a kind of variables.
    So De-structuring assignment can apply to the parameters.

    Example:
                             De-structuring
                               Assignment
                          ---------------------  
    const printPerson = ( { name, age }: Person ) => console.log(\`name: \${name}, age: \${age}\`)

`, '\n')

//                * De-structuring Assignment *
//                    ---------------------  
const printPerson = ( { name, age }: Person ): void => 
                    console.log(`name: ${name}, age: ${age}`)

/*  
    printPerson:

    function (_a) {
        var name = _a.name, age = _a.age;       <--- ***
        return console.log("name: ".concat(name, ", age: ").concat(age));
    }
 */
console.log('printPerson:\n\n%s', printPerson, '\n')

printPerson({ name: "Yoseph", age: 23 })        // name: Yoseph, age: 23



console.groupEnd()

