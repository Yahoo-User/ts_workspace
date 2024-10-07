import IPerson from "./person/IPerson"
import Person, { makePerson } from "./person/Person"


const testMakePerson = (): void => {
    console.debug("index::testMakePerson() invoked.")

    let trinity: IPerson = makePerson("Trinity")

    // let yoseph: IPerson = makePerson("Yoseph")
    let yoseph = new Person("Yoseph")

    console.log("+ Trinity:", trinity)
    console.log("+ Yoseph:", yoseph)
} // testMakePerson


testMakePerson()

