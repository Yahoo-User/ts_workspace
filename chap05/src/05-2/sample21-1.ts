console.clear()
console.group("src/05-2/sample21-1.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

8. "map": Processing Array Data

(1) To solve a problem, "1² + 2² + ... + 100² = ?"
    - We need a function which process '[ 1, 2, ... ]' into '[ 1*1, 2*2, ... ]'.
    - To implement this feature, "map" named function acquired.

(2) In mathmatical, "map" means the operation that converts one value to the other value.       <--- ***
    - Mathmatical symbol of "map" : 'x ~> y'
    - If thinking of types of variables, 'x' and 'y',
      Consider that types of I/O variables could be different like 'x: T ~> y: Q'.              <--- ***
`, '\n')


// 1. Implementing "map" function in way of "Imperative Programming" :

// Target opertation: Input type, 'T' -- Through "map" function --> Output type, 'Q'.
// To implement a "map" function for target operation above.

export
const map = <T, Q>(array: T[], callback: (item: T, index?: number) => Q): Q[] => {
    let result: Q[] = []

    // ----------------
    // 1st. method
    // ----------------
    for(let index = 0; index < array.length; index++) {
        const item = array[index]
        result = [ ... result, callback(item, index) ]
    } // classical for

    // ----------------
    // 2nd. method
    // ----------------
    // for(let item of array) {
    //     result = [ ...result, callback(item) ]
    // } // for...of

    // ----------------
    // 3rd. method == 1st. method (***)
    // ----------------
    // for(let index in array) {       // index: string        <--- ***
    //     let item = array[index]
    //     result = [ ... result, callback(item, Number(index)) ]
    // } // for...in

    return result
} // map


/*
    map:

    function (array, callback) {
        var result = [];
        for (var index = 0; index < array.length; index++) {
            var item = array[index];
            result = __spreadArray(__spreadArray([], __read(result), false), [callback(item, index)], false);
        } // classical for
        return result;
    }
*/
console.log('map:\n\n%s', map)



console.groupEnd()


