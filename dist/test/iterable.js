"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('iterable', t => {
    t.notThrows(() => __1.default([], __1.default.iterable));
    t.notThrows(() => __1.default('foo', __1.default.iterable));
    t.notThrows(() => __1.default(new Map(), __1.default.iterable));
    t.notThrows(() => __1.default(new Map(), __1.default.iterable.label('foo')));
    t.throws(() => __1.default(12, __1.default.iterable), 'Expected argument to be of type `Iterable` but received type `number`');
    t.throws(() => __1.default(12, __1.default.iterable.label('foo')), 'Expected `foo` to be of type `Iterable` but received type `number`');
});
//# sourceMappingURL=iterable.js.map