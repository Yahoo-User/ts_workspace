console.clear()
console.group("src/05-4/sample31-1.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

7. Array's "filter" Method and Pure Deletion

(1) Array's "splice" method remove a specific item of an Array.
    - Because this method changes an "original" Array,
      it cannot be used as a "Pure Function".                                       <--- ***
    - Interestingly, Array's "filter" method can be used to remove specific items.  <--- ***
    - Array's "filter" & "map" methods act in way of "Deep Copy",
      *NOT* like "sort" method.                                                     <--- ***
    - Array's "filter" method can remove items *NOT* satisfied with a condition
      without chainging items of an "original" Array.                               <--- ***
`, '\n')


// 1. The following function removes an Array's items *NOT* satisfied with a condition
//    without chainging an original Array in way of a "Pure Function".

export
const pureDelete = 
    <T>(array: T[], cb: (item: T, index?: number) => boolean): T[] => 
        array.filter((item, index) => cb(item, index) == false)

/*  
    pureDelete:

    function (array, cb) {
        return array.filter(function (item, index) { 
          return cb(item, index) == false; 
        });
    }
*/
console.log("pureDelete:\n\n%s", exports.pureDelete, '\n')


console.groupEnd()


