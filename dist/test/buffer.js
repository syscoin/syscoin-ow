"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('buffer', t => {
    t.notThrows(() => __1.default(Buffer.alloc(2), __1.default.buffer));
    t.notThrows(() => __1.default(Buffer.from('f'), __1.default.buffer));
    t.notThrows(() => __1.default(Buffer.from('f'), __1.default.buffer.label('foo')));
    t.throws(() => __1.default('foo', __1.default.buffer), 'Expected argument to be of type `Buffer` but received type `string`');
    t.throws(() => __1.default('foo', __1.default.buffer.label('foo')), 'Expected `foo` to be of type `Buffer` but received type `string`');
    t.throws(() => __1.default(12, __1.default.buffer), 'Expected argument to be of type `Buffer` but received type `number`');
});
//# sourceMappingURL=buffer.js.map