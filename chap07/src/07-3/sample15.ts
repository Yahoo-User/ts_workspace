console.clear()
console.group("src/07-3/sample15.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

4. The meanning of a value which "async" Function returns

(1) "async" function returns a "value".

    - If return type is "primitive", the returned "primitive" value converted
      to the "Promise { primitive value }" object at this moment.           <--- ***

    - If return type is "Promise", the returned "Promise" object converted
      to the "Promise { <pending> } object at this moment.                  <--- ***

    - Thus, With invoking "Promise.then" method,
      You could get the return value of the "async" function.               <--- ***
`, '\n')


const asyncReturnValue = async () => {
    console.debug("async () invoked.")

    // ------------------------------------------------------------
    // 1. If "async" function returns a "primitive" value,
    //    then it's converted to a "Promise { primitive value }" object.    <--- ***
    // ------------------------------------------------------------

    // A returned "primitive" value -> "Promise { primitive value }" object.

    return [ 1, 2, 3 ]                                      // (1) Promise { [Array] }
    // return true                                             // (2) Promise { true }

    // ------------------------------------------------------------
    // 2. If "async" function returns a "Promise" object,
    //    then it's converted to a "Promise { <pending> }" object.          <--- ***
    // ------------------------------------------------------------

    // A returned "Promise" object -> "Promise { <pending> }" object.

    // return Promise.resolve(true)                         // (3) Promise { <pending> }
    // return Promise.reject("REJECTED").catch(err => err)  // (4) Promise { <pending> }
} // "async" function

// -----------------------------------------

/*
    asyncReturnValue:

    function () { 
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /return/, [1, 2, 3] ];        // (1) Promise { [Array] }
            });
        }); 
    } // anonymous function == function expression -> first-class function
*/
console.log("asyncReturnValue:\n\n%s", asyncReturnValue, '\n')

// -----------------------------------------

let result = asyncReturnValue()
console.log("result: %s", result, '\n')         // result: Promise { [Array] }

// -----------------------------------------

asyncReturnValue().
    then((value) => console.log(value, '\n'))   // [ 1, 2, 3 ]



console.groupEnd()



