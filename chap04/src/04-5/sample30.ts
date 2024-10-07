console.clear()
console.group("src/04-5/sample30.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

5. Create a Object with Indexed Keys & Values

(1) Indexed Keys
    - In the 'ESNext' JavaScript

        Syntax: const makeObject = ( key, value ) => ( { [ key ]: value } )

    - "Indexed Keys" are used to make object properties with variables.     <--- ***

    - That is, If "key" is 'name' in the "[key]",       it becomes '{ name: value }', 
               If "key" is 'firstName' in the "[key]",  it becomes '{ firstName: value }'.

        Example:    const makeObject = ( key, value ) => ( { [key]: value } )

                    console.log( makeObject('name', 'Yoseph') )         // { name: "Yoseph" }
                    console.log( makeObject('firstName', 'Yoseph') )    // { firstName: "Yoseph" }

(2) Indexable Type
    - In TypeScript, A kind of "{ [key]: value }" type is called, "Indexable Type".
    - "Indexable Type" specifies types of "key" & "value" with the following syntax :

        Syntax:     type IndexableType = { [ key: keyTypeAnnotation ]: valueTypeAnnotation }
        Example:    type KeyType = { [ key: string ]: string }
`, '\n')


// 1. Without Indexed Keys
const makeObject1 = ( key, value ) => ( { key: value } )

/* function (key, value) { return ({ key: value }); } */
console.log('%s', makeObject1)

console.log( makeObject1('name', 'Yoseph'), '\n' )  // XX : { key: 'Yoseph' }

// -----------------------------------------

// 2. With Indexed Keys
const makeObject2 = ( key, value ) => ( { [key]: value } )  // `Indexed Keys`

/* 
    function (key, value) {
        var _a;
        return (_a = {}, _a[key] = value, _a);
    } // Anonymous Function (== Function Expression)
*/
console.log('%s', makeObject2, '\n')

console.log( makeObject2('name', 'Yoseph') )              // { name: 'Yoseph' }
console.log( makeObject2('firstName', "Yoseph"), '\n' )   // { firstName: 'Yoseph' }

// -----------------------------------------

// 3. Example Using `Indexable Types` & `Indexed Keys`

export
type KeyValueType = {
    [ key: string ]: string
}   // `Indexable Type`

export
const makeObj = (key: string, value: string): KeyValueType => ( { [key]: value } )  // `Indexed Keys`

/* 
    function (key, value) {
        var _a;
        return (_a = {}, _a[key] = value, _a);
    }
 */
console.log('makeObj:\n\n%s', makeObj)

console.log( makeObj('key1', 'value1') )    // { key1: 'value1' }
console.log( makeObj('key2', 'value2') )    // { key2: 'value2' }



console.groupEnd()



