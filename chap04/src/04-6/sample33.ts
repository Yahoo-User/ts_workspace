console.clear()
console.group("src/04-6/sample33.ts")

console.debug(`
*************************************************
* 04-6. Class Methods                           *
*************************************************

3. Class Method Syntax

(1) In previous class, 'A' is complicated and readability is low.

(2) In TypeScript, Class's Property which including 'Function Expression' 
    provides short-hand for abbreviating 'function' keyword.    <--- ***

    - Example:

        export class B {
            constructor(public value: number = 1) {}

            /**
                // In previous class, A's method ;
                method: () => void = function (): void {
                    console.log('value:', this.value)
                }
            */

            /**
                Short-hand method:
                    a. method right-side colon(:) disappeared.
                    b. 'Function Signature' disappeared.
                    c. operator, '=' disappeared.
                    d.'function' keyword disappeared.
                    e. Example:

                           a     b       c     d
                           - ---------- --- --------
                    method : () => void  =  function (): void {}    // Original method
                    method (): void {}                              // Short-hand method
            */

            method (): void {
                console.log('value:', this.value)
            }
        } // end class

`, '\n')


export
class B {
    constructor(public value: number = 1) {}

    method (): void {
        console.debug('B::method() invoked.')

        console.log(`\t+ this.value: ${this.value}`)
    } // method
} // end class


// const b: B = new B      // OK
// const b: B = new B()    // OK
const b: B = new B(10)  // OK

b.method()              // this.value: 1



console.groupEnd()

