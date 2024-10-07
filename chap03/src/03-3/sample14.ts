console.clear()
console.group("src/03-3/sample14.ts")

// *****************************************
// 03-3. Implementing a Interface
// *****************************************

console.log()
console.log('--------------------------------------------')
console.log('03-3. Implementing a Interface')
console.log('--------------------------------------------')
console.log()


interface IPerson4 {
    // 'public' modifier cannot appear on a type member. ts(1070)
    name: string;
    age?: number;

} // end interface

// -----------------------------------------****

class Person4 implements IPerson4 {
    // -----------------------------------------
    // 1st. method
    // -----------------------------------------

    // default `public` if no access modifiers.
    // public name: string;
    // age?: number;

    // constructor(name: string, age?: number) {
    //     console.debug(`constructor(${name}, ${age}) invoked.`)

    //     this.name = name;
    //     this.age = age;
    // } // constructor

    // -----------------------------------------
    // 2nd. method
    // -----------------------------------------
    constructor(public name: string, public age?: number) {}

} // end class

// -----------------------------------------

let jack4: IPerson4 = new Person4("Jack", 23)

console.log(jack4); console.table(jack4)                // Person4 { name: 'Jack', age: 23 }
console.log('name:', jack4.name, ', age:', jack4.age)   // name: Jack , age: 23



console.groupEnd()
