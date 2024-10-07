console.clear()
console.group("src/07-2/sample6-1.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

1. "resolve" & "reject" Functions
`, '\n')


// It's diffcult to understand "Promise" without example codes.
// The following code is to invoke "Asynchronouse API", "readFile" using "Promise".

import { readFile } from "fs";

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

export
const readFilePromise = (filename: string): Promise<string> => 
    new Promise<string>((resolve: (value: string) => void, reject: (reason?: any) => void) => {
        console.debug("* executor(resolve: %s, reject: %s) invoked.", resolve, reject, '\n')

        readFile(filename, (err: Error, data: Buffer) => {
            if(err) reject(err)                 // Invoke "reject"  with    an Error.   <--- ***
            else    resolve(data.toString())    // Invoke "resolve" without an Error.   <--- ***
        })  // readFile
    })  // new Promise<T>(executor)

/*
    readFilePromise:

    function (filename) {
        return new Promise(function (resolve, reject) {
            (0, fs_1.readFile)(filename, function (err, data) {
                if (err)
                    reject(err);
                else
                    resolve(data.toString());
            }); // readFile
        });
    }
*/
console.log("readFilePromise:\n\n%s", readFilePromise)



console.groupEnd()


