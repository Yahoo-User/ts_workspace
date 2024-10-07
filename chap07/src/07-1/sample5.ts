console.clear()
console.group("src/07-1/sample5.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

5. Callback Hell

(1) When using "Asynchronous APIs", 
    The "Callback" function using other "Asynchronous APIs" can be more complicated.

(2) "Callback Hell" means "Callback Structure" In JavaScript
    which are all tangled up complicatedly.                         <--- ***

    - "Promise" is designed to make "Callback Hell" manageable.     <--- ***
`, '\n')


// The following code reads a 'package.json' file. and next a 'tsconfig.json' file again.
// In "readFile('package.json')"'s "Callback" function body, 
// Nested code re-invoke again "readFile('tsconfig.json')".

import { readFile } from "fs";


readFile("package.json", (err: Error, data: Buffer) => {
    console.debug("1. callback(%s, %s) invoked.", err, data, '\n')

    if(err) throw err
    else {
        const content1: string = data.toString()
        console.log("content1:\n\n%s", content1, '\n')

        readFile("tsconfig.json", (err: Error, data: Buffer) => {
            console.debug("2. callback(%s, %s) invoked.", err, data, '\n')

            if(err) throw err
            else {
                const content2: string = data.toString()
                console.log("content2:\n\n%s", content2, '\n')
            } // if-else
        }) // readFile
    } // if-else
})  // readFile



console.groupEnd()


