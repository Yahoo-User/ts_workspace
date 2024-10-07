console.clear()
console.group("src/06-2/sample10-1.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

5. "yield*" Keyword

(1) TypeScript provides "yield*" keyword.
    - "yield" simply acts against a value.                          <--- ***
    - "yield*" acts against other ① "generator" or an ② "Array".    <--- ***
`, '\n')


function* gen12() { // "generator" ("iterable", "iterator provider")
    console.debug("* gen12() invoked.", '\n')   // invoked *ONCE*

    // "yield" statement simply provides a value.

    yield 1     // simply returns a value and stopped, resumed by "for...of".
    yield 2     // simply returns a value and stopped, resumed by "for...of".

    console.log("* Done.", '\n')
} // gen12


/*
    gen12:

    function gen12() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.debug("* gen12() invoked.", '\n');

                    // "yield" statement simply provides a value.
                    return [4 /yield/, 1];  // Simple returns a value
                case 1:
                    // "yield" statement simply provides a value.
                    _a.sent();              // Simple returns a value
                    return [4 /yield/, 2];  // Simple returns a value
                case 2:
                    _a.sent();              // Simple returns a value
                    console.log("* Done.", '\n');
                    return [2 /return/];
            } // switch
        }); // __generator
    } // gen12
*/
console.log("gen12:\n\n%s", gen12, '\n')

// -----------------------------------------

// Declare a "generator" that creates five values (1, 2, 3, 4, 5)
//  - This using "yield*" keyword invokes other "generator",
//    "gen12" function which provides 1, 2 values.
//  - This using "yield *" provides values 3, 4 in the Array .
//  - last value, 5 using simple "yield" statement.
export
function* gen12345() { // "generator" ("iterable", "iterator provider")
    console.debug("* gen12345() invoked.", '\n')   // invoked *ONCE*

    // "yield*" statement acts against other "generator" or an "Array".

    yield* gen12()      // Invoke a "generator".
    yield* [ 3, 4 ]     // Returns each item in an "Array" and stopped, resumed by "for...of".
    yield 5             // Returns a value simply and stopped, resumed by "for...of".

    console.log("* Done.", '\n')
} // gen12345


/*
    gen12345:

    function gen12345() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.debug("* gen12345() invoked.", '\n');

                    // "yield*" statement acts against other "generator" or an "Array".
                    return [5 /yield*, __values(gen12())];  // Invoke a "generator"
                case 1:
                    // "yield*" statement acts against other "generator" or an "Array".
                    _a.sent();                              // Invoke a "generator"
                    return [5 /yield*,                      // Invoke a "generator"
                        __values([3, 4])];                  // Returns an "Array"
                case 2:
                    _a.sent(); // Returns an "Array"
                    return [4 /yield/, 5];                  // Returns a value Simplely
                case 3:
                    _a.sent();                              // Returns a value Simplely
                    console.log("* Done.", '\n');
                    return [2 /return/];
            } // switch
        }); // __generator
    } // gen12345
*/
console.log("gen12345:\n\n%s", gen12345, '\n')


console.groupEnd()


