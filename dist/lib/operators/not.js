"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("../predicates/predicate");
/**
 * Operator which inverts the following validation.
 *
 * @hidden
 * @param predictate Predicate to wrap inside the operator.
 */
exports.not = (predicate) => {
    const originalAddValidator = predicate.addValidator;
    predicate.addValidator = validator => {
        const fn = validator.validator;
        const message = validator.message;
        validator.message = (x, label) => `[NOT] ${message(x, label)}`;
        validator.validator = (x) => !fn(x);
        predicate[predicate_1.validatorSymbol].push(validator);
        predicate.addValidator = originalAddValidator;
        return predicate;
    };
    return predicate;
};
//# sourceMappingURL=not.js.map