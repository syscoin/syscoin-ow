"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('nan', t => {
    t.notThrows(() => __1.default(NaN, __1.default.nan));
    t.notThrows(() => __1.default(Number.NaN, __1.default.nan));
    t.notThrows(() => __1.default(0 / 0, __1.default.nan));
    t.notThrows(() => __1.default(0 / 0, __1.default.nan.label('foo')));
    t.throws(() => __1.default(12, __1.default.nan), 'Expected argument to be of type `nan` but received type `number`');
    t.throws(() => __1.default(12, __1.default.nan.label('foo')), 'Expected `foo` to be of type `nan` but received type `number`');
    t.throws(() => __1.default('12', __1.default.nan), 'Expected argument to be of type `nan` but received type `string`');
});
//# sourceMappingURL=nan.js.map