"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('symbol', t => {
    t.notThrows(() => __1.default(Symbol.iterator, __1.default.symbol));
    t.notThrows(() => __1.default(Symbol('foo'), __1.default.symbol));
    t.notThrows(() => __1.default(Symbol('foo'), __1.default.symbol.label('foo')));
    t.throws(() => __1.default(12, __1.default.symbol), 'Expected argument to be of type `symbol` but received type `number`');
    t.throws(() => __1.default(12, __1.default.symbol.label('foo')), 'Expected `foo` to be of type `symbol` but received type `number`');
});
//# sourceMappingURL=symbol.js.map