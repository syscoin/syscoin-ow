"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_error_1 = require("../argument-error");
const base_predicate_1 = require("./base-predicate");
/**
 * @hidden
 */
class AnyPredicate {
    constructor(predicates) {
        this.predicates = predicates;
    }
    // tslint:disable completed-docs
    [base_predicate_1.testSymbol](value, main) {
        const errors = [
            'Any predicate failed with the following errors:'
        ];
        for (const predicate of this.predicates) {
            try {
                main(value, predicate);
                return;
            }
            catch (err) {
                errors.push(`- ${err.message}`);
            }
        }
        throw new argument_error_1.ArgumentError(errors.join('\n'));
    }
}
exports.AnyPredicate = AnyPredicate;
//# sourceMappingURL=any.js.map