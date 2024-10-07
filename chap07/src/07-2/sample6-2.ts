import { readFilePromise } from "./sample6-1";


console.clear()
console.group("src/07-2/sample6-2.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

1. "resolve" & "reject" Functions
`, '\n')


// The following code is to read 'tsconfig.json' & 'package.json' files using "readFilePromise"
// with "Promise<T>" provide "then", "catch", "finally" methods in the form of "Method Chain".  <--- ***

const path1: string = "package.json"
const path2: string = "tsconfig.json"
const path3: string = "."


readFilePromise(path1).
    /*
        --------------------------------------------------------------
        Promise<string>.then<string, never>(
            onfulfilled?: (value: string) => string | PromiseLike<string>,
            onrejected?: (reason: any) => PromiseLike<never>
        ): Promise<string>
        --------------------------------------------------------------
        Attaches "callbacks" for the "resolution" and/or "rejection" of the "Promise".

        @param onfulfilled  — The callback to execute when the "Promise" is "resolved".
        @param onrejected   — The callback to execute when the "Promise" is "rejected".

        @returns — A "Promise" for the completion of which ever callback is executed.
    */
    then((value: string) => {   // Invoked when the "Promise" is "resolved". <--- ***
                                // The "argument" of "Promise.resolve" method passed. (***)
        console.debug("* then(value: %s) invoked.", value, '\n')
        return readFilePromise(path2)
    }).
    then((value: string) => {   // Invoked when the "Promise" is "resolved". <--- ***
                                // The "argument" of "Promise.resolve" method passed. (***)
        console.debug("* then(value: %s) invoked.", value, '\n')
        return readFilePromise(path3)
    }).
    /*
        --------------------------------------------------------------
        Promise<string>.catch<void>(
            onrejected?: (reason: any) => void | PromiseLike<void>
        ): Promise<string | void>
        --------------------------------------------------------------
        Attaches a callback for only the rejection of the Promise.

        @param onrejected — The callback to execute when the Promise is rejected.

        @returns — A Promise for the completion of the callback.
    */
    catch((err: Error) => { // Invoked when the "Promise" is "rejected".
                            // The "argument" of "Promise.reject" method passed. (***)
        console.debug("* catch(err: %s) invoked.", err, '\n')
    }).

    /*
        --------------------------------------------------------------
        Promise<string | void>.finally(onfinally?: () => void): Promise<string | void>
        --------------------------------------------------------------
        Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
        The resolved value cannot be modified from the callback.

        @param onfinally — The callback to execute when the Promise is settled (fulfilled or rejected).

        @returns — A Promise for the completion of the callback.
    */
    finally(() => { // Invoked when the "Promise" is "settled" ("fulfilled" or "rejected"). <--- ***
                    // Invoked always lastly. (***)
        console.debug("* finally() invoked.", '\n')
        console.log("Done.", '\n')
    })



console.groupEnd()


