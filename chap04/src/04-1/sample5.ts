console.clear()
console.group("src/04-1/sample5.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

5. 'undefined' cautions

(1) 'undefined' type is a bottom-most level type in the type hierarchy of TypeScript. (***)
(2) When invoking function, 'undefined' arguments could be passed in any degree.
    So it is good to check whether argument is 'undefined' value or not.
(3) In ESNext and TypeScript, 'null' value equals to the 'undefined' value. (***)
    ( null == undefined ) -> true,  ( null === undefined ) -> false
`, '\n')


// 1. Example1: When *NOT* considering `undefined` argument.

interface INameable {
    name: string
} // end interface

function getName(o: INameable) {
    console.debug('getName(%s) invoked.', o)

    return o.name
} // getName

console.log(`
When invoking function 'getName', the 'undefined' value passed to the parameter.
According to the 'Polymorphism-1', this 'undefined' value passed to the parameter correctly.
(Because that 'INameable' interface type is super typeof 'undefined' type)
But for this reason, 'o.name' equals to the 'undefined.name', and this causes an error.
`)

// TypeError: Cannot read property 'name' of `undefined`  (***)
// let n = getName(undefined)  // XX - Caution: the argument passed is `undefined`.
// console.log(n)

console.log( getName( { name: "Yoseph" } ) )        // Yoseph

// -----------------------------------------

// 2. Example2: When considering `undefined` argument.

interface IAgeable {
    age?: number
} // end interface

function getAge(o: IAgeable) {
    console.debug('getAge(%s) invoked.', o)

    return o != undefined && o.age ? o.age : -1
} // getAge


console.log( getAge( undefined ) )      // -1

// typeof null => `object`
console.log( getAge( null ) )           // -1, `null` is `falsy` (***)
console.log( getAge( { age: 23 } ) )    // 23



console.groupEnd()

