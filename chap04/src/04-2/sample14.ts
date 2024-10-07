console.clear()
console.group("src/04-2/sample14.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

8. 'const' keyword and function expression

(1) It is more good to declare 'const' variable, than 'let' variable to save 'function expression'.     (***)

(2) 'let' keyword can be changed at any time.
    So like the below, variable 'f' could be changed from a function expression to the other.

    let f = () => {}

(3) On the other hand, 'const' keyword couldn't be changed at all after initialized by initial value.   (***)
    So if 'const' variable initialized by 'function expression', always 'const' variable is same.

    const f = () => {}

`, '\n')


let letVar = () => {}                      // letVar have `function expression`
letVar = () => { console.log('changed.') } // letVar changed by other `function expression`

// -----------------------------------------

const constVar = () => {}

// Cannot assign to 'constVar' because it is a constant. ts(2588)
// constVar = () => { console.log('changed.') }    // XX



console.groupEnd()



