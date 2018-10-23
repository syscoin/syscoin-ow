"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importDefault(require(".."));
ava_1.default('dataView', t => {
    t.notThrows(() => __1.default(new DataView(new ArrayBuffer(1)), __1.default.dataView));
    t.notThrows(() => __1.default(new DataView(new ArrayBuffer(1)), __1.default.dataView.label('data')));
    t.throws(() => __1.default(new ArrayBuffer(1), __1.default.dataView), 'Expected argument to be of type `DataView` but received type `ArrayBuffer`');
    t.throws(() => __1.default(new ArrayBuffer(1), __1.default.dataView.label('data')), 'Expected `data` to be of type `DataView` but received type `ArrayBuffer`');
    t.throws(() => __1.default(12, __1.default.dataView), 'Expected argument to be of type `DataView` but received type `number`');
});
//# sourceMappingURL=data-view.js.map