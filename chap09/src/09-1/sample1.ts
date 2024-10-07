console.clear()
console.group("src/09-1/sample1.ts")

console.debug(`
***********************************************************
* 09-1. Introduce "ramda" Library                         *
***********************************************************

1. "ramda" Package Configuration

(1) "ramda" package provides many "utility" functions.
    This "utility" functions refer to the following URLs:

    a. https://ramdajs.com/docs     -> functions classified in alphabetical order
    b. https://devdocs.io/ramda     -> functions classified in features

(2) Classification of functions provided by "ramda" package. (by ver0.26.1)
    ① function  - 52 functions including "R.compose", "R.pipe", "R.curry"
    ② list      - 87 functions including "R.map", "R.filter", "R.reduce"
                    in relation to Array
    ③ logic     - 17 functions including "R.not", "R.or", "R.cmd", and etc,
                    in relation to boolean logic
    ④ math      - 13 functions including "R.add", "R.subtract", "R.multiply", "R.divide", and etc,
                    in relation to number
    ⑤ object    - 49 functions including "R.prop", "R.lens", and etc
                    in relation to the "lens"
    ⑥ relation  - 25 functions including "R.lt", "R.lte", "R.gte", and etc
                    in relation to the relation between two values.
    ⑦ string    -  8 functions including "R.match", "R.replace", "R.split", and etc
                    in relation to the string and the regular expression
    ⑧ type      -  4 functions including "R.is", "R.isNil", "R.type", and etc
                    in relation to check the target type
`)


console.groupEnd()


