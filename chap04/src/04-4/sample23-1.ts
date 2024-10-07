console.clear()
console.group("src/04-4/sample23-1.ts")

console.debug(`
*************************************************
* 04-4. First-Class Function                    *
*************************************************

1. Callback Function

(1) 'First-class function' provided by the programming languages.

(2) 'Function' in the languages which providing 'first-class functions'
    is a kind of 'value' called, "Function Expression".                                         <--- ***
    - So 'Function' can be assigned into a 'variable'.                                          <--- ***
    - This means that "Function Expression" could be received through parameter.                <--- *** 

(3) Funtion invoked through a parameter is called, "Callback Function".                         <--- ***
    
    Example : Function 'f' have 'callback' named parameter. 
              Parameter 'callback' receive a 'function expression'
              and this 'function expression' by 'callback' parameter invoked in a function body.

        const f = (callback: () => void): void => callback()

`, '\n')


// Example of using more realistic `callback` function,

export
const init = (callback: () => void): void => {
    console.debug("init(function expression: %s) invoked.", callback)

    // First-class function => Function Expression => Anonymous Function (***)
    // Function expression(= Anonymous Function) invoked through the named 'callback' parameter.
    callback()

    console.log('\t+ "Callback Function" (= Function Expression) Invoked.')
} // init



console.groupEnd()


