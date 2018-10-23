"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../.."));
/**
 * Test all the values in the collection against a provided predicate.
 *
 * @hidden
 * @param source Source collection to test.
 * @param predicate Predicate to test every item in the source collection against.
 */
exports.default = (source, predicate) => {
    try {
        for (const item of source) {
            __1.default(item, predicate);
        }
        return true;
    }
    catch (err) {
        return err.message;
    }
};
//# sourceMappingURL=of-type.js.map