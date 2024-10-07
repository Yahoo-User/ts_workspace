console.clear()
console.group("src/05-1/sample10.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

10. Type Inference of Generic Function

(1) Generic-based function fundamentally have to specify "Type Variable", like this:

        functionName<TypeVariable>(arguments)                                       <--- ***

    - But this way is inconvient.
      So "Type Variable" could be omitted, like this:                               <--- ***

        functionName(arguments)

    - TypeScript when meets a function whose "Type Variable" is omitted 
      search for omitted type with "Type Inference".                                <--- ***
`, '\n')


// 1. 'identity' function implemented as a generic.
const identity = <T>(n: T): T => n

// function (n) { return n; }
console.log('identity:\n\n\t%s', identity, '\n')

console.log(
    identity<boolean>(true),    // true: Fundamentally, Type Variable should be specified.
    identity(true),             // true: Type Inference
    '\n'
)



console.groupEnd()



