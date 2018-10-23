"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('set', t => {
    t.notThrows(() => __1.default(new Set(), __1.default.set));
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set));
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.label('foo')));
    t.throws(() => __1.default(12, __1.default.set), 'Expected argument to be of type `Set` but received type `number`');
    t.throws(() => __1.default(12, __1.default.set.label('foo')), 'Expected `foo` to be of type `Set` but received type `number`');
});
ava_1.default('set.size', t => {
    t.notThrows(() => __1.default(new Set(), __1.default.set.size(0)));
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.size(1)));
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.label('foo').size(1)));
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.size(1).label('foo')));
    t.throws(() => __1.default(new Set(['🦄']), __1.default.set.size(0)), 'Expected Set to have size `0`, got `1`');
    t.throws(() => __1.default(new Set(['🦄']), __1.default.set.label('foo').size(0)), 'Expected Set `foo` to have size `0`, got `1`');
    t.throws(() => __1.default(new Set(['🦄']), __1.default.set.size(0).label('foo')), 'Expected Set `foo` to have size `0`, got `1`');
});
ava_1.default('set.minSize', t => {
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.minSize(1)));
    t.notThrows(() => __1.default(new Set(['🦄', '🌈']), __1.default.set.minSize(1)));
    t.throws(() => __1.default(new Set(['🦄']), __1.default.set.minSize(2)), 'Expected Set to have a minimum size of `2`, got `1`');
});
ava_1.default('set.maxSize', t => {
    t.notThrows(() => __1.default(new Set(['🦄']), __1.default.set.maxSize(1)));
    t.notThrows(() => __1.default(new Set(['🦄', '🌈']), __1.default.set.maxSize(4)));
    t.throws(() => __1.default(new Set(['🦄', '🌈']), __1.default.set.maxSize(1)), 'Expected Set to have a maximum size of `1`, got `2`');
});
ava_1.default('set.hasKeys', t => {
    t.notThrows(() => __1.default(new Set(['unicorn']), __1.default.set.has('unicorn')));
    t.notThrows(() => __1.default(new Set(['unicorn', 'rainbow']), __1.default.set.has('unicorn', 'rainbow')));
    t.notThrows(() => __1.default(new Set([1, 2]), __1.default.set.has(1, 2)));
    t.throws(() => __1.default(new Set(['unicorn', 'rainbow']), __1.default.set.has('foo')), 'Expected Set to have items `["foo"]`');
    t.throws(() => __1.default(new Set(['unicorn', 'foo']), __1.default.set.has('foo', 'bar')), 'Expected Set to have items `["bar"]`');
    t.throws(() => __1.default(new Set([2, 4]), __1.default.set.has(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), 'Expected Set to have items `[1,3,5,6,7]`');
});
ava_1.default('set.hasAny', t => {
    t.notThrows(() => __1.default(new Set(['unicorn']), __1.default.set.hasAny('unicorn', 'rainbow')));
    t.notThrows(() => __1.default(new Set(['unicorn', 'rainbow']), __1.default.set.hasAny('unicorn')));
    t.notThrows(() => __1.default(new Set([1, 2]), __1.default.set.hasAny(1, 2, 3, 4)));
    t.throws(() => __1.default(new Set(['unicorn', 'rainbow']), __1.default.set.hasAny('foo')), 'Expected Set to have any item of `["foo"]`');
});
ava_1.default('set.ofType', t => {
    t.notThrows(() => __1.default(new Set(['unicorn']), __1.default.set.ofType(__1.default.string)));
    t.notThrows(() => __1.default(new Set(['unicorn', 'rainbow']), __1.default.set.ofType(__1.default.string.minLength(3))));
    t.notThrows(() => __1.default(new Set([1]), __1.default.set.ofType(__1.default.number)));
    t.notThrows(() => __1.default(new Set([1]), __1.default.set.label('foo').ofType(__1.default.number)));
    t.throws(() => __1.default(new Set(['unicorn']), __1.default.set.ofType(__1.default.number)), '(Set) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Set(['unicorn']), __1.default.set.label('foo').ofType(__1.default.number)), '(Set `foo`) Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default(new Set(['unicorn']), __1.default.set.label('foo').ofType(__1.default.number.label('bar'))), '(Set `foo`) Expected `bar` to be of type `number` but received type `string`');
});
ava_1.default('set.empty', t => {
    t.notThrows(() => __1.default(new Set(), __1.default.set.empty));
    t.notThrows(() => __1.default(new Set([]), __1.default.set.empty));
    t.throws(() => __1.default(new Set(['unicorn']), __1.default.set.empty), 'Expected Set to be empty, got `["unicorn"]`');
});
ava_1.default('set.notEmpty', t => {
    t.notThrows(() => __1.default(new Set(['unicorn']), __1.default.set.nonEmpty));
    t.throws(() => __1.default(new Set(), __1.default.set.nonEmpty), 'Expected Set to not be empty');
});
ava_1.default('set.deepEqual', t => {
    t.notThrows(() => __1.default(new Set(['unicorn']), __1.default.set.deepEqual(new Set(['unicorn']))));
    t.notThrows(() => __1.default(new Set([{ foo: 'bar' }]), __1.default.set.deepEqual(new Set([{ foo: 'bar' }]))));
    t.throws(() => __1.default(new Set(['unicorn']), __1.default.set.deepEqual(new Set(['rainbow']))), 'Expected Set to be deeply equal to `["rainbow"]`, got `["unicorn"]`');
    t.throws(() => __1.default(new Set([{ foo: 'bar' }]), __1.default.set.deepEqual(new Set([{ foo: 'baz' }]))), 'Expected Set to be deeply equal to `[{"foo":"baz"}]`, got `[{"foo":"bar"}]`');
});
//# sourceMappingURL=set.js.map