console.clear()
console.group("src/06-2/sample8-1.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

3. "yield" Keyword

(1) "yield" statement could be used inside a "generator" function.      <--- ***
    - This acts as a "operator". (***)
    - This have the following two features;
        a. make an "iterator" properly.                                 <--- ***
        b. also play a role in "iterator provider"(= "iterable").       <--- ***
`, '\n')


// Using "function*" keyword, declare a "rangeGenerator" function as a "generator".

export
// *** ts(1354): 'readonly' type modifier is only permitted
//                on ① "array" and ② "tuple literal" types.
function* rangeGenerator(from: number, to: number) {                // "generator"
    console.debug("* rangeGenerator(%d, %d) invoked.", from, to, '\n')

    let value = from

    while(value < to)
        yield value++

    console.log(); console.log("* Done(value: %d).", value, '\n')
} // rangeGenerator


/*
    rangeGenerator:

    function rangeGenerator(from, to) {
        var value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.debug("* rangeGenerator(%d, %d) invoked.", from, to);
                    value = from;
                    _a.label = 1;
                case 1:
                    if (!(value < to)) return [3 /break/, 3];
                    return [4 /yield/, value++];
                case 2:
                    _a.sent();
                    return [3 /break/, 1];
                case 3:
                    console.log("\tDone(value: %d).", value);
                    return [2 /return/];
            }
        }); // __generator
    } // rangeGenerator
*/
console.log("rangeGenerator:\n\n%s", rangeGenerator, '\n')


console.groupEnd()


