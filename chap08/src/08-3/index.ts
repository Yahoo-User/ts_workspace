console.clear()
console.group("src/08-3/index.ts")

console.debug(`
******************************************
* 08-3. High-order Function & Curry      *
******************************************

0. Background

(1) The "count" of "parameters" is called, "arity".                         <--- ***

    - Example:
        a. f()      :   0 arity
        b. f(x)     :   1 arity
        c. f(x, y)  :   2 arity

(2) If all functions, "f", "g", "h" have "1 arity" equally,
    These could be used with connection like the following:

        x ~> f ~> g ~> h ~> y                                               <--- ***

    - This could be expressed in "mathematics" like the following:

        y = h( g( f( x ) ) )                                                <--- ***

(3) In "Functional Programming",
    The "composition" of "functions": "f", "g", "h" makes a *NEW* function 
    using "compose" or "pipe" functions 
    in the form of "compose(h, g, f)" or "pipe(f, g, h)".                   <--- ***

(4) To understand principle of the "compose" or "pipe" functions,
    Understand what "high-order function" is, in first.                     <--- ***
`, '\n')



console.group()




