console.clear()
console.group("src/04-5/sample26.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

1. Declare a Default Parameter Value

(1) In 04-1. optional parameter, Optional parameter always would be a value, 'undefined'.

(2) When invoking a function without passing an argument to a corresponding parameter, 
    If that parameter must have a value, Default value could be assigned to it.

    This is called, "Default Parameter".

(3) Syntax:
                       Parameter Declaring Section
            ---------------------------------------------------
            ( parameter: typeAnnotation = defaultValue [, ...] )

(4) If the following cases, a default value applied to the parameter :
    a. *NOT* pass an argument to the corresponding parameter
    b. Pass *undefined* value to the corresponding parameter
    
`, '\n')


export
type Person = { name: string, age: number }

// -----------------------------------------

export
const makePerson = (name: string, age: number = 10): Person => {
    console.debug("makePerson(%s, %d) invoked.", name, age)

    return { name: name, age: age }
} // makePerson


// 1. Default value assigned.
console.log('1.', makePerson("Jack"), '\n')                     // { name: 'Jack', age: 10 }
// 2. Passed an argument assigned.
console.log('2.', makePerson("Yoseph", 23), '\n')               // { name: 'Yoseph', age: 23 }

// -----------------------------------------

export
const makePerson2 = (age: number = 10, name: string): Person => {
    console.debug("makePerson2(%d, %s) invoked.", age, name)

    return { name: name, age: age }
} // makePerson2


// Expected 2 arguments, but got 1. ts(2554).
// An argument for 'name' was not provided.
// console.log(makePerson2("Yoseph"))                           // XX

// 3. undefined    ---> Default Value     <--- ***
console.log('3.', makePerson2(undefined, "Yoseph"), '\n')       // { name: 'Yoseph', age: 10 }

// 4. null         ---> null            (`null` is a *valid* value)
console.log('4.', makePerson2(null, "Yoseph"), '\n')            // { name: 'Yoseph', age: null }

// 5. NaN          ---> NaN             (`NaN` is a *valid* value)
console.log('5.', makePerson2(NaN, "Yoseph"), '\n')             // { name: 'Yoseph', age: NaN }

// 6. Infinity     ---> Infinity        (`Infinity` is a *valid* value)
console.log('6.', makePerson2(Infinity, "Yoseph"), '\n')        // { name: 'Yoseph', age: Infinity }



console.groupEnd()


