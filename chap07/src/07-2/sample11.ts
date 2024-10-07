console.clear()
console.group("src/07-2/sample11.ts")

console.debug(`
*************************************************
* 07-2. Understanding a Promise                 *
*************************************************

6. "Promise.race" Method

(1) "Array" class provides "some" instance method that returns "true"
    if "any" item of an "Array" satisfies with a condition.

(2) "Promise.race" class(=static) method returns "Promise.resolve" object having this "revoled" value
    if any "Promise" item of an Array is "resolved".            <--- ***

(3) "Promise.race" class(=static) method returns "Promise.reject" object haveing this "rejected" value
    if the first "Promise" item of an Array is "rejected".      <--- ***

(4) Method Signature

    Promise.race(promiseObjectsArray: Promise[]): Promise<AtFirstPromiseResolvedValueType(or Error)>    <--- ***

(5) "Promise" converts the "Call Hell" that appears in "asynchronous API"
    into the "manageable" codes in some degree.                 <--- ***

(6) "ESNext" JavaScript & "TypeScript" provide "async/await" sentence 
    which "Promise" could be used more easily.                  <--- ***
`, '\n')


// 1. The following code shows the usage of "Array.some" method.

const isAnyTrue = (values: boolean[]): boolean => values.some( (value: boolean, index: number, array: boolean[]) => {
    console.debug("* predicate(value: %s, index: %s, array: %s) invoked.", value, index, array)

    return value == true
})  // isAnyTrue

// -----------------------------------------

/*
    isAnyTrue:

    function (values) {
        return values.some(function (value, index, array) {
            console.debug("* predicate(value: %s, index: %s, array: %s) invoked.", value, index, array);
            return value == true;
        }); 
    } // anonymous function = function expression -> first-class function
*/
console.log("isAnyTrue:\n\n%s", isAnyTrue, '\n')

// -----------------------------------------

console.log(
    '\n',
    /*
        * predicate(value: false,   index: 0,   array: [ false, true, false ])  invoked.
        * predicate(value: true,    index: 1,   array: [ false, true, false ])  invoked.
        
        * predicate(value: true,    index: 0,   array: [ true, true, false ])   invoked.

        * predicate(value: false,   index: 0,   array: [ false, false, false ]) invoked.
        * predicate(value: false,   index: 1,   array: [ false, false, false ]) invoked.
        * predicate(value: false,   index: 2,   array: [ false, false, false ]) invoked.
    */
    isAnyTrue([ false, true, false ]),      // true
    isAnyTrue([ true, true, false]),        // true
    isAnyTrue([ false, false, false ]),     // false
    '\n'
)


// 2. The following code shows the usage of "Promise.race" class(= static) method.

Promise.race([ Promise.resolve(true), Promise.resolve("Hello") ]).
    then( value => console.log(value, '\n') ).   // true
    // then(console.log).  // true
    finally(() => console.log("* Done1.", '\n'))

// -----------------------------------------

Promise.race([ Promise.resolve(true), Promise.reject(new Error("test1")) ]).
    then( value => console.log(value, '\n') ).  // true
    // then(console.log).  // true
    catch( reason => console.log("reason:\n\n%s", reason, '\n')).
    finally(() => console.log("* Done2.", '\n'))

// -----------------------------------------

Promise.race([ Promise.reject(new Error("test2")), Promise.resolve(true) ]).
    then( value => console.log(value, '\n') ).  // NOT invoked.
    // then(console.log).  // NOT invoked.
    catch( (reason) => console.log("reason:\n\n%s", reason) ).  // Output the exception stack trace.
    finally(() => console.log("* Done3.", '\n'))



console.groupEnd()


