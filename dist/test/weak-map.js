"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('weakMap', t => {
    t.notThrows(() => __1.default(new WeakMap(), __1.default.weakMap));
    t.notThrows(() => __1.default(new WeakMap([[{ foo: 'bar' }, '🦄']]), __1.default.weakMap));
    t.notThrows(() => __1.default(new WeakMap([[{ foo: 'bar' }, '🦄']]), __1.default.weakMap.label('foo')));
    t.throws(() => __1.default(12, __1.default.weakMap), 'Expected argument to be of type `WeakMap` but received type `number`');
    t.throws(() => __1.default(12, __1.default.weakMap.label('foo')), 'Expected `foo` to be of type `WeakMap` but received type `number`');
});
ava_1.default('weakMap.hasKeys', t => {
    const unicorn = { unicorn: true };
    const rainbow = { rainbow: true };
    const keys = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 7 }, { x: 8 }, { x: 9 }, { x: 10 }];
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄']]), __1.default.weakMap.hasKeys(unicorn)));
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄']]), __1.default.weakMap.label('foo').hasKeys(unicorn)));
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄']]), __1.default.weakMap.hasKeys(unicorn).label('foo')));
    t.throws(() => __1.default(new WeakMap([[{ rainbow: true }, '🌈']]), __1.default.weakMap.hasKeys({ rainbow: true })), 'Expected WeakMap to have keys `[{"rainbow":true}]`');
    t.throws(() => __1.default(new WeakMap([[{ rainbow: true }, '🌈']]), __1.default.weakMap.label('foo').hasKeys({ rainbow: true })), 'Expected WeakMap `foo` to have keys `[{"rainbow":true}]`');
    t.throws(() => __1.default(new WeakMap([[{ rainbow: true }, '🌈']]), __1.default.weakMap.hasKeys({ rainbow: true }).label('foo')), 'Expected WeakMap `foo` to have keys `[{"rainbow":true}]`');
    t.throws(() => __1.default(new WeakMap([[unicorn, '🦄'], [rainbow, '🌈']]), __1.default.weakMap.hasKeys(unicorn, { rainbow: true })), 'Expected WeakMap to have keys `[{"rainbow":true}]`');
    t.throws(() => __1.default(new WeakMap([[keys[0], 1], [keys[2], 3]]), __1.default.weakMap.hasKeys(...keys)), 'Expected WeakMap to have keys `[{"x":2},{"x":4},{"x":5},{"x":6},{"x":7}]`');
});
ava_1.default('weakMap.hasAnyKeys', t => {
    const unicorn = { unicorn: true };
    const rainbow = { rainbow: true };
    const rocket = { rocket: true };
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄']]), __1.default.weakMap.hasAnyKeys(unicorn, rainbow)));
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄'], [rainbow, '🌈']]), __1.default.weakMap.hasAnyKeys(unicorn)));
    t.notThrows(() => __1.default(new WeakMap([[unicorn, '🦄'], [rainbow, '🌈']]), __1.default.weakMap.hasAnyKeys(unicorn, rainbow, rocket)));
    t.throws(() => __1.default(new WeakMap([[unicorn, '🦄'], [rainbow, '🌈']]), __1.default.weakMap.hasAnyKeys(rocket)), 'Expected WeakMap to have any key of `[{"rocket":true}]`');
});
//# sourceMappingURL=weak-map.js.map