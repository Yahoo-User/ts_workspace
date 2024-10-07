console.clear()
console.group("src/03-1/sample5.ts")

// *****************************************
// 03-1. `undefined` Type
// *****************************************
// Type of *NO* initialized variable is `undefined`.
// `undefined` key word is a `Type` keyword, also `value`. (***)

console.log()
console.log('--------------------------------------------')
console.log('03-1. `undefined` Type')
console.log('--------------------------------------------')
console.log()


let u: undefined = undefined        // OK: 1st. `undefined`: type, 2nd. `undefined`: value
console.log('1. u:', u)

// error TS2322: Type '1' is not assignable to type 'undefined'.
// u = 1                               // XX : If type determined by initial value, type cannot be changed. (***)
// console.log('2. u:', u)




console.groupEnd()

