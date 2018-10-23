"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('boolean', t => {
    t.notThrows(() => __1.default(true, __1.default.boolean));
    t.notThrows(() => __1.default(true, __1.default.boolean.label('foo')));
    t.throws(() => __1.default('12', __1.default.boolean), 'Expected argument to be of type `boolean` but received type `string`');
    t.throws(() => __1.default('12', __1.default.boolean.label('foo')), 'Expected `foo` to be of type `boolean` but received type `string`');
});
ava_1.default('boolean.true', t => {
    t.notThrows(() => __1.default(true, __1.default.boolean.true));
    t.notThrows(() => __1.default(Boolean(true), __1.default.boolean.true));
    t.notThrows(() => __1.default(Boolean(1), __1.default.boolean.true));
    t.notThrows(() => __1.default(Boolean(1), __1.default.boolean.label('foo').true));
    t.notThrows(() => __1.default(Boolean(1), __1.default.boolean.true.label('foo')));
    t.throws(() => __1.default(false, __1.default.boolean.true), 'Expected boolean to be true, got false');
    t.throws(() => __1.default(false, __1.default.boolean.label('foo').true), 'Expected boolean `foo` to be true, got false');
    t.throws(() => __1.default(false, __1.default.boolean.true.label('foo')), 'Expected boolean `foo` to be true, got false');
    t.throws(() => __1.default(Boolean(0), __1.default.boolean.true), 'Expected boolean to be true, got false');
});
ava_1.default('boolean.false', t => {
    t.notThrows(() => __1.default(false, __1.default.boolean.false));
    t.notThrows(() => __1.default(Boolean(false), __1.default.boolean.false));
    t.notThrows(() => __1.default(Boolean(0), __1.default.boolean.false));
    t.throws(() => __1.default(true, __1.default.boolean.false), 'Expected boolean to be false, got true');
    t.throws(() => __1.default(Boolean(1), __1.default.boolean.false), 'Expected boolean to be false, got true');
});
//# sourceMappingURL=boolean.js.map