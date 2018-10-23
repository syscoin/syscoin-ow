"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('arrayBuffer', t => {
    t.notThrows(() => __1.default(new ArrayBuffer(1), __1.default.arrayBuffer));
    t.notThrows(() => __1.default(new ArrayBuffer(1), __1.default.arrayBuffer.label('foo')));
    t.throws(() => __1.default('foo', __1.default.arrayBuffer), 'Expected argument to be of type `ArrayBuffer` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.arrayBuffer.label('foo')), 'Expected `foo` to be of type `ArrayBuffer` but received type `string`');
    t.throws(() => __1.default(12, __1.default.arrayBuffer), 'Expected argument to be of type `ArrayBuffer` but received type `number`');
});
//# sourceMappingURL=array-buffer.js.map