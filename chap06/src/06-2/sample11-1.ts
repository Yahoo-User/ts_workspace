console.clear()
console.group("src/06-2/sample11-1.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

6. "yield returnValue"

(1) "yield" operator returns a value.
    - This operator returns an "argument" of the "Iterator<T>.next" method
      which invoked "previously".       <--- ***
`, '\n')


// Declare a "generator" ("iterable", "iterator provider")

export
function* gen() {   // "generator" ("iterable", "iterator provider")
    console.debug("* gen() invoked.", '\n')   // invoked *ONCE*

    let count = 5
    let yieldReturnValue = 0

    while(count--) {
        // "yield" returns an "argument" of the "Iterator<T>.next" method
        // that invoked "previously". <--- ***
        yieldReturnValue = yield `You passed ${yieldReturnValue}`

        console.log('\t+ yieldReturnValue:', yieldReturnValue)
    } // while

    console.log('\n\b', "* Done.", '\n')
} // gen


/*
    gen:

    function gen() {
        var count, select;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.debug("gen() invoked.", '\n');
                    count = 5;
                    select = 0;
                    _a.label = 1;
                case 1:
                    if (!count--) return [3 /break/, 3];
                    return [4 /yield/, "You select ".concat(select)];
                case 2:
                    // put a value which "yield" returns into "select" variable.
                    select = _a.sent();
                    return [3 /break/, 1];
                case 3:
                    console.log("Done.", '\n');
                    return [2 /return/];
            } // switch
        }); // __generator
    } // gen
*/
console.log("gen:\n\n%s", gen, '\n')


// Test "generator"

// ------------------
// 1. Using "gen()" function itself.
// ------------------
console.log("- 1 ------------", '\n')

for(let value of gen())
    console.log(value)

// ------------------
// 2. Using "iterator" returned by "gen()" function.
// ------------------
console.log("- 2 ------------", '\n')

const iterator = gen()
for(let value of iterator)
    console.log(value)

// ------------------
// 3. Using the "next" method of the "iterator" which "gen()" returns.
// ------------------
console.log("- 3 ------------", '\n')

const iterator2 = gen()

while(1) {  // Infinite loop
    // Whenever invoking "Iterator<T>.next" method without an argument,
    // No passed argument to the "yield" statement inside the "generator"(= "iterable", "iterator provider").   <--- ***
    // let { value, done } = iterator2.next()               // OK

    // Whenever invoking "Iterator<T>.next" method with an argument, "100"
    // The argument passed to the "yield" statement inside the "generator"(= "iterable", "iterator provider").  <--- ***
    let { value, done } = iterator2.next( 100 )          // OK

    // error ts(2345) - Type 'number[]' is not assignable to type 'number'.
    // let { value, done } = iterator2.next( [1, 2, 3 ] )      // XX

    if(done) break
    console.log(value)
} // while

// -----------------------------------------

export
// ts(1354) - 'readonly' type modifier is only permitted on "array" and "tuple literal" types.
const random = (max: number, min: number = 0) => Math.round( Math.random() * (max - min) ) + min

/*
    random:

    function (max, min) {
        // void 0 == undefined == null, but != NaN != Infinity
        if (min === void 0) { min = 0; }

        return Math.round(Math.random() * (max - min)) + min;
    }
*/
console.log("random:\n\n%s", random, '\n')

// Test Code.
console.log('* Test a "random" function.', '\n')
let randomNumber: number = random(45, 1)
console.log(randomNumber, '\n')


console.groupEnd()


