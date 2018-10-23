"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('undefined', t => {
    const x = undefined;
    const y = 12;
    t.notThrows(() => __1.default(undefined, __1.default.undefined));
    t.notThrows(() => __1.default(x, __1.default.undefined));
    t.notThrows(() => __1.default(x, __1.default.undefined.label('foo')));
    t.throws(() => __1.default(y, __1.default.undefined), 'Expected argument to be of type `undefined` but received type `number`');
    t.throws(() => __1.default(y, __1.default.undefined.label('foo')), 'Expected `foo` to be of type `undefined` but received type `number`');
    t.throws(() => __1.default(null, __1.default.undefined), 'Expected argument to be of type `undefined` but received type `null`');
    t.throws(() => __1.default('foo', __1.default.undefined), 'Expected argument to be of type `undefined` but received type `string`');
});
//# sourceMappingURL=undefined.js.map