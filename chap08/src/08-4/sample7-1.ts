console.clear()
console.group("src/08-4/sample7-1.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

1. "compose" Function

(1) The "compose" function receives an "Array" of functions through variant arguments style at first.
    Next, combine with the "functions" in the "Array", 
    and returns "1st-Order Functions" having "x" parameter.

    - Thus, "compose" Function is a "2nd-Order Function".
`, '\n')


// -----------------------------
// 1. Let's declare "compose" function.
// -----------------------------
    
// -----------------------------------------
// Array<Function>.reduce<any>(
//      callbackfn: (previousValue: any, currentValue: Function, currentIndex: number, array: Function[]) => any,
//      initialValue: any
// ): any
// -----------------------------------------
// Calls the specified "callback" function for all the elements in an "Array".
// The "return value" of the "callback" function is the "*accumulated*" result, 
// and is provided as an "argument" in the "*next call*" to the "callback" function.
// @param "callbackfn"   - A "function" that accepts up to "*four*" arguments.
//                         The "reduce" method calls the "callbackfn" function "one" time for "*each*" element in the array.
// @param "initialValue" - If initialValue is specified, it is used as the "initial value" to start the "accumulation".
//                         The "*first*" call to the "callbackfn" function provides this value as an "argument"
//                         instead of an array value.
// -----------------------------------------

//                                                        ReturnType       Declare a New Function
//                                                        ----------   -----------------------------
//                                                                       ReturnType: Function Signature
//                                                                       ( "map" function: (T -> R) ) <--- ***
// High(2nd)-Order function                                                     -------------
export
const compose = <T, R>(...functions: readonly Function[]): Function  => (x: T): (t: T)  =>  R  => {
    console.debug("* compose(functions: %s, x: %s) invoked.", functions, x, '\n')

    const deepCopiedFunctions = [ ... functions ]   // Deep Copy of an Array.
    return deepCopiedFunctions.reverse().reduce( (value, func) => func(value), x )
} // compose

// -----------------------------------------

/*
    1. compose:

    function () {
        var functions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            functions[_i] = arguments[_i];
        }
        return function (x) {
            var deepCopiedFunctions = __spreadArray([], __read(functions), false);
            return deepCopiedFunctions.reverse().reduce(function (value, func) { return func(value); }, x);
        };
    }
*/
console.log("1. compose:\n\n%s", compose, '\n')



console.groupEnd()

