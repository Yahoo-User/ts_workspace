console.clear()
console.group("src/03-3/sample12.ts")

// *****************************************
// 03-3. Class Constructor With General Parameters
// *****************************************

console.log()
console.log('--------------------------------------------')
console.log('03-3. Class Constructor With General Parameters')
console.log('--------------------------------------------')
console.log()


class Person3 {
    name: string;       // Equals to `public name: string` if no access modifier.
    age?: number;       // Equals to `public age?: number` if no access modifier.


    constructor(name: string, age?: number) {
        console.debug(`constructor(${name}, ${age}) invoked.`)
        console.log('\t1. this:', this)      // Person3 {}                           <--- ***

        this.name = name
        this.age = age

        console.log('\t2. this:', this)      //  Person3 { name: 'Yoseph', age: 23 } <--- ***
    } // constructor
    
} // end class

// -----------------------------------------

let yoseph: Person3 = new Person3("Yoseph", 23)

console.log()
console.log(yoseph); console.table(yoseph)  // Person3 { name: 'Yoseph', age: 23 }

// OK: Whether properties *initialized* and *NOT*
console.log('name:', yoseph.name, ', age:', yoseph.age)


