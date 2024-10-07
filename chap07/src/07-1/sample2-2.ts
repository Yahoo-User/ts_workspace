console.clear()
console.group("src/07-1/sample2-2.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

2. Synchronous & Asynchronous API

(2) Common *caution*
    - If the "Next" statement is a "immediate-execution function",
      The "current" statement should end with a semi-colon(;).  <--- ***

(3) API : The service that OS provides.
    - Provided by "function" form of programming languages like TypeScript
    - But API function take elapsed time to be executed to read files that saved in HDD.

(4) Two-types API that provide same features
    - "Synchronous"  API : Program execution is blocked until reading a file completely.
    - "Asynchronous" API : Program execution is *NOT* blocked until reading a file completely.
                           But the result must be taken by "Callback Function".

(4) Asynchronous Callback Function
    - "Callback Function" used in the "Asynchronous" APIs.
    - Unlike general functions, used *ONLY* to receive the results of "Asynchronous" APIs.
`, '\n')


import { readFile } from "fs"


// 2. Same features like 1 are implemented with "async/await" sentence & "Promise" class.

/*
    var Promise: PromiseConstructor
        new <T>(
            executor: (
                resolve : ( value   : T | PromiseLike<T> ) => void, 
                reject  : ( reason? : any ) => void 
            ) => void
        ) => Promise<T>

    -------------------------

    Creates a new Promise.  (***)
    
    @param "executor" - A "callback" used to "*initialize*" the promise.    <--- ***
    
    This "executor" is passed with two arguments:
    (1) A "resolve" callback used to "*resolve*" the promise with a "value" or the "result" of another "promise".   <--- ***
    (2) A "reject"  callback used to "*reject *" the promise with a provided "reason" or "error".                   <--- ***
*/

const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((resolve, reject) => {
        console.debug("* executor(resolve: %s, reject: %s) invoked.", resolve, reject, '\n') // OK

        // ----------------------
        // readFile(path: PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void
        // ----------------------
        // "Asynchronously" reads the "entire" contents of a file.
        // 
        // @param path - A path to a file.
        //               If a URL is provided, it must use the file: protocol.
        //               If a file descriptor is provided, the underlying file will not be closed automatically.
        // ----------------------
        readFile(filename, (err: Error, data: Buffer) => {
            // console.debug("* callback: (err: %s, data: %s) invoked.", err, data, '\n')   // OK

            if(err) reject(err)
            else resolve(data.toString())
        })  // readFile
    }); // new Promise<T>()

/*
    readFilePromise:

    function (filename) {
        return new Promise(function (resolve, reject) {
            console.debug("executor(resolve: %s, reject: %s) invoked.", resolve, reject);
            (0, fs_1.readFile)(filename, function (err, data) {
                console.debug("callback: (err: %s, data: %s) invoked.", err, data);
                if (err)
                    reject(err);
                else
                    resolve(data.toString());
            }); // readFile
        });
    }
*/
// console.log("readFilePromise:\n\n%s", readFilePromise, '\n');

// -----------------------------------------

// semi-colon(;) required because of the next, "immediate-execution function".
const path1: string = "package.json";    // OK

(async () => {
    console.log("3. Reading 'package.json' file using Promise & async / await...", '\n')

    // ----------------
    // 1st. method
    // ----------------
    const content: string = await readFilePromise(path1)         // OK    <--- ***
    console.log("content:\n\n%s", content, '\n')
    
    // ----------------
    // 2nd. method
    // ----------------
    // const content: Promise<string> = readFilePromise(path1)      // OK
    // console.log("content:\n\n%s", (await content), '\n')        // OK   <--- ***
})()

// -----------------------------------------

const path2: string = "tsconfig.json"

readFilePromise(path2).
    then((value: string) => {
        console.debug("* then(value: %s) invoked.", value, '\n')
    }).
    catch((reason: any) => {
        console.debug("* catch(reason: %s) invoked.", reason, '\n')
    }).
    finally(() => {
        console.debug("* finally() invoked.", '\n')
        console.log("* Done.", '\n')
    })


console.groupEnd()


