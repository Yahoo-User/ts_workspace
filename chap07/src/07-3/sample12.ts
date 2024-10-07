console.clear()
console.group("src/07-3/sample12.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

1. "await" Keyword

(1) "await" keyword returns the value of a "operand".                               <--- ***

(2) If the "operand" is a "Promise" object, 
    "await" keyword returns the value which invoked "Promise.then" method returns.  <--- ***

    - Syntax:   let value = await PromiseObjectORValue                              <--- ***
`, '\n')


const asyncAwaitTest2 = async() => {
    let value = await Promise.resolve(1)    // (1)

    // ts(80007) - 'await' has no effect on the type of this expression.
    // let value = await true                  // (2)

    // let value = await Promise.reject("REJECTED.").catch(err => err) // (3)

    console.log(value, '\n')      // (1) 1    (2) true    (3) REJECTED.
} // asyncAwaitTest2

// -----------------------------------------

/*
    asyncAwaitTest2:

    function () {

        return __awaiter(_this, void 0, void 0, function () {
            var value;

            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /yield/, Promise.resolve(1)];
                    case 1:
                        value = _a.sent()
                        console.log(value, '\n'); // 1
                        return [2 /return/];
                } // switch
            }); // __generator
        }); // __awaiter

    } // anonymous function == function expression -> first-class function
*/
console.log("asyncAwaitTest2:\n\n%s", asyncAwaitTest2, '\n')

// -----------------------------------------

asyncAwaitTest2()



console.groupEnd()


