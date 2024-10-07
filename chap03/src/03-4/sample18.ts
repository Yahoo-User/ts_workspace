console.clear()
console.group("src/03-4/sample18.ts")

// *****************************************
// 03-4. Rest Operator
// *****************************************
// 1. ESNext & TypeScript provides rest operator. (...)
// 2. This operator called `Rest Operator` or `Spread Operator`,
//    According to the location of the operator.
// 3. `...` operator used *with* `De-structuring Assignment` called, `Rest Operator`.       (***)
// 4. `...` operator used *without* `De-structuring Assignment` called, `Spread Operator`   (***)
// 5. `Spread Operator` makes new object by spreading all properties of the targer objects. (***)

console.log()
console.log('--------------------------------------------')
console.log("03-4. Rest Operator")
console.log('--------------------------------------------')
console.log()


let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building'
}

console.log(address); console.table(address)

// -----------------------------------------

// `...` operator used as `Rest Operator`.
const { country, city, ... detail } = address   // With `De-structuring Assignment` (***)

console.log()
console.log('country:', country, ', city:', city, ', detail:', detail)

// { address1: 'Gangnam-gu', address2: 'Sinsa-dong 123-456', address3: '789 street, 2 Floor ABC building' }
console.log('typeof detail:', typeof detail); console.table(detail)





console.groupEnd()


