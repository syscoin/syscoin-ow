"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
const any_1 = require("./any");
ava_1.default('not', t => {
    t.notThrows(() => __1.default('foo!', __1.default.string.not.alphanumeric));
    t.notThrows(() => __1.default(1, __1.default.number.not.infinite));
    t.notThrows(() => __1.default(1, __1.default.number.not.infinite.not.greaterThan(5)));
    t.throws(() => __1.default(6, __1.default.number.not.infinite.not.greaterThan(5)));
    t.notThrows(() => __1.default('foo!', __1.default.string.not.alphabetical));
    t.notThrows(() => __1.default('foo!', __1.default.string.not.alphanumeric));
    t.notThrows(() => __1.default('foo!', __1.default.string.label('foo').not.alphanumeric));
    t.notThrows(() => __1.default('foo!', __1.default.string.not.alphanumeric.label('foo')));
    t.notThrows(() => __1.default('FOO!', __1.default.string.not.lowercase));
    t.notThrows(() => __1.default('foo!', __1.default.string.not.uppercase));
    t.throws(() => __1.default('', __1.default.string.not.empty), '[NOT] Expected string to be empty, got ``');
    t.throws(() => __1.default('', __1.default.string.label('foo').not.empty), '[NOT] Expected string `foo` to be empty, got ``');
});
ava_1.default('is', t => {
    const greaterThan = (max, x) => {
        return x > max || `Expected \`${x}\` to be greater than \`${max}\``;
    };
    t.notThrows(() => __1.default(1, __1.default.number.is(x => x < 10)));
    t.notThrows(() => __1.default(1, __1.default.number.label('foo').is(x => x < 10)));
    t.throws(() => __1.default(1, __1.default.number.is(x => x > 10)), 'Expected number `1` to pass custom validation function');
    t.throws(() => __1.default(1, __1.default.number.label('foo').is(x => x > 10)), 'Expected number `foo` `1` to pass custom validation function');
    t.throws(() => __1.default(5, __1.default.number.is(x => greaterThan(10, x))), '(number) Expected `5` to be greater than `10`');
    t.throws(() => __1.default(5, __1.default.number.label('foo').is(x => greaterThan(10, x))), '(number `foo`) Expected `5` to be greater than `10`');
});
ava_1.default('isValid', t => {
    t.true(__1.default.isValid(1, __1.default.number));
    t.true(__1.default.isValid(1, __1.default.number.equal(1)));
    t.true(__1.default.isValid('foo!', __1.default.string.not.alphanumeric));
    t.true(__1.default.isValid('foo!', __1.default.any(__1.default.string, __1.default.number)));
    t.true(__1.default.isValid(1, __1.default.any(__1.default.string, __1.default.number)));
    t.false(__1.default.isValid(1, __1.default.string));
    t.false(__1.default.isValid(1, __1.default.number.greaterThan(2)));
    t.false(__1.default.isValid(true, __1.default.any(__1.default.string, __1.default.number)));
});
ava_1.default('reusable validator', t => {
    const checkUsername = __1.default.create(__1.default.string.minLength(3));
    t.notThrows(() => checkUsername('foo'));
    t.notThrows(() => checkUsername('foobar'));
    t.throws(() => checkUsername('fo'), 'Expected string to have a minimum length of `3`, got `fo`');
    t.throws(() => checkUsername(5), 'Expected argument to be of type `string` but received type `number`');
});
ava_1.default('reusable validator with label', t => {
    const checkUsername = __1.default.create(__1.default.string.label('foo').minLength(3));
    t.notThrows(() => checkUsername('foo'));
    t.notThrows(() => checkUsername('foobar'));
    t.throws(() => checkUsername('fo'), 'Expected string `foo` to have a minimum length of `3`, got `fo`');
    t.throws(() => checkUsername(5), 'Expected `foo` to be of type `string` but received type `number`');
});
ava_1.default('any-reusable validator', t => {
    const checkUsername = __1.default.create(__1.default.any(__1.default.string.includes('.'), __1.default.string.minLength(3)));
    t.notThrows(() => checkUsername('foo'));
    t.notThrows(() => checkUsername('f.'));
    t.throws(() => checkUsername('fo'), any_1.createError('Expected string to include `.`, got `fo`', 'Expected string to have a minimum length of `3`, got `fo`'));
    t.throws(() => checkUsername(5), any_1.createError('Expected argument to be of type `string` but received type `number`', 'Expected argument to be of type `string` but received type `number`'));
});
ava_1.default('overwrite label', t => {
    t.notThrows(() => __1.default('foo', __1.default.string.label('foo').label('bar')));
    t.throws(() => __1.default(12, __1.default.string.label('foo').label('bar')), 'Expected `bar` to be of type `string` but received type `number`');
});
//# sourceMappingURL=test.js.map