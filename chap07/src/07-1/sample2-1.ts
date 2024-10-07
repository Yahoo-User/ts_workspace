console.clear()
console.group("src/07-1/sample2-1.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

2. Synchronous & Asynchronous API

(1) "Node.JS" provides "fs" package that collects all features related with File System.

    - "fs" package provides same features in ways of "synchronous" & "asynchronous" versions.  <--- ***

    - for instance, the features to read a file are provided in way of
      'synchronous' "readFileSync" & 'asynchronous' "readFile" versions.    (***)
`, '\n')


import { readFile, readFileSync } from "fs"


// 1. Example to read & print a "package.json" file in ways of "synchronously" & "asynchronously".

const path: string = "package.json"     // OK


// *******************************
// 1-1. synchronously.
// *******************************

console.log("1. Reading a `package.json` file with synchronous API...", '\n')

/*
    -------------------------
    readFileSync(path: PathOrFileDescriptor, options?: { encoding?: null; flag?: string; }): Buffer
    -------------------------
    (1) Returns the contents of the path.
    (2) If the "encoding" option is specified then this function returns a string.      <--- ***
        Otherwise it returns a buffer.                                                  <--- ***
    (3) Similar to readFile, when the path is a "directory",
        the behavior offs.readFileSync() is "platform-specific".
    -------------------------
*/

// ----------------
// 1st. method
// ----------------

// Returning content of the path by "Buffer".
// const buffer: Buffer = readFileSync(path)                       // OK

// console.log('buffer:\n\n', buffer, '\n')                        // OK
// console.log('buffer:\n\n%s', buffer, '\n')                      // OK

// console.log('buffer:\n\n%s', buffer.toString(), '\n')           // OK
// console.log('buffer:\n\n%s', buffer.toJSON(), '\n')             // OK
// console.log('buffer:\n\n%s', buffer.toLocaleString(), '\n')     // OK


// ----------------
// 2nd. method
// ----------------

// Returning the content of the path by "string".
const content: string = readFileSync(path, { encoding: "utf-8" })   // OK
console.log('content:\n\n%s', content, '\n')


// *******************************
// 1-2. asynchronouly
// *******************************

console.log("2. Reading a `package.json` file with asynchronous API...", '\n')

/*
    -------------------------
    readFile(path: PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void
    -------------------------
    "*Asynchronously*" reads the "entire" contents of a file.

    @param path - A path to a file.
                  If a URL is provided, it must use the file: protocol.
                  If a file descriptor is provided, the underlying file will not be closed automatically.
    -------------------------
*/

readFile(path, (err: Error, data: Buffer) => {
    // console.debug("callback( err: %s, data: %s ) invoked.", err, data, '\n')     // OK

    if(data) console.log("data:\n\n%s", data, '\n')                                 // OK
    // if(data) console.log("data:\n\n%s", data.toString(), '\n')                      // OK
    // if(data) console.log("data:\n\n%s", data.toLocaleString(), '\n')                // OK

    if(err) console.log("err:\n\n%s", err, '\n')                                    // OK
}); // readFile



console.groupEnd()


