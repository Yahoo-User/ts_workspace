console.clear()
console.group("src/03-3/sample16.ts")

// *****************************************
// 03-3. static properties
// *****************************************
// (1) TypeScript class can have static properties like other OOP language.
// (2) Set or Get by `ClassName.staticPropertyName` Notation.
// (3) Syntax:
//
//     class ClassName {
//         static staticPropertyName: typeAnnotation;
//
//     } // end class

console.log()
console.log('--------------------------------------------')
console.log('03-3. static properties')
console.log('--------------------------------------------')
console.log()


class A {
    // static initValue: number = 1             // OK
    // public static initValue: number = 1      // OK
    static initValue = 1                     // OK

    // static public initValue: number = 1      // XX : 'public' modifier must precede 'static' modifier.ts(1029)

} // end class

// -----------------------------------------

let initVal = A.initValue
console.log('initVal:', initVal)        // initVal: 1

A.initValue = 2
console.log(A.initValue)                // 2



console.groupEnd()
