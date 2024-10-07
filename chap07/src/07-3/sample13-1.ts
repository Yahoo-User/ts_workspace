console.clear()
console.group("src/07-3/sample13-1.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

2. "async" Function Modifier

(1) The "await" keyword always could be used
    in the body of a function with "async" function modifier.  <--- ***

    - Syntax & Example:

        // 1. If "arrow function" + "async" modifier.
        const test1 = async () => {
            await { Promise Object | Value }
        } // test1

        // 2. If "function" keyword + "async" modifier.
        async function test2() {
            await { Promise Object | Value }
        } // test2
`, '\n')


// 1. "async" function implemented through "arrow function".

export
const test1 = async () => {
    console.debug("* asynchronous test1() invoked.", '\n')

    // 1. await value
    // ts(80007) - 'await' has no effect on the type of this expression.
    let value1 = await 1
    console.log(value1, '\n')

    // 2. await Promise Object
    let value2 = await Promise.resolve(1)
    console.log(value2, '\n')
} // test1

// -----------------------------------------

/*
    test1:

    function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var value2;

            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug("* asynchronous test1() invoked.");

                        return [4 /yield/, Promise.resolve(1)];
                    case 1:
                        value2 = _a.sent();
                        console.log(value2, '\n');

                        return [2 /return/];
                } // switch
            }); // __generator
        }); // __awaiter
    } // anonymous function == function expression -> first-class function
*/
console.log("test1:\n\n%s", test1, '\n')

// -----------------------------------------

// 2. "async" function implemented through "function" keyword.

export
async function test2() {
    console.debug("* async test2() invoked.", '\n')

    // ts(80007) - 'await' has no effect on the type of this expression.
    let value1 = await "hello"
    console.log(value1, '\n')

    let value2 = await Promise.resolve("hello")
    console.log(value2, '\n')
} // test2

/*
    test2:

    function test2() {
        return __awaiter(this, void 0, void 0, function () {
            var value2;

            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug("* async test2() invoked.", '\n');

                        return [4 /yield/, Promise.resolve("hello")];
                    case 1:
                        value2 = _a.sent();
                        console.log(value2, '\n');

                        return [2 /return/];
                } // switch
            }); // __generator
        }); // __awaiter
    } // test2
*/
console.log("test2:\n\n%s", test2, '\n')

// -----------------------------------------



console.groupEnd()


