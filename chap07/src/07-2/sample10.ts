console.clear()
console.group("src/07-2/sample10.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

5. "Promise.all" method

(1) "Array" class provides "every" instance method.

    - "every" method returns "true"
       If all items of an Array satisfy with a condition.                                   <--- ***

    - Method Signature:
    
        every(
            predicate: (value: boolean, index: number, array: boolean[]) => value is boolean, 
            thisArg?: any
        ): this is boolean[]

    - "predicate" callback automatically invoked *per* each item of an "Array"
       until "false" item is present.                                                       <--- ***

(2) "Promise" class also provides "all" class(= "static") method
     that acts like "Array.every" method.                                                   <--- ***

    - Method Signature:

        all(promiseObjArray: Promise[]): Promise<arrayOfResolvedValueOnEachPromiseObject(or any)>

        Creates a "Promise" that is "resolved" with an "array" of results
        when all of the provided "Promises" "resolve", or "rejected"
        when any "Promise" is "rejected".                                                   <--- ***

        @param promiseObjArray  - An array of Promises.
        @returns                - A new Promise.

    - This method receives an "Array" argument comprised of "Promise" objects,
      Then makes a new "Array" comprised of "*resolved*" value on each item of the argument.

    - This method returns a new "Promise" object including this *NEW* "Array".
      Thus, If needed the new "Array", it could be taken by "Promise.then" method.          <--- ***

    - This method returns a "Promise.reject" object having the "rejected" value 
      If a "rejected" value occurred on each item of an "Array" argument.                   <--- ***

    - Like "revoled" value, "rejected" value should be taken from "Promise.catch" method.   <--- ***
`, '\n')


// The following code is that "isAllTrue" function investigates
// Whether "all items" of an "Array" is "true" using "every" method.

const isAllTrue = (values: boolean[]) => values.every(
    (value: boolean, index: number, array: boolean[]) => {
        console.debug("* predicate(%s,\t%s,\t%s) invoked.", value, index, array)
        return (value == true)
    } // "predicate" callback
) // isAllTrue

// -----------------------------------------

/*
    isAllTrue:

    function (values) { 
        return values.every(function (value, index, array) {
            console.debug("* predicate(%s, %s, %s) invoked.", value, index, array);
            return (value == true);
        } // predicate );
    } // anonymous function == function expression
*/
console.log("isAllTrue:\n\n%s", isAllTrue, '\n')

// -----------------------------------------

console.log(
    '\n',
    isAllTrue([ true, true, true ]),            // true, "predicate" callback invoked 3-times
    isAllTrue([ true, true, false ]),           // false, "predicate" callback invoked 3-times
    isAllTrue([ false, true, true ]),           // false, "predicate" callback invoked *ONCE*   <--- ***
    '\n'
)

// -----------------------------------------

// The following code is example of "Promise.all" method.

// Here, "T" means that the "type" of all items in an "Array" compised of "resolved" values.    <--- ***
// "Promise.all" class(=static) method acts like "Array.every" method.                          <--- ***

const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

// -----------------------------------------

getAllResolvedResult<any>([ Promise.resolve(true), Promise.resolve("Hello") ]).
    then( (value) => console.log(value, '\n') )     // OK   [ true, 'Hello' ]

// -----------------------------------------

getAllResolvedResult<any>(
    [ Promise.resolve(1), Promise.resolve("World") ]    // (1)
    // [ Promise.resolve(1), Promise.reject(new Error("exception")) ]   // (2)
).
then( (value) => console.log(value, '\n')). // [ 1, 'World' ] if (1)
// then(console.log).   // [ 1, 'World' ] if (1)
catch( (reason) => console.log("reason:\n\n%s", reason, '\n')).  // OK if (2)
finally(() => console.log("* Done."))   // * Done.



console.groupEnd()


