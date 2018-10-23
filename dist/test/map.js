"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('map', t => {
    t.notThrows(() => __1.default(new Map(), __1.default.map));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo')));
    t.throws(() => __1.default(12, __1.default.map), 'Expected argument to be of type `Map` but received type `number`');
    t.throws(() => __1.default(12, __1.default.map.label('foo')), 'Expected `foo` to be of type `Map` but received type `number`');
});
ava_1.default('map.size', t => {
    t.notThrows(() => __1.default(new Map(), __1.default.map.size(0)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.size(1)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').size(1)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.size(1).label('foo')));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.size(0)), 'Expected Map to have size `0`, got `1`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').size(0)), 'Expected Map `foo` to have size `0`, got `1`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.size(0).label('foo')), 'Expected Map `foo` to have size `0`, got `1`');
});
ava_1.default('map.minSize', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.minSize(1)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.minSize(1)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.minSize(2)), 'Expected Map to have a minimum size of `2`, got `1`');
});
ava_1.default('map.maxSize', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.maxSize(1)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.maxSize(4)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.maxSize(1)), 'Expected Map to have a maximum size of `1`, got `2`');
});
ava_1.default('map.hasKeys', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.hasKeys('unicorn')));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasKeys('unicorn', 'rainbow')));
    t.notThrows(() => __1.default(new Map([[1, '🦄'], [2, '🌈']]), __1.default.map.hasKeys(1, 2)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasKeys('foo')), 'Expected Map to have keys `["foo"]`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['foo', '🌈']]), __1.default.map.hasKeys('foo', 'bar')), 'Expected Map to have keys `["bar"]`');
    t.throws(() => __1.default(new Map([[2, '🦄'], [4, '🌈']]), __1.default.map.hasKeys(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), 'Expected Map to have keys `[1,3,5,6,7]`');
});
ava_1.default('map.hasAnyKeys', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.hasAnyKeys('unicorn', 'rainbow')));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasAnyKeys('unicorn')));
    t.notThrows(() => __1.default(new Map([[1, '🦄'], [2, '🌈']]), __1.default.map.hasAnyKeys(1, 2, 3, 4)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasAnyKeys('foo')), 'Expected Map to have any key of `["foo"]`');
});
ava_1.default('map.hasValues', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.hasValues('🦄')));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasValues('🦄', '🌈')));
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasValues('🦄', '🌦️')), 'Expected Map to have values `["🌦️"]`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasValues('🌈', '⚡', '👓', '🐬', '🎃', '🎶', '❤', '️🐳', '🍀', '👽')), 'Expected Map to have values `["⚡","👓","🐬","🎃","🎶"]`');
});
ava_1.default('map.hasAnyValues', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.hasAnyValues('🦄', '🌈')));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasAnyValues('🦄')));
    t.throws(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.hasAnyValues('🌦️')), 'Expected Map to have any value of `["🌦️"]`');
});
ava_1.default('map.keysOfType', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.keysOfType(__1.default.string)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄'], ['rainbow', '🌈']]), __1.default.map.keysOfType(__1.default.string.minLength(3))));
    t.notThrows(() => __1.default(new Map([[1, '🦄']]), __1.default.map.keysOfType(__1.default.number)));
    t.notThrows(() => __1.default(new Map([[1, '🦄']]), __1.default.map.label('foo').keysOfType(__1.default.number)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.keysOfType(__1.default.number)), '(Map) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').keysOfType(__1.default.number)), '(Map `foo`) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').keysOfType(__1.default.number.label('bar'))), '(Map `foo`) Expected `bar` to be of type `number` but received type `string`');
});
ava_1.default('map.valuesOfType', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', 1]]), __1.default.map.valuesOfType(__1.default.number)));
    t.notThrows(() => __1.default(new Map([['unicorn', 10], ['rainbow', 11]]), __1.default.map.valuesOfType(__1.default.number.greaterThanOrEqual(10))));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.valuesOfType(__1.default.string)));
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').valuesOfType(__1.default.string)));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.valuesOfType(__1.default.number)), '(Map) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').valuesOfType(__1.default.number)), '(Map `foo`) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.label('foo').valuesOfType(__1.default.number.label('bar'))), '(Map `foo`) Expected `bar` to be of type `number` but received type `string`');
});
ava_1.default('map.empty', t => {
    t.notThrows(() => __1.default(new Map(), __1.default.map.empty));
    t.notThrows(() => __1.default(new Map([]), __1.default.map.empty));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.empty), 'Expected Map to be empty, got `[["unicorn","🦄"]]`');
});
ava_1.default('map.notEmpty', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.nonEmpty));
    t.throws(() => __1.default(new Map(), __1.default.map.nonEmpty), 'Expected Map to not be empty');
});
ava_1.default('map.deepEqual', t => {
    t.notThrows(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.deepEqual(new Map([['unicorn', '🦄']]))));
    t.notThrows(() => __1.default(new Map([['foo', { foo: 'bar' }]]), __1.default.map.deepEqual(new Map([['foo', { foo: 'bar' }]]))));
    t.throws(() => __1.default(new Map([['unicorn', '🦄']]), __1.default.map.deepEqual(new Map([['rainbow', '🌈']]))), 'Expected Map to be deeply equal to `[["rainbow","🌈"]]`, got `[["unicorn","🦄"]]`');
    t.throws(() => __1.default(new Map([['foo', { foo: 'bar' }]]), __1.default.map.deepEqual(new Map([['foo', { foo: 'baz' }]]))), 'Expected Map to be deeply equal to `[["foo",{"foo":"baz"}]]`, got `[["foo",{"foo":"bar"}]]`');
});
//# sourceMappingURL=map.js.map