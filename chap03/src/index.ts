console.clear
console.group("src/index.ts")

console.log()
console.log("               ******************************************")
console.log("               *       TypeScript Type Hierarchy        *")
console.log("               ******************************************")
console.log()

console.log("                           * Top-Level Type *")
console.log("                                 ( any )")     
console.log("                                    │")
console.log("             ┌─────────────────────────────────────────────┐")     
console.log("             │                                             │")
console.log("    * Primitive Types *                           * Reference Type *")
console.log("( number, boolean, string )                           ( object )")
console.log("                                                           │")
console.log("                                                           │")
console.log("                                                    * Sub-Types *")
console.log("                                              ( interface, class, ... )")   
console.log("             │                                             │")
console.log("             └─────────────────────────────────────────────┘")  
console.log("                                    │")  
console.log("                          * Bottom-Level Type *")
console.log("                              ( undefined )")



console.groupEnd
