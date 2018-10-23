"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./predicate");
class BooleanPredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('boolean', context);
    }
    /**
     * Test a boolean to be true.
     */
    get true() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be true, got ${value}`,
            validator: value => value === true
        });
    }
    /**
     * Test a boolean to be false.
     */
    get false() {
        return this.addValidator({
            message: (value, label) => `Expected ${label} to be false, got ${value}`,
            validator: value => value === false
        });
    }
}
exports.BooleanPredicate = BooleanPredicate;
//# sourceMappingURL=boolean.js.map