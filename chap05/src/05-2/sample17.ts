console.clear()
console.group("src/05-2/sample17.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

4. Problem Solution of All Odd Numbers Summation Between 1 and 100

(1) From "general purpose & reusable" standpoint, 
    Problem is to sum all odd numbers between 1 and 100 in way of "Imperative Programming".

(2) "fold" function only process all items of an Array into "one" value
    in way of "Declarative Programming".

    - But No feature to filter odd items of the Array.
`, '\n')


let oddSum: number = 0

for(let val = 1; val <= 100; val += 2) {
    oddSum += val
} // classical for

console.log(oddSum)     // 2500


console.groupEnd()


