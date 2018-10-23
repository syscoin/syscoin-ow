"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __importDefault(require("@sindresorhus/is"));
const dot_prop_1 = __importDefault(require("dot-prop"));
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const predicate_1 = require("./predicate");
const has_items_1 = __importDefault(require("../utils/has-items"));
const of_type_1 = __importDefault(require("../utils/of-type"));
const of_type_deep_1 = __importDefault(require("../utils/of-type-deep"));
class ObjectPredicate extends predicate_1.Predicate {
    /**
     * @hidden
     */
    constructor(context) {
        super('object', context);
    }
    /**
     * Test if an Object is a plain object.
     */
    get plain() {
        return this.addValidator({
            message: (_, label) => `Expected ${label} to be a plain object`,
            validator: object => is_1.default.plainObject(object)
        });
    }
    /**
     * Test an object to be empty.
     */
    get empty() {
        return this.addValidator({
            message: (object, label) => `Expected ${label} to be empty, got \`${JSON.stringify(object)}\``,
            validator: object => Object.keys(object).length === 0
        });
    }
    /**
     * Test an object to be not empty.
     */
    get nonEmpty() {
        return this.addValidator({
            message: (_, label) => `Expected ${label} to not be empty`,
            validator: object => Object.keys(object).length > 0
        });
    }
    /**
     * Test all the values in the object to match the provided predicate.
     *
     * @param predicate The predicate that should be applied against every value in the object.
     */
    valuesOfType(predicate) {
        return this.addValidator({
            message: (_, label, error) => `(${label}) ${error}`,
            validator: (object) => {
                const values = Object.keys(object).map(key => object[key]);
                return of_type_1.default(values, predicate);
            }
        });
    }
    /**
     * Test all the values in the object deeply to match the provided predicate.
     *
     * @param predicate The predicate that should be applied against every value in the object.
     */
    deepValuesOfType(predicate) {
        return this.addValidator({
            message: (_, label, error) => `(${label}) ${error}`,
            validator: (object) => of_type_deep_1.default(object, predicate)
        });
    }
    /**
     * Test an object to be deeply equal to the provided object.
     *
     * @param expected Expected object to match.
     */
    deepEqual(expected) {
        return this.addValidator({
            message: (object, label) => `Expected ${label} to be deeply equal to \`${JSON.stringify(expected)}\`, got \`${JSON.stringify(object)}\``,
            validator: object => lodash_isequal_1.default(object, expected)
        });
    }
    /**
     * Test an object to be of a specific instance type.
     *
     * @param instance The expected instance type of the object.
     */
    instanceOf(instance) {
        return this.addValidator({
            message: (object, label) => {
                let name = object.constructor.name;
                if (!name || name === 'Object') {
                    name = JSON.stringify(object);
                }
                return `Expected ${label} \`${name}\` to be of type \`${instance.name}\``;
            },
            validator: object => object instanceof instance
        });
    }
    /**
     * Test an object to include all the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
     *
     * @param keys The keys that should be present in the object.
     */
    hasKeys(...keys) {
        return this.addValidator({
            message: (_, label, missingKeys) => `Expected ${label} to have keys \`${JSON.stringify(missingKeys)}\``,
            validator: object => has_items_1.default({
                has: item => dot_prop_1.default.has(object, item)
            }, keys)
        });
    }
    /**
     * Test an object to include any of the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
     *
     * @param keys The keys that could be a key in the object.
     */
    hasAnyKeys(...keys) {
        return this.addValidator({
            message: (_, label) => `Expected ${label} to have any key of \`${JSON.stringify(keys)}\``,
            validator: (object) => keys.some(key => dot_prop_1.default.has(object, key))
        });
    }
}
exports.ObjectPredicate = ObjectPredicate;
//# sourceMappingURL=object.js.map