# Type Validator
This module is small but easy to use. The purpose of this module is to check if what type a variable is the typeof command has a few limitations it can tell you if a variable is one of the following: array, NaN, declared or null. Another advantage this module can validate if a source is one of multiple types in one single command.
## Validation processes
The code got multiple checks to determine what type a variable is.
### Compare method 1
This method checks if variable is a NaN.
### Compare method 2
This method checks if variable is a array.
### Compare method 3
This method checks if variable is null.
### Compare method 4
This method checks if variable is declared.
### Compare method 5
This method use the standard typeof command to identify a variable.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import valueIsTypeOf from '@teamcoder/typevalidator';

var test_undefined
var test_object = { type: "Fiat" , model: "500" , color: "white" };
var test_boolean = true;
var test_number = 14;
var test_string = "Hallo World";
var test_symbol = Symbol();
var test_function = function() { return true };
var test_array = [ 1 , 2 , 3 , 4 , 5 , 6 ];
var test_null = null;
var test_nan = Number.Nan;
var test_object = { object: true };
var test_declaired = "I'm declaired as a string";

var list_types = [ "boolean" , "number" ];

console.log( "Testing for undefined   = " + valueIsTypeOf(  test_undefined , "undefined" ) + " --> typeof = " + typeof test_undefined );
console.log( "Testing for object      = " + valueIsTypeOf(  test_object    , "object"    ) + " --> typeof = " + typeof test_object    );
console.log( "Testing for boolean     = " + valueIsTypeOf(  test_boolean   , "boolean"   ) + " --> typeof = " + typeof test_boolean   );
console.log( "Testing for number      = " + valueIsTypeOf(  test_number    , "number"    ) + " --> typeof = " + typeof test_number    );
console.log( "Testing for string      = " + valueIsTypeOf(  test_string    , "string"    ) + " --> typeof = " + typeof test_string    );
console.log( "Testing for symbol      = " + valueIsTypeOf(  test_symbol    , "symbol"    ) + " --> typeof = " + typeof test_symbol    );
console.log( "Testing for function    = " + valueIsTypeOf(  test_function  , "function"  ) + " --> typeof = " + typeof test_function  );
console.log( "Testing for array       = " + valueIsTypeOf(  test_array     , "array"     ) + " --> typeof = " + typeof test_array     );
console.log( "Testing for null        = " + valueIsTypeOf(  test_null      , "null"      ) + " --> typeof = " + typeof test_null      );
console.log( "Testing for NaN         = " + valueIsTypeOf(  test_nan       , "nan"       ) + " --> typeof = " + typeof test_nan       );
console.log( "Testing for declaired   = " + valueIsTypeOf(  test_declaired , "declaired" ) + " --> typeof = " + typeof test_declaired );
console.log( "Testing for multi-types = " + valueIsTypeOf(  true           , list_types  ) );
console.log( "Testing for multi-types = " + !valueIsTypeOf( "A"            , list_types  ) );
if( valueIsTypeOf( true , true ) === null  ) { console.log("Testing for invalid type = Passed") } else { console.log("Testing for invalid type = Failed") };
```
The results will look as follows
```
Testing for undefined    = true --> typeof = undefined
Testing for object       = true --> typeof = object
Testing for boolean      = true --> typeof = boolean
Testing for number       = true --> typeof = number
Testing for string       = true --> typeof = string
Testing for symbol       = true --> typeof = symbol
Testing for function     = true --> typeof = function
Testing for array        = true --> typeof = object
Testing for null         = true --> typeof = object
Testing for NaN          = true --> typeof = undefined
Testing for declaired    = true --> typeof = string
Testing for multi-types  = true
Testing for multi-types  = true
Testing for invalid type = Passed
```
## Function Parameters
### Parameters Passed
```
@param  { Any            } source           The source value to be checked
@param  { String, Array  } type             The type or types to validate ( "undefined" , "boolean" , "number" , "string" ,
                                                 "symbol" , "function" , "object" , "array" , "nan" , "declared" , "null" )
```
### Parameters Returned
```
@return { Boolean        }                  Validation passed or failed
@return { Null           }                  Invalid type specified in type
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \typevalidator\typevalidator.js:1
import { valueIsTypeOf } from '@teamcoder/typevalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 08 September 2022      | Official first release                                                                                |
| 1.0.1    | 08 September 2022      | Correcting documentation                                                                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.3    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.4    | 11 September 2022      | Removed Default from export function in typevalidator.js file                                         |
| 1.0.5    | 12 September 2022      | Code has been improved                                                                                |
| 1.0.6    | 12 September 2022      | package.json fixed                                                                                    |
| 1.0.7    | 12 September 2022      | typevalidator.js fixed                                                                                |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
## Dependencies:
```
@teamcoder/toarrayconverter
```
> npm i @teamcoder/typevalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
TypeValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)