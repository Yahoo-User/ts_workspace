console.clear()
console.group("src/07-3/index.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

0. Background

(1) In 2013, Microsoft releases C# 5.0 and "async/await" sentence
    that implements asynchronous programming code swiftly concisely.

    - After that, many programming languages including "JavaScript" & "TypeScript"
      adopt this "async/await" sentence.
`, '\n')


// The following code shows the usage of "async/await" sentence.

const asyncAwaitTest = async () => {
    console.debug("* asyncAwaitTest() invoked.", '\n')

    // ----------------
    // 1st. method
    // ----------------

    // "Promise.resolve" method: Creates a new "resolved" promise for the provided "value". (***)
    const value1: number = await Promise.resolve(1)
    console.log(value1, '\n')       // 1


    // ----------------
    // 2nd. method
    // ----------------

    const value2: Promise<number> = Promise.resolve(2)
    console.log(value2, await value2, '\n') // Promise { 2 } 2
} // "async / await" sentence

// -----------------------------------------

/*
    asyncAwaitTest:

    function () { 
        // null == undefined == void 0, but NaN != void 0, Infinity != void 0   <--- ***

        return __awaiter(_this, void 0, void 0, function () {
            var value;

            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                        return [4 /yield/, Promise.resolve(1)];
                    case 1:
                        value = _a.sent();
                        console.log(value, '\n');
                        return [2 /return/];
                }
            }); // __generator
        }); // __awaiter
    }   // anonymous function = function expression -> first-class function
*/
console.log("asyncAwaitTest:\n\n%s", asyncAwaitTest, '\n')

// -----------------------------------------

asyncAwaitTest()    // 1



console.groupEnd()


