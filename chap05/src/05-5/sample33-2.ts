import { ResultType } from "./sample33-1";

console.clear()
console.group("src/05-5/sample33-2.ts")

console.debug(`
*************************************************
* 05-5. Understanding Tuple                     *
*************************************************

1. Using Type Alias For Tuple
`, '\n')


// The following "doSomething" function returns the result as a "Tuple".
// Using "try/catch/finally" exception handling statement
// when an exception occurred returns the details.
// The "Tuple" type of the result that the function returns is 
// the "Type Alias" for type "[ boolean, string ]"

export
const doSomething = (): ResultType => {
  console.debug("doSomething() invoked.")

  try {
    // ...
    throw new Error("Some error occurs...")
  } catch(e) {
    console.log("\t+ e: %s", e)

    return [ false, e.message ]   // "Tuple"
  } finally {
    console.log("Done.")
  } // try-catch-finally
} // doSomething


/*
  doSomething: function () {
      console.debug("doSomething() invoked.");

      try {
          // ...
          throw new Error("Some error occurs...");
      } catch (e) {
          console.log("\t+ e: %s", e);
          return [false, e.message]; // "Tuple"
      } finally {
          console.log("Done.");
      } // try-catch-finally
  }
*/
console.log("doSomething: %s", doSomething)


console.groupEnd()


