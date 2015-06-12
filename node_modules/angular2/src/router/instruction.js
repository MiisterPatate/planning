var collection_1 = require('angular2/src/facade/collection');
var async_1 = require('angular2/src/facade/async');
var lang_1 = require('angular2/src/facade/lang');
var RouteParams = (function () {
    function RouteParams(params) {
        this.params = params;
    }
    RouteParams.prototype.get = function (param) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.params, param)); };
    return RouteParams;
})();
exports.RouteParams = RouteParams;
/**
 * An `Instruction` represents the component hierarchy of the application based on a given route
 */
var Instruction = (function () {
    function Instruction(_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, params = _b.params, component = _b.component, children = _b.children, matchedUrl = _b.matchedUrl, parentSpecificity = _b.parentSpecificity;
        this.reuse = false;
        this.capturedUrl = matchedUrl;
        this.accumulatedUrl = matchedUrl;
        this.specificity = parentSpecificity;
        if (lang_1.isPresent(children)) {
            this._children = children;
            var childUrl;
            collection_1.StringMapWrapper.forEach(this._children, function (child, _) {
                childUrl = child.accumulatedUrl;
                _this.specificity += child.specificity;
            });
            if (lang_1.isPresent(childUrl)) {
                this.accumulatedUrl += childUrl;
            }
        }
        else {
            this._children = collection_1.StringMapWrapper.create();
        }
        this.component = component;
        this.params = params;
    }
    Instruction.prototype.hasChild = function (outletName) {
        return collection_1.StringMapWrapper.contains(this._children, outletName);
    };
    /**
     * Returns the child instruction with the given outlet name
     */
    Instruction.prototype.getChild = function (outletName) {
        return collection_1.StringMapWrapper.get(this._children, outletName);
    };
    /**
     * (child:Instruction, outletName:string) => {}
     */
    Instruction.prototype.forEachChild = function (fn) { collection_1.StringMapWrapper.forEach(this._children, fn); };
    /**
     * Does a synchronous, breadth-first traversal of the graph of instructions.
     * Takes a function with signature:
     * (child:Instruction, outletName:string) => {}
     */
    Instruction.prototype.traverseSync = function (fn) {
        this.forEachChild(fn);
        this.forEachChild(function (childInstruction, _) { return childInstruction.traverseSync(fn); });
    };
    /**
     * Takes a currently active instruction and sets a reuse flag on each of this instruction's
     * children
     */
    Instruction.prototype.reuseComponentsFrom = function (oldInstruction) {
        this.traverseSync(function (childInstruction, outletName) {
            var oldInstructionChild = oldInstruction.getChild(outletName);
            if (shouldReuseComponent(childInstruction, oldInstructionChild)) {
                childInstruction.reuse = true;
            }
        });
    };
    return Instruction;
})();
exports.Instruction = Instruction;
function shouldReuseComponent(instr1, instr2) {
    return instr1.component == instr2.component &&
        collection_1.StringMapWrapper.equals(instr1.params, instr2.params);
}
function mapObjAsync(obj, fn) {
    return async_1.PromiseWrapper.all(mapObj(obj, fn));
}
function mapObj(obj, fn) {
    var result = collection_1.ListWrapper.create();
    collection_1.StringMapWrapper.forEach(obj, function (value, key) { return collection_1.ListWrapper.push(result, fn(value, key)); });
    return result;
}
exports.__esModule = true;
//# sourceMappingURL=instruction.js.map