"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __importDefault(require("@sindresorhus/is"));
const predicate_1 = require("./predicate");
class NumberPredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('number', context);
    }
    /**
     * Test a number to be in a specified range.
     *
     * @param start Start of the range.
     * @param end End of the range.
     */
    inRange(start, end) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be in range [${start}..${end}], got ${value}`,
            validator: value => is_1.default.inRange(value, [start, end])
        });
    }
    /**
     * Test a number to be greater than the provided value.
     *
     * @param x Minimum value.
     */
    greaterThan(x) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be greater than ${x}, got ${value}`,
            validator: value => value > x
        });
    }
    /**
     * Test a number to be greater than or equal to the provided value.
     *
     * @param x Minimum value.
     */
    greaterThanOrEqual(x) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be greater than or equal to ${x}, got ${value}`,
            validator: value => value >= x
        });
    }
    /**
     * Test a number to be less than the provided value.
     *
     * @param x Maximum value.
     */
    lessThan(x) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be less than ${x}, got ${value}`,
            validator: value => value < x
        });
    }
    /**
     * Test a number to be less than or equal to the provided value.
     *
     * @param x Minimum value.
     */
    lessThanOrEqual(x) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be less than or equal to ${x}, got ${value}`,
            validator: value => value <= x
        });
    }
    /**
     * Test a number to be equal to a specified number.
     *
     * @param expected Expected value to match.
     */
    equal(expected) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be equal to ${expected}, got ${value}`,
            validator: value => value === expected
        });
    }
    /**
     * Test a number to be an integer.
     */
    get integer() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be an integer, got ${value}`,
            validator: value => is_1.default.integer(value)
        });
    }
    /**
     * Test a number to be finite.
     */
    get finite() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be finite, got ${value}`,
            validator: value => !is_1.default.infinite(value)
        });
    }
    /**
     * Test a number to be infinite.
     */
    get infinite() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be infinite, got ${value}`,
            validator: value => is_1.default.infinite(value)
        });
    }
    /**
     * Test a number to be positive.
     */
    get positive() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be positive, got ${value}`,
            validator: value => value > 0
        });
    }
    /**
     * Test a number to be negative.
     */
    get negative() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be negative, got ${value}`,
            validator: value => value < 0
        });
    }
}
exports.NumberPredicate = NumberPredicate;
//# sourceMappingURL=number.js.map