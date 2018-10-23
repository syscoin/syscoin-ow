"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
const unicorn = { unicorn: '🦄' };
const rainbow = { rainbow: '🌈' };
const rocket = { rocket: '🚀' };
ava_1.default('weakSet', t => {
    t.notThrows(() => __1.default(new WeakSet(), __1.default.weakSet));
    t.notThrows(() => __1.default(new WeakSet([{ unicorn: '🦄' }]), __1.default.weakSet));
    t.notThrows(() => __1.default(new WeakSet([unicorn]), __1.default.weakSet));
    t.notThrows(() => __1.default(new WeakSet([unicorn]), __1.default.weakSet.label('foo')));
    t.throws(() => __1.default(12, __1.default.weakSet), 'Expected argument to be of type `WeakSet` but received type `number`');
    t.throws(() => __1.default(12, __1.default.weakSet.label('foo')), 'Expected `foo` to be of type `WeakSet` but received type `number`');
});
ava_1.default('weakSet.has', t => {
    const keys = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 7 }, { x: 8 }, { x: 9 }, { x: 10 }];
    t.notThrows(() => __1.default(new WeakSet([unicorn]), __1.default.weakSet.has(unicorn)));
    t.notThrows(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.has(unicorn, rainbow)));
    t.notThrows(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.label('foo').has(unicorn, rainbow)));
    t.notThrows(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.has(unicorn, rainbow).label('foo')));
    t.throws(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.has(rocket)), 'Expected WeakSet to have items `[{"rocket":"🚀"}]`');
    t.throws(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.label('foo').has(rocket)), 'Expected WeakSet `foo` to have items `[{"rocket":"🚀"}]`');
    t.throws(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.has(rocket).label('foo')), 'Expected WeakSet `foo` to have items `[{"rocket":"🚀"}]`');
    t.throws(() => __1.default(new WeakSet([unicorn, rocket]), __1.default.weakSet.has(rainbow, rocket)), 'Expected WeakSet to have items `[{"rainbow":"🌈"}]`');
    t.throws(() => __1.default(new WeakSet([keys[1], keys[3]]), __1.default.weakSet.has(...keys)), 'Expected WeakSet to have items `[{"x":1},{"x":3},{"x":5},{"x":6},{"x":7}]`');
});
ava_1.default('weakSet.hasAny', t => {
    t.notThrows(() => __1.default(new WeakSet([unicorn]), __1.default.weakSet.hasAny(unicorn, rainbow)));
    t.notThrows(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.hasAny(unicorn)));
    t.throws(() => __1.default(new WeakSet([unicorn, rainbow]), __1.default.weakSet.hasAny(rocket)), 'Expected WeakSet to have any item of `[{"rocket":"🚀"}]`');
});
//# sourceMappingURL=weak-set.js.map