console.clear()
console.group("src/08-4/sample8-1.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

2. "pipe" Function

(1) The "order" of translating parameters of "pipe" function is reverse
    against "compose" function.                                             <--- ***

(2) The "pipe" function returns the same result of "compose" function
    without reverse order of a parameter.                                   <--- ***
`, '\n')


// -----------------------------
// 1. Declare a "pipe" function that there is *NO* reverse of parameter, NOT like "compose".
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
//
// @param "callbackfn"   - A "function" that accepts up to "*four*" arguments.
//                         The "reduce" method calls the "callbackfn" function "one" time for "*each*" element in the array.
// @param "initialValue" - If initialValue is specified, it is used as the "initial value" to start the "accumulation".
//                         The "*first*" call to the "callbackfn" function provides this value as an "argument"
//                         instead of an array value.
// -----------------------------------------

export
const pipe = <T, R>(...functions: readonly Function[]): Function => (x: T): (t: T) => R => {
    console.debug("* pipe(functions: %s, x: %s) invoked.", functions, x, '\n')
    return functions.reduce( (value, func) => func(value), x )  // No "reverse" of "functions".
} // pipe

/*
    pipe:

    function () {   // High-Order Function, (2nd-Order)
        var functions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            functions[_i] = arguments[_i];
        }

        return function (x) {   // 1st-order function returns a value(= Scalar)
            console.debug("* pipe(functions: %s, x: %s) invoked.", functions, x);
            return functions.reduce(function (value, func) { return func(value); }, x); // No "reverse" of "functions".
        };
    } // anonymouse function == function expression == first-class function
*/
console.log("pipe:\n\n%s", pipe, '\n')



console.groupEnd()

