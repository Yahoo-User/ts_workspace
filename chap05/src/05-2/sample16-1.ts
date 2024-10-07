console.clear()
console.group("src/05-2/sample16-1.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

3. 'fold': Folding Array's Data

(1) In "Functional Programming", "fold" has special meaning.

(2) "fold" is used to generate 'one' value as a result of processing Array's data.   <--- ***

(3) If the type of item of an Array is "T", An array could be represented by "T[]".
    - "Fold" function process "T[]" type array and generate an "T" type result.
    - This is the same that "fold" spread all items of an Array,
      and then "fold" all items of the Array and generate "one" value.
`, '\n')


export
const fold = <T>(
        array: T[],                             // ① Target array to "fold".
        callback: (result: T, item: T) => T,    // ② Callback Function == Function Expression == Anonymous Function.
        initialValue: T                         // ③ Initial value of a "result" named variable.
    ) => {
    console.debug("fold(%s, %s, %s) invoked.", array, callback, initialValue)

    let result: T = initialValue

    // -----------------
    // 1st. method
    // -----------------
    // for(let i=0; i < array.length; i++) {
    //     const item = array[i]
    //     result = callback(result, item)
    // } // classical for

    // -----------------
    // 2nd. method
    // -----------------
    for(let item of array) {
        result = callback(result, item)
    } // for...of

    return result
} // fold


/*
    fold: function (
        array,          // ① Target array to "fold".
        callback,       // ② Callback Function == Function Expression == Anonymous Function.
        initialValue    // ③ Initial value of a "result" named variable.
    ) {
      var e_1, _a;

      console.debug("fold(%s, %s, %s) invoked.", array, callback, initialValue);

      var result = initialValue;

      try {
          // -----------------
          // 1st. method
          // -----------------
          // for(let i=0; i < array.length; i++) {
          //     const item = array[i]
          //     result = callback(result, item)
          // } // classical for
          // -----------------
          // 2nd. method
          // -----------------
          for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
              var item = array_1_1.value;
              result = callback(result, item);
          } // for...of
      } 
      catch (e_1_1) { e_1 = { error: e_1_1 }; }
      finally {
          try {
              if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
          }
          finally { if (e_1) throw e_1.error; }
      }

      return result;
  } // fold
*/
console.log('fold: %s', fold)



console.groupEnd()


