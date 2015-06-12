var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var async_1 = require('angular2/src/facade/async');
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
/**
 * # Router
 * The router is responsible for mapping URLs to components.
 *
 * You can see the state of the router by inspecting the read-only field `router.navigating`.
 * This may be useful for showing a spinner, for instance.
 *
 * ## Concepts
 * Routers and component instances have a 1:1 correspondence.
 *
 * The router holds reference to a number of "outlets." An outlet is a placeholder that the
 * router dynamically fills in depending on the current URL.
 *
 * When the router navigates from a URL, it must first recognizes it and serialize it into an
 * `Instruction`.
 * The router uses the `RouteRegistry` to get an `Instruction`.
 *
 * @exportedAs angular2/router
 */
var Router = (function () {
    // todo(jeffbcross): rename _registry to registry since it is accessed from subclasses
    // todo(jeffbcross): rename _pipeline to pipeline since it is accessed from subclasses
    function Router(_registry, _pipeline, parent, hostComponent) {
        this._registry = _registry;
        this._pipeline = _pipeline;
        this.parent = parent;
        this.hostComponent = hostComponent;
        this.navigating = false;
        this.previousUrl = null;
        this._outlets = collection_1.MapWrapper.create();
        this._subject = new async_1.EventEmitter();
        this._currentInstruction = null;
    }
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    Router.prototype.childRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
    /**
     * Register an object to notify of route changes. You probably don't need to use this unless
     * you're writing a reusable component.
     */
    Router.prototype.registerOutlet = function (outlet, name) {
        if (name === void 0) { name = 'default'; }
        collection_1.MapWrapper.set(this._outlets, name, outlet);
        if (lang_1.isPresent(this._currentInstruction)) {
            var childInstruction = this._currentInstruction.getChild(name);
            return outlet.activate(childInstruction);
        }
        return async_1.PromiseWrapper.resolve(true);
    };
    /**
     * Dynamically update the routing configuration and trigger a navigation.
     *
     * # Usage
     *
     * ```
     * router.config({ 'path': '/', 'component': IndexCmp});
     * ```
     *
     * Or:
     *
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     *
     */
    Router.prototype.config = function (config) {
        var _this = this;
        if (config instanceof collection_1.List) {
            config.forEach(function (configObject) { _this._registry.config(_this.hostComponent, configObject); });
        }
        else {
            this._registry.config(this.hostComponent, config);
        }
        return this.renavigate();
    };
    /**
     * Navigate to a URL. Returns a promise that resolves to the canonical URL for the route.
     *
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
    Router.prototype.navigate = function (url) {
        var _this = this;
        if (this.navigating) {
            return async_1.PromiseWrapper.resolve(true);
        }
        this.lastNavigationAttempt = url;
        var matchedInstruction = this.recognize(url);
        if (lang_1.isBlank(matchedInstruction)) {
            return async_1.PromiseWrapper.resolve(false);
        }
        if (lang_1.isPresent(this._currentInstruction)) {
            matchedInstruction.reuseComponentsFrom(this._currentInstruction);
        }
        this._startNavigating();
        var result = this.commit(matchedInstruction)
            .then(function (_) {
            async_1.ObservableWrapper.callNext(_this._subject, matchedInstruction.accumulatedUrl);
            _this._finishNavigating();
        });
        async_1.PromiseWrapper.catchError(result, function (_) { return _this._finishNavigating(); });
        return result;
    };
    Router.prototype._startNavigating = function () { this.navigating = true; };
    Router.prototype._finishNavigating = function () { this.navigating = false; };
    /**
     * Subscribe to URL updates from the router
     */
    Router.prototype.subscribe = function (onNext) { async_1.ObservableWrapper.subscribe(this._subject, onNext); };
    /**
     *
     */
    Router.prototype.commit = function (instruction) {
        var _this = this;
        this._currentInstruction = instruction;
        // collect all outlets that do not have a corresponding child instruction
        // and remove them from the internal map of child outlets
        var toDeactivate = collection_1.ListWrapper.create();
        collection_1.MapWrapper.forEach(this._outlets, function (outlet, outletName) {
            if (!instruction.hasChild(outletName)) {
                collection_1.MapWrapper.delete(_this._outlets, outletName);
                collection_1.ListWrapper.push(toDeactivate, outlet);
            }
        });
        return async_1.PromiseWrapper.all(collection_1.ListWrapper.map(toDeactivate, function (outlet) { return outlet.deactivate(); }))
            .then(function (_) { return _this.activate(instruction); });
    };
    /**
     * Recursively remove all components contained by this router's outlets.
     * Calls deactivate hooks on all descendant components
     */
    Router.prototype.deactivate = function () { return this._eachOutletAsync(function (outlet) { return outlet.deactivate; }); };
    /**
     * Recursively activate.
     * Calls the "activate" hook on descendant components.
     */
    Router.prototype.activate = function (instruction) {
        return this._eachOutletAsync(function (outlet, name) { return outlet.activate(instruction.getChild(name)); });
    };
    Router.prototype._eachOutletAsync = function (fn) { return mapObjAsync(this._outlets, fn); };
    /**
     * Given a URL, returns an instruction representing the component graph
     */
    Router.prototype.recognize = function (url) { return this._registry.recognize(url, this.hostComponent); };
    /**
     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
     * router has yet to successfully navigate.
     */
    Router.prototype.renavigate = function () {
        var destination = lang_1.isBlank(this.previousUrl) ? this.lastNavigationAttempt : this.previousUrl;
        if (this.navigating || lang_1.isBlank(destination)) {
            return async_1.PromiseWrapper.resolve(false);
        }
        return this.navigate(destination);
    };
    /**
     * Generate a URL from a component name and optional map of parameters. The URL is relative to the
     * app's base href.
     */
    Router.prototype.generate = function (name, params) {
        return this._registry.generate(name, params, this.hostComponent);
    };
    return Router;
})();
exports.Router = Router;
var RootRouter = (function (_super) {
    __extends(RootRouter, _super);
    function RootRouter(registry, pipeline, location, hostComponent) {
        var _this = this;
        _super.call(this, registry, pipeline, null, hostComponent);
        this._location = location;
        this._location.subscribe(function (change) { return _this.navigate(change['url']); });
        this._registry.configFromComponent(hostComponent);
        this.navigate(location.path());
    }
    RootRouter.prototype.commit = function (instruction) {
        var _this = this;
        return _super.prototype.commit.call(this, instruction)
            .then(function (_) { _this._location.go(instruction.accumulatedUrl); });
    };
    return RootRouter;
})(Router);
exports.RootRouter = RootRouter;
var ChildRouter = (function (_super) {
    __extends(ChildRouter, _super);
    function ChildRouter(parent, hostComponent) {
        _super.call(this, parent._registry, parent._pipeline, parent, hostComponent);
        this.parent = parent;
    }
    return ChildRouter;
})(Router);
function mapObjAsync(obj, fn) {
    return async_1.PromiseWrapper.all(mapObj(obj, fn));
}
function mapObj(obj, fn) {
    var result = collection_1.ListWrapper.create();
    collection_1.MapWrapper.forEach(obj, function (value, key) { return collection_1.ListWrapper.push(result, fn(value, key)); });
    return result;
}
exports.__esModule = true;
//# sourceMappingURL=router.js.map