console.clear()
console.group("src/03-5/sample21-1.ts")

// *****************************************
// 03-5. Type Assertion (== Type Conversion)
// *****************************************
// 1. In TypeScript, `Type Conversion` called, `Type Assertion`. (***)
// 2. 2-Way syntax of `Type Assertion`:
//      (1) ( <targetType> referenceVariable )
//      (2) ( referenceVariable as targetType ) 
//
//    * These all *NOT* `ES5` statements. (***)
//      So To distinguish from JavaScript `type conversion`, used `Type Assertion`.

console.log()
console.log('--------------------------------------------')
console.log('03-5. Type Assertion - 1')
console.log('--------------------------------------------')
console.log()


export default 
interface INameable {
    name: string
    
} // end interface

console.log("Declared `INameable` Interface & Export this by `export default`.", '\n')



console.groupEnd()

