"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('number', t => {
    t.notThrows(() => __1.default(1, __1.default.number));
    t.notThrows(() => __1.default(1, __1.default.number.label('foo')));
    t.throws(() => __1.default('12', __1.default.number), 'Expected argument to be of type `number` but received type `string`');
    t.throws(() => __1.default('12', __1.default.number.label('foo')), 'Expected `foo` to be of type `number` but received type `string`');
});
ava_1.default('number.inRange', t => {
    t.notThrows(() => __1.default(10, __1.default.number.inRange(0, 20)));
    t.notThrows(() => __1.default(10, __1.default.number.inRange(10, 20)));
    t.notThrows(() => __1.default(10, __1.default.number.inRange(0, 10)));
    t.notThrows(() => __1.default(10, __1.default.number.label('foo').inRange(0, 10)));
    t.notThrows(() => __1.default(10, __1.default.number.inRange(0, 10).label('foo')));
    t.throws(() => __1.default(10, __1.default.number.inRange(0, 9)), 'Expected number to be in range [0..9], got 10');
    t.throws(() => __1.default(10, __1.default.number.label('foo').inRange(0, 9)), 'Expected number `foo` to be in range [0..9], got 10');
    t.throws(() => __1.default(10, __1.default.number.inRange(0, 9).label('foo')), 'Expected number `foo` to be in range [0..9], got 10');
    t.throws(() => __1.default(10, __1.default.number.inRange(11, 20)), 'Expected number to be in range [11..20], got 10');
});
ava_1.default('number.greaterThan', t => {
    t.notThrows(() => __1.default(10, __1.default.number.greaterThan(5)));
    t.notThrows(() => __1.default(10, __1.default.number.greaterThan(9)));
    t.throws(() => __1.default(10, __1.default.number.greaterThan(10)), 'Expected number to be greater than 10, got 10');
    t.throws(() => __1.default(10, __1.default.number.greaterThan(11)), 'Expected number to be greater than 11, got 10');
    t.throws(() => __1.default(10, __1.default.number.greaterThan(20)), 'Expected number to be greater than 20, got 10');
});
ava_1.default('number.greaterThanOrEqual', t => {
    t.notThrows(() => __1.default(10, __1.default.number.greaterThanOrEqual(5)));
    t.notThrows(() => __1.default(10, __1.default.number.greaterThanOrEqual(10)));
    t.throws(() => __1.default(10, __1.default.number.greaterThanOrEqual(11)), 'Expected number to be greater than or equal to 11, got 10');
    t.throws(() => __1.default(10, __1.default.number.greaterThanOrEqual(20)), 'Expected number to be greater than or equal to 20, got 10');
});
ava_1.default('number.lessThan', t => {
    t.notThrows(() => __1.default(10, __1.default.number.lessThan(20)));
    t.notThrows(() => __1.default(10, __1.default.number.lessThan(11)));
    t.throws(() => __1.default(10, __1.default.number.lessThan(10)), 'Expected number to be less than 10, got 10');
    t.throws(() => __1.default(10, __1.default.number.lessThan(9)), 'Expected number to be less than 9, got 10');
    t.throws(() => __1.default(10, __1.default.number.lessThan(0)), 'Expected number to be less than 0, got 10');
});
ava_1.default('number.lessThanOrEqual', t => {
    t.notThrows(() => __1.default(10, __1.default.number.lessThanOrEqual(20)));
    t.notThrows(() => __1.default(10, __1.default.number.lessThanOrEqual(10)));
    t.throws(() => __1.default(10, __1.default.number.lessThanOrEqual(9)), 'Expected number to be less than or equal to 9, got 10');
    t.throws(() => __1.default(10, __1.default.number.lessThanOrEqual(0)), 'Expected number to be less than or equal to 0, got 10');
});
ava_1.default('number.equal', t => {
    t.notThrows(() => __1.default(10, __1.default.number.equal(10)));
    t.throws(() => __1.default(10, __1.default.number.equal(5)), 'Expected number to be equal to 5, got 10');
});
ava_1.default('number.integer', t => {
    t.notThrows(() => __1.default(10, __1.default.number.integer));
    t.throws(() => __1.default(10.1, __1.default.number.integer), 'Expected number to be an integer, got 10.1');
});
ava_1.default('number.finite', t => {
    t.notThrows(() => __1.default(10, __1.default.number.finite));
    t.throws(() => __1.default(Infinity, __1.default.number.finite), 'Expected number to be finite, got Infinity');
});
ava_1.default('number.infinite', t => {
    t.notThrows(() => __1.default(Infinity, __1.default.number.infinite));
    t.throws(() => __1.default(10, __1.default.number.infinite), 'Expected number to be infinite, got 10');
});
ava_1.default('number.positive', t => {
    t.notThrows(() => __1.default(1, __1.default.number.positive));
    t.throws(() => __1.default(-1, __1.default.number.positive), 'Expected number to be positive, got -1');
});
ava_1.default('number.negative', t => {
    t.notThrows(() => __1.default(-1, __1.default.number.negative));
    t.throws(() => __1.default(1, __1.default.number.negative), 'Expected number to be negative, got 1');
});
//# sourceMappingURL=number.js.map