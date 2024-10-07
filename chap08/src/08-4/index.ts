console.clear()
console.group("src/08-4/index.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

0. Background

(1) "Function Composition" is the program design technique that
     It combines several times with functions which implements small features 
     to make more useful functions.                                                     <--- ***

    - Programming languages supported for "Function Composition"
      provides or could make "compose" or "pipe" functions.

    - In previous, If functions: f, g, h provided and the "arity" of all these is "1",
      You can do chain all these functions like the following:

            x ~> f ~> g ~> h ~> y
`, '\n')


// -----------------------------
// 1. When all functions which have 1 arity can be chained like the following:
// -----------------------------

export
const f = <T>(x: T): string => `f(${x})`

export
const g = <T>(x: T): string => `g(${x})`

export
const h = <T>(x: T): string => `h(${x})`


console.log("1. f: %s", f, '\n')    // function (x) { return "f(".concat(x, ")"); }
console.log("2. g: %s", g, '\n')    // function (x) { return "g(".concat(x, ")"); }
console.log("3. h: %s", h, '\n')    // function (x) { return "h(".concat(x, ")"); }


// -----------------------------
// 2. Using all above functions, 
//    We will declare "compose" & "pipe" functions to make the following fomula:
//      
//      y = h( g( h( x ) ) )
// -----------------------------

// Go to Next Clause ....



console.group()



