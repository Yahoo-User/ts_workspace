console.clear()
console.group("src/03-3/sample12.ts")

// *****************************************
// 03-3. Class Constructor
// *****************************************
// In the TypeScript, the special method named `constructor` is called, Constructor.
// In the Constructor, Each Paraemter become a member `property`. (***)

console.log()
console.log('--------------------------------------------')
console.log('03-3. Class Constructor')
console.log('--------------------------------------------')
console.log()


class Person2 {
    // constructor(public name: string, public age?: number) {}     // OK if access to the all properties.
    // constructor(name: string, age?: number) {}                   // XX: 'name' is declared but its value is never read. ts(6133)
    // constructor(private name: string, public age?: number) {}    // OK but `name` property only can be accessed within the class.   

    // -----------------------------------------
    public name: string;

    // property without access modifier become a general parameter, NOT property.
    constructor(name: string, public age?: number) {
        this.name = name
    } // constructor
    // -----------------------------------------
        
} // end class

// -----------------------------------------

let jack: Person2 = new Person2("Jack", 23)              // OK
// let jack: Person2 = new Person2("Jack")                  // OK but, age == undefined
// let jack: Person2 = new Person2()                        // XX : Expected 1-2 arguments, but got 0.  ts(2554)

console.log(jack); console.table(jack)                      // Person2 { name: 'Jack', age: 23 }

console.log('name:', jack.name, ', age:', jack.age)         // name: Jack , age: 23
console.log('name:', jack['name'], ', age:', jack['age'])   // name: Jack , age: 23


console.groupEnd()

