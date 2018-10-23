"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('regExp', t => {
    t.notThrows(() => __1.default(/\d/, __1.default.regExp));
    t.notThrows(() => __1.default(new RegExp('\d'), __1.default.regExp));
    t.notThrows(() => __1.default(new RegExp('\d'), __1.default.regExp.label('foo')));
    t.throws(() => __1.default('foo', __1.default.regExp), 'Expected argument to be of type `RegExp` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.regExp.label('foo')), 'Expected `foo` to be of type `RegExp` but received type `string`');
    t.throws(() => __1.default(12, __1.default.regExp), 'Expected argument to be of type `RegExp` but received type `number`');
});
//# sourceMappingURL=regexp.js.map