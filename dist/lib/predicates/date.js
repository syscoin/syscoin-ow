"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./predicate");
class DatePredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('date', context);
    }
    /**
     * Test a date to be before another date.
     *
     * @param date Maximum value.
     */
    before(date) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} ${value.toISOString()} to be before ${date.toISOString()}`,
            validator: value => value.getTime() < date.getTime()
        });
    }
    /**
     * Test a date to be before another date.
     *
     * @param date Minimum value.
     */
    after(date) {
        return this.addValidator({
            message: (value, label) => `Expected ${label} ${value.toISOString()} to be after ${date.toISOString()}`,
            validator: value => value.getTime() > date.getTime()
        });
    }
}
exports.DatePredicate = DatePredicate;
//# sourceMappingURL=date.js.map