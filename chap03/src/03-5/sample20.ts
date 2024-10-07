console.clear()
console.group("src/03-5/sample20.ts")

// *****************************************
// 03-5. Type Conversion Between Objects
// *****************************************
// 1. Type Conversion: Converting `A` typed variable's value into `B` typed variable's value. (***)
//      - `type conversion` includes `type casting` & `type coercion`
//      - The above 3 terms mean a thing equally.
// 2. `object` type don't have any properties. (***)
// 3. Explicit Type Conversion Symbol: `< targetType >` variable (***)

console.log()
console.log('--------------------------------------------')
console.log('03-5. Type Conversion Between Objects')
console.log('--------------------------------------------')
console.log()


let person: object = { name: "Yoseph", age: 23 }

console.log(person); console.table(person)      // { name: 'Yoseph', age: 23 }

// error TS2339: Property 'name' does not exist on type 'object'.
// console.log(person.name)                     // XX (***)

// -----------------------------------------

// Resolution of the above error with `Type Conversion`.

console.log()

console.log(

      // ---- Explicit Type Conversion ---- //
        //-- Anonymous Interface --//
    ( < { name: string, age: number } > person ).name,          // OK : Yoseph
      //- Explicit Type Conversion -//
    ( <   { name: string }   >  person ).name,                  // OK : Yoseph

    // Property 'name' does not exist on type '{ age: number; }'.ts(2339)
    // ( < { age: number } > person).name,                      // XX

      // ---- Explicit Type Conversion ---- //
    ( < { name: string, age: number } > person ).age,           // OK : 23
      //- Explicit Type Conversion -//
    ( <   { age: number }   >   person ).age,                   // OK : 23

    // Property 'age' does not exist on type '{ name: string; }'.ts(2339)
    // ( < { name: string } > person).age                       // XX

)   // Yoseph Yoseph 23 23




console.groupEnd()


