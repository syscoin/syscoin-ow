"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./lib/predicates/predicate");
exports.Predicate = predicate_1.Predicate;
const any_1 = require("./lib/predicates/any");
exports.AnyPredicate = any_1.AnyPredicate;
const base_predicate_1 = require("./lib/predicates/base-predicate");
const string_1 = require("./lib/predicates/string");
exports.StringPredicate = string_1.StringPredicate;
const number_1 = require("./lib/predicates/number");
exports.NumberPredicate = number_1.NumberPredicate;
const boolean_1 = require("./lib/predicates/boolean");
exports.BooleanPredicate = boolean_1.BooleanPredicate;
const array_1 = require("./lib/predicates/array");
exports.ArrayPredicate = array_1.ArrayPredicate;
const object_1 = require("./lib/predicates/object");
exports.ObjectPredicate = object_1.ObjectPredicate;
const date_1 = require("./lib/predicates/date");
exports.DatePredicate = date_1.DatePredicate;
const error_1 = require("./lib/predicates/error");
exports.ErrorPredicate = error_1.ErrorPredicate;
const map_1 = require("./lib/predicates/map");
exports.MapPredicate = map_1.MapPredicate;
const weak_map_1 = require("./lib/predicates/weak-map");
exports.WeakMapPredicate = weak_map_1.WeakMapPredicate;
const set_1 = require("./lib/predicates/set");
exports.SetPredicate = set_1.SetPredicate;
const weak_set_1 = require("./lib/predicates/weak-set");
exports.WeakSetPredicate = weak_set_1.WeakSetPredicate;
global.Buffer = global.Buffer || require("buffer").Buffer;
const main = (value, predicate) => predicate[base_predicate_1.testSymbol](value, main);
Object.defineProperties(main, {
    isValid: {
        value: (value, predicate) => {
            try {
                main(value, predicate);
                return true;
            }
            catch (_a) {
                return false;
            }
        }
    },
    create: {
        value: (predicate) => (value) => main(value, predicate)
    },
    any: {
        value: (...predicates) => new any_1.AnyPredicate(predicates)
    },
    string: {
        get: () => new string_1.StringPredicate()
    },
    number: {
        get: () => new number_1.NumberPredicate()
    },
    boolean: {
        get: () => new boolean_1.BooleanPredicate()
    },
    undefined: {
        get: () => new predicate_1.Predicate('undefined')
    },
    null: {
        get: () => new predicate_1.Predicate('null')
    },
    nullOrUndefined: {
        get: () => new predicate_1.Predicate('nullOrUndefined')
    },
    nan: {
        get: () => new predicate_1.Predicate('nan')
    },
    symbol: {
        get: () => new predicate_1.Predicate('symbol')
    },
    array: {
        get: () => new array_1.ArrayPredicate()
    },
    object: {
        get: () => new object_1.ObjectPredicate()
    },
    date: {
        get: () => new date_1.DatePredicate()
    },
    error: {
        get: () => new error_1.ErrorPredicate()
    },
    map: {
        get: () => new map_1.MapPredicate()
    },
    weakMap: {
        get: () => new weak_map_1.WeakMapPredicate()
    },
    set: {
        get: () => new set_1.SetPredicate()
    },
    weakSet: {
        get: () => new weak_set_1.WeakSetPredicate()
    },
    function: {
        get: () => new predicate_1.Predicate('Function')
    },
    buffer: {
        get: () => new predicate_1.Predicate('Buffer')
    },
    regExp: {
        get: () => new predicate_1.Predicate('RegExp')
    },
    promise: {
        get: () => new predicate_1.Predicate('Promise')
    },
    typedArray: {
        get: () => new predicate_1.Predicate('TypedArray')
    },
    int8Array: {
        get: () => new predicate_1.Predicate('Int8Array')
    },
    uint8Array: {
        get: () => new predicate_1.Predicate('Uint8Array')
    },
    uint8ClampedArray: {
        get: () => new predicate_1.Predicate('Uint8ClampedArray')
    },
    int16Array: {
        get: () => new predicate_1.Predicate('Int16Array')
    },
    uint16Array: {
        get: () => new predicate_1.Predicate('Uint16Array')
    },
    int32Array: {
        get: () => new predicate_1.Predicate('Int32Array')
    },
    uint32Array: {
        get: () => new predicate_1.Predicate('Uint32Array')
    },
    float32Array: {
        get: () => new predicate_1.Predicate('Float32Array')
    },
    float64Array: {
        get: () => new predicate_1.Predicate('Float64Array')
    },
    arrayBuffer: {
        get: () => new predicate_1.Predicate('ArrayBuffer')
    },
    dataView: {
        get: () => new predicate_1.Predicate('DataView')
    },
    iterable: {
        get: () => new predicate_1.Predicate('Iterable')
    }
});
exports.default = main;
//# sourceMappingURL=index.js.map