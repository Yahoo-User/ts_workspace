const MAX_AGE = 100


export default
function makeRandomNumber(max: number = MAX_AGE): number {
    console.debug(`makeRandomNumber::makeRandomNumber(${max}) invoked.`)
    return Math.ceil( Math.random() * max )
} // makeRandomNumber

