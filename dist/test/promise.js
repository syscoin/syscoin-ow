"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('promise', t => {
    t.notThrows(() => __1.default(Promise.resolve(), __1.default.promise));
    t.notThrows(() => __1.default(new Promise(resolve => resolve()), __1.default.promise));
    t.notThrows(() => __1.default(new Promise(resolve => resolve()), __1.default.promise.label('foo')));
    t.throws(() => __1.default('foo', __1.default.promise), 'Expected argument to be of type `Promise` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.promise.label('foo')), 'Expected `foo` to be of type `Promise` but received type `string`');
    t.throws(() => __1.default(12, __1.default.promise), 'Expected argument to be of type `Promise` but received type `number`');
});
//# sourceMappingURL=promise.js.map