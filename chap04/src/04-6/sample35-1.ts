console.clear()
console.group("src/04-6/sample35-1.ts")

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


export
class calculator {

    constructor(public value: number = 0) {
        // console.debug('* calculator::constructor(%d) invoked.', value)        // OK
        console.debug('* calculator::constructor(%d) invoked.', this.value)   // OK

        console.log(`\t+ this.value: ${this.value}`)
    } // constructor


    add(value: number) {
        console.debug("* calculator::add(%s) invoked.", value)

        this.value += value
        console.log(`\t+ this.value: ${this.value}`)

        return this
    } // add

    mul(value: number) {
        console.debug("* calculator::mul(%s) invoked.", value)

        this.value *= value
        console.log(`\t+ this.value: ${this.value}`)
        
        return this
    } // mul

} // end class

console.log(calculator)     // [Function: calculator]
console.dir(calculator)     // [Function: calculator]
console.table(calculator)   // [Function: calculator]

/*
    calculator:

        function calculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
*/
console.log('calculator:\n\n%s', calculator, '\n')

console.log(typeof calculator)      // function

// -----------------------------------------

const calc: calculator = new calculator         // OK
// const calc: calculator = new calculator()       // OK
// const calc: calculator = new calculator(0)      // OK

/*
    add:
        function (value) {
            console.debug("calculator::add(%s) invoked.", value);
            this.value += value;
            return this;
        }
*/
console.log('add:\n\n%s', calc.add)

/*
    mul:
        function (value) {
            console.debug("calculator::mul(%s) invoked.", value);
            this.value *= value;
            return this;
        }
*/
console.log('mul:\n\n%s', calc.mul)

console.log('%s', calc)                 // calculator { value:   0 }
console.log(calc.add(100))              // calculator { value: 100 }
console.log(calc.mul(5))                // calculator { value: 500 }



console.groupEnd()

