var validators_1 = require('../validators');
/**
 * A directive that bind a [ng-control] object to a DOM element.
 *
 * @exportedAs angular2/forms
 */
var ControlDirective = (function () {
    function ControlDirective() {
        this.name = null;
        this.valueAccessor = null;
        this.validator = validators_1.Validators.nullValidator;
    }
    Object.defineProperty(ControlDirective.prototype, "path", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlDirective.prototype, "control", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ControlDirective.prototype.viewToModelUpdate = function (newValue) { };
    return ControlDirective;
})();
exports.ControlDirective = ControlDirective;
exports.__esModule = true;
//# sourceMappingURL=control_directive.js.map