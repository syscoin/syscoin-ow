"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('string', t => {
    t.notThrows(() => __1.default('foo', __1.default.string));
    t.notThrows(() => __1.default('foo', __1.default.string.label('foo')));
    t.throws(() => __1.default(12, __1.default.string), 'Expected argument to be of type `string` but received type `number`');
    t.throws(() => __1.default(12, __1.default.string.label('bar')), 'Expected `bar` to be of type `string` but received type `number`');
});
ava_1.default('string.length', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.length(3)));
    t.notThrows(() => __1.default('foobar', __1.default.string.length(6)));
    t.notThrows(() => __1.default('bar', __1.default.string.label('bar').length(3)));
    t.notThrows(() => __1.default('bar', __1.default.string.length(3).label('bar')));
    t.throws(() => __1.default('foo', __1.default.string.length(4)), 'Expected string to have length `4`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.label('foo').length(4)), 'Expected string `foo` to have length `4`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.length(4).label('foo')), 'Expected string `foo` to have length `4`, got `foo`');
});
ava_1.default('string.minLength', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.minLength(2)));
    t.notThrows(() => __1.default('foo', __1.default.string.minLength(3)));
    t.throws(() => __1.default('foo', __1.default.string.minLength(4)), 'Expected string to have a minimum length of `4`, got `foo`');
});
ava_1.default('string.maxLength', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.maxLength(3)));
    t.notThrows(() => __1.default('foo', __1.default.string.maxLength(5)));
    t.throws(() => __1.default('foo', __1.default.string.maxLength(2)), 'Expected string to have a maximum length of `2`, got `foo`');
});
ava_1.default('string.matches', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.matches(/^f.o$/)));
    t.notThrows(() => __1.default('Foo', __1.default.string.matches(/^f.o$/i)));
    t.throws(() => __1.default('Foo', __1.default.string.matches(/^f.o$/)), 'Expected string to match `/^f.o$/`, got `Foo`');
    t.throws(() => __1.default('bar', __1.default.string.matches(/^f.o$/i)), 'Expected string to match `/^f.o$/i`, got `bar`');
});
ava_1.default('string.startsWith', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.startsWith('fo')));
    t.notThrows(() => __1.default('foo', __1.default.string.startsWith('f')));
    t.throws(() => __1.default('foo', __1.default.string.startsWith('oo')), 'Expected string to start with `oo`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.startsWith('b')), 'Expected string to start with `b`, got `foo`');
});
ava_1.default('string.endsWith', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.endsWith('oo')));
    t.notThrows(() => __1.default('foo', __1.default.string.endsWith('o')));
    t.throws(() => __1.default('foo', __1.default.string.endsWith('fo')), 'Expected string to end with `fo`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.endsWith('ar')), 'Expected string to end with `ar`, got `foo`');
});
ava_1.default('string.includes', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.includes('fo')));
    t.throws(() => __1.default('foo', __1.default.string.includes('bar')), 'Expected string to include `bar`, got `foo`');
});
ava_1.default('string.oneOf', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.oneOf(['foo', 'bar'])));
    t.throws(() => __1.default('foo', __1.default.string.oneOf(['unicorn', 'rainbow'])), 'Expected string to be one of `["unicorn","rainbow"]`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.oneOf(['unicorn', 'rainbow']).label('hello')), 'Expected string `hello` to be one of `["unicorn","rainbow"]`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.oneOf(['a', 'b', 'c', 'd', 'e'])), 'Expected string to be one of `["a","b","c","d","e"]`, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'])), 'Expected string to be one of `["1","2","3","4","5","6","7","8","9","10",…+3 more]`, got `foo`');
});
ava_1.default('string.empty', t => {
    t.notThrows(() => __1.default('', __1.default.string.empty));
    t.throws(() => __1.default('foo', __1.default.string.empty), 'Expected string to be empty, got `foo`');
});
ava_1.default('string.nonEmpty', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.nonEmpty));
    t.throws(() => __1.default('', __1.default.string.nonEmpty), 'Expected string to not be empty');
});
ava_1.default('string.equals', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.equals('foo')));
    t.throws(() => __1.default('bar', __1.default.string.equals('foo')), 'Expected string to be equal to `foo`, got `bar`');
});
ava_1.default('string.alphabetical', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.alphabetical));
    t.notThrows(() => __1.default('FOO', __1.default.string.alphabetical));
    t.throws(() => __1.default('foo123', __1.default.string.alphabetical), 'Expected string to be alphabetical, got `foo123`');
    t.throws(() => __1.default('', __1.default.string.alphabetical), 'Expected string to be alphabetical, got ``');
});
ava_1.default('string.alphanumeric', t => {
    t.notThrows(() => __1.default('Foo123', __1.default.string.alphanumeric));
    t.throws(() => __1.default('Foo123!', __1.default.string.alphanumeric), 'Expected string to be alphanumeric, got `Foo123!`');
});
ava_1.default('string.numeric', t => {
    t.notThrows(() => __1.default('123', __1.default.string.numeric));
    t.throws(() => __1.default('Foo123', __1.default.string.numeric), 'Expected string to be numeric, got `Foo123`');
});
ava_1.default('string.date', t => {
    t.notThrows(() => __1.default('2017-03-02', __1.default.string.date));
    t.notThrows(() => __1.default('2017-03-02T10:00:00Z', __1.default.string.date));
    t.notThrows(() => __1.default('2017-03-02T10:00:00Z', __1.default.string.label('bar').date));
    t.throws(() => __1.default('foo', __1.default.string.date), 'Expected string to be a date, got `foo`');
    t.throws(() => __1.default('foo', __1.default.string.label('bar').date), 'Expected string `bar` to be a date, got `foo`');
});
ava_1.default('string.lowercase', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.lowercase));
    t.notThrows(() => __1.default('foo123', __1.default.string.lowercase));
    t.notThrows(() => __1.default('123', __1.default.string.lowercase));
    t.throws(() => __1.default('FOO', __1.default.string.lowercase), 'Expected string to be lowercase, got `FOO`');
    t.throws(() => __1.default('', __1.default.string.lowercase), 'Expected string to be lowercase, got ``');
});
ava_1.default('string.uppercase', t => {
    t.notThrows(() => __1.default('FOO', __1.default.string.uppercase));
    t.notThrows(() => __1.default('FOO123', __1.default.string.uppercase));
    t.notThrows(() => __1.default('123', __1.default.string.uppercase));
    t.throws(() => __1.default('foo', __1.default.string.uppercase), 'Expected string to be uppercase, got `foo`');
    t.throws(() => __1.default('', __1.default.string.uppercase), 'Expected string to be uppercase, got ``');
});
//# sourceMappingURL=string.js.map