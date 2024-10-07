console.clear()
console.group("src/07-2/sample8.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

3. "Promise.reject" Method

(1) If "Promise.reject(ErrorTypeObject)" invoked,
    This "ErrorTypeObject" can be always taken from "Promise.catch" method.     <--- ***

    - Example:
                Promise.reject(new Error('Exception occurred...')).
                    catch( (err: Error) => console.log('err:', err.message) )
`, '\n')


// The following code invokes "Promise.reject" class(= static) method.

// The "argument" of "Promise.reject" method can be always taken
// from "Promise.catch" method.                                                 <--- ***

Promise.reject(new Error("Exception occurred...")).
            catch((err: Error) => console.log("err:\n\n%s", err))       // OK
            // catch((err) => console.log(err))                            // OK
            // catch(console.log)                                          // OK   


console.groupEnd()


