"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __importDefault(require("@sindresorhus/is"));
const __1 = __importDefault(require("../.."));
const ofTypeDeep = (input, predicate) => {
    if (!is_1.default.plainObject(input)) {
        __1.default(input, predicate);
        return true;
    }
    return Object.keys(input).every(key => ofTypeDeep(input[key], predicate));
};
/**
 * Test all the values in the object against a provided predicate.
 *
 * @hidden
 * @param input Input object
 * @param predicate Predicate to test every value in the input object against.
 */
exports.default = (input, predicate) => {
    try {
        return ofTypeDeep(input, predicate);
    }
    catch (err) {
        return err.message;
    }
};
//# sourceMappingURL=of-type-deep.js.map