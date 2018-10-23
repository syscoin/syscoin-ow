"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./predicate");
const has_items_1 = __importDefault(require("../utils/has-items"));
class WeakSetPredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('WeakSet', context);
    }
    /**
     * Test a WeakSet to include all the provided items. The items are tested by identity, not structure.
     *
     * @param items The items that should be a item in the WeakSet.
     */
    has(...items) {
        return this.addValidator({
            message: (_, label, missingItems) => `Expected ${label} to have items \`${JSON.stringify(missingItems)}\``,
            validator: set => has_items_1.default(set, items)
        });
    }
    /**
     * Test a WeakSet to include any of the provided items. The items are tested by identity, not structure.
     *
     * @param items The items that could be a item in the WeakSet.
     */
    hasAny(...items) {
        return this.addValidator({
            message: (_, label) => `Expected ${label} to have any item of \`${JSON.stringify(items)}\``,
            validator: set => items.some(item => set.has(item))
        });
    }
}
exports.WeakSetPredicate = WeakSetPredicate;
//# sourceMappingURL=weak-set.js.map