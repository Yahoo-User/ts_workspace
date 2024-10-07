console.clear()
console.group("src/03-1/sample4.ts")

// ********************************
// 03-1. `Any` Type
// ********************************
// TypeScript provides `Any` type to be compatible with JavaScript.

console.log()
console.log('--------------------------------------------')
console.log('03-1. `Any` Type')
console.log('--------------------------------------------')
console.log()


let a: any = 0                  // `Any` Type Annotation.

a = "Yoseph"                    // OK: `string` assigned.
console.log('1. a:', a, ', typeof a:', typeof a)

a = true                        // OK: `boolean` assigned.
console.log('2. a:', a, ', typeof a:', typeof a)

a = {}                          // OK: `object` assigned.
console.log('3. a:', a, ', typeof a:', typeof a)

a = { name: "Yoseph", age: 23 } // OK: `object` assigned with properties - name, age
console.log('4. a:', a, ', typeof a:', typeof a)


console.groupEnd()

