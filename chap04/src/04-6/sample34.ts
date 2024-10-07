console.clear()
console.group("src/04-6/sample34.ts")

console.debug(`
*************************************************
* 04-6. Class Methods                           *
*************************************************

4. Static Methods

(1) "static" modifier
    - Methods are also properties in the class.
    - This attached to properties make the properties as "Static Properties".   <--- ***
    - This attached to methods make it as "Static Methods".                     <--- ***
    - All "static member" in the class could be invoked like ;
        a. For property   :   "ClassName.StaticPropertyName"                    <--- ***
        b. For method     :   "ClassName.StaticMethodName()"                    <--- ***
`, '\n')


export
class C {

    static whoAreYou(): string {
        console.debug("C::whoAreYou() invoked.")
        return "I'm class, C"
    } // whoAreYou

} // end class

/**
    function () {
        console.debug("C::whoAreYou() invoked.");
        return "I'm class, C";
    }
 */
console.log('C.whoAreYou: %s', C.whoAreYou, '\n')

// -----------------------------------------

export
class D {

    static whoAreYou(): string {
        console.debug("D::whoAreYou() invoked.")
        return "I'm class, D"
    } // whoAreYou

} // end class

/**
    function () {
        console.debug("D::whoAreYou() invoked.");
        return "I'm class, D";
    }
 */
console.log('D.whoAreYou: %s', D.whoAreYou, '\n')

// -----------------------------------------


// Static Methods Invocation
console.log( C.whoAreYou(), '\n' )      // I'm class, C
console.log( D.whoAreYou(), '\n' )      // I'm class, D



console.groupEnd()



