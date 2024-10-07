console.clear()
console.group("src/03-2/sample10.ts")

// *****************************************
// 03-2. Anonymous Interface
// *****************************************
// Interface without `interface` keyword & interface name. (***)

console.log()
console.log('--------------------------------------------')
console.log('03-2. Anonymous Interface')
console.log('--------------------------------------------')
console.log()


let ai: {   // Anonymous Interface
    name: string,
    age: number,
    etc?: boolean
} = { name: "Yoseph", age: 23, etc: true }

console.log(ai); console.table(ai)              // { name: 'Yoseph', age: 23, etc: true }

console.log('name:', ai['name'], ', age:', ai['age'], ', etc:', ai['etc'])

// -----------------------------------------

ai = { name: "Yoseph", age: 23 }                // OK : `etc` is a optional property. (***)

console.log()
console.log(ai); console.table(ai)              // { name: 'Yoseph', age: 23 }

console.log('name:', ai['name'], ', age:', ai['age'], ', etc:', ai['etc'])   // ai['etc'] : undefined

// -----------------------------------------

function printMe(
    // Anonymous interface applied to the function.
    me: { name: string, age: number, etc?: boolean }
) {
    console.debug(`printMe(${me}) invoked.`)

    console.log(
        // `etc` property is *optional*
        me.etc?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`,

        "\n"
    )
} // printMe


printMe(ai)                                     // Yoseph 23







console.groupEnd()

