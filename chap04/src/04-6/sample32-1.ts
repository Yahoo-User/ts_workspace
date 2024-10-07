console.clear()
console.group("src/04-6/sample32-1.ts")

console.debug(`
*************************************************
* 04-6. Class Methods                           *
*************************************************

2. What is a Method ?

(1) In TypeScript,
    - The 'method' is the "property" which including 'Function Expression' made with 'function' keyword. (***)
    - 'Function Expression == 'Anonymous Function'.     <--- ***
    
    - Example:

        export class A {
            value: number = 1

            method: () => void = function (): void {
                console.log('value:', this.value)    // *** : 'this' keyword used
            } // 'Anonymous Function' == 'Function Expression' -> 'First-Class Function'    <--- ***
        } // end class

`, '\n')


export
class A {
    value: number = 1;

    method: () => void = function () {
        console.debug("method() invoked.")
        
        // this: A { value: 1, method: [Function (anonymous)] }
        //       true                       // this instanceof A
        //       function                   // typeof A
        //       [Function: A]              // this.constructor
        console.log('\t+ this:', this, this instanceof A, typeof A, this.constructor)

        console.log(`\t+ this.value: ${this.value}`)    // this.value: 1
    } // method
} // end class

console.log('A:', A, '\n')        // A: [Function: A]

/*
    function A() {  // `Constructor Function`   <--- ***
          this.value = 1;
          this.method = function () {
              console.debug("method() invoked.");
              // this: A { value: 1, method: [Function (anonymous)] }
              //       true                       // this instanceof A
              //       function                   // typeof A
              //       [Function: A]              // this.constructor
              console.log('\t+ this:', this, this instanceof A, typeof A, this.constructor);
              console.log("\t+ this.value: ".concat(this.value)); // this.value: 1
          }; // method
      } // A
*/
console.log('A: %s', A)


console.groupEnd()

