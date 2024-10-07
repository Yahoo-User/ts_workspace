console.clear()
console.group("src/06-1/sample1.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

1. Configure a Exercise Project

(1) This chapter requires the special configuration in "Node.JS" Project and "tsconfig.json".

    - make a named, "chap06" directory.

    - Do the following commands;

        > npm init -y
        > npm i -D typescript ts-node @types/node
        > mkdir src

    - Copy "tsconfig.json" defined in "02-3" to this project directory. OR
      Generate a "tsconfig.json" file using "tsc --init" command and fill with the following configurations:

      {
        "compilerOptions": {
          "module": "commonjs",                     // ①
          "esModuleInterop": true,                  // ②
          "target": "es5",                          // ③
          "moduleResolution": "node",               // ④
          "outDir": "dist",                         // ⑤
          "baseUrl": ".",                           // ⑥
          "sourceMap": true,                        // ⑦
          "downlevelIteration": true,               // ⑧
          "noImplicitAny": false,                   // ⑨
          "paths": { "*": [ "node_modules/*" ] }    // ⑩
        },
      
        "include" : [ "src/**/*" ],                 // ⑪
        "exclude": [ "dist" ]                       // ⑫
      }
`, '\n')



console.groupEnd()


