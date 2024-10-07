console.clear()
console.group("src/08-2/sample2.ts")

console.debug(`
******************************************
* 08-2. Generic Function                 *
******************************************

2. Function Role

(1) In matematics, "Function" plays a role in appling a formula to value, 'x', then output other value, 'y'.
    If expressing a "Function" as 'f', The relation between x, y, f could be expressed like the following:

        x ~> f ~> y                                                         <--- ***

(2) When implementing "Mathematical Function" in a "Programming Language",
    You must consider variables: 'x', 'y'.

    - If "Function", 'f' maps 'T' type's variable, 'x' into 'R' type's variable, 'y',
      It could be expressed like the following:

        (x: T) ~> f ~> (y: R)                                               <--- ***

    - In mathematics, This relation is called, "One-to-One Relationship".   <--- ***
    - Here, "Function", 'f' is expressed, "mapping", and "map" for brevity. <--- ***

(3) If making an "1 : 1 Map" Function in "TypeScript",
    To make "R" type value using "T" type value is expressed like the following:

        type MapFunc<T, R> = (T) => R                                       <--- ***
`, '\n')



console.groupEnd()
