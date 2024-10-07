console.clear()
console.group("src/06-2/sample9-1.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

4. Implementing a "generator" that acts as a "iterable" (== "iterator generator") method

(1) In 06-1, We implement "StringIterable" class as a "iterable" (= "iterator provider").

(2) Then, "generator" acts as an "iterable"(= "iterator generator").    <--- ***
    - Thus if using "generator", We could implements "StringIterable" very easily.
`, '\n')


// 1. Declare class which acts an "iterable" (= "iterator provider")
//    - Class have a "[Symbol.iterator]" method declared using "function*" keyword ("generator")
//    - Inside a "generator", "yield" keyword used to provide an "iterator".

export
class IterableUsingGenerator<T> implements Iterable<T> {

    constructor(private values: readonly T[], private currIndex: number = 0) {}

    // Caution: *NOT* allowed, "function* [Symbol.iterator]() {}"
    //          Thus, surely "[Symbol.iterator] = function* () {}" required.            <--- ***

    // error ts(2349) - This expression is not callable.
    //                  Type 'symbol[]' has no call signatures.
    // function* [Symbol.iterator]() {}     // XX

    // ---------------------------------

    // ts(2301) - Initializer of instance member variable '[Symbol.iterator]'
    //            cannot reference identifier 'currIndex', 'values' declared in the constructor.    <--- ***
    [Symbol.iterator] = function* () {  // "generator" == "iterable" == "iterator generator"
        console.debug("[Symbol.iterator]() invoked.", '\n')

        /*
            this:

            IterableUsingGenerator {
                values: [Array],
                currIndex: 0,
                [Symbol(Symbol.iterator)]: [Function (anonymous)]
            }
        */
        // console.log('\t+ this:\n\n%s', this, '\n')

        while(this.currIndex < this.values.length) {
            // "yield" is like an operator and makes & returns an "iterator" properly.  <--- ***
            // "yield" acts as an "iterable" (= "iterator provider").                   <--- ***
            yield this.values[this.currIndex++]
        } // while
    } // [Symbol.iterator]

} // end class


/*
    IterableUsingGenerator:

    function IterableUsingGenerator(values, currIndex) {
        if (currIndex === void 0) { currIndex = 0; }
        this.values = values;
        this.currIndex = currIndex;

        this[_a] = function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.debug("[Symbol.iterator]() invoked.");
                        _b.label = 1;
                    case 1:
                        if (!(this.currIndex < this.values.length)) return [3 /break/, 3];
                        return [4 /yield/, this.values[this.currIndex++]];
                    case 2:
                        _b.sent();
                        return [3 /break/, 1];
                    case 3: return [2 /return/];
                }
            });
        };
    }
*/
console.log("IterableUsingGenerator:\n\n%s", IterableUsingGenerator, '\n')






console.groupEnd()


