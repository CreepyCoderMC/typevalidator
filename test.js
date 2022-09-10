import { valueIsTypeOf } from '@teamcoder/typevalidator';

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

console.log( "Testing for undefined    = " + valueIsTypeOf(  test_undefined , "undefined" ) + " --> typeof = " + typeof test_undefined );
console.log( "Testing for object       = " + valueIsTypeOf(  test_object    , "object"    ) + " --> typeof = " + typeof test_object    );
console.log( "Testing for boolean      = " + valueIsTypeOf(  test_boolean   , "boolean"   ) + " --> typeof = " + typeof test_boolean   );
console.log( "Testing for number       = " + valueIsTypeOf(  test_number    , "number"    ) + " --> typeof = " + typeof test_number    );
console.log( "Testing for string       = " + valueIsTypeOf(  test_string    , "string"    ) + " --> typeof = " + typeof test_string    );
console.log( "Testing for symbol       = " + valueIsTypeOf(  test_symbol    , "symbol"    ) + " --> typeof = " + typeof test_symbol    );
console.log( "Testing for function     = " + valueIsTypeOf(  test_function  , "function"  ) + " --> typeof = " + typeof test_function  );
console.log( "Testing for array        = " + valueIsTypeOf(  test_array     , "array"     ) + " --> typeof = " + typeof test_array     );
console.log( "Testing for null         = " + valueIsTypeOf(  test_null      , "null"      ) + " --> typeof = " + typeof test_null      );
console.log( "Testing for NaN          = " + valueIsTypeOf(  test_nan       , "nan"       ) + " --> typeof = " + typeof test_nan       );
console.log( "Testing for declaired    = " + valueIsTypeOf(  test_declaired , "declaired" ) + " --> typeof = " + typeof test_declaired );
console.log( "Testing for multi-types  = " + valueIsTypeOf(  true           , list_types  ) );
console.log( "Testing for multi-types  = " + !valueIsTypeOf( "A"            , list_types  ) );
if( valueIsTypeOf( true , true ) === null  ) { console.log("Testing for invalid type = Passed") } else { console.log("Testing for invalid type = Failed") };