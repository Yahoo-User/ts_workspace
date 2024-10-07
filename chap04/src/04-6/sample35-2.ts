import { calculator } from "./sample35-1";

console.clear()
console.group("src/04-6/sample35-2.ts")

console.debug(`
*************************************************
* 04-6. Class Methods                           *
*************************************************

5. Method Chain

(1) Method Chain is That object's methods invoked continuously with dot(.) operator.

    - Like jQuery library :
    
        Example:    $("#p1").css("color", "red).slideUp(1000*2).slideDown(1000*2);

(2) In TypeScript, To implement "Method Chaining" is that methods always should return "this". <--- ***

    - Example:

        class calculator {
            constructor(public value: number = 0) {}

            add(value: number) {
                this.value += value
                return this                 <--- ***
            } // add

            mul(value: number) {
                this.value *= value
                return this                 <--- ***
            } // mul
        } // end class

`, '\n')


let calc = new calculator

let result = calc.add(1).add(2).mul(3).mul(4).value

console.log('\n\b', `result: ${result}`)    // ((((0 + 1) + 2) * 3) * 4) = 36



console.groupEnd()

