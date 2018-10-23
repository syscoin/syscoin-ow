"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
exports.createError = (...errors) => {
    return [
        'Any predicate failed with the following errors:',
        ...errors.map(error => `- ${error}`)
    ].join('\n');
};
ava_1.default('any', t => {
    t.notThrows(() => __1.default(1, __1.default.any(__1.default.number)));
    t.notThrows(() => __1.default(1, __1.default.any(__1.default.number, __1.default.string)));
    t.notThrows(() => __1.default(1, __1.default.any(__1.default.number, __1.default.string)));
    t.notThrows(() => __1.default(true, __1.default.any(__1.default.number, __1.default.string, __1.default.boolean)));
    t.throws(() => __1.default(1, __1.default.any(__1.default.string)), exports.createError('Expected argument to be of type `string` but received type `number`'));
    t.throws(() => __1.default(true, __1.default.any(__1.default.number, __1.default.string)), exports.createError('Expected argument to be of type `number` but received type `boolean`', 'Expected argument to be of type `string` but received type `boolean`'));
});
ava_1.default('any inception', t => {
    t.notThrows(() => __1.default(1, __1.default.any(__1.default.number, __1.default.any(__1.default.string, __1.default.boolean))));
    t.notThrows(() => __1.default('1', __1.default.any(__1.default.number, __1.default.any(__1.default.string, __1.default.boolean))));
    t.notThrows(() => __1.default(true, __1.default.any(__1.default.number, __1.default.any(__1.default.string, __1.default.boolean))));
});
//# sourceMappingURL=any.js.map