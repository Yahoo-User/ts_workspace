console.clear()
console.group("src/07-1/sample3.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

3. "readFileSync" & "readFile" API 

(1) Unlike Web Browser, Node.JS can read a file in the OS file system.
    - In Node.JS, File reading features are implemented by "readFileSync" API.
    - "readFileSync" reads a file and then transfer content with "Buffer" type.

        import { readFileSync } from 'fs'
        readFileSync(path: string): Buffer              <--- ***

(2) "Buffer" type is the "class" provided by Node.JS.   <--- ***
    - perform a feature that save "binary data".
    - To convert content in "Buffer" into string, use "Buffer.toString" method. <--- ***

(3) "xxxxSync" API : these all API act "synchronously" in Node.JS.
    - "Synchronous API" block program execution temporarily until job completed.

(4) Node.JS provides "asynchronous readFile" API apart from "synchronous readFileSync" API.

        import { readFile } from 'fs'
        readFile(path: string, callback: (err: Error, data: Buffer) => void)
`, '\n')


// The following code read 'package.json' file in a directory using "readFileSync" API.
// This API read contents as "binary" data, and then print as string by "Buffer.toString" method.
// But, Until reading a file completely, codes are blocked temporarily. (***)

import { readFileSync } from "fs"

// Binary data in 'package.json' file.
const buffer: Buffer = readFileSync("package.json")
const content: string = buffer.toString()
console.log("content:\n\n%s", content)

// -----------------------------------------

// 1. Unlike "Synchronous" API, "Asynchronous readFile" API transfers an exception when exception occurred
// to the first paramerter of "callback function".  (***)
// 2. Unlike "Synchronous" API, "Asynchronous readFile" API transfers file content
// to the second paramerer of "callback function".  (***)

// The following codes is the example of "Asynchronous readFile" API.
// The execution result is the same as the result of previous "synchronous readFileSync" API.

import { readFile } from "fs"

readFile('package.json', (err: Error, data: Buffer) => {
    console.debug(`* callback(err: ${err}, data: ${data}) invoked.`, '\n')

    if(err) throw err
    else {
        const content: string = data.toString()
        console.log("content:\n\n%s", content)
    } // if-else
})  // readFile

// "readFile" API acts "asynchronously".
// Thus, Program execution *NOT* blocked until reading a file completely.
console.log("Done.", '\n')


console.groupEnd()


