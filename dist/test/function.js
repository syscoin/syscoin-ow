"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('function', t => {
    t.notThrows(() => __1.default(() => { }, __1.default.function)); // tslint:disable-line:no-empty
    t.notThrows(() => __1.default(() => { }, __1.default.function.label('foo'))); // tslint:disable-line:no-empty
    t.throws(() => __1.default('foo', __1.default.function), 'Expected argument to be of type `Function` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.function.label('foo')), 'Expected `foo` to be of type `Function` but received type `string`');
    t.throws(() => __1.default(12, __1.default.function), 'Expected argument to be of type `Function` but received type `number`');
});
//# sourceMappingURL=function.js.map