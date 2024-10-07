console.clear()
console.group("src/07-2/sample9.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

4. then-Chain

(1) The "Callback Function" used When invoking "Promise.then" method can return a value.    <--- ***
    
    - The value which this "Promise.then" method returns 
      can again invoke the "Promise.then" method and recevie other value. (***)

    - "then-Chain": Invoking "Promise.then" method one after another called, "then-Chain".  <--- ***
    - The "resolved" value of "Promise<T>" can be taken from "Promise.then"  method.        <--- ***
    - The "rejected" value of "Promise<T>" can be taken from "Promise.catch" method.        <--- ***

(2) About "Promise<T>" interface:

    /**
     * Represents the completion of an asynchronous operation
     */
    interface Promise<T> {
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). <--- ***
         * The resolved value cannot be modified from the callback.
         * 
         * @param onfinally - The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns         - A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }
`, '\n')


// The following code shows "then-Chain".

Promise.resolve<number>(1).
    // 
    then((value: number) => {   // The callback to execute when the "Promise" is "resolved".
        console.log('[1].', value, '\n')        // 1

        // pass an "argument(= true)" to the "callback" parameter
        // of the next invoked "Promise.then" method.
        return Promise.resolve<boolean>(true)   // returns a "Promise<boolean>" object.
    }).
    then((value: boolean) => {   // The callback to execute when the "Promise" is "resolved".
        console.log('[2].', value, '\n')        // true

        // pass an "argument(= [ 1, 2, 3 ])" to the "callback" parameter
        // of the next invoked "Promise.then" method.
        return [ 1, 2, 3 ]                      // returns a "Promise<number[]>" object.
    }).
    then((value: number[]) => {   // The callback to execute when the "Promise" is "resolved".
        console.log('[3].', value, '\n')        // [ 1, 2, 3 ]

        // pass an "argument(= { name: "Yoseph", age: 23 })" to the "callback" parameter
        // of the next invoked "Promise.then" method.
        return { name: "Yoseph", age: 23 }      // returns a "Promise<{name: string; age: number}>" object.
    }).
    then((value: { name: string; age: number }) => {   // The callback to execute when the "Promise" is "resolved".
        console.log('[4].', value, '\n')        // { name: "Yoseph", age: 23 }
    }).
    finally(() => console.log('* Done.', '\n'))



console.groupEnd()


