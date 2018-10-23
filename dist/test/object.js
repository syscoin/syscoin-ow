"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
class Unicorn {
} // tslint:disable-line
ava_1.default('object', t => {
    t.notThrows(() => __1.default({}, __1.default.object));
    t.notThrows(() => __1.default({}, __1.default.object.label('foo')));
    t.notThrows(() => __1.default(new Error('foo'), __1.default.object));
    t.throws(() => __1.default('foo', __1.default.object), 'Expected argument to be of type `object` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.object.label('foo')), 'Expected `foo` to be of type `object` but received type `string`');
    t.throws(() => __1.default(1, __1.default.object), 'Expected argument to be of type `object` but received type `number`');
});
ava_1.default('object.plain', t => {
    t.notThrows(() => __1.default({}, __1.default.object.plain));
    t.notThrows(() => __1.default({}, __1.default.object.label('foo').plain));
    t.notThrows(() => __1.default({}, __1.default.object.plain.label('foo')));
    t.throws(() => __1.default(new Error('foo'), __1.default.object.plain), 'Expected object to be a plain object');
    t.throws(() => __1.default(new Error('foo'), __1.default.object.label('foo').plain), 'Expected object `foo` to be a plain object');
    t.throws(() => __1.default(new Error('foo'), __1.default.object.plain.label('foo')), 'Expected object `foo` to be a plain object');
});
ava_1.default('object.empty', t => {
    t.notThrows(() => __1.default({}, __1.default.object.empty));
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.empty), 'Expected object to be empty, got `{"unicorn":"🦄"}`');
});
ava_1.default('object.nonEmpty', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.nonEmpty));
    t.throws(() => __1.default({}, __1.default.object.nonEmpty), 'Expected object to not be empty');
});
ava_1.default('object.valuesOfType', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.valuesOfType(__1.default.string)));
    t.notThrows(() => __1.default({ unicorn: '🦄', rainbow: '🌈' }, __1.default.object.valuesOfType(__1.default.string)));
    t.notThrows(() => __1.default({ unicorn: 1, rainbow: 2 }, __1.default.object.valuesOfType(__1.default.number)));
    t.notThrows(() => __1.default({ unicorn: 1, rainbow: 2 }, __1.default.object.label('foo').valuesOfType(__1.default.number)));
    t.throws(() => __1.default({ unicorn: '🦄', rainbow: 2 }, __1.default.object.valuesOfType(__1.default.string)), '(object) Expected argument to be of type `string` but received type `number`');
    t.throws(() => __1.default({ unicorn: '🦄', rainbow: 2 }, __1.default.object.label('foo').valuesOfType(__1.default.string)), '(object `foo`) Expected argument to be of type `string` but received type `number`');
    t.throws(() => __1.default({ unicorn: '🦄', rainbow: 2 }, __1.default.object.label('foo').valuesOfType(__1.default.string.label('bar'))), '(object `foo`) Expected `bar` to be of type `string` but received type `number`');
    t.throws(() => __1.default({ unicorn: 'a', rainbow: 'b' }, __1.default.object.valuesOfType(__1.default.string.minLength(2))), '(object) Expected string to have a minimum length of `2`, got `a`');
});
ava_1.default('object.valuesOfTypeDeep', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.deepValuesOfType(__1.default.string)));
    t.notThrows(() => __1.default({ unicorn: '🦄', rainbow: '🌈' }, __1.default.object.deepValuesOfType(__1.default.string)));
    t.notThrows(() => __1.default({ unicorn: { key: '🦄', value: '🌈' } }, __1.default.object.deepValuesOfType(__1.default.string)));
    t.notThrows(() => __1.default({ a: { b: { c: { d: 1 }, e: 2 }, f: 3 } }, __1.default.object.deepValuesOfType(__1.default.number)));
    t.notThrows(() => __1.default({ a: { b: { c: { d: 1 }, e: 2 }, f: 3 } }, __1.default.object.label('foo').deepValuesOfType(__1.default.number)));
    t.throws(() => __1.default({ unicorn: { key: '🦄', value: 1 } }, __1.default.object.deepValuesOfType(__1.default.string)), '(object) Expected argument to be of type `string` but received type `number`');
    t.throws(() => __1.default({ unicorn: { key: '🦄', value: 1 } }, __1.default.object.label('foo').deepValuesOfType(__1.default.string)), '(object `foo`) Expected argument to be of type `string` but received type `number`');
    t.throws(() => __1.default({ unicorn: { key: '🦄', value: 1 } }, __1.default.object.label('foo').deepValuesOfType(__1.default.string.label('bar'))), '(object `foo`) Expected `bar` to be of type `string` but received type `number`');
    t.throws(() => __1.default({ a: { b: { c: { d: 1 }, e: '2' }, f: 3 } }, __1.default.object.deepValuesOfType(__1.default.number)), '(object) Expected argument to be of type `number` but received type `string`');
});
ava_1.default('object.deepEqual', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.deepEqual({ unicorn: '🦄' })));
    t.notThrows(() => __1.default({ unicorn: '🦄', rain: { bow: '🌈' } }, __1.default.object.deepEqual({ unicorn: '🦄', rain: { bow: '🌈' } })));
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.deepEqual({ rainbow: '🌈' })), 'Expected object to be deeply equal to `{"rainbow":"🌈"}`, got `{"unicorn":"🦄"}`');
});
ava_1.default('object.instanceOf', t => {
    t.notThrows(() => __1.default(new Error('🦄'), __1.default.object.instanceOf(Error)));
    t.notThrows(() => __1.default(new Unicorn(), __1.default.object.instanceOf(Unicorn)));
    t.throws(() => __1.default(new Unicorn(), __1.default.object.instanceOf(Error)), 'Expected object `Unicorn` to be of type `Error`');
    t.throws(() => __1.default(new Unicorn(), __1.default.object.label('foo').instanceOf(Error)), 'Expected object `foo` `Unicorn` to be of type `Error`');
    t.throws(() => __1.default(new Error('🦄'), __1.default.object.instanceOf(Unicorn)), 'Expected object `Error` to be of type `Unicorn`');
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.instanceOf(Unicorn)), 'Expected object `{"unicorn":"🦄"}` to be of type `Unicorn`');
});
ava_1.default('object.hasKeys', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.hasKeys('unicorn')));
    t.notThrows(() => __1.default({ unicorn: { value: '🦄' } }, __1.default.object.hasKeys('unicorn')));
    t.notThrows(() => __1.default({ unicorn: { value: '🦄' } }, __1.default.object.hasKeys('unicorn.value')));
    t.notThrows(() => __1.default({ unicorn: '🦄', rainbow: '🌈' }, __1.default.object.hasKeys('unicorn', 'rainbow')));
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.hasKeys('unicorn', 'rainbow')), 'Expected object to have keys `["rainbow"]`');
    t.throws(() => __1.default({ unicorn: { value: '🦄' } }, __1.default.object.hasKeys('unicorn.foo')), 'Expected object to have keys `["unicorn.foo"]`');
});
ava_1.default('object.hasAnyKeys', t => {
    t.notThrows(() => __1.default({ unicorn: '🦄' }, __1.default.object.hasAnyKeys('unicorn', 'rainbow', 'foo.bar')));
    t.notThrows(() => __1.default({ unicorn: { value: '🦄' } }, __1.default.object.hasAnyKeys('unicorn', 'rainbow')));
    t.notThrows(() => __1.default({ unicorn: { value: '🦄' } }, __1.default.object.hasAnyKeys('unicorn.value', 'rainbow')));
    t.notThrows(() => __1.default({ unicorn: '🦄', rainbow: '🌈' }, __1.default.object.hasAnyKeys('unicorn')));
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.hasAnyKeys('foo')), 'Expected object to have any key of `["foo"]`');
    t.throws(() => __1.default({ unicorn: '🦄' }, __1.default.object.hasAnyKeys('unicorn.value')), 'Expected object to have any key of `["unicorn.value"]`');
});
//# sourceMappingURL=object.js.map