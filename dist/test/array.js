"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('array', t => {
    t.notThrows(() => __1.default([], __1.default.array));
    t.notThrows(() => __1.default([], __1.default.array.label('foo')));
    t.throws(() => __1.default('12', __1.default.array), 'Expected argument to be of type `array` but received type `string`');
    t.throws(() => __1.default('12', __1.default.array.label('foo')), 'Expected `foo` to be of type `array` but received type `string`');
});
ava_1.default('array.length', t => {
    t.notThrows(() => __1.default(['foo'], __1.default.array.length(1)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.length(2)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.label('foo').length(2)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.length(2).label('foo')));
    t.throws(() => __1.default(['foo'], __1.default.array.length(2)), 'Expected array to have length `2`, got `1`');
    t.throws(() => __1.default(['foo'], __1.default.array.label('foo').length(2)), 'Expected array `foo` to have length `2`, got `1`');
    t.throws(() => __1.default(['foo'], __1.default.array.length(2).label('foo')), 'Expected array `foo` to have length `2`, got `1`');
});
ava_1.default('array.minLength', t => {
    t.notThrows(() => __1.default(['foo'], __1.default.array.minLength(1)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.minLength(1)));
    t.throws(() => __1.default(['foo'], __1.default.array.minLength(2)), 'Expected array to have a minimum length of `2`, got `1`');
});
ava_1.default('array.maxLength', t => {
    t.notThrows(() => __1.default(['foo'], __1.default.array.maxLength(1)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.maxLength(4)));
    t.throws(() => __1.default(['foo', 'bar'], __1.default.array.maxLength(1)), 'Expected array to have a maximum length of `1`, got `2`');
});
ava_1.default('array.startsWith', t => {
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.startsWith('foo')));
    t.throws(() => __1.default(['foo', 'bar'], __1.default.array.startsWith('bar')), 'Expected array to start with `bar`, got `foo`');
});
ava_1.default('array.endsWith', t => {
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.endsWith('bar')));
    t.throws(() => __1.default(['foo', 'bar'], __1.default.array.endsWith('foo')), 'Expected array to end with `foo`, got `bar`');
});
ava_1.default('array.includes', t => {
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.includes('foo')));
    t.notThrows(() => __1.default(['foo', 'bar', 'unicorn'], __1.default.array.includes('foo', 'bar')));
    t.throws(() => __1.default(['foo', 'bar'], __1.default.array.includes('foo', 'unicorn')), 'Expected array to include all elements of `["foo","unicorn"]`, got `["foo","bar"]`');
});
ava_1.default('array.includesAny', t => {
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.includesAny('foo')));
    t.notThrows(() => __1.default(['foo', 'bar', 'unicorn'], __1.default.array.includesAny('unicorn', 'rainbow')));
    t.throws(() => __1.default(['foo', 'bar'], __1.default.array.includesAny('unicorn')), 'Expected array to include any element of `["unicorn"]`, got `["foo","bar"]`');
});
ava_1.default('array.empty', t => {
    t.notThrows(() => __1.default([], __1.default.array.empty));
    t.throws(() => __1.default(['foo'], __1.default.array.empty), 'Expected array to be empty, got `["foo"]`');
});
ava_1.default('array.nonEmpty', t => {
    t.notThrows(() => __1.default(['foo'], __1.default.array.nonEmpty));
    t.throws(() => __1.default([], __1.default.array.nonEmpty), 'Expected array to not be empty');
});
ava_1.default('array.deepEqual', t => {
    t.notThrows(() => __1.default(['foo'], __1.default.array.deepEqual(['foo'])));
    t.notThrows(() => __1.default(['foo', { id: 1 }], __1.default.array.deepEqual(['foo', { id: 1 }])));
    t.throws(() => __1.default(['foo', { id: 1 }], __1.default.array.deepEqual(['foo', { id: 2 }])), 'Expected array to be deeply equal to `["foo",{"id":2}]`, got `["foo",{"id":1}]`');
});
ava_1.default('array.ofType', t => {
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.ofType(__1.default.string)));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.ofType(__1.default.string.minLength(3))));
    t.notThrows(() => __1.default(['foo', 'bar'], __1.default.array.label('foo').ofType(__1.default.string.minLength(3))));
    t.throws(() => __1.default(['foo', 'b'], __1.default.array.ofType(__1.default.string.minLength(3))), '(array) Expected string to have a minimum length of `3`, got `b`');
    t.throws(() => __1.default(['foo', 'b'], __1.default.array.label('foo').ofType(__1.default.string.minLength(3))), '(array `foo`) Expected string to have a minimum length of `3`, got `b`');
    t.throws(() => __1.default(['foo', 'b'], __1.default.array.label('foo').ofType(__1.default.string.label('bar').minLength(3))), '(array `foo`) Expected string `bar` to have a minimum length of `3`, got `b`');
});
//# sourceMappingURL=array.js.map