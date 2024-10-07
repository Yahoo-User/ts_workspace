console.clear()
console.group("src/09-1/sample2.ts")

console.debug(`
***********************************************************
* 09-1. Introduce "ramda" Library                         *
***********************************************************

2. Exercise Project Configuration

(1) The same process like the following applied to the "each clause" to exercise the project.

        > npm init -y                                   <--- ***
        > npm i -D typescript ts-node @types/node       <--- ***
        > tsc --init                                    <--- ***
        > mkdir src

    - In succession of the previous, install "ramda" package by the following commands:

        > npm home ramda                                <--- ***

        > npm { info | show | view } ramda
        > npm { info | show | view } @types/ramda

        > npm i -S ramda                                <--- ***
        > npm i -D @types/ramda                         <--- ***

    - And install "change" package to make a specious dummy data:

        > npm home chance                               <--- ***

        > npm { info | show | view } chance
        > npm { info | show | view } @types/chance

        > npm i -S chance                               <--- ***
        > npm i -D @types/chance                        <--- ***

    - In summary, List up all local packages by the following commands:
    
        // List up for "global" packages.
        > npm { ls | ll | la } -g --depth=0             <--- ***

        // List up for "local" packages.
        > npm { ls | ll | la } --depth=0                <--- ***

(2) The "dependencies" of the npm configuration file, "package.json" is like the following:

        {   // "package.json" file.
            ...
            "scripts": {
              "dev": "ts-node src",
              "build": "tsc && node dist",
              "clean": "rm -rf dist node_modules"
            },
            ...

            "devDependencies": {
                "@types/chance": "^1.1.6",
                "@types/node": "^20.9.1",
                "@types/ramda": "^0.29.9",
                "ts-node": "^10.9.1",
                "typescript": "^5.2.2"
            },
            "dependencies": {
                "chance": "^1.1.11",
                "ramda": "^0.29.1"
            }
        }

(3) The TypeScript compiler configuration file, "tsconfig.json" is like the following:

        {
            /* Visit https://aka.ms/tsconfig to read more about this file */
        
            "compilerOptions": {
        
            /* 1. Language and Environment */
            "target": "es5",                          /* ③ Set the JavaScript language version for emitted JavaScript
                                                            and include compatible library declarations. */
            
            /* 2. Modules */
            "module": "commonjs",                     /* ① Specify what module code is generated. */
            "moduleResolution": "node",               /* ④ Specify how TypeScript looks up a file from a given module specifier. */
            "baseUrl": "./",                          /* ⑥ Specify the base directory to resolve non-relative module names. */
            "paths": { "*": [ "node_modules/*" ] },   /* ⑩ Specify a set of entries that re-map imports to additional lookup locations. */
            
            /* 3. Emit */
            "sourceMap": true,                        /* ⑦ Create source map files for emitted JavaScript files. */
            "outDir": "dist",                         /* ⑤ Specify an output folder for all emitted files. */
            "downlevelIteration": true,               /* ⑧ Emit more compliant, but verbose and less performant JavaScript for iteration. */
            
            /* 4. Interop Constraints */
            "esModuleInterop": true,                  /* ② Emit additional JavaScript to ease support for importing CommonJS modules.
                                                            This enables 'allowSyntheticDefaultImports' for type compatibility. */
            
            /* 5. Type Checking */
            "noImplicitAny": false,                   /* ⑨ Enable error reporting for expressions
                                                            and declarations with an implied 'any' type. */
            },
        
            "include": [ "src/**/*" ],                  // ⑪
            "exclude": [ "dist" ]                       // ⑫
        }

(4) Like the above (1) ~ (3), All Project Follow The Same Process.                          <--- ***

(5) Why should be "false" of "noImplicitAny" property in "tsconfig.json" file ?             <--- ***

        {
            ...
            
            /* 5. Type Checking */
            "noImplicitAny": false,                   /* ⑨ Enable error reporting for expressions
                                                            and declarations with an implied 'any' type. */
            ...
        }
    
    - "ramda" library is designed for "JavaScript".                                         <--- ***

    - Thus, To configure a value of "noImplicitAny" property" in "tsconfig.json" file
      should be "false" for "TypeScript" to transpile "any" type in "JavaScript" manner.    <--- ***
`)


console.groupEnd()


