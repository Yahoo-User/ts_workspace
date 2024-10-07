console.clear()
console.group("src/03-4/sample17-2.ts")

// *****************************************
// 03-4. De-structuring Assignment - 2
// *****************************************

console.log()
console.log('--------------------------------------------')
console.log("03-4. De-structuring Assignment - 2")
console.log('--------------------------------------------')
console.log()


console.log('Step.2 Structuring Variables.', '\n')

// -----------------------------------------

export
interface IPerson {
    // 'public' modifier cannot appear on a type member. ts(1070)
    name: string;
    age: number;

} // end interface

// -----------------------------------------

export
interface ICompany {
    // 'public' modifier cannot appear on a type member. ts(1070)
    name: string;
    age: number;

} // end interface



console.groupEnd()


