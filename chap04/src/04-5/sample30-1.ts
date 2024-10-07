console.clear()
console.group("src/04-5/sample30-1.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

5-1. Create a Object Using Symbol, '( expressionStatement1, expressionStatement2[, ...] )'

(1) In ESNext & TypeScript, To make a object using '( expressionStatement1, expressionStatement2[, ...] )'.
    - Only "Expression" Statements are Allowed, but *NOT* "Execution" Statements. (***)
    - Returns *Last* "Expression" statement.                   <--- ***

    - Example:

        let _obj;
        const obj = ( _obj = {}, _obj['name'] = 'Yoseph', _obj )

(2) Wrong '( executionStatement1, executionStatement1[, ...] )'

    - Example:

        // error ts(2349) - This expression is not callable.        <--- ***
        ( console.log(1), console.log(2) )
`, '\n')


/* 
    function (key, value) {
        var _b;
        return (_b = {}, _b[key] = value, _b);
    } // Anonymous Function (== Function Expression)
 */
const makeObject3 = 
    ( key: string, value: string ) => {

        // `( expressionStatement1, expressionStatement2[, ...] )`
        // *Only* `Expression` Statements are Allowed, but *NOT* `Execution` Statements.    <--- ***
        // Returns *Last* `Expression` statement.                                           <--- ***

        let _a: any
        
        return ( _a={}, _a[key] = value, _a )
    } // makeObject3

console.log('%s', makeObject3, '\n')

console.log( makeObject3('name', 'Yoseph') )                // { name: 'Yoseph' }
console.log( makeObject3('firstName', 'Trinity') )          // { firstName: 'Trinity' }

// -----------------------------------------

// ( expressionStatement1, expressionStatement2[, ...] )
// *Only* `Expression` Statements are Allowed, but *NOT* `Execution` Statements.    <--- ***
// Returns *Last* `Expression` statement.                                           <--- ***

let _c: any
const o = ( _c = {}, _c['age'] = 23, _c )

console.log(o, '\n')                                              // { age: 23 }

// -----------------------------------------

// Variable '_obj' implicitly has an 'any' type, but a better type may be inferred from usage.
let _obj;                                   // OK
// let _obj: any;                              // OK

// error ts(2739) - Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, age
// let _obj: { name: string, age: number }     // XX

// error ts(2339) - Property 'name' does not exist on type 'object'.
// let _obj: object                            // XX

// ( expressionStatement1, expressionStatement2[, ...] )
const obj = ( _obj = {}, _obj['name'] = 'Yoseph', _obj['age'] = 23, _obj )

console.log('obj: %s', obj)                                 // { name: 'Yoseph', age: 23 }
console.log(`name: ${obj.name}, age: ${obj.age}`, '\n')     // name: Yoseph, age: 23

// -----------------------------------------

// Variable '_obj2' implicitly has an 'any' type, but a better type may be inferred from usage.
let _obj2                                    // OK
// let _obj2: any                               // OK

// error TS2339: Property 'name' does not exist on type 'object'.
// let _obj2: object                            // XX

// error TS2739: Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, age
// let _obj2: { name: string, age: number }     // XX

_obj2 = {}
_obj2['name'] = 'Yoseph'
_obj2['age'] = 23

const obj2 = _obj2

console.log('obj2: %s', obj2)                               // { name: 'Yoseph', age: 23 }
console.log(`name: ${obj2.name}, age: ${obj2.age}`, '\n')   // name: Yoseph, age: 23

// -----------------------------------------

// error ts(2349) - This expression is not callable.    <--- ***
// Type 'Number' has no call signatures.
// ( console.log(1), console.log(2) )                      // XX



console.groupEnd()




