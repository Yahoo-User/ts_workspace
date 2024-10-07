console.clear()
console.group("src/07-1/sample1.ts")

console.debug(`
*************************************************
* 07-1. Asynchronous Callback Function          *
*************************************************

1. Configure an Exercise Project

(1) Do execute the following command in terminal:

    > mkdir chap07

    > npm init -y
        - "package.json" file created with initial configuration.

    > npm ls -g --depth=0
    > npm i -D typescript ts-node @types/node
    > npm ls --depth=0
    > mkdir src

    > tsc --init
        - "tsconfig.json" file created with the following settings;

        {
            "compilerOptions": {
              "module": "commonjs",                         // ①
              "esModuleInterop": true,                      // ②
              "target": "es5",                              // ③
              "moduleResolution": "node",                   // ④
              "outDir": "dist",                             // ⑤
              "baseUrl": ".",                               // ⑥
              "sourceMap": true,                            // ⑦
              "downlevelIteration": true,                   // ⑧ <--- *** : surely set as "true"
              "noImplicitAny": false,                       // ⑨
              "paths": { "*": [ "node_modules/*" ] }        // ⑩
            },
          
            "include" : [ "src/**/*" ],                     // ⑪

            "exclude": [ "dist" ]                           // ⑫
        }
`, '\n')



console.groupEnd()


