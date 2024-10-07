console.clear()
console.group("src/07-2/index.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

0. Background

(1) In "JavaScript", "Promise" was selected as a standard in "ES5".
    - "Promise" is the class, named "Promised".
    - To use "Promise" class, firstly create a "Promise Object" using "new" operator.
    - When creating a "Promise" object, We should provide the following "Callback Function".    <--- ***

        const promise = new Promise(callbackfn)

    - Here, the "Callback Function" of the "Promise" have two parameters: "resolve", "reject".  <--- ***

        (resolve, reject) => {}

(2) In "TypeScript", The "Promise" used in the "generic class" form like the following:         <--- ***
    
        const numPromise: Promise<number> = new Promise<number>(callbackFn)
        const strPromise: Promise<string> = new Promise<string>(callbackFn)
        const arrPromise: Promise<number[]> = new Promise<number[]>(callbackFn)

    - The "Callback Function" of "Promise" have two parameters: "resolve", "reject".

        new Promise<T>( (resolve: (successValue: T) => void, reject : (reason? : any) => void) => {
            // TODO here.
        })
`, '\n')


console.groupEnd()


