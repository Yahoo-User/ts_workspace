console.clear()
console.group("src/05-5/sample33-1.ts")

console.debug(`
*************************************************
* 05-5. Understanding Tuple                     *
*************************************************

1. Using Type Alias For Tuple

(1) When using "Tuple" type in general,
    The meaning of a "Tuple" type could be more clear through "Type Alias".

    - For example, It's good that the purpose of a "Tuple" type is more clear definitely 
      than "[ boolean, string ]" type through "Type Ailas", like the following;

      export type ResultType = [ boolean, string ]      <--- ***
`, '\n')


export
type ResultType = [ boolean, string ]

// error ts(2693) - 'ResultType' only refers to a type, but is being used as a value here.
// console.log('ResultType: %s', ResultType)     // XX


console.groupEnd()


