"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('typedArray', t => {
    t.notThrows(() => __1.default(new Int8Array(2), __1.default.typedArray));
    t.notThrows(() => __1.default(new Uint8Array(2), __1.default.typedArray));
    t.notThrows(() => __1.default(new Int32Array(2), __1.default.typedArray));
    t.notThrows(() => __1.default(new Float64Array(2), __1.default.typedArray));
    t.notThrows(() => __1.default(new Float64Array(2), __1.default.typedArray.label('foo')));
    t.throws(() => __1.default('foo', __1.default.typedArray), 'Expected argument to be of type `TypedArray` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.typedArray.label('foo')), 'Expected `foo` to be of type `TypedArray` but received type `string`');
    t.throws(() => __1.default(12, __1.default.typedArray), 'Expected argument to be of type `TypedArray` but received type `number`');
});
ava_1.default('int8Array', t => {
    t.notThrows(() => __1.default(new Int8Array(2), __1.default.int8Array));
    t.throws(() => __1.default('foo', __1.default.int8Array), 'Expected argument to be of type `Int8Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.int8Array), 'Expected argument to be of type `Int8Array` but received type `number`');
});
ava_1.default('uint8Array', t => {
    t.notThrows(() => __1.default(new Uint8Array(2), __1.default.uint8Array));
    t.throws(() => __1.default('foo', __1.default.uint8Array), 'Expected argument to be of type `Uint8Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.uint8Array), 'Expected argument to be of type `Uint8Array` but received type `number`');
});
ava_1.default('uint8ClampedArray', t => {
    t.notThrows(() => __1.default(new Uint8ClampedArray(2), __1.default.uint8ClampedArray));
    t.throws(() => __1.default('foo', __1.default.uint8ClampedArray), 'Expected argument to be of type `Uint8ClampedArray` but received type `string`');
    t.throws(() => __1.default(12, __1.default.uint8ClampedArray), 'Expected argument to be of type `Uint8ClampedArray` but received type `number`');
});
ava_1.default('int16Array', t => {
    t.notThrows(() => __1.default(new Int16Array(2), __1.default.int16Array));
    t.throws(() => __1.default('foo', __1.default.int16Array), 'Expected argument to be of type `Int16Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.int16Array), 'Expected argument to be of type `Int16Array` but received type `number`');
});
ava_1.default('uint16Array', t => {
    t.notThrows(() => __1.default(new Uint16Array(2), __1.default.uint16Array));
    t.throws(() => __1.default('foo', __1.default.uint16Array), 'Expected argument to be of type `Uint16Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.uint16Array), 'Expected argument to be of type `Uint16Array` but received type `number`');
});
ava_1.default('int32Array', t => {
    t.notThrows(() => __1.default(new Int32Array(2), __1.default.int32Array));
    t.throws(() => __1.default('foo', __1.default.int32Array), 'Expected argument to be of type `Int32Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.int32Array), 'Expected argument to be of type `Int32Array` but received type `number`');
});
ava_1.default('uint32Array', t => {
    t.notThrows(() => __1.default(new Uint32Array(2), __1.default.uint32Array));
    t.throws(() => __1.default('foo', __1.default.uint32Array), 'Expected argument to be of type `Uint32Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.uint32Array), 'Expected argument to be of type `Uint32Array` but received type `number`');
});
ava_1.default('float32Array', t => {
    t.notThrows(() => __1.default(new Float32Array(2), __1.default.float32Array));
    t.throws(() => __1.default('foo', __1.default.float32Array), 'Expected argument to be of type `Float32Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.float32Array), 'Expected argument to be of type `Float32Array` but received type `number`');
});
ava_1.default('float64Array', t => {
    t.notThrows(() => __1.default(new Float64Array(2), __1.default.float64Array));
    t.throws(() => __1.default('foo', __1.default.float64Array), 'Expected argument to be of type `Float64Array` but received type `string`');
    t.throws(() => __1.default(12, __1.default.float64Array), 'Expected argument to be of type `Float64Array` but received type `number`');
});
//# sourceMappingURL=typed-array.js.map