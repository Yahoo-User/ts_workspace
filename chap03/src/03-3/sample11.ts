console.clear()
console.group("src/03-3/sample11.ts")

// *****************************************
// 03-3. Class Declaration
// *****************************************
// TypeScript provides the following language keywords like OOP language:
//  class, private/public/protected, implements, extend, ...
// -----------------------------------------
// Syntax:
//    class ClassName {
//        // Default: Become a general constructor parameter if no access modifier attached. (***)
//        [ private | protected | public ] 
//              // End of statement: (1) Standard Procedure(;)  (2) Optional(NO symbol)  (3) `,` Symbol *NOT* allowed.(***)
//              propertyName[?]: typeAnnotation[...];
//    } // end class

console.log()
console.log('--------------------------------------------')
console.log('03-3. Class Declaration')
console.log('--------------------------------------------')
console.log()


// public   // XX : 'public' modifier cannot appear on a `module` or `namespace element`. ts(1044)
// final    // XX : Cannot find name 'final'. ts(2304) (***)
// static   // XX : 'static' modifier cannot appear on a module or namespace element. ts(1044)
class Person {
    // public       // OK (*default*)
    // protected    // OK
    // private      // OK
    // static       // XX: Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'Person1'. ts(2699)

    name: string;   // Standard Procedure(;), No Symbol (optional), ',' NOT allowed.
    age?: number;

} // end class

// -----------------------------------------

let jack1: Person = new Person()
console.log('jack1:', jack1)                                // Person1 {}

jack1.name = "Jack"
jack1.age = 23

console.log(jack1); console.table(jack1)                    // Person1 { name: 'Jack', age: 23 }

console.log('name:', jack1['name'], ', age:', jack1['age']) // name: Jack , age: 23



console.groupEnd()
