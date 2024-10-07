console.clear()
console.group("src/09-1/sample3.ts")

console.debug(`
***********************************************************
* 09-1. Introduce "ramda" Library                         *
***********************************************************

3. Imports "ramda" package

(1) In general, TypeScript sources import "ramda" package and this package used with symbol, "R" 
    like the following:

        import * as R from "ramda"

    - The above import form packages all "unused" functions in "ramda" library,
      Thus This causes to grow size of ES5 JavaScript codes.                            <--- ***

(2) When developing an application, use "R.range".
    But When deploy after deveopment completion, it's recommended like the following:
    
        import { range } from "ramda"

    - The above manner, it packages the *ONLY*  "range" function in "ramda" library,
      then The size of ES5 JavaScript codes could be reduced.                           <--- ***
`, '\n')


// -----------------------------
// 1. Import all functions package with symbol in "ramda" library
// -----------------------------

import * as R from "ramda";

/*
    R.add:

    function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;

            case 1:
                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
                    return fn(a, _b);
                });

            default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
                    return fn(_a, b);
                }) : _isPlaceholder(b) ? _curry1(function (_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        } // switch
    } // f2
*/
console.log("R.add:\n\n%s", R.add, '\n')


// -----------------------------
// 2. Import Only "range" function in "ramda" library.
// -----------------------------

import { range } from "ramda"

/*
    range:

    function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;

            case 1:
                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
                    return fn(a, _b);
                });

            default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
                    return fn(_a, b);
                }) : _isPlaceholder(b) ? _curry1(function (_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        } // switch
    } // f2
*/
console.log("range:\n\n%s", range, '\n')        // OK

// error TS2304: Cannot find name 'add'.
// console.log("add:\n\n%s", add, '\n')            // XX


console.groupEnd()


