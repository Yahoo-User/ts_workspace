console.clear()
console.group("src/03-3/sample15.ts")

// *****************************************
// 03-3. Abstract Class & Inheritance
// *****************************************
// (1) Cannot instantiate a object.
// (2) Sub-class to extends this abstract class must implments `abstract` properties or methods.
// (3) Constructor Of a child class can invoke constructor of a parent class using `super` keyword. 
// -----------------------------------------
// 1. Syntax Of Declaring a Abstract Class:
// 
//      abstract class AbstractClassName {
//          abstract propertyName: typeAnnotation;
//
//          abstract methodName() {}
//      } // end class
// -----------------------------------------
// 2. Syntax Of extending a Abstract Class:
// 
//      class ChildClass extends ParentClass { ... }
// -----------------------------------------

console.log()
console.log('--------------------------------------------')
console.log('03-3. Abstract Class & Inheritance')
console.log('--------------------------------------------')
console.log()


abstract class AbstractPerson {
    // public abstract name: string;        // OK
    // abstract public name: string;        // XX : 'public' modifier must precede 'abstract' modifier.ts(1029)
    abstract name: string;

    constructor(public age?: number) {}

} // end class

// -----------------------------------------

class Person5 extends AbstractPerson {

    constructor(public name: string, age?: number) {
        super(age)
    } // constructor


} // end class

// -----------------------------------------

// let jack5: Person5 = new Person5("Jack", 23)         // OK
// let jack5: Person5 = new Person5("Jack")             // OK
let jack5: AbstractPerson = new Person5("Jack5", 23)    // OK : Polymorphism-1

console.log(jack5); console.table(jack5)                // Person5 { age: 23, name: 'Jack5' }

// name: Jack5 , age: 23 , isInstanceof AbstractPerson: true , isInstanceof Person5: true
console.log(
    'name:', jack5.name,
    ', age:', jack5.age,
    ', isInstanceof AbstractPerson:', jack5 instanceof AbstractPerson,
    ', isInstanceof Person5:', jack5 instanceof Person5,
    '\n'
)



console.groupEnd()

