console.group("makePerson")

export
function makePerson(name: string, age: number) {
    console.debug(`makePerson(${name}, ${age}) invoked.`)

    return { name: name, age: age }
} // makePerson

export
function testMakePerson() {
    console.debug("testMakePerson() invoked.")

    console.log(
        makePerson("Yoseph", 22),
        makePerson("Trinity", 23)
    )
} // testMakePerson

console.groupEnd()

