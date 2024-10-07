console.clear()
console.group("src/06-1/sample5-1.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

5. "Iterable<T>" & "Iterator<T>" interface

(1) TypeScript could apply "Iterator<T>" & "Iterable<T>" generic interfaces
    to the "iterator provider" (= "iterable").                                          <--- ***

    - "Iterable<T>" interface notifies that the implementation class provides
       definitely "[Symbol.iterator]" method.                                   <--- ***

        class ImplementationClassName implements "Iterable<GeneratedValueType>" {}      // ①

    - "Iterator<T>" inteface clarifies the type of a value that "iterator" generates.   <--- ***

        [Symbol.iterator](): "Iterator<GeneratedValueType>" {}                          // ②
`, '\n')


// 1. The following codes are example that "iterator provider"(= "iterable") implemented
//    by using "Iterable<T>" & "Iterator<T>" interfaces that TypeScript provides.

export
class StringIterable implements Iterable<string> { // "iterator provider" (= "iterable")
    // "Iterable<T>" interface notifies
    // that the implementation class provides definitely "[Symbol.iterator]" method.        <--- ***

    constructor(private strings: string[] = [], private currIndex: number = 0) {}

    // "Iterator<T>" inteface clarifies the type of a value that "iterator" generates.      <--- ***
    [Symbol.iterator](): Iterator<string> {
        console.debug("* StringIterable::[Symbol.iterator]() invoked.", '\n')

        const that = this   // JavaScript Trick. (***)

        // "Iterator<T>" inteface clarifies the type of a value that "iterator" generates.  <--- ***
        const iterator: Iterator<string> = { // "iterator"
            next(): { value: string, done: boolean } {
                console.debug("\t+ iterator::next() invoked.")

                const value = ( that.currIndex < that.strings.length )? that.strings[ that.currIndex++ ] : undefined
                const done  = ( value == undefined )
                console.log("\t  %s", { value, done })

                return { value, done }
                // return { value: value, done: done }
            } // next
        } // iterator

        return iterator
    } // [Symbol.iterator]
} // end class


/*
    StringIterable:

    // void 0 == undefined == null, void 0 != NaN != Infinity
    function StringIterable(strings, currIndex) {
        if (strings === void 0) { strings = []; }
        if (currIndex === void 0) { currIndex = 0; }
        this.strings = strings;
        this.currIndex = currIndex;
    }
*/
console.log("StringIterable:\n\n%s", StringIterable)


console.groupEnd()


