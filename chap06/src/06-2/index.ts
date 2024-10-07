console.clear()
console.group("src/06-2/index.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

0. Background

(1) ESNext JavaScript & TypeScript provide "yield" keyword.

    - "yield" : Like "return" keyword, returns a value.             <--- ***
    
(2) "yield" keyword could be surely invoked *ONLY*
    inside the function that uses "function*" keyword.              <--- ***

(3) "Generator": function made by using the "function*" keyword.    <--- ***
`, '\n')


// "Generator" Function Example.

export
function* generator() { // generator (***)
    console.debug("* generator() invoked.", '\n')     // once invoked.

    let value = 1

    while(value < 4) {
        // "yield" returns a value like "return" keyword.               (***)
        // "yield" keyword surely invoked *ONLY* inside "generator".    (***)
        console.log(`\t+ value by "yield" : ${value}`)
        yield value++
    } // while

    console.log('\n\b', `\t+ Done(value: ${value}).`) // once invoked.
} // generator


// generator:
//
// function generator() {
//     var value;
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0:
//                 console.debug("generator() invoked.");
//                 value = 1;
//                 _a.label = 1;
//             case 1:
//                 if (!(value < 4)) return [3 /*break*/, 3];
//                 return [4 /*yield*/, value++];
//             case 2:
//                 _a.sent();
//                 return [3 /*break*/, 1];
//             case 3:
//                 console.log("\t+ Done(value: %d).", value);
//                 return [2 /*return*/];
//         }
//     });
// }
console.log("generator:\n\n%s", generator, '\n')

// -----------------------------------------

// 2. Test codes for "generator"

// Interestingly, it shows the output the same as "for...of" statement for an Array. (***)

for(let value of generator()) { // "generator" invoked *ONCE*
    // But "yield" inside the "generator" invoked each loop.   <--- ***
    console.log(value)              // 1 2 3
} // for...of

console.log()


console.groupEnd()



