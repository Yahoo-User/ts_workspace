import { Person } from "./sample26";

console.clear()
console.group("src/04-5/sample28.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

3. Declaring a Arrow Function That Returns a Object

(1) In the arrow function, You could think of the following code;

    Example: 

        export const makePerson = (name: string, age: number): Person => { name, age }

    - But compiler translates '{ name, age }' *NOT* into an 'Object', But 'Compound Statements'.    <--- ***
    - To translate '{ name, age }' into an "Object", Do wrap the object with Symbol, '()'.          <--- ***

        export const makePerson = (name: string, age: number): Person => ( { name, age } )
`, '\n')


// error ts(2355) - A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// export const makePerson = (name: string, age: number): Person => { name, age }     // XZ

// export const makePerson = (name: string, age: number): Person => ( { name: name, age: age } )   // OK
export const makePerson = (name: string, age: number): Person => ( { name, age } )              // OK


// function (name, age) { return ({ name: name, age: age }); }
console.log('makePerson: %s', makePerson)
console.log(makePerson("Yoseph", 23))       // { name: 'Yoseph', age: 23 }

// -----------------------------------------

export
const makePerson2 = (name: string, age: number = 10): Person => ( { name, age } )

console.log(makePerson2("Yoseph"))          // { name: 'Yoseph', age: 10 }
console.log(makePerson2("Yoseph", 23))      // { name: 'Yoseph', age: 23 }



console.groupEnd()

