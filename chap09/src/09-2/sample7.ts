console.clear()
console.group("src/09-2/sample7.ts")

console.debug(`
***********************************************************
* 09-2. Basic Usage of "ramda"                            *
***********************************************************

4. "Pointless" Function

(1) "ramda" library provides over 200+ functions,
    but in the form of almost "2rd-order" functions.                            <--- ***

    - In chap08, "High-Order Function" could be used as "Pointless Function". 

(2) As mentioned before, "ramda" library is *NOT* made for "TypeScript".

    - Thus, Because that "Pointless Function" is "unfamiliar", 
      If a general "Arrow Function" applied to the "R.pipe",
      then an exception occurred.                                               <--- ***

      ○ 1st. resolution: By "Type Assertion"
      ○ 2nd. resolution: By "Method Reference"

    - As a result, Making "Pointless Fnction" like "dump" is the method 
      *NOT* to count on unnecessary TypeScript exception                        <--- ***
`, '\n')


// -----------------------------
// 1. Functions in "ramda" library used as a "Pointless Function".
// -----------------------------

import * as R from "ramda"


export
const dump1 = R.pipe( R.tap(console.log) )

// -----------------------------------------

dump1({ name: "Yoseph", age: 23 })               // OK, { name: 'Yoseph', age: 23 }
dump1([ 1, 2, 3, 4, 5, 6, 7 ])                   // OK, [ 1, 2, 3, 4, 5, 6, 7 ]
dump1(R.range(1, 7 + 1))                         // OK, [ 1, 2, 3, 4, 5, 6, 7 ]

// dump([ 1, 2, 3 ], { name: "Yoseph", age: 23 })  // XX, Expected 1 arguments, but got 2.ts(2554)


// -----------------------------
// 2. Apply "Arrow Function", *NOT* "Pointless Function" to the "R.pipe".
// -----------------------------

// error TS2740: Type '{}' is missing the following properties from type 'T[]': 
//               length, pop, push, concat, and 29 more.
// export
// const dump2 = <T>(array: T[]): T[] => R.pipe(R.tap(o => console.log(o)))(array)

// dump2([ 1, 2, 3 ])      // XX

// -----------------------------------------

// For the above error's resolsution, We require "Type Assertion" mention in "chap03".          <--- ***
export

// 1. By `Type Assertion`, R.pipe(..)(array) => `any`  ---> R.pipe(..)(array) => `T[]`
// const dump2 = <T>(array: T[]): T[] => R.pipe(R.tap(o => console.log(o)))(array) as T[]  // OK

// 2. By `Method Reference`, R.pipe(..)(array) => `any` is OK
const dump2 = <T>(array: T[]) => R.pipe( R.tap(console.log) )(array)                    // OK

dump2([1, 2, 3])                                // OK, [ 1, 2, 3 ]



console.groupEnd()


