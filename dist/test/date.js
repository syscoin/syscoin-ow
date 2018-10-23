"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('date', t => {
    t.notThrows(() => __1.default(new Date(), __1.default.date));
    t.notThrows(() => __1.default(new Date(), __1.default.date.label('foo')));
    t.throws(() => __1.default('12', __1.default.date), 'Expected argument to be of type `date` but received type `string`');
    t.throws(() => __1.default('12', __1.default.date.label('foo')), 'Expected `foo` to be of type `date` but received type `string`');
});
ava_1.default('date.before', t => {
    t.notThrows(() => __1.default(new Date('2017-11-25'), __1.default.date.before(new Date('2017-11-26'))));
    t.notThrows(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.before(new Date('2017-11-25T12:00:01Z'))));
    t.notThrows(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.label('foo').before(new Date('2017-11-25T12:00:01Z'))));
    t.notThrows(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.before(new Date('2017-11-25T12:00:01Z')).label('foo')));
    t.throws(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.before(new Date('2017-11-25T12:00:00Z'))), 'Expected date 2017-11-25T12:00:00.000Z to be before 2017-11-25T12:00:00.000Z');
    t.throws(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.label('foo').before(new Date('2017-11-25T12:00:00Z'))), 'Expected date `foo` 2017-11-25T12:00:00.000Z to be before 2017-11-25T12:00:00.000Z');
    t.throws(() => __1.default(new Date('2017-11-25T12:00:00Z'), __1.default.date.before(new Date('2017-11-25T12:00:00Z')).label('foo')), 'Expected date `foo` 2017-11-25T12:00:00.000Z to be before 2017-11-25T12:00:00.000Z');
});
ava_1.default('date.after', t => {
    t.notThrows(() => __1.default(new Date('2017-11-26'), __1.default.date.after(new Date('2017-11-25'))));
    t.notThrows(() => __1.default(new Date('2017-11-26T12:00:00Z'), __1.default.date.after(new Date('2017-11-26T11:59:59Z'))));
    t.throws(() => __1.default(new Date('2017-11-26T12:00:00Z'), __1.default.date.after(new Date('2017-11-26T12:00:00Z'))), 'Expected date 2017-11-26T12:00:00.000Z to be after 2017-11-26T12:00:00.000Z');
});
//# sourceMappingURL=date.js.map