import { readFilePromise } from "../07-2/sample6-1";


console.clear()
console.group("src/07-3/sample17.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

6. "async" Function & "Promise.all" method

(1) Applying conversion "asynchronous API", "readFile" to a "Promise" object.

    ========================================================
    Array<string>.map<Promise<string>>(
        callbackfn: (value: string, index: number, array: string[]) => Promise<string>,
        thisArg?: any
    ): Promise<string>[]
    ========================================================
    Calls a defined "callback" function on "each" element of an "Array",
    and returns an "Array" that contains the "results".

    ========================================================
    Promise.all<Promise<string>[]>(values: Promise<string>[]): Promise<string[]>
    ========================================================
    Creates a "Promise" that is "resolved" with an array of results When all of the provided "Promises" resolve, 
    or "rejected" when "any Promise" is rejected.
`, '\n')


// The following example is print the contents of two file: "package.json" & "tsconfig.json"

// Using a "async" function, 
// "Promise.all" method and "readFilePromise" function in 07-2 clause.

// "readFilesAll" function converts a parameter "filenames: string[]" to the "Promise<string>[]"
// with "Array.map" method & "readFilePromise" function.

// and then using "Promise.all" method,
// convert "Promise[]" to a single "Promise<string[]>" object 
// that is "resolved" with an array of results.

// and apply "await" to the single "Promise<string[]>" object, returns a "resolved" value
// from a single "Promise<string[]>" object.

// const readFilesAll: (filenames: string[]) => Promise<string[]>

//                  ---------- Function Signature ------------
const readFilesAll: (filenames: string[]) => Promise<string[]> = 
    async (filenames: string[]) => {
        console.debug("readFilesAll(filename: %s) invoked.", filenames, '\n')

        return await Promise.all( filenames.map(filename => readFilePromise(filename)) )    // <--- ***
    } // "async" function

// -----------------------------------------

/*
    readFilesAll:

    function (filenames) {
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug("readFilesAll(filename: %s) invoked.", filenames, '\n');
                        return [4 /yield/, Promise.all(
                                    filenames.map(
                                        function (filename) { 
                                            return (0, sample6_1_1.readFilePromise)(filename); 
                                        }
                                    ) // .map
                                )];
                    case 1: return [2 /return/, _a.sent()];
                } // switch
            }); // __generator
        }); // __awaiter
    }
*/
console.log("readFilesAll:\n\n%s", readFilesAll, '\n')

// -----------------------------------------

// Handle a "readFilesAll" function as a "Promise<string[]>" object.
// Thus, Using "Promise.then" & "Promise.catch" methods, configure "then-Chain".

// As a result, We could get the contents of two files as "string[]" or 
// handle an exception when an exception occurred to prevent "anormal termination".

// const readFilesAll: (filenames: string[]) => Promise<string[]>
const filenames: string[] = [ "package.json", "tsconfig.json" ]

readFilesAll(filenames).
    then((values: string[]) => {
        console.log("<package.json> :", values[0], '\n')
        console.log("<tsconfig.json>:", values[1], '\n')
    }).
    catch((err: Error) => console.log("err:\n\n%s", err, '\n'))



console.groupEnd()


