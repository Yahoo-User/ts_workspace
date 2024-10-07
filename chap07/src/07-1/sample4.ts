console.clear()
console.group("src/07-1/sample4.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

4. Single Thread & Asynchronous API

(1) "JavaScript" is executed by "Single-Thread".                                <--- ***
    - If possible, Please don't use "Synchronous API" like "readFileSync".      <--- ***

(2) "TypeScript" also transpiled to the "ES5 JavaScript" codes and executed.    <--- ***
    - Thus, Don't use "Synchronous API" alike "JavaScript" If possible.

(3) "JavaScript" is executed by "Single-Thread".
    - "Thread" is a minimum unit that CPU executes a program.                   <--- ***
    - "Process" : running state program by OS.                                  <--- ***
    - "Process" executes *ONE* "Main" thread and a series of "Worker" threads.  <--- ***
    - "JavaScript" always executed by *ONE* worker thread.                      <--- ***

(4) "Node.JS" or Web Browser itself executed in "Multi-Thread".
    - But "JavaScript" performs *ONE* "Worker" thread, by "Single-thread".

(5) If "TypeScript" code execute a "Synchronous API",
    OS should return "Synchronous API"'s result as function's result value.     <--- ***

    - Because of this, OS blocks "Synchronous API" temporarily
      , and If the other thread executes real tasks and gets the result,
      OS re-runs temporarily blocked "Synchronous API" at that time 
      and return the result got previouly by the other thread.                  <--- ***

    - "Sychronous API" makes coding easily but drops the program "responsiveness"
      relatively because of the way of execution.                               <--- ***

    - If "JavaScript" code executes "Synchronous API" in web browser,
      Web server stopped temporarily until the "synchronous API" returns result,
      Due to the physical nature that codes executed by "Single-Thread".        <--- ***
      and the phenomenon that can't be connected from web browser to the web server
      takes place.                                                              <--- ***

(6) In TypeScript(or JavaScript), For the reason that execution by "Single-Thread",
    When coding program, always use "Asynchronous API"
    *NOT* to damage program's responsiveness.                                   <--- *** 
`, '\n')



console.groupEnd()


