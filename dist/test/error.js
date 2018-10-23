"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}
ava_1.default('error', t => {
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error));
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error.label('err')));
    t.throws(() => __1.default('12', __1.default.error), 'Expected argument to be of type `error` but received type `string`');
    t.throws(() => __1.default('12', __1.default.error.label('err')), 'Expected `err` to be of type `error` but received type `string`');
});
ava_1.default('error.name', t => {
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error.name('Error')));
    t.notThrows(() => __1.default(new CustomError('foo'), __1.default.error.name('CustomError')));
    t.notThrows(() => __1.default(new CustomError('foo'), __1.default.error.label('err').name('CustomError')));
    t.notThrows(() => __1.default(new CustomError('foo'), __1.default.error.name('CustomError').label('err')));
    t.throws(() => __1.default(new CustomError('foo'), __1.default.error.name('Error')), 'Expected error to have name `Error`, got `CustomError`');
    t.throws(() => __1.default(new CustomError('foo'), __1.default.error.label('err').name('Error')), 'Expected error `err` to have name `Error`, got `CustomError`');
    t.throws(() => __1.default(new CustomError('foo'), __1.default.error.name('Error').label('err')), 'Expected error `err` to have name `Error`, got `CustomError`');
});
ava_1.default('error.message', t => {
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error.message('foo')));
    t.notThrows(() => __1.default(new CustomError('bar'), __1.default.error.message('bar')));
    t.throws(() => __1.default(new CustomError('foo'), __1.default.error.message('bar')), 'Expected error message to be `bar`, got `foo`');
});
ava_1.default('error.messageIncludes', t => {
    t.notThrows(() => __1.default(new Error('foo bar'), __1.default.error.messageIncludes('foo')));
    t.notThrows(() => __1.default(new Error('foo bar'), __1.default.error.messageIncludes('o')));
    t.notThrows(() => __1.default(new CustomError('foo bar'), __1.default.error.messageIncludes('bar')));
    t.throws(() => __1.default(new CustomError('foo bar'), __1.default.error.messageIncludes('unicorn')), 'Expected error message to include `unicorn`, got `foo bar`');
});
ava_1.default('error.hasKeys', t => {
    const err = new Error('foo');
    err.unicorn = '🦄';
    err.rainbow = '🌈';
    t.notThrows(() => __1.default(err, __1.default.error.hasKeys('unicorn')));
    t.notThrows(() => __1.default(err, __1.default.error.hasKeys('unicorn', 'rainbow')));
    t.throws(() => __1.default(err, __1.default.error.hasKeys('foo')), 'Expected error message to have keys `foo`');
    t.throws(() => __1.default(err, __1.default.error.hasKeys('unicorn', 'foo')), 'Expected error message to have keys `unicorn`, `foo`');
});
ava_1.default('error.instanceOf', t => {
    t.notThrows(() => __1.default(new CustomError('foo'), __1.default.error.instanceOf(CustomError)));
    t.notThrows(() => __1.default(new CustomError('foo'), __1.default.error.instanceOf(Error)));
    t.notThrows(() => __1.default(new TypeError('foo'), __1.default.error.instanceOf(Error)));
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error.instanceOf(Error)));
    t.notThrows(() => __1.default(new Error('foo'), __1.default.error.label('err').instanceOf(Error)));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.instanceOf(CustomError)), 'Expected error `Error` to be of type `CustomError`');
    t.throws(() => __1.default(new Error('foo'), __1.default.error.label('err').instanceOf(CustomError)), 'Expected error `err` `Error` to be of type `CustomError`');
    t.throws(() => __1.default(new TypeError('foo'), __1.default.error.instanceOf(EvalError)), 'Expected error `TypeError` to be of type `EvalError`');
    t.throws(() => __1.default(new TypeError('foo'), __1.default.error.label('err').instanceOf(EvalError)), 'Expected error `err` `TypeError` to be of type `EvalError`');
});
ava_1.default('error.typeError', t => {
    t.notThrows(() => __1.default(new TypeError('foo'), __1.default.error.typeError));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.typeError), 'Expected error `Error` to be of type `TypeError`');
    t.throws(() => __1.default(new Error('foo'), __1.default.error.label('foo').typeError), 'Expected error `foo` `Error` to be of type `TypeError`');
});
ava_1.default('error.evalError', t => {
    t.notThrows(() => __1.default(new EvalError('foo'), __1.default.error.evalError));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.evalError), 'Expected error `Error` to be of type `EvalError`');
});
ava_1.default('error.rangeError', t => {
    t.notThrows(() => __1.default(new RangeError('foo'), __1.default.error.rangeError));
    t.throws(() => __1.default(new EvalError('foo'), __1.default.error.rangeError), 'Expected error `EvalError` to be of type `RangeError`');
});
ava_1.default('error.referenceError', t => {
    t.notThrows(() => __1.default(new ReferenceError('foo'), __1.default.error.referenceError));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.referenceError), 'Expected error `Error` to be of type `ReferenceError`');
});
ava_1.default('error.syntaxError', t => {
    t.notThrows(() => __1.default(new SyntaxError('foo'), __1.default.error.syntaxError));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.syntaxError), 'Expected error `Error` to be of type `SyntaxError`');
});
ava_1.default('error.uriError', t => {
    t.notThrows(() => __1.default(new URIError('foo'), __1.default.error.uriError));
    t.throws(() => __1.default(new Error('foo'), __1.default.error.uriError), 'Expected error `Error` to be of type `URIError`');
});
//# sourceMappingURL=error.js.map