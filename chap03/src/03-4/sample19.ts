console.clear()
console.group("src/03-4/sample19.ts")

// *****************************************
// 03-4. Spread Operator
// *****************************************
// 1. ESNext & TypeScript provides rest operator. (...)
// 2. This operator called `Rest Operator` or `Spread Operator`,
//    According to the location of the operator.
// 3. `...` operator used *with* `De-structuring Assignment` called, `Rest Operator`.       (***)
// 4. `...` operator used *without* `De-structuring Assignment` called, `Spread Operator`   (***)
// 5. `Spread Operator` makes new object by spreading all properties of the targer objects. (***)

console.log()
console.log('--------------------------------------------')
console.log("03-4. Spread Operator")
console.log('--------------------------------------------')
console.log()


// `...` operator used as `Spread Operator`.
let coord = { ... { x: 0}, ... { y: 0} }    // Without `De-structuring Assignment` (***)

console.log(coord); console.table(coord)    // { x: 0, y: 0 }

// -----------------------------------------

let part1 = { name: "jane" }, part2 = { age: 23 }, part3 = { city: 'Seoul', country: 'KR' }
let mergedObj = { ...part1, ...part2, ...part3 }

console.log()
console.log(part1); console.log(part2); console.log(part3)

console.log(mergedObj); console.table(mergedObj)    // { name: 'jane', age: 23, city: 'Seoul', country: 'KR' }




console.groupEnd()


