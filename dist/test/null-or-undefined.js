"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('nullOrUndefined', t => {
    const x = null;
    const y = undefined;
    t.notThrows(() => __1.default(null, __1.default.nullOrUndefined));
    t.notThrows(() => __1.default(undefined, __1.default.nullOrUndefined));
    t.notThrows(() => __1.default(x, __1.default.nullOrUndefined));
    t.notThrows(() => __1.default(y, __1.default.nullOrUndefined));
    t.notThrows(() => __1.default(y, __1.default.nullOrUndefined.label('foo')));
    t.throws(() => __1.default('foo', __1.default.nullOrUndefined), 'Expected argument to be of type `nullOrUndefined` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.nullOrUndefined.label('foo')), 'Expected `foo` to be of type `nullOrUndefined` but received type `string`');
});
//# sourceMappingURL=null-or-undefined.js.map