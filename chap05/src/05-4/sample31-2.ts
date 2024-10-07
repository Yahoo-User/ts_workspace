import { pureDelete } from "./sample31-1";


console.clear()
console.group("src/05-4/sample31-2.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

7. Array's "filter" Method and Pure Deletion
`, '\n')


// 2. Without damaging an "original" Array which have objects & arrays as items,
//    Generating an new Array only having Objects, NOT arrays.

const mixedArray: object[] = [
  [], { name: "Yoseph" }, { name: "Jane", age: 23 }, [ "description" ]
]

const objectsOnly: object[] = pureDelete<object>(mixedArray, (item) => Array.isArray(item))

/*
    mixedArray  : [ [], { name: 'Yoseph' }, { name: 'Jane', age: 23 }, [ 'description' ] ]
    objectsOnly : [ { name: 'Yoseph' }, { name: 'Jane', age: 23 } ]
*/
console.log(mixedArray, objectsOnly, '\n')



console.groupEnd()


