"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./predicate");
const has_items_1 = __importDefault(require("../utils/has-items"));
class WeakMapPredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('WeakMap', context);
    }
    /**
     * Test a WeakMap to include all the provided keys. The keys are tested by identity, not structure.
     *
     * @param keys The keys that should be a key in the WeakMap.
     */
    hasKeys(...keys) {
        return this.addValidator({
            message: (_, label, missingKeys) => `Expected ${label} to have keys \`${JSON.stringify(missingKeys)}\``,
            validator: map => has_items_1.default(map, keys)
        });
    }
    /**
     * Test a WeakMap to include any of the provided keys. The keys are tested by identity, not structure.
     *
     * @param keys The keys that could be a key in the WeakMap.
     */
    hasAnyKeys(...keys) {
        return this.addValidator({
            message: (_, label) => `Expected ${label} to have any key of \`${JSON.stringify(keys)}\``,
            validator: map => keys.some(key => map.has(key))
        });
    }
}
exports.WeakMapPredicate = WeakMapPredicate;
//# sourceMappingURL=weak-map.js.map