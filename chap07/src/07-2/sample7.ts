console.clear()
console.group("src/07-2/sample7.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

2. "Promise.resolve" Method

(1) "Promise" class provides "resolve" class method(= static method).       <--- ***
    - Implemented as a "class"(= "static) method.
    - If invoking "Promise.resolve(value)",
      An "argument", "value" can be always taken from "Promise.then" method.          <--- ***
`, '\n')


// The following code shows the usage of "Promise.resolve(value)".

console.debug(`
-------------------------------------------------------------
1. PromiseConstructor.resolve<T>(value: T): Promise<T>
-------------------------------------------------------------
Creates a new "resolved" promise for the provided value.
  @param value - A promise.
  @returns     - A promise whose internal state matches the provided promise.

-------------------------------------------------------------
2. Promise<number>.then<void, never>(
    onfulfilled?: (value : number) => void | PromiseLike<void>,
    onrejected? : (reason: any   ) => PromiseLike<never>
): Promise<void>
-------------------------------------------------------------
Attaches "callbacks" for the "resolution" and/or "rejection" of the Promise.
  @param onfulfilled - The callback to execute when the "Promise" is "resolved".
  @param onrejected  - The callback to execute when the "Promise" is "rejected".
  @returns           - A "Promise" for the completion of which ever callback is executed.
  -------------------------------------------------------------
`, '\n')

Promise.resolve<number>(1).
    then((value: number) => console.log(value))         // OK   1
    // then((value) => console.log(value))                 // OK   1
    // then(console.log)                                   // OK   1

Promise.resolve(2).then(console.log)                    // OK   1

// -----------------------------------------

Promise.resolve<string>("3. Hello").
    then((value: string) => console.log(value))         // OK   "Hello"
    // then((value) => console.log(value))                 // OK   "Hello"
    // then(console.log)                                   // OK   "Hello"

Promise.resolve("4. Hello").then(console.log)              // OK   "Hello"

// -----------------------------------------

Promise.resolve<number[]>([ 1, 2, 3, 4, 5 ]).
    then((value: number[]) => console.log(value))       // OK   [ 1, 2, 3 ]
    // then(value => console.log(value))                   // OK   [ 1, 2, 3 ]
    // then(console.log)                                   // OK   [ 1, 2, 3]

Promise.resolve([ 1, 2, 3, 4, 5 ]).then(console.log)          // OK   [ 1, 2, 3 ]

// -----------------------------------------

Promise.resolve<{ index: number, name: string; age: number }>({ index: 6, name: "Yoseph", age: 23 }).
    then((value: {name: string; age: number}) => console.log(value))    // OK   { name: 'Yoseph', age: 23 }
    // then((value) => console.log(value))                 // OK   { name: 'Yoseph', age: 23 }
    // then(console.log)                                   // OK   { name: 'Yoseph', age: 23 }

Promise.resolve({ index: 6, name: "Yoseph", age: 23 }).then(console.log)  // OK   { name: 'Yoseph', age: 23 }

// -----------------------------------------

type IPerson = { index: number; name: string; age: number }

Promise.resolve<IPerson>({ index: 7, name: "Yoseph", age: 23 }).
    then((value: IPerson) => console.log(value))        // OK   { name: 'Yoseph', age: 23 }
    // then((value) => console.log(value))                 // OK   { name: 'Yoseph', age: 23 }
    // then(console.log)                                   // OK   { name: 'Yoseph', age: 23 }



console.groupEnd()


