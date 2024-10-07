console.clear()
console.group("src/08-2/sample3.ts")

console.debug(`
******************************************
* 08-2. Generic Function                 *
******************************************

3. Identity Function

(1) The simplest "Map Function" form is to return 'input value, x' without processing as it is.
    That is, Input equals to Output.                                                        <--- ***

    - In "Functional Programming", The name of "Function" that plays a role in (1)
      includes "identity" or "I" word simply.   ---> called, "Identity Function"            <--- ***

    - With "MapFunc" type defined in the previous clause,
      The signature of an "Identity Function" could be expressed as the following:

        type MapFunc<T, R> = (T) => R           // Defined in the previous clause
        type IdentityFunc<T> = MapFunc<T, T>    // Identity Function: Input == Output       <--- ***

(2) "Generic Function" Type, "IdentityFunc<T>" defined above could be used in whole
    When declaring various functions.
`, '\n')


// -----------------------------
// Using "IndentityFunc<T>" type, Declare various functions:
// -----------------------------

// ts(7051) - Parameter has a name but no type. Did you mean 'arg0: T'?
// (parameter) T: any (***)
// type IdentityFunc<T> = (T) => T          // OK, *NOT* recommended.

type IdentityFunc<T> = (value: T) => T      // OK, *Recommended*, type "MapFunc<T, R> = (T) => R"

const numberIdentity: IdentityFunc<number>  = (x: number) => x
const stringIdentity: IdentityFunc<string>  = (x: string) => x
const objectIdentity: IdentityFunc<object>  = (x: object) => x
const arrayIdentity:  IdentityFunc<any[]>   = (x: any[])  => x

// numberIdentity:      function (x) { return x; }
console.log('numberIdentity:\n\n%s', numberIdentity, '\n')

// stringIdentity:      function (x) { return x; }
console.log('stringIdentity:\n\n%s', stringIdentity, '\n')

// objectIdentity:      function (x) { return x; }
console.log('objectIdentity:\n\n%s', objectIdentity, '\n')

// arrayIdentity:       function (x) { return x; }
console.log('arrayIdentity:\n\n%s', arrayIdentity, '\n')

// -----------------------------------------

console.log(numberIdentity(100))        // 100
console.log(stringIdentity("Yoseph"))   // Yoseph
console.log(objectIdentity({}))         // {}
console.log(arrayIdentity([ 1, 2, 3 ])) // [ 1, 2, 3 ]


console.groupEnd()


