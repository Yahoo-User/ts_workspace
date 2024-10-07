console.clear()
console.group("src/05-2/sample18-3.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

5. "filter": Filtering only items satisfied with a provided condition

(3) Conversion Between Primitive Types.
`, '\n')


// -------------------------
// 1. number -> string
// -------------------------
let num1: number = 3.14159
let str1: string = null

// error ts(2322) - Type 'number' is not assignable to type 'string'.
// str1 = num1                              // XX

// error ts(2352) - Conversion of type 'number' to type 'string' may be a mistake
//                  because neither type sufficiently overlaps with the other.
//                  If this was intentional, convert the expression to 'unknown' first.
// str1 = <string> num1                     // XX

str1 = num1.toString()                   // OK
// str1 = num1.toPrecision()                // OK
// str1 = num1.toLocaleString()             // ??: 3.14159 -> 3.142

// error ts(2322) - Type 'number' is not assignable to type 'string'.
// str1 = Number(num1)                      // XX

// str1 = Number(num1).toString()           // OK

// error ts(2322) - Type 'Number' is not assignable to type 'string'.
// str1 = new Number(num1)                  // XX

// str1 = new Number(num1).toPrecision()    // OK

console.log('num1: %d, str1: %s', num1, str1)


// -------------------------
// 2. string -> number
// -------------------------

let str2: string = "3.14159"
let num2: number = -1


// error ts(2322) - Type 'string' is not assignable to type 'number'.
// num2 = str2                          // XX

// error ts(2352) - Conversion of type 'string' to type 'number' may be a mistake
//                  because neither type sufficiently overlaps with the other.
//                  If this was intentional, convert the expression to 'unknown' first.
// num2 = <number> str2                 // XX

// num2 = parseFloat(str2)              // OK
// num2 = parseInt(str2)                // ?? : "3.14159" -> 3

// num2 = Number.parseFloat(str2)       // OK
// num2 = Number.parseInt(str2)         // ?? : "3.14159" -> 3

// error ts(2322) - Type 'Number' is not assignable to type 'number'.
//                  'number' is a primitive, but 'Number' is a wrapper object.
//                  Prefer using 'number' when possible.
// num2 = new Number(str2)              // XX

num2 = new Number(str2).valueOf()    // OK


console.log('num2: %d, str2: %s', num2, str2)


// -------------------------
// 3. string -> boolean
// -------------------------

let str3: string = "true"
let bool3: boolean = false


// bool3 = Boolean(str3)                    // OK
// bool3 = Boolean(str3).valueOf()          // OK

// error ts(2322) - Type 'Boolean' is not assignable to type 'boolean'.
//                  'boolean' is a primitive, but 'Boolean' is a wrapper object.
//                  Prefer using 'boolean' when possible.
// bool3 = new Boolean(str3)                // XX

// bool3 = new Boolean(str3).valueOf()      // OK


console.log('bool3: %s, str3: %s', bool3, str3)


// -------------------------
// 4. boolean -> string
// -------------------------

let str4: string = null
let bool4: boolean = true


// error ts(2322) - Type 'boolean' is not assignable to type 'string'.
// str4 = bool4                         // XX

// error ts(2352) - Conversion of type 'boolean' to type 'string' may be a mistake 
//                  because neither type sufficiently overlaps with the other.
//                  If this was intentional, convert the expression to 'unknown' first.
// str4 = <string> bool4                // XX

str4 = String(bool4)                 // OK
// str4 = String(bool4).toString()      // OK
// str4 = String(bool4).valueOf()       // OK

// error ts(2322) - Type 'String' is not assignable to type 'string'.
//                  'string' is a primitive, but 'String' is a wrapper object.
//                  Prefer using 'string' when possible.
// str4 = new String(bool4)             // XX

// str4 = new String(bool4).valueOf()   // OK
// str4 = new String(bool4).toString()  // OK


console.log('bool4: %s, str4: %s', bool4, str4)



console.groupEnd()


