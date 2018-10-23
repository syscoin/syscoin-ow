"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __importDefault(require("@sindresorhus/is"));
const argument_error_1 = require("../argument-error");
const base_predicate_1 = require("./base-predicate");
const not_1 = require("../operators/not");
const callsites_1 = __importDefault(require("callsites"));
/**
 * @hidden
 */
exports.validatorSymbol = Symbol('validators');
/**
 * @hidden
 */
class Predicate {
    constructor(type, context = {
        validators: []
    }) {
        this.type = type;
        this.context = context;
        const x = this.type[0].toLowerCase() + this.type.slice(1);
        this.addValidator({
            message: value => {
                // We do not include type in this label as we do for other messages, because it would be redundant.
                const label = this.context.label || 'argument';
                return `Expected ${label} to be of type \`${this.type}\` but received type \`${is_1.default(value)}\``;
            },
            validator: value => is_1.default[x](value)
        });
    }
    /**
     * @hidden
     */
    // tslint:disable completed-docs
    [base_predicate_1.testSymbol](value) {
        const label = this.context.label
            ? `${this.type} ${this.context.label}`
            : this.type;
        for (const { validator, message } of this.context.validators) {
            const result = validator(value);
            if (typeof result !== 'boolean' || !result) {
                this.logException();
                throw new argument_error_1.ArgumentError(message(value, label, result));
            }
        }
    }
    /**
     * @hidden
     */
    get [exports.validatorSymbol]() {
        return this.context.validators;
    }
    /**
     * Invert the following validators.
     */
    get not() {
        return not_1.not(this);
    }
    /**
     * Assign a label to this predicate for use in error messages.
     *
     * @param value Label to assign.
     */
    label(value) {
        this.context.label = `\`${value}\``;
        return this;
    }
    /**
     * Test if the value matches a custom validation function. The validation function should return `true` if the value
     * passes the function. If the function either returns `false` or a string, the function fails and the string will be
     * used as error message.
     *
     * @param fn Validation function.
     */
    is(fn) {
        return this.addValidator({
            message: (value, label, error) => (error
                ? `(${label}) ${error}`
                : `Expected ${label} \`${value}\` to pass custom validation function`),
            validator: value => fn(value)
        });
    }
    /**
     * Register a new validator.
     *
     * @internal
     * @hidden
     * @param validator Validator to register.
     */
    addValidator(validator) {
        this.context.validators.push(validator);
        return this;
    }
    /**
     * Log structured exception.
     *
     * @internal
     * @hidden
     */
    logException() {
        console.error(' call: %s:%d - type: %s', callsites_1.default()[0].getFileName(), callsites_1.default()[0].getLineNumber(), callsites_1.default()[0].getTypeName());
    }
}
exports.Predicate = Predicate;
//# sourceMappingURL=predicate.js.map