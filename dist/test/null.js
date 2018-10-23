"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('null', t => {
    const x = null;
    t.notThrows(() => __1.default(null, __1.default.null));
    t.notThrows(() => __1.default(x, __1.default.null));
    t.notThrows(() => __1.default(x, __1.default.null.label('foo')));
    t.throws(() => __1.default(undefined, __1.default.null), 'Expected argument to be of type `null` but received type `undefined`');
    t.throws(() => __1.default(undefined, __1.default.null.label('foo')), 'Expected `foo` to be of type `null` but received type `undefined`');
    t.throws(() => __1.default('foo', __1.default.null), 'Expected argument to be of type `null` but received type `string`');
});
//# sourceMappingURL=null.js.map