// import * as U from '../utils/makeRandomNumber'
import makeRandomNumber from '../utils/makeRandomNumber'

import IPerson from './IPerson'



export default
class Person implements IPerson {

    // *** : 'readonly' type modifier is only permitted on `array` and `tuple` literal types.
    constructor(public name: string, public age: number = makeRandomNumber()) {
        console.debug(`Person::constructor(${name}, ${age}) invoked.`)
        console.log(`\t+ this.name: ${this.name}, this.age: ${this.age}`)
    } // constructor

} // end class


export
const makePerson = (name: string, age: number = makeRandomNumber()): IPerson => 
                    // ( { name: name, age: age } )         // OK
                    // ( { name, age } )                    // OK
                    {                                    // OK
                        console.debug(`Person::makePerson(${name}, ${age}) invoked.`)
                        return { name, age }
                    } // makePerson


