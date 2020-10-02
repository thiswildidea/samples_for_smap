(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Plugins = factory());
}(this, (function () { 'use strict';

// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
var EventEmitter$1 = /** @class */ (function () {
    function EventEmitter() {
        this.events = new Map();
    }
    EventEmitter.prototype._addListener = function (eventName, listener, prepend) {
        this.emit("newListener", eventName, listener);
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName);
            if (prepend) {
                listeners.unshift(listener);
            }
            else {
                listeners.push(listener);
            }
        }
        else {
            this.events.set(eventName, [listener]);
        }
        var max = this.getMaxListeners();
        if (max > 0 && this.listenerCount(eventName) > max) {
            var warning = new Error("Possible EventEmitter memory leak detected.\n         " + this.listenerCount(eventName) + " " + eventName.toString() + " listeners.\n         Use emitter.setMaxListeners() to increase limit");
            warning.name = "MaxListenersExceededWarning";
            console.warn(warning);
        }
        return this;
    };
    EventEmitter.prototype.addListener = function (eventName, listener) {
        return this._addListener(eventName, listener, false);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName).slice(); // We copy with slice() so array is not mutated during emit
            for (var _a = 0, listeners_1 = listeners; _a < listeners_1.length; _a++) {
                var listener = listeners_1[_a];
                try {
                    listener.apply(this, args);
                }
                catch (err) {
                    this.emit("error", err);
                }
            }
            return true;
        }
        else if (eventName === "error") {
            var errMsg = args.length > 0 ? args[0] : Error("Unhandled error.");
            throw errMsg;
        }
        return false;
    };
    EventEmitter.prototype.eventNames = function () {
        return Array.from(this.events.keys());
    };
    EventEmitter.prototype.getMaxListeners = function () {
        return this.maxListeners || EventEmitter.defaultMaxListeners;
    };
    EventEmitter.prototype.listenerCount = function (eventName) {
        if (this.events.has(eventName)) {
            return this.events.get(eventName).length;
        }
        else {
            return 0;
        }
    };
    EventEmitter.prototype._listeners = function (target, eventName, unwrap) {
        if (!target.events.has(eventName)) {
            return [];
        }
        var eventListeners = target.events.get(eventName);
        return unwrap
            ? this.unwrapListeners(eventListeners)
            : eventListeners.slice(0);
    };
    EventEmitter.prototype.unwrapListeners = function (arr) {
        var unwrappedListeners = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) {
            unwrappedListeners[i] = arr[i]["listener"] || arr[i];
        }
        return unwrappedListeners;
    };
    EventEmitter.prototype.listeners = function (eventName) {
        return this._listeners(this, eventName, true);
    };
    EventEmitter.prototype.rawListeners = function (eventName) {
        return this._listeners(this, eventName, false);
    };
    EventEmitter.prototype.off = function (eventName, listener) {
        return this.removeListener(eventName, listener);
    };
    EventEmitter.prototype.on = function (eventName, listener) {
        return this.addListener(eventName, listener);
    };
    EventEmitter.prototype.once = function (eventName, listener) {
        var wrapped = this.onceWrap(eventName, listener);
        this.on(eventName, wrapped);
        return this;
    };
    // Wrapped function that calls EventEmitter.removeListener(eventName, self) on execution.
    EventEmitter.prototype.onceWrap = function (eventName, listener) {
        var wrapper = function () {
            var args = []; // eslint-disable-line @typescript-eslint/no-explicit-any
            for (var _i = 0 // eslint-disable-line @typescript-eslint/no-explicit-any
            ; _i < arguments.length // eslint-disable-line @typescript-eslint/no-explicit-any
            ; _i++ // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
                args[_i] = arguments[_i]; // eslint-disable-line @typescript-eslint/no-explicit-any
            }
            this.context.removeListener(this.eventName, this.rawListener);
            this.listener.apply(this.context, args);
        };
        var wrapperContext = {
            eventName: eventName,
            listener: listener,
            rawListener: wrapper,
            context: this
        };
        var wrapped = wrapper.bind(wrapperContext);
        wrapperContext.rawListener = wrapped;
        wrapped.listener = listener;
        return wrapped;
    };
    EventEmitter.prototype.prependListener = function (eventName, listener) {
        return this._addListener(eventName, listener, true);
    };
    EventEmitter.prototype.prependOnceListener = function (eventName, listener) {
        var wrapped = this.onceWrap(eventName, listener);
        this.prependListener(eventName, wrapped);
        return this;
    };
    EventEmitter.prototype.removeAllListeners = function (eventName) {
        var _this = this;
        if (this.events === undefined) {
            return this;
        }
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName).slice(); // Create a copy; We use it AFTER it's deleted.
            this.events.delete(eventName);
            for (var _i = 0, listeners_2 = listeners; _i < listeners_2.length; _i++) {
                var listener = listeners_2[_i];
                this.emit("removeListener", eventName, listener);
            }
        }
        else {
            var eventList = this.eventNames();
            eventList.map(function (value) {
                _this.removeAllListeners(value);
            });
        }
        return this;
    };
    EventEmitter.prototype.removeListener = function (eventName, listener) {
        if (this.events.has(eventName)) {
            var arr = this.events.get(eventName);
            if (arr.indexOf(listener) !== -1) {
                arr.splice(arr.indexOf(listener), 1);
                this.emit("removeListener", eventName, listener);
                if (arr.length === 0) {
                    this.events.delete(eventName);
                }
            }
        }
        return this;
    };
    EventEmitter.prototype.setMaxListeners = function (n) {
        this.maxListeners = n;
        return this;
    };
    EventEmitter.defaultMaxListeners = 50;
    return EventEmitter;
}());

// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
// Re-export default export
// Execute
// tslint:disable-next-line:no-duplicate-imports

var Mapcofig = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Mapcofig() {
    }
    Mapcofig.jsapi = 'http://10.108.3.16/smiapi/arcgis';
    Mapcofig.jsapiversion4X = '4.16';
    return Mapcofig;
}());

var DEFAULT_VERSION = Mapcofig.jsapiversion4X;
var NEXT = 'next';
function parseVersion(version) {
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    if (version.toString().toLowerCase() === NEXT) {
        return NEXT;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
function parseVersionnew(version) {
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return Mapcofig.jsapi + ("/" + version + "/init.js");
}
function getCdnCssUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    var url = getCdnUrl(version);
    var baseUrl = url.substring(0, url.indexOf('init.js'));
    var parsedVersion = parseVersion(version);
    if (parsedVersion !== NEXT && parsedVersion.major === 3) {
        var path = parsedVersion.minor <= 10 ? 'js/' : '';
        return "" + baseUrl + path + "esri/css/esri.css";
    }
    else {
        return baseUrl + "esri/themes/light/main.css";
    }
}

function createStylesheetLink(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    return link;
}
function insertLink(link, before) {
    if (before) {
        var beforeNode = document.querySelector(before);
        beforeNode.parentNode.insertBefore(link, beforeNode);
    }
    else {
        document.head.appendChild(link);
    }
}
function getCss(url) {
    return document.querySelector("link[href*=\"" + url + "\"]");
}
function getCssUrl(urlOrVersion) {
    return !urlOrVersion || parseVersion(urlOrVersion)
        ? getCdnCssUrl(urlOrVersion)
        : urlOrVersion;
}
function loadSMIMapCss(urlOrVersion, before) {
    var url = getCssUrl(urlOrVersion);
    var link = getCss(url);
    if (!link) {
        link = createStylesheetLink(url);
        insertLink(link, before);
    }
    var parsedVersion = parseVersionnew(urlOrVersion);
    if (parsedVersion.major === 4) {
        var custmomurl = url.substring(0, url.indexOf('esri/themes/')) + "esri/themes/gis/css/gis.css";
        var customlink = getCss(custmomurl);
        if (!customlink) {
            customlink = createStylesheetLink(custmomurl);
            insertLink(customlink, before);
        }
    }
    return link;
}

var isBrowser = typeof window !== 'undefined';
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};

var defaultOptions = {};
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('data-shsmi', 'loading');
    return script;
}
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        callback(script);
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}

function getAPIScript() {
    return document.querySelector('script[data-shsmi]');
}
function isLoaded() {
    var globalRequire = window['require'];
    return globalRequire && globalRequire.on;
}
function loadAPIScript(options) {
    if (options === void 0) { options = {}; }
    var opts = {};
    [defaultOptions, options].forEach(function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
            }
        }
    });
    var version = opts.version;
    var url = opts.url || getCdnUrl(version);
    return new utils.Promise(function (resolve, reject) {
        var script = getAPIScript();
        if (script) {
            var src = script.getAttribute('src');
            if (src !== url) {
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (isLoaded()) {
                    resolve(script);
                }
                else {
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (isLoaded()) {
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                var css = opts.css;
                if (css) {
                    var useVersion = css === true;
                    loadSMIMapCss(useVersion ? version : css, opts.insertCssBefore);
                }
                else {
                    loadSMIMapCss(null, opts.insertCssBefore);
                }
                if (opts.dojoConfig) {
                    window['dojoConfig'] = opts.dojoConfig;
                }
                else {
                    var dojoConfig = {
                        async: true,
                        packages: [{
                                location: Mapcofig.jsapi + '/extensions',
                                name: '82B44794-5CE0-A64A-9047F07CAF08BD2C'
                            }, {
                                location: Mapcofig.jsapi + '/extensions/geolocation',
                                name: 'geolocate',
                                main: "geolocate"
                            }],
                        deps: ['@dojo/framework/shim/main'],
                        has: {
                            'esri-promise-compatibility': 1,
                            'esri-featurelayer-webgl': 1
                        }
                    };
                    window['dojoConfig'] = dojoConfig;
                }
                script = createScript(url);
                handleScriptLoad(script, function () {
                    script.setAttribute('data-shsmi', 'loaded');
                    resolve(script);
                }, reject);
                document.head.appendChild(script);
            }
        }
    });
}

function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            errorHandler.remove();
            resolve(args);
        });
    });
}
function load(modules, loadAPIScriptOptions) {
    if (loadAPIScriptOptions === void 0) { loadAPIScriptOptions = {}; }
    if (!isLoaded()) {
        var script = getAPIScript();
        var src = script && script.getAttribute('src');
        if (!loadAPIScriptOptions.url && src) {
            loadAPIScriptOptions.url = src;
        }
        return loadAPIScript(loadAPIScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        return requireModules(modules);
    }
}

var Guid = /** @class */ (function () {
    function Guid() {
        this.uuid = this.get_uuid();
    }
    Guid.prototype.S4 = function () {
        // tslint:disable-next-line:no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    Guid.prototype.get_uuid = function () {
        return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() +
            "-" + this.S4() + this.S4() + this.S4());
    };
    return Guid;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ArcLineRenderer = /** @class */ (function (_super) {
    __extends(ArcLineRenderer, _super);
    function ArcLineRenderer(view) {
        var _this = _super.call(this) || this;
        _this.arcLineRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    ArcLineRenderer.prototype.add = function (arcLineOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/ArcLineRenderer", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var arcLineRenderer = _a[0], externalRenderers = _a[1];
            var offset = Infinity;
            arcLineOptions.lineStrings.slice(0, offset).map(function (d) {
                var options = {
                    height: d.len / 3
                };
                var arcLine = new arcLineRenderer(_this.view, d.lineString, options);
                _this.arcLineRendererArray.push([new Guid().uuid, arcLine]);
                externalRenderers.add(_this.view, arcLine);
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    ArcLineRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.arcLineRendererArray.map(function (arcLineRendereritem) {
                externalRenderers.remove(_this.view, arcLineRendereritem[1]);
            });
        });
    };
    ArcLineRenderer.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return ArcLineRenderer;
}(EventEmitter$1));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Aurora = /** @class */ (function (_super) {
    __extends$1(Aurora, _super);
    function Aurora(view) {
        var _this = _super.call(this) || this;
        _this.auroraRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    Aurora.prototype.add = function (auroraOptions) {
        var _this = this;
        if (auroraOptions === void 0) { auroraOptions = {}; }
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/6EB9F731-BBCF-C348-D5F8B690E99E091A", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var aurora = _a[0], externalRenderers = _a[1];
            var auroraRenderer = new aurora(_this.view, auroraOptions.center, auroraOptions.radius, auroraOptions.height, auroraOptions.textureurl);
            externalRenderers.add(_this.view, auroraRenderer);
            _this.auroraRendererArray.push([new Guid().uuid, auroraRenderer]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Aurora.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.auroraRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.auroraRendererArray = [];
        });
    };
    Aurora.prototype.init = function (view) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return Aurora;
}(EventEmitter$1));

var MapEvent = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function MapEvent() {
    }
    MapEvent.maploaded = 'maploaded';
    MapEvent.zoomchanged = 'zoomchanged';
    MapEvent.extentchanged = 'extentchanged';
    MapEvent.centerchanged = 'centerchanged';
    MapEvent.blur = 'blur';
    MapEvent.click = 'click';
    MapEvent.doubleclick = 'doubleclick';
    MapEvent.drag = 'drag';
    MapEvent.focus = 'focus';
    MapEvent.hold = 'hold';
    MapEvent.keydown = 'key-down';
    MapEvent.keyup = 'key-up';
    MapEvent.mousewheel = 'mouse-wheel';
    MapEvent.pointerdown = 'pointer-down';
    MapEvent.pointerenter = 'pointer-enter';
    MapEvent.pointerleave = 'pointer-leave';
    MapEvent.pointermove = 'pointer-move';
    MapEvent.pointerup = 'pointer-up';
    MapEvent.resize = 'pointer-up';
    MapEvent.popupvisible = 'popup-visible';
    return MapEvent;
}());

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Boundary = /** @class */ (function (_super) {
    __extends$2(Boundary, _super);
    function Boundary(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.init(view);
        return _this;
    }
    Boundary.prototype.add = function (boundaryOptions) {
        var _this = this;
        if (boundaryOptions === void 0) { boundaryOptions = {}; }
        load(["esri/layers/GraphicsLayer", "esri/Graphic", "esri/layers/FeatureLayer"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var GraphicsLayer = _a[0], Graphic = _a[1], FeatureLayer = _a[2];
            if (!_this.view) {
                return;
            }
            var layer = null;
            if (boundaryOptions.boundaryType) {
                layer = _this.view.map.findLayerById(boundaryOptions.boundaryType);
            }
            if (!layer) {
                if (boundaryOptions.url) {
                    layer = new FeatureLayer({
                        url: boundaryOptions.url,
                        id: boundaryOptions.boundaryType,
                        title: boundaryOptions.boundaryType,
                        visible: false
                    });
                    _this.view.map.add(layer);
                }
            }
            if (!layer) {
                return;
            }
            var boundaryqueryParams = layer.createQuery();
            boundaryqueryParams.where = boundaryOptions.boundaryDefinition;
            layer.queryFeatures(boundaryqueryParams).then(function (response) {
                if (response.features.length > 0) {
                    var boundaryResultLayer_1 = _this.view.map.findLayerById(_this.displayedLayerid);
                    if (typeof (boundaryResultLayer_1) === 'undefined') {
                        boundaryResultLayer_1 = new GraphicsLayer({
                            title: _this.displayedLayerid + '边界',
                            id: _this.displayedLayerid,
                            listMode: 'hide'
                        });
                        _this.view.map.add(boundaryResultLayer_1);
                    }
                    var polygonSymbol_1;
                    if (boundaryOptions.symbol !== undefined) {
                        polygonSymbol_1 = boundaryOptions.symbol;
                    }
                    else {
                        polygonSymbol_1 = {
                            type: "simple-fill",
                            color: [255, 255, 255, 0],
                            outline: {
                                color: [255, 255, 0, 1],
                                width: "5px"
                            }
                        };
                    }
                    response.features.map(function (feature) {
                        var animateGraphic = new Graphic({
                            geometry: feature.geometry,
                            symbol: polygonSymbol_1,
                            attributes: feature.attributes
                        });
                        boundaryResultLayer_1.add(animateGraphic);
                    });
                }
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Boundary.prototype.remove = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            this.view.map.remove(boundaryResultLayer);
        }
    };
    Boundary.prototype.show = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            boundaryResultLayer.visible = true;
        }
    };
    Boundary.prototype.hide = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            boundaryResultLayer.visible = false;
        }
    };
    Boundary.prototype.init = function (view) {
        return __awaiter$2(this, void 0, void 0, function () {
            var _this = this;
            return __generator$2(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                this.view.on(MapEvent.click, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$2(_this, void 0, void 0, function () {
                        var layerid;
                        return __generator$2(this, function (_a) {
                            if (response.results.length > 0) {
                                layerid = response.results[0].graphic.layer.id;
                                if (layerid === this.displayedLayerid) {
                                    this.emit(MapEvent.click, response.results[0].graphic, event.mapPoint);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                this.view.on(MapEvent.pointermove, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$2(_this, void 0, void 0, function () {
                        var layerid;
                        return __generator$2(this, function (_a) {
                            if (response.results.length > 0) {
                                layerid = response.results[0].graphic.layer.id;
                                if (layerid === this.displayedLayerid) {
                                    this.emit(MapEvent.pointermove, response.results[0].graphic, event.mapPoint);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return Boundary;
}(EventEmitter$1));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$3 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CloudRenderer = /** @class */ (function (_super) {
    __extends$3(CloudRenderer, _super);
    function CloudRenderer(view) {
        var _this = _super.call(this) || this;
        _this.cloudRendererRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    CloudRenderer.prototype.add = function (cloudRendererOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/2F6637EA-8119-A957-B8685F98373F16C0", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var cloudRenderer = _a[0], externalRenderers = _a[1];
            cloudRendererOptions.points.forEach(function (pointitem) {
                var cloudRendererRenderer = new cloudRenderer(_this.view, pointitem, cloudRendererOptions.options);
                externalRenderers.add(_this.view, cloudRendererRenderer);
                _this.cloudRendererRendererArray.push([new Guid().uuid, cloudRendererRenderer]);
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CloudRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.cloudRendererRendererArray.map(function (cloudRendereritem) {
                externalRenderers.remove(_this.view, cloudRendereritem[1]);
            });
        });
    };
    CloudRenderer.prototype.init = function (view) {
        return __awaiter$3(this, void 0, void 0, function () {
            return __generator$3(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return CloudRenderer;
}(EventEmitter$1));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 未使用
var ContourMapLayer = /** @class */ (function (_super) {
    __extends$4(ContourMapLayer, _super);
    function ContourMapLayer(view) {
        var _this = _super.call(this) || this;
        _this.contourMapLayerRendererArray = []; // 渲染
        _this.contourMapLayerRenderer = null; // 渲染
        _this.mode = "mesh";
        _this.slice = 0;
        _this.stack = 0;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    ContourMapLayer.prototype.add = function (heatmapOptions) {
        var _this = this;
        load(['82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/Mesh',
            '82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/Extrusion', "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Mesh = _a[0], Extrusion = _a[1], externalRenderers = _a[2];
            var cconfig = heatmapOptions.config;
            cconfig.data = heatmapOptions.datas;
            _this.mode = heatmapOptions.mode;
            cconfig.mode = _this.mode;
            cconfig.slice = _this.slice;
            cconfig.stack = _this.stack;
            if (_this.mode === 'mesh') {
                cconfig.height = 1E3;
                _this.contourMapLayerRenderer = new Mesh(_this.view, cconfig);
            }
            else {
                cconfig.height = 3E3;
                _this.contourMapLayerRenderer = new Extrusion(_this.view, cconfig);
            }
            externalRenderers.add(_this.view, _this.contourMapLayerRenderer);
        });
    };
    ContourMapLayer.prototype.remove = function (heatmapid) {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            externalRenderers.remove(_this.view, _this.contourMapLayerRenderer);
        });
    };
    ContourMapLayer.prototype.init = function (view) {
        this.view = view;
    };
    return ContourMapLayer;
}(EventEmitter$1));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$4 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Draw = /** @class */ (function (_super) {
    __extends$5(Draw, _super);
    function Draw(view) {
        var _this = _super.call(this) || this;
        _this.marksymbol = null;
        _this.polylinesymbol = null;
        _this.polygonsymbol = null;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.drawtool = null;
        _this.drawlayerscollection = [];
        _this.init(view);
        return _this;
    }
    Draw.prototype.drawcircle = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], Point = _a[3], geometryEngine = _a[4];
            _this.emit('drawbegin', 'circle');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (drawresultlayer == null) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawcircleLayerid = new Guid().uuid;
            var drawcircleresultlayer = _this.view.map.findLayerById(drawcircleLayerid);
            if (!drawcircleresultlayer) {
                drawcircleresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制圆实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawcircleresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("circle", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                if (event.vertices.length === 2) {
                    drawcircleresultlayer.removeAll();
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var distance = geometryEngine.distance(point1, point2, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var graphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    drawcircleresultlayer.add(graphic);
                }
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                if (event.vertices.length === 2) {
                    drawcircleresultlayer.removeAll();
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var distance = geometryEngine.distance(point1, point2, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var graphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    drawcircleresultlayer.add(graphic);
                }
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                if (event.vertices.length === 2) {
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var distance = geometryEngine.distance(point1, point2, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var graphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    _this.view.map.remove(drawcircleresultlayer);
                    drawresultlayer.add(graphic);
                    // this.drawtool.complete();
                    _this.emit('drawcomplete', graphic, 'circle');
                }
            });
        });
    };
    Draw.prototype.drawrectangle = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], Polygon = _a[3];
            _this.emit('drawbegin', 'rectangle');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawrectangleLayerid = new Guid().uuid;
            var drawrectangleresultlayer = _this.view.map.findLayerById(drawrectangleLayerid);
            if (drawrectangleresultlayer == null) {
                drawrectangleresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制矩形追踪实时显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawrectangleresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("rectangle", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                if (event.vertices.length === 2) {
                    drawrectangleresultlayer.removeAll();
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    drawrectangleresultlayer.add(graphic);
                }
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                if (event.vertices.length === 2) {
                    drawrectangleresultlayer.removeAll();
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    drawrectangleresultlayer.add(graphic);
                }
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                if (event.vertices.length === 2) {
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    _this.view.map.remove(drawrectangleresultlayer);
                    drawresultlayer.add(graphic);
                    // this.drawtool.complete();
                    _this.emit('drawcomplete', graphic, 'rectangle');
                }
            });
        });
    };
    Draw.prototype.drawPoint = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2];
            _this.emit('drawbegin', 'point');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPointLayerid = new Guid().uuid;
            var drawPointresultlayer = _this.view.map.findLayerById(drawPointLayerid);
            if (drawPointresultlayer == null) {
                drawPointresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制点移动实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPointresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("point", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) { console.log(event); });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                drawPointresultlayer.removeAll();
                var point = {
                    type: "point",
                    x: event.vertices[0][0],
                    y: event.vertices[0][1],
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: point,
                    symbol: _this.marksymbol
                });
                drawPointresultlayer.add(graphic);
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                var point = {
                    type: "point",
                    x: event.vertices[0][0],
                    y: event.vertices[0][1],
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: point,
                    symbol: _this.marksymbol
                });
                _this.view.map.remove(drawPointresultlayer);
                drawresultlayer.add(graphic);
                // this.drawtool.complete();
                _this.emit('drawcomplete', graphic, 'point');
            });
        });
    };
    Draw.prototype.drawMultipoint = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/views/draw/PointDrawAction', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], PointDrawAction = _a[1], Graphic = _a[2], GraphicsLayer = _a[3], Polygon = _a[4], geometryEngine = _a[5];
            _this.emit('drawbegin', 'multipoint');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawmultipointLayerid = new Guid().uuid;
            var drawmultipointresultlayer = _this.view.map.findLayerById(drawmultipointLayerid);
            if (drawmultipointresultlayer == null) {
                drawmultipointresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制多点临时显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawmultipointresultlayer);
            }
            var drawmultipointMoveLayerid = new Guid().uuid;
            var drawmultipointMovelayer = _this.view.map.findLayerById(drawmultipointMoveLayerid);
            if (drawmultipointMovelayer == null) {
                drawmultipointMovelayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制多点移动追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawmultipointMovelayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("multipoint", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                drawmultipointresultlayer.removeAll();
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    drawmultipointresultlayer.add(graphic);
                });
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                drawmultipointMovelayer.removeAll();
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    drawmultipointMovelayer.add(graphic);
                });
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                var graphicsmutipointlist = [];
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    graphicsmutipointlist.push(graphic);
                    drawresultlayer.add(graphic);
                });
                _this.view.map.remove(drawmultipointresultlayer);
                _this.view.map.remove(drawmultipointMovelayer);
                // this.drawtool.complete();
                _this.emit('drawcomplete', graphicsmutipointlist, 'multipoint');
            });
        });
    };
    Draw.prototype.drawPolyline = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], geometryEngine = _a[3];
            _this.emit('drawbegin', 'polyline');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPolylineid = new Guid().uuid;
            var drawPolylinelayer = _this.view.map.findLayerById(drawPolylineid);
            if (drawPolylinelayer == null) {
                drawPolylinelayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制线实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPolylinelayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("polyline");
            _this.view.focus();
            action.on([
                "vertex-add",
                "vertex-remove",
                "cursor-update",
                "redo",
                "undo"
            ], function (event) {
                if (event.vertices.length > 1) {
                    var vertices = event.vertices;
                    drawPolylinelayer.removeAll();
                    var graphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: vertices,
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var getLastSegment_1 = function (polyline) {
                        var line = polyline.clone();
                        var lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
                        var existingLineFinalPoint = line.getPoint(0, line.paths[0].length - 1);
                        return {
                            type: "polyline",
                            spatialReference: _this.view.spatialReference,
                            hasZ: false,
                            paths: [[
                                    [existingLineFinalPoint.x, existingLineFinalPoint.y],
                                    [lastXYPoint.x, lastXYPoint.y]
                                ]]
                        };
                    };
                    var isSelfIntersecting = function (polylineIn) {
                        if (polylineIn.paths[0].length < 3) {
                            return false;
                        }
                        var line = polylineIn.clone();
                        var lastSegment = getLastSegment_1(polylineIn);
                        line.removePoint(0, line.paths[0].length - 1);
                        return geometryEngine.crosses(lastSegment, line);
                    };
                    if (isSelfIntersecting(graphic.geometry)) {
                        var pyline = new Graphic({
                            geometry: getLastSegment_1(graphic.geometry),
                            symbol: _this.polylinesymbol
                        });
                        if (pyline) {
                            drawPolylinelayer.addMany([graphic, pyline]);
                        }
                        if (pyline) {
                            event.preventDefault();
                        }
                    }
                    else {
                        drawPolylinelayer.add(graphic);
                    }
                }
            });
            action.on("draw-complete", function (event) {
                if (event.vertices.length > 1) {
                    var vertices = event.vertices;
                    drawPolylinelayer.removeAll();
                    var graphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: vertices,
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var getLastSegment_2 = function (polyline) {
                        var line = polyline.clone();
                        var lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
                        var existingLineFinalPoint = line.getPoint(0, line.paths[0].length - 1);
                        return {
                            type: "polyline",
                            spatialReference: _this.view.spatialReference,
                            hasZ: false,
                            paths: [[
                                    [existingLineFinalPoint.x, existingLineFinalPoint.y],
                                    [lastXYPoint.x, lastXYPoint.y]
                                ]]
                        };
                    };
                    var isSelfIntersecting = function (polylineIn) {
                        if (polylineIn.paths[0].length < 3) {
                            return false;
                        }
                        var line = polylineIn.clone();
                        var lastSegment = getLastSegment_2(polylineIn);
                        line.removePoint(0, line.paths[0].length - 1);
                        return geometryEngine.crosses(lastSegment, line);
                    };
                    var polyLine = null;
                    if (isSelfIntersecting(graphic.geometry)) {
                        var pyline = new Graphic({
                            geometry: getLastSegment_2(graphic.geometry),
                            symbol: _this.polylinesymbol
                        });
                        if (pyline) {
                            drawresultlayer.addMany([graphic, pyline]);
                            polyLine = new Graphic({
                                geometry: geometryEngine.union(graphic.geometry, pyline.geometry),
                                symbol: _this.polylinesymbol
                            });
                        }
                        if (pyline) {
                            event.preventDefault();
                        }
                    }
                    else {
                        polyLine = graphic;
                        drawresultlayer.add(graphic);
                    }
                    _this.view.map.remove(drawPolylinelayer);
                    // this.drawtool.complete();
                    _this.emit('drawcomplete', polyLine, 'polyline');
                }
            });
        });
    };
    Draw.prototype.drawPolygon = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], geometryEngine = _a[3];
            _this.emit('drawbegin', 'polygon');
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPolygonid = new Guid().uuid;
            var drawPolygonlayer = _this.view.map.findLayerById(drawPolygonid);
            if (drawPolygonlayer == null) {
                drawPolygonlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '绘制多边形实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPolygonlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("polygon");
            _this.view.focus();
            action.on([
                "vertex-add",
                "vertex-remove",
                "cursor-update",
                "redo",
                "undo"
            ], function (event) {
                var vertices = event.vertices;
                drawPolygonlayer.removeAll();
                var polygon = {
                    type: "polygon",
                    rings: vertices,
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: polygon,
                    symbol: _this.polygonsymbol
                });
                drawPolygonlayer.add(graphic);
            });
            action.on("draw-complete", function (event) {
                var vertices = event.vertices;
                drawPolygonlayer.removeAll();
                var polygon = {
                    type: "polygon",
                    rings: vertices,
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: polygon,
                    symbol: _this.polygonsymbol
                });
                _this.view.map.remove(drawPolygonlayer);
                drawresultlayer.add(graphic);
                // this.drawtool.complete();
                _this.emit('drawcomplete', graphic, 'polygon');
            });
        });
    };
    Draw.prototype.reset = function () {
        if (this.drawtool) {
            this.drawtool.reset();
        }
    };
    Draw.prototype.clean = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            this.view.map.remove(drawresultlayer);
        }
    };
    Draw.prototype.show = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            drawresultlayer.visible = true;
        }
    };
    Draw.prototype.hide = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            drawresultlayer.visible = false;
        }
    };
    Draw.prototype.init = function (view) {
        return __awaiter$4(this, void 0, void 0, function () {
            var _this = this;
            return __generator$4(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                if (this.view.type === '2d') {
                    this.polygonsymbol = {
                        type: "simple-fill",
                        color: [255, 255, 255, 0.6],
                        style: "solid",
                        outline: {
                            color: [255, 255, 0, 0.8],
                            width: 2
                        }
                    };
                    this.polylinesymbol = {
                        type: "simple-line",
                        color: [255, 255, 255, 0.6],
                        width: "4px",
                        style: "solid"
                    };
                    this.marksymbol = {
                        type: "simple-marker",
                        style: "circle",
                        color: [255, 255, 0, 0.6],
                        size: "24px",
                        outline: {
                            color: [255, 255, 0, 0.8],
                            width: 2
                        }
                    };
                }
                else {
                    this.polygonsymbol = {
                        type: "polygon-3d",
                        symbolLayers: [{
                                type: "extrude",
                                castShadows: false,
                                size: 100,
                                material: { color: [255, 255, 255, 0.4] },
                                edges: {
                                    type: "solid",
                                    color: [50, 50, 50, 0.5]
                                }
                            }]
                    };
                    this.polylinesymbol = {
                        type: "line-3d",
                        symbolLayers: [{
                                type: "path",
                                anchor: "center",
                                Values: "center",
                                profile: "quad",
                                width: 2,
                                height: 10,
                                material: { color: [255, 255, 255, 0.4] },
                                cap: "square",
                                join: "miter",
                                castShadows: false,
                                profileRotation: "heading"
                            }]
                    };
                    this.marksymbol = {
                        type: "point-3d",
                        symbolLayers: [{
                                type: "object",
                                width: 20,
                                height: 20,
                                depth: 20,
                                resource: { primitive: "sphere" },
                                material: { color: [0, 0, 255, 0.8] }
                            }],
                        verticalOffset: {
                            screenLength: 60,
                            maxWorldLength: 1000,
                            minWorldLength: 20
                        },
                        callout: {
                            type: "line",
                            size: 1.5,
                            color: "white",
                            border: {
                                color: "black"
                            }
                        }
                    };
                }
                this.view.on(MapEvent.click, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$4(_this, void 0, void 0, function () {
                        return __generator$4(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); });
                });
                this.view.on(MapEvent.pointermove, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$4(_this, void 0, void 0, function () {
                        return __generator$4(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return Draw;
}(EventEmitter$1));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$5 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DynamicCylinderFence = /** @class */ (function (_super) {
    __extends$6(DynamicCylinderFence, _super);
    function DynamicCylinderFence(view) {
        var _this = _super.call(this) || this;
        _this.dynamicCylinderfenceRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    DynamicCylinderFence.prototype.add = function (cylinderFenceOptions) {
        var _this = this;
        if (cylinderFenceOptions === void 0) { cylinderFenceOptions = {}; }
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/82B44794-5CE0-A64A-9047F07CAF08BD2C", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var dynamicCylinderFence = _a[0], externalRenderers = _a[1];
            var auroraRenderer = new dynamicCylinderFence(_this.view, cylinderFenceOptions.center, cylinderFenceOptions.radius, cylinderFenceOptions.height, cylinderFenceOptions.textureurl, cylinderFenceOptions.scale);
            externalRenderers.add(_this.view, auroraRenderer);
            _this.dynamicCylinderfenceRendererArray.push([new Guid().uuid, auroraRenderer]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    DynamicCylinderFence.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.dynamicCylinderfenceRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.dynamicCylinderfenceRendererArray = [];
        });
    };
    DynamicCylinderFence.prototype.init = function (view) {
        return __awaiter$5(this, void 0, void 0, function () {
            return __generator$5(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return DynamicCylinderFence;
}(EventEmitter$1));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$6 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DynamicPolygon = /** @class */ (function (_super) {
    __extends$7(DynamicPolygon, _super);
    function DynamicPolygon(view) {
        var _this = _super.call(this) || this;
        _this.dynamicPolygonRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    DynamicPolygon.prototype.add = function (dynamicPolygonOptions) {
        var _this = this;
        if (dynamicPolygonOptions === void 0) { dynamicPolygonOptions = {}; }
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/95CEAB7E-A2ED-576F-64F0B53B2C6A134F", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var dynamicPolygon = _a[0], externalRenderers = _a[1];
            if (!dynamicPolygonOptions.points) {
                return;
            }
            if (!dynamicPolygonOptions.texturestart) {
                return;
            }
            if (!dynamicPolygonOptions.texturestarend) {
                return;
            }
            if (!dynamicPolygonOptions.height) {
                return;
            }
            // if (!dynamicPolygonOptions.offset) { return; }
            dynamicPolygonOptions.view = _this.view;
            var dynamicPolygonRenderer = new dynamicPolygon(dynamicPolygonOptions);
            externalRenderers.add(_this.view, dynamicPolygonRenderer);
            _this.dynamicPolygonRendererArray.push([new Guid().uuid, dynamicPolygonRenderer]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    DynamicPolygon.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.dynamicPolygonRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.dynamicPolygonRendererArray = [];
        });
    };
    DynamicPolygon.prototype.init = function (view) {
        return __awaiter$6(this, void 0, void 0, function () {
            return __generator$6(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return DynamicPolygon;
}(EventEmitter$1));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$7 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$7 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DynamicSquareFence = /** @class */ (function (_super) {
    __extends$8(DynamicSquareFence, _super);
    function DynamicSquareFence(view) {
        var _this = _super.call(this) || this;
        _this.dynamicSquarefenceRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    DynamicSquareFence.prototype.add = function (ssquareFenceOptions) {
        var _this = this;
        if (ssquareFenceOptions === void 0) { ssquareFenceOptions = {}; }
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/789A68E1-657F-D870-37F9E6DF554E1C27", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var dynamicSquareFence = _a[0], externalRenderers = _a[1];
            var auroraRenderer = new dynamicSquareFence(_this.view, ssquareFenceOptions.center, ssquareFenceOptions.radius, ssquareFenceOptions.height, ssquareFenceOptions.textureurl, ssquareFenceOptions.scale);
            externalRenderers.add(_this.view, auroraRenderer);
            _this.dynamicSquarefenceRendererArray.push([new Guid().uuid, auroraRenderer]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    DynamicSquareFence.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.dynamicSquarefenceRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.dynamicSquarefenceRendererArray = [];
        });
    };
    DynamicSquareFence.prototype.init = function (view) {
        return __awaiter$7(this, void 0, void 0, function () {
            return __generator$7(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return DynamicSquareFence;
}(EventEmitter$1));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$8 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$8 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var EchartFlashPointLayer = /** @class */ (function (_super) {
    __extends$9(EchartFlashPointLayer, _super);
    function EchartFlashPointLayer(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.datas = null;
        _this.init(view);
        return _this;
    }
    EchartFlashPointLayer.prototype.add = function (echartFlashPointOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/599EFB79-18C9-DC0A-E2C9FC2F2316C660"])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var echartsLayer = _a[0];
            var parent = document.getElementsByClassName("esri-view-surface")[0];
            var box = document.getElementById(_this.displayedLayerid);
            if (box !== null) {
                parent.removeChild(box);
            }
            var eseries = [];
            _this.datas = echartFlashPointOptions.datas;
            echartFlashPointOptions.datas.forEach(function (item, i) {
                eseries.push({
                    name: 'Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    legendHoverLink: true,
                    hoverAnimation: true,
                    symbol: item.symbol == null || item.symbol === undefined ? 'diamond' : item.symbol,
                    cursor: "pointer",
                    label: {
                        normal: {
                            show: true,
                            position: item.labelposition == null || item.labelposition === undefined
                                ? 'right' : item.labelposition,
                            formatter: '{b}'
                        }
                    },
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#222',
                        borderColor: '#777',
                        borderWidth: 1
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: item.color,
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [{
                            name: item.name,
                            value: [item.x, item.y].concat([item.value])
                        }]
                });
            });
            var option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: eseries
            };
            var chart = new echartsLayer(_this.view, "", _this.displayedLayerid);
            chart.setChartOption(option);
        });
    };
    EchartFlashPointLayer.prototype.update = function (echartFlashPointOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/599EFB79-18C9-DC0A-E2C9FC2F2316C660"])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var echartsLayer = _a[0];
            var parent = document.getElementsByClassName("esri-view-surface")[0];
            var box = document.getElementById(_this.displayedLayerid);
            if (box !== null) {
                parent.removeChild(box);
            }
            var eseries = [];
            _this.datas = echartFlashPointOptions.datas;
            echartFlashPointOptions.datas.forEach(function (item, i) {
                eseries.push({
                    name: 'Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    legendHoverLink: true,
                    hoverAnimation: true,
                    symbol: item.symbol == null || item.symbol === undefined ? 'diamond' : item.symbol,
                    cursor: "pointer",
                    label: {
                        normal: {
                            show: true,
                            position: item.labelposition == null || item.labelposition === undefined
                                ? 'right' : item.labelposition,
                            formatter: '{b}'
                        }
                    },
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#222',
                        borderColor: '#777',
                        borderWidth: 1
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: item.color,
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [{
                            name: item.name,
                            value: [item.x, item.y].concat([item.value])
                        }]
                });
            });
            var option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: eseries
            };
            var chart = new echartsLayer(_this.view, "", _this.displayedLayerid);
            chart.setChartOption(option);
        });
    };
    EchartFlashPointLayer.prototype.delete = function () {
        var parent = document.getElementsByClassName("esri-view-surface")[0];
        var box = document.getElementById(this.displayedLayerid);
        if (box !== null) {
            parent.removeChild(box);
        }
    };
    EchartFlashPointLayer.prototype.init = function (view) {
        return __awaiter$8(this, void 0, void 0, function () {
            var _this = this;
            return __generator$8(this, function (_a) {
                this.view = view;
                this.displayedLayerid = new Guid().uuid;
                load(['esri/geometry/Point', "esri/geometry/SpatialReference", "esri/geometry/support/webMercatorUtils"])
                    // tslint:disable-next-line:no-shadowed-variable
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var Point = _a[0], SpatialReference = _a[1], webMercatorUtils = _a[2];
                    _this.view.on(MapEvent.click, function (event) {
                        if (!_this.datas.length) {
                            return;
                        }
                        else {
                            var distances_1 = _this.datas.map(function (point) {
                                var pointorigin = new Point({
                                    x: point.x,
                                    y: point.y,
                                    spatialReference: SpatialReference.WebMercator
                                });
                                var graphicPoint = _this.view.toScreen(pointorigin);
                                return Math.sqrt((graphicPoint.x - event.x) * (graphicPoint.x - event.x) +
                                    (graphicPoint.y - event.y) * (graphicPoint.y - event.y));
                            });
                            var minIndex_1 = 0;
                            distances_1.forEach(function (distance, i) {
                                if (distance < distances_1[minIndex_1]) {
                                    minIndex_1 = i;
                                }
                            });
                            var minDistance = distances_1[minIndex_1];
                            if (minDistance > 35) {
                                return;
                            }
                            else {
                                _this.emit(MapEvent.click, _this.datas[minIndex_1], event.mapPoint);
                            }
                        }
                    });
                    _this.view.on(MapEvent.doubleclick, function (event) {
                        if (!_this.datas.length) {
                            return;
                        }
                        else {
                            var distances_2 = _this.datas.map(function (point) {
                                var pointorigin = new Point({
                                    x: point.x,
                                    y: point.y,
                                    spatialReference: SpatialReference.WebMercator
                                });
                                var graphicPoint = _this.view.toScreen(pointorigin);
                                return Math.sqrt((graphicPoint.x - event.x) * (graphicPoint.x - event.x) +
                                    (graphicPoint.y - event.y) * (graphicPoint.y - event.y));
                            });
                            var minIndex_2 = 0;
                            distances_2.forEach(function (distance, i) {
                                if (distance < distances_2[minIndex_2]) {
                                    minIndex_2 = i;
                                }
                            });
                            var minDistance = distances_2[minIndex_2];
                            if (minDistance > 35) {
                                return;
                            }
                            else {
                                _this.emit(MapEvent.doubleclick, _this.datas[minIndex_2], event.mapPoint);
                            }
                        }
                    });
                    _this.view.on(MapEvent.pointermove, function (event) {
                        _this.view.hitTest(event).then(function (response) { return __awaiter$8(_this, void 0, void 0, function () {
                            var layerid, distances_3, minIndex_3, minDistance;
                            var _this = this;
                            return __generator$8(this, function (_a) {
                                if (response.results.length > 0) {
                                    layerid = response.results[0].graphic.layer.id;
                                    if (layerid === this.displayedLayerid) {
                                        if (!this.datas.length) {
                                            return [2 /*return*/];
                                        }
                                        else {
                                            distances_3 = this.datas.map(function (point) {
                                                var pointorigin = new Point({
                                                    x: point.x,
                                                    y: point.y,
                                                    spatialReference: SpatialReference.WebMercator
                                                });
                                                var graphicPoint = _this.view.toScreen(pointorigin);
                                                return Math.sqrt((graphicPoint.x - event.x) * (graphicPoint.x - event.x) +
                                                    (graphicPoint.y - event.y) * (graphicPoint.y - event.y));
                                            });
                                            minIndex_3 = 0;
                                            distances_3.forEach(function (distance, i) {
                                                if (distance < distances_3[minIndex_3]) {
                                                    minIndex_3 = i;
                                                }
                                            });
                                            minDistance = distances_3[minIndex_3];
                                            if (minDistance > 35) {
                                                return [2 /*return*/];
                                            }
                                            else {
                                                this.emit(MapEvent.pointermove, this.datas[minIndex_3], this.view.toMap({
                                                    x: event.x,
                                                    y: event.y
                                                }));
                                            }
                                        }
                                    }
                                }
                                return [2 /*return*/];
                            });
                        }); });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return EchartFlashPointLayer;
}(EventEmitter$1));

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$9 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$9 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ElectricShieldRenderer = /** @class */ (function (_super) {
    __extends$10(ElectricShieldRenderer, _super);
    function ElectricShieldRenderer(view) {
        var _this = _super.call(this) || this;
        _this.electricShieldOptionsRenderer = null;
        _this.view = null;
        _this.fragmentShaderSource = "\n                #if __VERSION__ == 100\n                 #extension GL_OES_standard_derivatives : enable\n                #endif\n                uniform vec3 color;\n                uniform float opacity;\n                uniform float time;\n                varying vec2 vUv;\n                #define pi 3.1415926535\n                #define PI2RAD 0.01745329252\n                #define TWO_PI (2. * PI)\n                float rands(float p){\n                    return fract(sin(p) * 10000.0);\n                }\n                float noise(vec2 p){\n                    float t = time / 20000.0;\n                    if(t > 1.0) t -= floor(t);\n                    return rands(p.x * 14. + p.y * sin(t) * 0.5);\n                }\n                vec2 sw(vec2 p){\n                    return vec2(floor(p.x), floor(p.y));\n                }\n                vec2 se(vec2 p){\n                    return vec2(ceil(p.x), floor(p.y));\n                }\n                vec2 nw(vec2 p){\n                    return vec2(floor(p.x), ceil(p.y));\n                }\n                vec2 ne(vec2 p){\n                    return vec2(ceil(p.x), ceil(p.y));\n                }\n                float smoothNoise(vec2 p){\n                    vec2 inter = smoothstep(0.0, 1.0, fract(p));\n                    float s = mix(noise(sw(p)), noise(se(p)), inter.x);\n                    float n = mix(noise(nw(p)), noise(ne(p)), inter.x);\n                    return mix(s, n, inter.y);\n                }\n                float fbm(vec2 p){\n                    float z = 2.0;\n                    float rz = 0.0;\n                    vec2 bp = p;\n                    for(float i = 1.0; i < 6.0; i++){\n                    rz += abs((smoothNoise(p) - 0.5)* 2.0) / z;\n                    z *= 2.0;\n                    p *= 2.0;\n                    }\n                    return rz;\n                }\n                void main() {\n                    vec2 uv = vUv;\n                    vec2 uv2 = vUv;\n                    if (uv.y < 0.5) {\n                    discard;\n                    }\n                    uv *= 4.;\n                    float rz = fbm(uv);\n                    uv /= exp(mod(time * 2.0, pi));\n                    rz *= pow(15., 0.9);\n                    gl_FragColor = mix(vec4(color, opacity) / rz, vec4(color, 0.1), 0.2);\n                    if (uv2.x < 0.05) {\n                    gl_FragColor = mix(vec4(color, 0.1), gl_FragColor, uv2.x / 0.05);\n                    }\n                    if (uv2.x > 0.95){\n                    gl_FragColor = mix(gl_FragColor, vec4(color, 0.1), (uv2.x - 0.95) / 0.05);\n                    }\n                }";
        _this.init(view);
        return _this;
    }
    ElectricShieldRenderer.prototype.add = function (electricShieldOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/FC5376C9-9F1D-905F-3BCD66C6DF4ED973", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var electricShieldRenderer = _a[0], externalRenderers = _a[1];
            electricShieldOptions.options.fragmentShaderSource = _this.fragmentShaderSource;
            _this.electricShieldOptionsRenderer = new electricShieldRenderer(_this.view, electricShieldOptions.points, electricShieldOptions.options);
            externalRenderers.add(_this.view, _this.electricShieldOptionsRenderer);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    ElectricShieldRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            if (!_this.electricShieldOptionsRenderer) {
                return;
            }
            externalRenderers.remove(_this.view, _this.electricShieldOptionsRenderer);
        });
    };
    ElectricShieldRenderer.prototype.setMaterialColor = function (color) {
        if (!this.electricShieldOptionsRenderer) {
            return;
        }
        this.electricShieldOptionsRenderer.setMaterialColor(color);
    };
    ElectricShieldRenderer.prototype.setwireframe = function () {
        if (!this.electricShieldOptionsRenderer) {
            return;
        }
        this.electricShieldOptionsRenderer.setwireframe();
    };
    ElectricShieldRenderer.prototype.setaltitude = function (altitude) {
        if (!this.electricShieldOptionsRenderer) {
            return;
        }
        this.electricShieldOptionsRenderer.setaltitude(altitude);
    };
    ElectricShieldRenderer.prototype.setscaleZ = function (scaleZ) {
        if (!this.electricShieldOptionsRenderer) {
            return;
        }
        this.electricShieldOptionsRenderer.setscaleZ(scaleZ);
    };
    ElectricShieldRenderer.prototype.setopacity = function (opacity) {
        if (!this.electricShieldOptionsRenderer) {
            return;
        }
        this.electricShieldOptionsRenderer.setopacity(opacity);
    };
    ElectricShieldRenderer.prototype.init = function (view) {
        return __awaiter$9(this, void 0, void 0, function () {
            return __generator$9(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return ElectricShieldRenderer;
}(EventEmitter$1));

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$10 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$10 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FeaureOverlays = /** @class */ (function (_super) {
    __extends$11(FeaureOverlays, _super);
    function FeaureOverlays(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.mapoverlayersflayer = [];
        _this.eventResult = null;
        _this.init(view);
        return _this;
    }
    FeaureOverlays.prototype.createFeatureGroup = function (overlayers) {
        return __awaiter$10(this, void 0, void 0, function () {
            var _a, FeatureLayer, LabelClass, Graphic, Point, esriCircle, 
            // tslint:disable-next-line:variable-name
            PictureMarkerSymbol, ArcGISPolyline, ArcGISPolygon, boundaryResultLayer, result, datafiled_1, symbolrenderer_1, clientoperateLayer_1, labelsymbol, statesLabelClass, clientoperateLayer_2, labelsymbol, statesLabelClass, clientoperateLayer_3, labelsymbol, statesLabelClass, clientoperateLayer_4, labelsymbol, statesLabelClass, datafiled_2, markrenderer, clientoperateLayer, dataattributes, graphic, labelsymbol, statesLabelClass, circlerenderer, clientoperateLayer, dataattributes, graphic, labelsymbol, statesLabelClass, polylinerenderer, clientoperateLayer, dataattributes, path_1, polyline, graphic, labelsymbol, statesLabelClass, polygonrenderer, clientoperateLayer, dataattributes, rs_1, polygon, graphic, labelsymbol, statesLabelClass;
            var _this = this;
            return __generator$10(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point',
                            'esri/geometry/Circle', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"
                        ])];
                    case 1:
                        _a = _b.sent(), FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], esriCircle = _a[4], PictureMarkerSymbol = _a[5], ArcGISPolyline = _a[6], ArcGISPolygon = _a[7];
                        boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
                        if (boundaryResultLayer) {
                            this.view.map.remove(boundaryResultLayer);
                            this.mapoverlayersflayer = [];
                        }
                        result = [];
                        if (overlayers.type === 'group') {
                            datafiled_1 = [{
                                    name: 'objectId',
                                    alias: 'objectId',
                                    type: 'oid'
                                }, {
                                    name: 'uuid',
                                    alias: '唯一标识',
                                    type: 'string'
                                }];
                            datafiled_1.push({
                                name: 'style',
                                alias: '样式',
                                type: 'string'
                            });
                            overlayers.datafiled.forEach(function (element) {
                                datafiled_1.push(element);
                            });
                            if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                if (!overlayers.renderer) {
                                    symbolrenderer_1 = {
                                        type: 'unique-value',
                                        field: 'style',
                                        uniqueValueInfos: []
                                    };
                                    overlayers.style.forEach(function (styleelement) {
                                        symbolrenderer_1.uniqueValueInfos.push({
                                            value: styleelement.style,
                                            label: styleelement.style,
                                            symbol: styleelement.symbol
                                        });
                                        // if (this.view.type === '3d') {
                                        //     symbolrenderer.uniqueValueInfos.push({
                                        //         value: styleelement.style,
                                        //         label: styleelement.style,
                                        //         symbol: {
                                        //             type: "point-3d",
                                        //             symbolLayers: [{
                                        //                 type: "icon",
                                        //                 size: styleelement.size.height,
                                        //                 resource: {
                                        //                     href: styleelement.url
                                        //                 }
                                        //             }]
                                        //         }
                                        //     });
                                        // } else {
                                        //     symbolrenderer.uniqueValueInfos.push({
                                        //         value: styleelement.style,
                                        //         label: styleelement.style,
                                        //         symbol: {
                                        //             type: "picture-marker",
                                        //             url: styleelement.url,
                                        //             width: styleelement.size.width,
                                        //             height: styleelement.size.height
                                        //         }
                                        //     });
                                        // }
                                    });
                                }
                                else {
                                    symbolrenderer_1 = overlayers.renderer;
                                }
                                clientoperateLayer_1 = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-marker-" + this.displayedLayerid,
                                    visible: overlayers.visible,
                                    objectIdField: 'objectId',
                                    geometryType: 'point',
                                    renderer: symbolrenderer_1,
                                    screenSizePerspectiveEnabled: this.view.type === '3d',
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    // elevationInfo: (overlayers as OverlayGroup).elevationInfo,
                                    fields: datafiled_1,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer_1.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                if (overlayers.frreduction) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer_1.featureReduction = {
                                            type: overlayers.frreduction.type
                                        };
                                    }
                                    else {
                                        clientoperateLayer_1.featureReduction =
                                            overlayers.frreduction.clusterConfig;
                                    }
                                }
                                this.view.map.add(clientoperateLayer_1);
                                overlayers.overlayers.forEach(function (overelement) {
                                    if (overelement.attributes && overelement.position) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var graphic = new Graphic({
                                            geometry: new Point({
                                                x: overelement.position[0],
                                                y: overelement.position[1],
                                                z: overelement.position[2] === undefined ? 0 :
                                                    overelement.position[2],
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            attributes: dataattributes
                                        });
                                        clientoperateLayer_1.source.add(graphic);
                                        result.push(graphic);
                                        _this.mapoverlayersflayer.push([overlayers.uuid,
                                            overelement.uuid,
                                            graphic]);
                                    }
                                });
                                if (clientoperateLayer_1.source.items.length > 100) {
                                    if (overlayers.frreduction != null) {
                                        clientoperateLayer_1.featureReduction = {
                                            type: overlayers.frreduction.type,
                                            clusterRadius: overlayers.frreduction.clusterRadius
                                        };
                                    }
                                }
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer_1.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer_1.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                if (!overlayers.renderer) {
                                    symbolrenderer_1 = {
                                        type: 'unique-value',
                                        field: 'style',
                                        uniqueValueInfos: []
                                    };
                                    overlayers.style.forEach(function (styleelement) {
                                        symbolrenderer_1.uniqueValueInfos.push({
                                            value: styleelement.style,
                                            label: styleelement.style,
                                            symbol: styleelement.symbol
                                        });
                                    });
                                }
                                else {
                                    symbolrenderer_1 = overlayers.renderer;
                                }
                                clientoperateLayer_2 = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-circle-" + this.displayedLayerid,
                                    visible: overlayers.visible,
                                    objectIdField: 'objectId',
                                    geometryType: 'polygon',
                                    renderer: symbolrenderer_1,
                                    screenSizePerspectiveEnabled: this.view.type === '3d',
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    fields: datafiled_1,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer_2.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                this.view.map.add(clientoperateLayer_2);
                                overlayers.overlayers.forEach(function (overelement) {
                                    if (overelement.attributes && overelement.center
                                        && overelement.radius) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var graphic = new Graphic({
                                            geometry: new esriCircle({
                                                center: new Point({
                                                    x: overelement.center.X,
                                                    y: overelement.center.Y,
                                                    z: overelement.center.Z,
                                                    spatialReference: _this.view.spatialReference
                                                }),
                                                radius: overelement.radius,
                                                radiusUnit: overelement.radiusUnit,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            attributes: dataattributes
                                        });
                                        result.push(graphic);
                                        clientoperateLayer_2.source.add(graphic);
                                        _this.mapoverlayersflayer.push([overlayers.uuid,
                                            overelement.uuid,
                                            graphic]);
                                    }
                                });
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer_2.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer_2.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                if (!overlayers.renderer) {
                                    symbolrenderer_1 = {
                                        type: 'unique-value',
                                        field: 'style',
                                        uniqueValueInfos: []
                                    };
                                    overlayers.style.forEach(function (styleelement) {
                                        symbolrenderer_1.uniqueValueInfos.push({
                                            value: styleelement.style,
                                            label: styleelement.style,
                                            symbol: styleelement.symbol
                                        });
                                    });
                                }
                                else {
                                    symbolrenderer_1 = overlayers.renderer;
                                }
                                clientoperateLayer_3 = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-polyline-" + this.displayedLayerid,
                                    visible: overlayers.visible,
                                    objectIdField: 'objectId',
                                    geometryType: 'polyline',
                                    renderer: symbolrenderer_1,
                                    // screenSizePerspectiveEnabled: this.view.type === '3d',
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    fields: datafiled_1,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer_3.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                this.view.map.add(clientoperateLayer_3);
                                overlayers.overlayers.forEach(function (overelement) {
                                    if (overelement.attributes && overelement.path) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var path_2 = [];
                                        overelement.path.forEach(function (item) {
                                            path_2.push([item.X, item.Y, item.Z]);
                                        });
                                        var polyline = new ArcGISPolyline({
                                            hasZ: false,
                                            hasM: false,
                                            paths: path_2,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        var graphic = new Graphic({
                                            geometry: polyline,
                                            attributes: dataattributes
                                        });
                                        result.push(graphic);
                                        clientoperateLayer_3.source.add(graphic);
                                        _this.mapoverlayersflayer.push([overlayers.uuid,
                                            overelement.uuid,
                                            graphic]);
                                    }
                                });
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer_3.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer_3.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                if (!overlayers.renderer) {
                                    symbolrenderer_1 = {
                                        type: 'unique-value',
                                        field: 'style',
                                        uniqueValueInfos: []
                                    };
                                    overlayers.style.forEach(function (styleelement) {
                                        symbolrenderer_1.uniqueValueInfos.push({
                                            value: styleelement.style,
                                            label: styleelement.style,
                                            symbol: styleelement.symbol
                                        });
                                    });
                                }
                                else {
                                    symbolrenderer_1 = overlayers.renderer;
                                }
                                clientoperateLayer_4 = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-polygon-" + this.displayedLayerid,
                                    visible: overlayers.visible,
                                    objectIdField: 'objectId',
                                    geometryType: 'polygon',
                                    renderer: symbolrenderer_1,
                                    // screenSizePerspectiveEnabled: this.view.type === '3d',
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    fields: datafiled_1,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer_4.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                this.view.map.add(clientoperateLayer_4);
                                overlayers.overlayers.forEach(function (overelement) {
                                    if (overelement.attributes && overelement.paths) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var rs_2 = [];
                                        overelement.paths.forEach(function (item) {
                                            rs_2.push([item.X, item.Y, item.Z]);
                                        });
                                        var polygon = new ArcGISPolygon({
                                            hasZ: true,
                                            hasM: true,
                                            rings: rs_2,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        var graphic = new Graphic({
                                            geometry: polygon,
                                            attributes: dataattributes
                                        });
                                        result.push(graphic);
                                        clientoperateLayer_4.source.add(graphic);
                                        _this.mapoverlayersflayer.push([overlayers.uuid,
                                            overelement.uuid,
                                            graphic]);
                                    }
                                });
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer_4.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer_4.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                        }
                        else if (overlayers.type === 'element') {
                            datafiled_2 = [{
                                    name: 'objectId',
                                    alias: 'objectId',
                                    type: 'oid'
                                }, {
                                    name: 'uuid',
                                    alias: '唯一标识',
                                    type: 'string'
                                }];
                            Object.keys(overlayers.attributes).forEach(function (element) {
                                datafiled_2.push({
                                    name: element,
                                    alias: element,
                                    type: "string"
                                });
                            });
                            if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                markrenderer = void 0;
                                if (!overlayers.renderer) {
                                    if (this.view.type === '3d') {
                                        markrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overlayers.icon.size.width,
                                                        resource: {
                                                            href: overlayers.icon.image
                                                        }
                                                    }]
                                            }
                                        };
                                    }
                                    else {
                                        markrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "picture-marker",
                                                url: overlayers.icon.image,
                                                width: overlayers.icon.size.width,
                                                height: overlayers.icon.size.height
                                            }
                                        };
                                    }
                                }
                                else {
                                    markrenderer = overlayers.renderer;
                                }
                                clientoperateLayer = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-marker-" + this.displayedLayerid,
                                    visible: overlayers.visible,
                                    objectIdField: 'objectId',
                                    geometryType: 'point',
                                    renderer: markrenderer,
                                    screenSizePerspectiveEnabled: true,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    // elevationInfo: (overlayers as Overlayerbase).elevationInfo,
                                    fields: datafiled_2,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                if (overlayers.position && overlayers.attributes) {
                                    dataattributes = overlayers.attributes;
                                    dataattributes['uuid'] = overlayers.uuid;
                                    graphic = new Graphic({
                                        geometry: new Point({
                                            x: overlayers.position[0],
                                            y: overlayers.position[1],
                                            z: overlayers.position[2] === undefined ? 0 :
                                                overlayers.position[2],
                                            spatialReference: this.view.spatialReference
                                        }),
                                        attributes: dataattributes
                                    });
                                    result.push(graphic);
                                    clientoperateLayer.source.add(graphic);
                                    this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                        graphic]);
                                }
                                this.view.map.add(clientoperateLayer);
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                circlerenderer = void 0;
                                if (!overlayers.renderer) {
                                    if (overlayers.symboltype === 'simple') {
                                        circlerenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "simple-fill",
                                                color: overlayers.fillColor,
                                                style: overlayers.style,
                                                outline: {
                                                    color: overlayers.strokeColor,
                                                    width: overlayers.strokeWeight,
                                                    style: overlayers.strokestyle
                                                }
                                            }
                                        };
                                    }
                                    else {
                                        circlerenderer = {
                                            type: "picture-fill",
                                            url: overlayers.url,
                                            width: overlayers.picwidth,
                                            height: overlayers.picheight,
                                            outline: {
                                                style: overlayers.strokestyle,
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight
                                            }
                                        };
                                    }
                                }
                                else {
                                    circlerenderer = overlayers.renderer;
                                }
                                clientoperateLayer = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-circle-" + this.displayedLayerid,
                                    objectIdField: 'objectId',
                                    geometryType: 'polygon',
                                    renderer: circlerenderer,
                                    screenSizePerspectiveEnabled: true,
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    visible: overlayers.visible,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    // elevationInfo: (overlayers as Overlayerbase).elevationInfo,
                                    fields: datafiled_2,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                if (overlayers.center && overlayers.radius &&
                                    overlayers.attributes) {
                                    dataattributes = overlayers.attributes;
                                    dataattributes['uuid'] = overlayers.uuid;
                                    graphic = new Graphic({
                                        geometry: new esriCircle({
                                            center: new Point({
                                                x: overlayers.center.X,
                                                y: overlayers.center.Y,
                                                z: overlayers.center.Z,
                                                spatialReference: this.view.spatialReference
                                            }),
                                            radius: overlayers.radius,
                                            radiusUnit: overlayers.radiusUnit,
                                            spatialReference: this.view.spatialReference
                                        }),
                                        attributes: dataattributes
                                    });
                                    result.push(graphic);
                                    clientoperateLayer.source.add(graphic);
                                    this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                        graphic]);
                                }
                                this.view.map.add(clientoperateLayer);
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                polylinerenderer = void 0;
                                if (!overlayers.renderer) {
                                    if (overlayers.symboltype === 'simple') {
                                        polylinerenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "simple-line",
                                                color: overlayers.strokeColor,
                                                style: overlayers.style,
                                                width: overlayers.width,
                                                cap: overlayers.cap,
                                                join: overlayers.lineJoin
                                            }
                                        };
                                    }
                                    else {
                                        polylinerenderer = overlayers.renderer;
                                    }
                                    clientoperateLayer = new FeatureLayer({
                                        id: this.displayedLayerid,
                                        title: "Overlayer-polyline-" + this.displayedLayerid,
                                        objectIdField: 'objectId',
                                        geometryType: 'polyline',
                                        renderer: polylinerenderer,
                                        screenSizePerspectiveEnabled: true,
                                        popupEnabled: false,
                                        popupTemplate: false,
                                        visible: overlayers.visible,
                                        maxScale: overlayers.maxScale,
                                        minScale: overlayers.minScale,
                                        // elevationInfo: (overlayers as Overlayerbase).elevationInfo,
                                        fields: datafiled_2,
                                        source: [],
                                        spatialReference: this.view.spatialReference
                                    });
                                    if (overlayers.elevationInfo) {
                                        if (this.view.type === '3d') {
                                            clientoperateLayer.elevationInfo = overlayers.elevationInfo;
                                        }
                                    }
                                    if (overlayers.path &&
                                        overlayers.attributes) {
                                        dataattributes = overlayers.attributes;
                                        dataattributes['uuid'] = overlayers.uuid;
                                        path_1 = [];
                                        overlayers.path.forEach(function (item) {
                                            path_1.push([item.X, item.Y, item.Z]);
                                        });
                                        polyline = new ArcGISPolyline({
                                            hasZ: false,
                                            hasM: false,
                                            paths: path_1,
                                            spatialReference: this.view.spatialReference
                                        });
                                        graphic = new Graphic({
                                            geometry: polyline,
                                            attributes: dataattributes
                                        });
                                        result.push(graphic);
                                        clientoperateLayer.source.add(graphic);
                                        this.mapoverlayersflayer.push([overlayers.uuid,
                                            overlayers.uuid, graphic]);
                                    }
                                    this.view.map.add(clientoperateLayer);
                                    if (overlayers.label.visible) {
                                        labelsymbol = void 0;
                                        if (!overlayers.label.labelingInfo) {
                                            if (this.view.type === '2d') {
                                                labelsymbol = {
                                                    type: overlayers.label.type,
                                                    text: overlayers.label.text,
                                                    color: overlayers.label.color,
                                                    angle: overlayers.label.angle,
                                                    backgroundColor: overlayers.label.backgroundColor,
                                                    borderLineColor: overlayers.label.borderLineColor,
                                                    borderLineSize: overlayers.label.borderLineSize,
                                                    kerning: overlayers.label.kerning,
                                                    lineHeight: overlayers.label.lineHeight,
                                                    lineWidth: overlayers.label.lineWidth,
                                                    rotated: overlayers.label.rotated,
                                                    haloColor: overlayers.label.haloColor,
                                                    haloSize: overlayers.label.haloSize,
                                                    xoffset: overlayers.label.xoffset,
                                                    yoffset: overlayers.label.yoffset,
                                                    verticalAlignment: overlayers.label.verticalAlignment,
                                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                                    font: {
                                                        size: overlayers.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overlayers.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                labelsymbol = {
                                                    type: "label-3d",
                                                    symbolLayers: [{
                                                            type: "text",
                                                            material: { color: overlayers.label.color },
                                                            size: overlayers.label.size,
                                                            halo: {
                                                                color: overlayers.label.haloColor,
                                                                size: overlayers.label.haloSize
                                                            }
                                                        }]
                                                };
                                            }
                                            statesLabelClass = new LabelClass({
                                                labelExpressionInfo: {
                                                    expression: '$feature.NAME'
                                                },
                                                symbol: labelsymbol,
                                                labelPlacement: overlayers.label.placement,
                                                minScale: overlayers.label.minScale,
                                                maxScale: overlayers.label.maxScale
                                            });
                                            clientoperateLayer.labelingInfo = [statesLabelClass];
                                        }
                                        else {
                                            labelsymbol = overlayers.label.labelingInfo;
                                            clientoperateLayer.labelingInfo = labelsymbol;
                                        }
                                    }
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                polygonrenderer = void 0;
                                if (!overlayers.renderer) {
                                    if (overlayers.symboltype === 'simple') {
                                        polygonrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "simple-fill",
                                                color: overlayers.fillColor,
                                                style: overlayers.style,
                                                outline: {
                                                    color: overlayers.strokeColor,
                                                    width: overlayers.strokeWeight,
                                                    style: overlayers.strokestyle
                                                }
                                            }
                                        };
                                    }
                                    else {
                                        polygonrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "picture-fill",
                                                url: overlayers.url,
                                                width: overlayers.picwidth,
                                                height: overlayers.picheight,
                                                outline: {
                                                    style: overlayers.strokestyle,
                                                    color: overlayers.strokeColor,
                                                    width: overlayers.strokeWeight
                                                }
                                            }
                                        };
                                    }
                                }
                                else {
                                    polygonrenderer = overlayers.symbol;
                                }
                                clientoperateLayer = new FeatureLayer({
                                    id: this.displayedLayerid,
                                    title: "Overlayer-polygon-" + this.displayedLayerid,
                                    objectIdField: 'objectId',
                                    geometryType: 'polygon',
                                    renderer: polygonrenderer,
                                    screenSizePerspectiveEnabled: true,
                                    popupEnabled: false,
                                    popupTemplate: false,
                                    visible: overlayers.visible,
                                    maxScale: overlayers.maxScale,
                                    minScale: overlayers.minScale,
                                    // elevationInfo: (overlayers as Overlayerbase).elevationInfo,
                                    fields: datafiled_2,
                                    source: [],
                                    spatialReference: this.view.spatialReference
                                });
                                if (overlayers.elevationInfo) {
                                    if (this.view.type === '3d') {
                                        clientoperateLayer.elevationInfo = overlayers.elevationInfo;
                                    }
                                }
                                if (overlayers.paths &&
                                    overlayers.attributes) {
                                    dataattributes = overlayers.attributes;
                                    dataattributes['uuid'] = overlayers.uuid;
                                    rs_1 = [];
                                    overlayers.paths.forEach(function (item) {
                                        rs_1.push([item.X, item.Y, item.Z]);
                                    });
                                    polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_1,
                                        spatialReference: this.view.spatialReference
                                    });
                                    graphic = new Graphic({
                                        geometry: polygon,
                                        attributes: dataattributes
                                    });
                                    result.push(graphic);
                                    clientoperateLayer.source.add(graphic);
                                    this.mapoverlayersflayer.push([overlayers.uuid,
                                        overlayers.uuid, graphic]);
                                }
                                this.view.map.add(clientoperateLayer);
                                if (overlayers.label.visible) {
                                    labelsymbol = void 0;
                                    if (!overlayers.label.labelingInfo) {
                                        if (this.view.type === '2d') {
                                            labelsymbol = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overlayers.label.color },
                                                        size: overlayers.label.size,
                                                        halo: {
                                                            color: overlayers.label.haloColor,
                                                            size: overlayers.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overlayers.label.placement,
                                            minScale: overlayers.label.minScale,
                                            maxScale: overlayers.label.maxScale
                                        });
                                        clientoperateLayer.labelingInfo = [statesLabelClass];
                                    }
                                    else {
                                        labelsymbol = overlayers.label.labelingInfo;
                                        clientoperateLayer.labelingInfo = labelsymbol;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, new utils.Promise(function (resolve, reject) {
                                resolve(result);
                            })];
                }
            });
        });
    };
    FeaureOverlays.prototype.addfeature = function (overlayers) {
        return __awaiter$10(this, void 0, void 0, function () {
            var _a, FeatureLayer, LabelClass, Graphic, Point, esriCircle, PictureMarkerSymbol, 
            // tslint:disable-next-line:variable-name
            ArcGISPolyline, ArcGISPolygon, clientoperateLayer, addfeatures, dataattributes, graphic, dataattributes, graphic, dataattributes, path_3, polyline, graphic, dataattributes, rs_3, polygon, graphic;
            var _this = this;
            return __generator$10(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point',
                            'esri/geometry/Circle', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"])];
                    case 1:
                        _a = _b.sent(), FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], esriCircle = _a[4], PictureMarkerSymbol = _a[5], ArcGISPolyline = _a[6], ArcGISPolygon = _a[7];
                        clientoperateLayer = this.view.map.findLayerById(this.displayedLayerid);
                        if (!clientoperateLayer) {
                            return [2 /*return*/];
                        }
                        addfeatures = [];
                        if (overlayers instanceof Array) {
                            overlayers.forEach(function (overelement) {
                                if (overelement.overlaytype.toLowerCase() === 'marker') {
                                    var dataattributes = overelement.attributes;
                                    dataattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        attributes: dataattributes
                                    });
                                    addfeatures.push(graphic);
                                    _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                                        graphic]);
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                    var dataattributes = overelement.attributes;
                                    dataattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new esriCircle({
                                            center: new Point({
                                                x: overelement.center.X,
                                                y: overelement.center.Y,
                                                z: overelement.center.Z,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            radius: overelement.radius,
                                            radiusUnit: overelement.radiusUnit,
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        attributes: dataattributes
                                    });
                                    addfeatures.push(graphic);
                                    _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                                        graphic]);
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                    var dataattributes = overelement.attributes;
                                    dataattributes['uuid'] = overelement.uuid;
                                    var path_4 = [];
                                    overelement.path.forEach(function (item) {
                                        path_4.push([item.X, item.Y, item.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_4,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var graphic = new Graphic({
                                        geometry: polyline,
                                        attributes: dataattributes
                                    });
                                    addfeatures.push(graphic);
                                    _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                                        graphic]);
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                    var dataattributes = overelement.attributes;
                                    dataattributes['uuid'] = overelement.uuid;
                                    var rs_4 = [];
                                    overelement.paths.forEach(function (item) {
                                        rs_4.push([item.X, item.Y, item.Z]);
                                    });
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_4,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var graphic = new Graphic({
                                        geometry: polygon,
                                        attributes: dataattributes
                                    });
                                    addfeatures.push(graphic);
                                    _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                                        graphic]);
                                }
                            });
                            clientoperateLayer.applyEdits({
                                addFeatures: addfeatures
                                // tslint:disable-next-line:no-empty
                            }).then(function (editsResult) {
                                // tslint:disable-next-line:no-empty
                                // clientoperateLayer.queryFeatures().then((results) => { });
                                return new utils.Promise(function (resolve, reject) {
                                    resolve(addfeatures);
                                });
                            });
                        }
                        else {
                            if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                dataattributes = overlayers.attributes;
                                dataattributes['uuid'] = overlayers.uuid;
                                graphic = new Graphic({
                                    geometry: new Point({
                                        x: overlayers.position[0],
                                        y: overlayers.position[1],
                                        z: overlayers.position[2] === undefined ? 0 :
                                            overlayers.position[2],
                                        spatialReference: this.view.spatialReference
                                    }),
                                    attributes: dataattributes
                                });
                                addfeatures.push(graphic);
                                this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                    graphic]);
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                dataattributes = overlayers.attributes;
                                dataattributes['uuid'] = overlayers.uuid;
                                graphic = new Graphic({
                                    geometry: new esriCircle({
                                        center: new Point({
                                            x: overlayers.center.X,
                                            y: overlayers.center.Y,
                                            z: overlayers.center.Z,
                                            spatialReference: this.view.spatialReference
                                        }),
                                        radius: overlayers.radius,
                                        radiusUnit: overlayers.radiusUnit,
                                        spatialReference: this.view.spatialReference
                                    }),
                                    attributes: dataattributes
                                });
                                addfeatures.push(graphic);
                                this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                    graphic]);
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                dataattributes = overlayers.attributes;
                                dataattributes['uuid'] = overlayers.uuid;
                                path_3 = [];
                                overlayers.path.forEach(function (item) {
                                    path_3.push([item.X, item.Y, item.Z]);
                                });
                                polyline = new ArcGISPolyline({
                                    hasZ: false,
                                    hasM: false,
                                    paths: path_3,
                                    spatialReference: this.view.spatialReference
                                });
                                graphic = new Graphic({
                                    geometry: polyline,
                                    attributes: dataattributes
                                });
                                addfeatures.push(graphic);
                                this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                    graphic]);
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                dataattributes = overlayers.attributes;
                                dataattributes['uuid'] = overlayers.uuid;
                                rs_3 = [];
                                overlayers.paths.forEach(function (item) {
                                    rs_3.push([item.X, item.Y, item.Z]);
                                });
                                polygon = new ArcGISPolygon({
                                    hasZ: true,
                                    hasM: true,
                                    rings: rs_3,
                                    spatialReference: this.view.spatialReference
                                });
                                graphic = new Graphic({
                                    geometry: polygon,
                                    attributes: dataattributes
                                });
                                addfeatures.push(graphic);
                                this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                                    graphic]);
                            }
                            clientoperateLayer.applyEdits({
                                addFeatures: addfeatures
                                // tslint:disable-next-line:no-empty
                            }).then(function (editsResult) {
                                // tslint:disable-next-line:no-empty
                                // clientoperateLayer.queryFeatures().then((results) => { });
                                return new utils.Promise(function (resolve, reject) {
                                    resolve(addfeatures);
                                });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FeaureOverlays.prototype.updatefeature = function (overlayers) {
        return __awaiter$10(this, void 0, void 0, function () {
            var _a, FeatureLayer, LabelClass, Graphic, Point, esriCircle, PictureMarkerSymbol, 
            // tslint:disable-next-line:variable-name
            ArcGISPolyline, ArcGISPolygon, clientoperateLayer, upFeatures, flayer, flayer, graphiclist_1;
            var _this = this;
            return __generator$10(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point',
                            'esri/geometry/Circle', 'esri/symbols/PictureMarkerSymbol',
                            "esri/geometry/Polyline", "esri/geometry/Polygon"])];
                    case 1:
                        _a = _b.sent(), FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], esriCircle = _a[4], PictureMarkerSymbol = _a[5], ArcGISPolyline = _a[6], ArcGISPolygon = _a[7];
                        clientoperateLayer = this.view.map.findLayerById(this.displayedLayerid);
                        if (!clientoperateLayer) {
                            return [2 /*return*/];
                        }
                        upFeatures = [];
                        if (overlayers instanceof Array) {
                            overlayers.forEach(function (overelement) {
                                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                                    return item[1] === overelement.uuid;
                                });
                                if (graphiclist.length === 1) {
                                    // const dataattributes = (overelement as Overlayerbase).attributes;
                                    // dataattributes['uuid'] = (overelement as Marker).uuid;
                                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                                        var point = new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = point;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                        var point = new esriCircle({
                                            center: new Point({
                                                x: overelement.center.X,
                                                y: overelement.center.Y,
                                                z: overelement.center.Z,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            radius: overelement.radius,
                                            radiusUnit: overelement.radiusUnit,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = point;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                        var path_5 = [];
                                        overelement.path.forEach(function (item) {
                                            path_5.push([item.X, item.Y, item.Z]);
                                        });
                                        var polyline = new ArcGISPolyline({
                                            hasZ: false,
                                            hasM: false,
                                            paths: path_5,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = polyline;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                        var rs_5 = [];
                                        overelement.paths.forEach(function (item) {
                                            rs_5.push([item.X, item.Y, item.Z]);
                                        });
                                        var polygon = new ArcGISPolygon({
                                            hasZ: true,
                                            hasM: true,
                                            rings: rs_5,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = polygon;
                                    }
                                    var keys = Object.keys(overelement.attributes);
                                    keys.map(function (attributeitem) {
                                        if (attributeitem !== 'objectId') {
                                            graphiclist[0][2].setAttribute(attributeitem, overelement.attributes[attributeitem]);
                                        }
                                    });
                                    upFeatures.push(graphiclist[0][2]);
                                }
                            });
                            flayer = this.view.map.findLayerById(this.displayedLayerid);
                            if (flayer && upFeatures.length) {
                                flayer.applyEdits({
                                    updateFeatures: upFeatures
                                    // tslint:disable-next-line:no-empty
                                }).then(function (editsResult) {
                                    return new utils.Promise(function (resolve, reject) {
                                        resolve(upFeatures);
                                    });
                                });
                            }
                        }
                        else if (overlayers.type === 'group') {
                            overlayers.overlayers.forEach(function (overelement) {
                                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                                    return item[1] === overelement.uuid;
                                });
                                if (graphiclist.length === 1) {
                                    // const dataattributes = (overelement as Overlayerbase).attributes;
                                    // dataattributes['uuid'] = (overelement as Marker).uuid;
                                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                                        var point = new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = point;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                        var point = new esriCircle({
                                            center: new Point({
                                                x: overelement.center.X,
                                                y: overelement.center.Y,
                                                z: overelement.center.Z,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            radius: overelement.radius,
                                            radiusUnit: overelement.radiusUnit,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = point;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                        var path_6 = [];
                                        overelement.path.forEach(function (item) {
                                            path_6.push([item.X, item.Y, item.Z]);
                                        });
                                        var polyline = new ArcGISPolyline({
                                            hasZ: false,
                                            hasM: false,
                                            paths: path_6,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = polyline;
                                    }
                                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                        var rs_6 = [];
                                        overelement.paths.forEach(function (item) {
                                            rs_6.push([item.X, item.Y, item.Z]);
                                        });
                                        var polygon = new ArcGISPolygon({
                                            hasZ: true,
                                            hasM: true,
                                            rings: rs_6,
                                            spatialReference: _this.view.spatialReference
                                        });
                                        graphiclist[0][2].geometry = polygon;
                                    }
                                    var keys = Object.keys(overelement.attributes);
                                    keys.map(function (attributeitem) {
                                        if (attributeitem !== 'objectId') {
                                            graphiclist[0][2].setAttribute(attributeitem, overelement.attributes[attributeitem]);
                                        }
                                    });
                                    upFeatures.push(graphiclist[0][2]);
                                }
                            });
                            flayer = this.view.map.findLayerById(this.displayedLayerid);
                            if (flayer && upFeatures.length) {
                                flayer.applyEdits({
                                    updateFeatures: upFeatures
                                    // tslint:disable-next-line:no-empty
                                }).then(function (editsResult) {
                                    return new utils.Promise(function (resolve, reject) {
                                        resolve(upFeatures);
                                    });
                                });
                            }
                        }
                        else if (overlayers.type === 'element') {
                            graphiclist_1 = this.mapoverlayersflayer.filter(function (item) {
                                return item[1] === overlayers.uuid;
                            });
                            graphiclist_1.forEach(function (item) {
                                var dataattributes = overlayers.attributes;
                                dataattributes['uuid'] = overlayers.uuid;
                                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                    var point = new Point({
                                        x: overlayers.position[0],
                                        y: overlayers.position[1],
                                        z: overlayers.position[2] === undefined ? 0 :
                                            overlayers.position[2],
                                        spatialReference: _this.view.spatialReference
                                    });
                                    item[2].geometry = point;
                                }
                                else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                    var point = new esriCircle({
                                        center: new Point({
                                            x: overlayers.center.X,
                                            y: overlayers.center.Y,
                                            z: overlayers.center.Z,
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        radius: overlayers.radius,
                                        radiusUnit: overlayers.radiusUnit,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    graphiclist_1[0][2].geometry = point;
                                }
                                else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                    var path_7 = [];
                                    overlayers.path.forEach(function (point) {
                                        path_7.push([point.X, point.Y, point.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_7,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    graphiclist_1[0][2].geometry = polyline;
                                }
                                else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                    var rs_7 = [];
                                    overlayers.paths.forEach(function (point) {
                                        rs_7.push([point.X, point.Y, point.Z]);
                                    });
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_7,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    graphiclist_1[0][2].geometry = polygon;
                                }
                                var keys = Object.keys(overlayers.attributes);
                                keys.map(function (attributeitem) {
                                    if (attributeitem !== 'objectId') {
                                        item[2].setAttribute(attributeitem, overlayers.attributes[attributeitem]);
                                    }
                                });
                                upFeatures.push(item[2]);
                                var flayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                if (flayer && upFeatures.length) {
                                    flayer.applyEdits({
                                        updateFeatures: upFeatures
                                        // tslint:disable-next-line:no-empty
                                    }).then(function (editsResult) {
                                        return new utils.Promise(function (resolve, reject) {
                                            resolve(upFeatures);
                                        });
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FeaureOverlays.prototype.removefeature = function (overlayers) {
        var _this = this;
        var clientoperateLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (!clientoperateLayer) {
            return;
        }
        if (overlayers instanceof Array) {
            var deletefeatures_1 = [];
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    deletefeatures_1.push(item[2]);
                });
                _this.mapoverlayersflayer = _this.mapoverlayersflayer.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
            var flayer = this.view.map.findLayerById(this.displayedLayerid);
            if (flayer && deletefeatures_1.length) {
                flayer.applyEdits({
                    deleteFeatures: deletefeatures_1
                }).then(function (editsResult) {
                    // tslint:disable-next-line:no-empty
                    // flayer.queryFeatures().then((results) => { });
                });
            }
        }
        else if (overlayers.type === 'group') {
            var graphiclist = this.mapoverlayersflayer.filter(function (item) {
                return item[0] === overlayers.uuid;
            });
            var deletefeatures_2 = [];
            graphiclist.forEach(function (item) {
                deletefeatures_2.push(item[2]);
            });
            var flayer = this.view.map.findLayerById(this.displayedLayerid);
            if (flayer && deletefeatures_2.length) {
                flayer.applyEdits({
                    deleteFeatures: deletefeatures_2
                }).then(function (editsResult) {
                    // tslint:disable-next-line:no-empty
                    // flayer.queryFeatures().then((results) => {});
                });
            }
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[0] !== overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayersflayer.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            var deletefeatures_3 = [];
            graphiclist.forEach(function (item) {
                deletefeatures_3.push(item[2]);
            });
            var flayer = this.view.map.findLayerById(this.displayedLayerid);
            if (flayer && deletefeatures_3.length) {
                flayer.applyEdits({
                    deleteFeatures: deletefeatures_3
                }).then(function (editsResult) {
                    // tslint:disable-next-line:no-empty
                    // flayer.queryFeatures().then((results) => { });
                });
            }
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    FeaureOverlays.prototype.removeAll = function () {
        var _this = this;
        var rsultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (rsultLayer) {
            var deletefeatures_4 = [];
            this.mapoverlayersflayer.forEach(function (item) {
                deletefeatures_4.push(item[2]);
            });
            rsultLayer.applyEdits({
                deleteFeatures: deletefeatures_4
                // tslint:disable-next-line:no-empty
            }).then(function (editsResult) {
                // flayer.queryFeatures().then((results) => { });
                _this.mapoverlayersflayer = [];
            });
        }
    };
    FeaureOverlays.prototype.delete = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            this.view.map.remove(boundaryResultLayer);
            this.mapoverlayersflayer = [];
        }
    };
    FeaureOverlays.prototype.addcluster = function (clusterConfig) {
        var fLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (fLayer) {
            fLayer.featureReduction = clusterConfig;
        }
    };
    FeaureOverlays.prototype.deletecluster = function () {
        var fLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (fLayer) {
            fLayer.featureReduction = null;
        }
    };
    FeaureOverlays.prototype.show = function () {
        var fLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (fLayer) {
            fLayer.visible = true;
        }
    };
    FeaureOverlays.prototype.hide = function () {
        var fLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (fLayer) {
            fLayer.visible = false;
        }
    };
    FeaureOverlays.prototype.init = function (view) {
        return __awaiter$10(this, void 0, void 0, function () {
            var _this = this;
            return __generator$10(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                this.view.on(MapEvent.click, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$10(_this, void 0, void 0, function () {
                        var layerid, objectid, query;
                        var _this = this;
                        return __generator$10(this, function (_a) {
                            if (response.results.length > 0) {
                                if (!response.results[0].graphic.layer) {
                                    return [2 /*return*/];
                                }
                                layerid = response.results[0].graphic.layer.id;
                                if (!layerid) {
                                    return [2 /*return*/];
                                }
                                if (layerid === this.displayedLayerid) {
                                    objectid = response.results[0].graphic.attributes.objectId;
                                    query = response.results[0].graphic.layer.createQuery();
                                    query.where = "objectId =" + objectid;
                                    response.results[0].graphic.layer.queryFeatures(query).then(function (result) {
                                        if (result.features.length > 0) {
                                            _this.emit(MapEvent.click, result.features, event, event.mapPoint);
                                        }
                                    });
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                this.view.on(MapEvent.pointermove, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$10(_this, void 0, void 0, function () {
                        var layerid, objectid, query, result;
                        var _this = this;
                        return __generator$10(this, function (_a) {
                            if (response.results.length > 0) {
                                if (!response.results[0].graphic.layer) {
                                    return [2 /*return*/];
                                }
                                layerid = response.results[0].graphic.layer.id;
                                if (!layerid) {
                                    return [2 /*return*/];
                                }
                                if (layerid === this.displayedLayerid) {
                                    objectid = response.results[0].graphic.attributes.objectId;
                                    query = response.results[0].graphic.layer.createQuery();
                                    query.where = "objectId =" + objectid;
                                    response.results[0].graphic.layer.queryFeatures(query).then(function (result) {
                                        if (result.features.length > 0) {
                                            _this.eventResult = result.features;
                                            _this.emit(MapEvent.pointermove, result.features, event, _this.view.toMap({
                                                x: event.x,
                                                y: event.y
                                            }));
                                        }
                                    });
                                }
                            }
                            else {
                                if (this.eventResult === null) {
                                    return [2 /*return*/];
                                }
                                else {
                                    result = this.eventResult;
                                    this.eventResult = null;
                                    this.emit(MapEvent.pointerleave, result, event, this.view.toMap({
                                        x: event.x,
                                        y: event.y
                                    }));
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return FeaureOverlays;
}(EventEmitter$1));

var __extends$12 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$11 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$11 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FireRenderer = /** @class */ (function (_super) {
    __extends$12(FireRenderer, _super);
    function FireRenderer(view) {
        var _this = _super.call(this) || this;
        _this.fireRendererRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    FireRenderer.prototype.add = function (fireRendererOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/FireRenderer", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var fireRenderer = _a[0], externalRenderers = _a[1];
            fireRendererOptions.points.forEach(function (pointitem) {
                var fireccRenderer = new fireRenderer(_this.view, pointitem, fireRendererOptions.options);
                externalRenderers.add(_this.view, fireccRenderer);
                _this.fireRendererRendererArray.push([new Guid().uuid, fireccRenderer]);
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    FireRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.fireRendererRendererArray.map(function (fireRendereritem) {
                externalRenderers.remove(_this.view, fireRendereritem[1]);
            });
        });
    };
    FireRenderer.prototype.init = function (view) {
        return __awaiter$11(this, void 0, void 0, function () {
            return __generator$11(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return FireRenderer;
}(EventEmitter$1));

var __extends$13 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$12 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$12 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FlashGifLayer = /** @class */ (function (_super) {
    __extends$13(FlashGifLayer, _super);
    function FlashGifLayer(view) {
        var _this = _super.call(this) || this;
        _this.markpointsRendererArray = []; // 渲染苏州
        _this.markpoints = null; // 撒点
        _this.view = null;
        _this.flashGifLayer = null; // gif 渲染
        _this.markpointscontainerid = null; // gif的容器id
        _this.init(view);
        return _this;
    }
    FlashGifLayer.prototype.add = function (flashPointOptions) {
        var _this = this;
        load(['82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/4E3CE3AF-B592-B4F6-576E1B86F84B6969', "esri/geometry/Point", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var flashgiflayer = _a[0], Point = _a[1], externalRenderers = _a[2];
            if (!flashPointOptions.points) {
                return;
            }
            _this.markpoints = flashPointOptions.points.map(function (item) {
                item.markerid = new Guid().uuid;
                return item;
            });
            // gif 的容器id
            _this.markpointscontainerid = new Guid().uuid;
            _this.flashGifLayer = new flashgiflayer({
                points: _this.markpoints,
                view: _this.view,
                markercontainerid: _this.markpointscontainerid
            }, function (result) {
                var geometryPoint = null;
                if (result != null) {
                    geometryPoint = new Point({
                        x: result.x,
                        y: result.y,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                }
                _this.emit(MapEvent.click, result, geometryPoint);
            }, function (result) {
                var geometryPoint = null;
                if (result != null) {
                    geometryPoint = new Point({
                        x: result.x,
                        y: result.y,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                }
                _this.emit(MapEvent.pointermove, result, geometryPoint);
            });
            externalRenderers.add(_this.view, _this.flashGifLayer);
            _this.markpointsRendererArray.push([new Guid().uuid, _this.flashGifLayer]);
        });
    };
    FlashGifLayer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.markpointsRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.markpointsRendererArray = [];
            _this.markpoints.forEach(function (item) {
                var parent = document.getElementById(_this.markpointscontainerid);
                var box = document.getElementById(item.markerid);
                if (box !== null) {
                    parent.removeChild(box);
                }
            });
        });
    };
    FlashGifLayer.prototype.init = function (view) {
        return __awaiter$12(this, void 0, void 0, function () {
            return __generator$12(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return FlashGifLayer;
}(EventEmitter$1));

var __extends$14 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$13 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$13 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FlashPoint3DLayer = /** @class */ (function (_super) {
    __extends$14(FlashPoint3DLayer, _super);
    function FlashPoint3DLayer(view) {
        var _this = _super.call(this) || this;
        _this.view = null;
        _this.falshpoint3DRenderer = null;
        _this.init(view);
        return _this;
    }
    FlashPoint3DLayer.prototype.add = function (flashPointOptions) {
        var _this = this;
        load(['82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/92586C78-6DE2-946F-F03F88AF0F8D0D7F', "esri/geometry/Point", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var flashPoint3DLayer = _a[0], Point = _a[1], externalRenderers = _a[2];
            _this.falshpoint3DRenderer = new flashPoint3DLayer({
                nring: flashPointOptions.nring,
                spead: flashPointOptions.spead,
                size: flashPointOptions.size,
                color: flashPointOptions.color,
                view: flashPointOptions.view,
                points: flashPointOptions.points
            }, function (result) {
                var geometryPoint = null;
                if (result != null) {
                    geometryPoint = new Point({
                        x: result.x,
                        y: result.y,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                }
                _this.emit(MapEvent.click, result, geometryPoint);
            }, function (result) {
                var geometryPoint = null;
                if (result != null) {
                    geometryPoint = new Point({
                        x: result.x,
                        y: result.y,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                }
                _this.emit(MapEvent.pointermove, result, geometryPoint);
            });
            externalRenderers.add(_this.view, _this.falshpoint3DRenderer);
        });
    };
    FlashPoint3DLayer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            if (!_this.falshpoint3DRenderer) {
                return;
            }
            externalRenderers.remove(_this.view, _this.falshpoint3DRenderer);
        });
    };
    FlashPoint3DLayer.prototype.init = function (view) {
        return __awaiter$13(this, void 0, void 0, function () {
            return __generator$13(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return FlashPoint3DLayer;
}(EventEmitter$1));

var __extends$15 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$14 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$14 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var GraphicOverlays = /** @class */ (function (_super) {
    __extends$15(GraphicOverlays, _super);
    function GraphicOverlays(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.mapoverlayers = [];
        _this.init(view);
        return _this;
    }
    GraphicOverlays.prototype.add = function (overlayers) {
        return __awaiter$14(this, void 0, void 0, function () {
            var _a, Graphic, Point, GraphicsLayer, PictureMarkerSymbol, 
            // tslint:disable-next-line:variable-name
            ArcGISPolyline, ArcGISPolygon, esriCircle, result, clientGraphicLayer, psymbol, markeattributes, graphic, graphicLayer, marklabel, graphictext, cgraphicLayer, lineSymbol, path_1, polyline, polylineattributes, polylineGraphic, cgraphicLayer, polylabel, graphictext, graphicLayer, fillSymbol, rs_1, polygonattributes, polygon, polygonGraphic, graphicLayer, polylabel, graphictext, cgraphicLayer, fillSymbol, dataattributes, circlegraphic, graphicLayer, polygonlabel, graphictext, cgraphicLayer;
            var _this = this;
            return __generator$14(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, load(['esri/Graphic', 'esri/geometry/Point',
                            'esri/layers/GraphicsLayer', 'esri/symbols/PictureMarkerSymbol',
                            "esri/geometry/Polyline", "esri/geometry/Polygon", 'esri/geometry/Circle'])];
                    case 1:
                        _a = _b.sent(), Graphic = _a[0], Point = _a[1], GraphicsLayer = _a[2], PictureMarkerSymbol = _a[3], ArcGISPolyline = _a[4], ArcGISPolygon = _a[5], esriCircle = _a[6];
                        result = [];
                        clientGraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                        if (!clientGraphicLayer) {
                            clientGraphicLayer = new GraphicsLayer({
                                id: this.displayedLayerid,
                                title: 'Overlayer-' + this.displayedLayerid
                            });
                            this.view.map.add(clientGraphicLayer);
                        }
                        if (overlayers instanceof Array) {
                            overlayers.forEach(function (overelement) {
                                if (overelement.overlaytype.toLowerCase() === 'marker') {
                                    var psymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (_this.view.type === '2d') {
                                            psymbol = {
                                                type: "picture-marker",
                                                url: overelement.icon.image,
                                                width: overelement.icon.size.width,
                                                height: overelement.icon.size.height
                                            };
                                        }
                                        else {
                                            psymbol = {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overelement.icon.size.width,
                                                        resource: {
                                                            href: overelement.icon.image
                                                        }
                                                    }]
                                            };
                                        }
                                    }
                                    else {
                                        psymbol = overelement.symbol;
                                    }
                                    var markerattributes = overelement.attributes;
                                    markerattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        symbol: psymbol,
                                        attributes: markerattributes
                                    });
                                    result.push(graphic);
                                    _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(graphic);
                                    }
                                    if (overelement.label.visible) {
                                        var marklabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            marklabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            marklabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: new Point({
                                                x: _this.view.type === '3d' ? overelement.position[0]
                                                    + overelement.label.xoffset : overelement.position[0],
                                                y: _this.view.type === '3d' ? overelement.position[1]
                                                    + overelement.label.yoffset : overelement.position[1],
                                                z: _this.view.type === '3d' ? overelement.position[2]
                                                    + overelement.label.zoffset : overelement.position[2],
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: marklabel,
                                            attributes: markerattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                    var lineSymbol = null;
                                    if (!overelement.symbol) {
                                        lineSymbol = {
                                            type: "simple-line",
                                            color: overelement.strokeColor,
                                            style: overelement.style,
                                            width: overelement.width,
                                            cap: overelement.cap,
                                            join: overelement.lineJoin
                                        };
                                    }
                                    else {
                                        lineSymbol = overelement.symbol;
                                    }
                                    var path_2 = [];
                                    overelement.path.forEach(function (item) {
                                        path_2.push([item.X, item.Y, item.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_2,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polylineattributes = overelement.attributes;
                                    polylineattributes['uuid'] = overelement.uuid;
                                    var polylineGraphic = new Graphic({
                                        geometry: polyline,
                                        symbol: lineSymbol,
                                        attributes: polylineattributes
                                    });
                                    result.push(polylineGraphic);
                                    _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(polylineGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polylinelabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polylinelabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polylinelabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polylineGraphic.geometry.extent.center,
                                            symbol: polylinelabel,
                                            attributes: polylineattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    var rs_2 = [];
                                    overelement.paths.forEach(function (item) {
                                        rs_2.push([item.X, item.Y, item.Z]);
                                    });
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_2,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polygoneattributes = overelement.attributes;
                                    polygoneattributes['uuid'] = overelement.uuid;
                                    var polygonGraphic = new Graphic({
                                        geometry: polygon,
                                        symbol: fillSymbol,
                                        attributes: polygoneattributes
                                    });
                                    result.push(polygonGraphic);
                                    _this.mapoverlayers.push(['smap-default', overelement.uuid, polygonGraphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(polygonGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polygonlabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polygonGraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: polygoneattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    if (overelement.attributes && overelement.center
                                        && overelement.radius) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var circlegraphic = new Graphic({
                                            geometry: new esriCircle({
                                                center: new Point({
                                                    x: overelement.center.X,
                                                    y: overelement.center.Y,
                                                    z: overelement.center.Z,
                                                    spatialReference: _this.view.spatialReference
                                                }),
                                                radius: overelement.radius,
                                                radiusUnit: overelement.radiusUnit,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: fillSymbol,
                                            attributes: dataattributes
                                        });
                                        result.push(circlegraphic);
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, circlegraphic]);
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(circlegraphic);
                                        }
                                        if (overelement.label.visible) {
                                            var polygonlabel = null;
                                            if (!overelement.label.labelingInfo) {
                                                polygonlabel = {
                                                    type: overelement.label.type,
                                                    text: overelement.label.text,
                                                    color: overelement.label.color,
                                                    angle: overelement.label.angle,
                                                    backgroundColor: overelement.label.backgroundColor,
                                                    borderLineColor: overelement.label.borderLineColor,
                                                    borderLineSize: overelement.label.borderLineSize,
                                                    kerning: overelement.label.kerning,
                                                    lineHeight: overelement.label.lineHeight,
                                                    lineWidth: overelement.label.lineWidth,
                                                    rotated: overelement.label.rotated,
                                                    haloColor: overelement.label.haloColor,
                                                    haloSize: overelement.label.haloSize,
                                                    xoffset: overelement.label.xoffset,
                                                    yoffset: overelement.label.yoffset,
                                                    verticalAlignment: overelement.label.verticalAlignment,
                                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                                    font: {
                                                        size: overelement.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overelement.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                polygonlabel = overelement.label.labelingInfo;
                                            }
                                            var graphictext = new Graphic({
                                                geometry: circlegraphic.geometry.extent.center,
                                                symbol: polygonlabel,
                                                attributes: dataattributes
                                            });
                                            var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                            if (cgraphicLayer) {
                                                cgraphicLayer.add(graphictext);
                                            }
                                            _this.mapoverlayers.push(['smap-default',
                                                overelement.uuid, graphictext]);
                                        }
                                    }
                                }
                            });
                        }
                        else if (overlayers.type === 'group') {
                            overlayers.overlayers.forEach(function (overelement) {
                                if (overelement.overlaytype.toLowerCase() === 'marker') {
                                    var psymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (_this.view.type === '2d') {
                                            psymbol = {
                                                type: "picture-marker",
                                                url: overelement.icon.image,
                                                width: overelement.icon.size.width,
                                                height: overelement.icon.size.height
                                            };
                                        }
                                        else {
                                            psymbol = {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overelement.icon.size.width,
                                                        resource: {
                                                            href: overelement.icon.image
                                                        }
                                                    }]
                                            };
                                        }
                                    }
                                    else {
                                        psymbol = overelement.symbol;
                                    }
                                    var markerattributes = overelement.attributes;
                                    markerattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        symbol: psymbol,
                                        attributes: markerattributes
                                    });
                                    result.push(graphic);
                                    _this.mapoverlayers.push([overlayers.uuid,
                                        overelement.uuid, graphic]);
                                    var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(graphic);
                                    }
                                    if (overelement.label.visible) {
                                        var marklabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            marklabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            marklabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: new Point({
                                                x: _this.view.type === '3d' ? overelement.position[0]
                                                    + overelement.label.xoffset :
                                                    overelement.position[0],
                                                y: _this.view.type === '3d' ? overelement.position[1]
                                                    + overelement.label.yoffset :
                                                    overelement.position[1],
                                                z: _this.view.type === '3d' ? overelement.position[2]
                                                    + overelement.label.zoffset :
                                                    overelement.position[2],
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: marklabel,
                                            attributes: markerattributes
                                        });
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push([overlayers.uuid,
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                    var lineSymbol = null;
                                    if (!overelement.symbol) {
                                        lineSymbol = {
                                            type: "simple-line",
                                            color: overelement.strokeColor,
                                            style: overelement.style,
                                            width: overelement.width,
                                            cap: overelement.cap,
                                            join: overelement.lineJoin
                                        };
                                    }
                                    else {
                                        lineSymbol = overelement.symbol;
                                    }
                                    var path_3 = [];
                                    overelement.path.forEach(function (item) {
                                        path_3.push([item.X, item.Y, item.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_3,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polylineattributes = overelement.attributes;
                                    polylineattributes['uuid'] = overelement.uuid;
                                    var polylineGraphic = new Graphic({
                                        geometry: polyline,
                                        symbol: lineSymbol,
                                        attributes: polylineattributes
                                    });
                                    result.push(polylineGraphic);
                                    _this.mapoverlayers.push([overlayers.uuid,
                                        overelement.uuid, polylineGraphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(polylineGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polylinelabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polylinelabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polylinelabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polylineGraphic.geometry.extent.center,
                                            symbol: polylinelabel,
                                            attributes: polylineattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push([overlayers.uuid,
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    var rs_3 = [];
                                    overelement.paths.forEach(function (item) {
                                        rs_3.push([item.X, item.Y, item.Z]);
                                    });
                                    var polygoneattributes = overelement.attributes;
                                    polygoneattributes['uuid'] = overelement.uuid;
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_3,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polygonGraphic = new Graphic({
                                        geometry: polygon,
                                        symbol: fillSymbol,
                                        attributes: polygoneattributes
                                    });
                                    result.push(polygonGraphic);
                                    _this.mapoverlayers.push([overlayers.uuid,
                                        overelement.uuid, polygonGraphic]);
                                    var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(polygonGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polygonlabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polygonGraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: polygoneattributes
                                        });
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push([overlayers.uuid,
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    if (overelement.attributes && overelement.center
                                        && overelement.radius) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var circlegraphic = new Graphic({
                                            geometry: new esriCircle({
                                                center: new Point({
                                                    x: overelement.center.X,
                                                    y: overelement.center.Y,
                                                    z: overelement.center.Z,
                                                    spatialReference: _this.view.spatialReference
                                                }),
                                                radius: overelement.radius,
                                                radiusUnit: overelement.radiusUnit,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: fillSymbol,
                                            attributes: dataattributes
                                        });
                                        result.push(circlegraphic);
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, circlegraphic]);
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(circlegraphic);
                                        }
                                        if (overelement.label.visible) {
                                            var polygonlabel = null;
                                            if (!overelement.label.labelingInfo) {
                                                polygonlabel = {
                                                    type: overelement.label.type,
                                                    text: overelement.label.text,
                                                    color: overelement.label.color,
                                                    angle: overelement.label.angle,
                                                    backgroundColor: overelement.label.backgroundColor,
                                                    borderLineColor: overelement.label.borderLineColor,
                                                    borderLineSize: overelement.label.borderLineSize,
                                                    kerning: overelement.label.kerning,
                                                    lineHeight: overelement.label.lineHeight,
                                                    lineWidth: overelement.label.lineWidth,
                                                    rotated: overelement.label.rotated,
                                                    haloColor: overelement.label.haloColor,
                                                    haloSize: overelement.label.haloSize,
                                                    xoffset: overelement.label.xoffset,
                                                    yoffset: overelement.label.yoffset,
                                                    verticalAlignment: overelement.label.verticalAlignment,
                                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                                    font: {
                                                        size: overelement.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overelement.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                polygonlabel = overelement.label.labelingInfo;
                                            }
                                            var graphictext = new Graphic({
                                                geometry: circlegraphic.geometry.extent.center,
                                                symbol: polygonlabel,
                                                attributes: dataattributes
                                            });
                                            var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                            if (cgraphicLayer) {
                                                cgraphicLayer.add(graphictext);
                                            }
                                            _this.mapoverlayers.push(['smap-default',
                                                overelement.uuid, graphictext]);
                                        }
                                    }
                                }
                            });
                            clientGraphicLayer.minScale = overlayers.minScale;
                            clientGraphicLayer.maxScale = overlayers.maxScale;
                        }
                        else if (overlayers.type === 'element') {
                            if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                psymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (this.view.type === '2d') {
                                        psymbol = {
                                            type: "picture-marker",
                                            url: overlayers.icon.image,
                                            width: overlayers.icon.size.width,
                                            height: overlayers.icon.size.height
                                        };
                                    }
                                    else {
                                        psymbol = {
                                            type: "point-3d",
                                            symbolLayers: [{
                                                    type: "icon",
                                                    size: overlayers.icon.size.width,
                                                    resource: {
                                                        href: overlayers.icon.image
                                                    }
                                                }]
                                        };
                                    }
                                }
                                else {
                                    psymbol = overlayers.symbol;
                                }
                                markeattributes = overlayers.attributes;
                                markeattributes['uuid'] = overlayers.uuid;
                                graphic = new Graphic({
                                    geometry: new Point({
                                        x: overlayers.position[0],
                                        y: overlayers.position[1],
                                        z: overlayers.position[2] === undefined ? 0 :
                                            overlayers.position[2],
                                        spatialReference: this.view.spatialReference
                                    }),
                                    symbol: psymbol,
                                    attributes: markeattributes
                                });
                                result.push(graphic);
                                this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                                graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (graphicLayer) {
                                    graphicLayer.add(graphic);
                                }
                                if (overlayers.label.visible) {
                                    marklabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        marklabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        marklabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: new Point({
                                            x: this.view.type === '3d' ? overlayers.position[0]
                                                + overlayers.label.xoffset : overlayers.position[0],
                                            y: this.view.type === '3d' ? overlayers.position[1]
                                                + overlayers.label.yoffset : overlayers.position[1],
                                            z: this.view.type === '3d' ? overlayers.position[2]
                                                + overlayers.label.zoffset : overlayers.position[2],
                                            spatialReference: this.view.spatialReference
                                        }),
                                        symbol: marklabel,
                                        attributes: markeattributes
                                    });
                                    cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                lineSymbol = null;
                                if (!overlayers.symbol) {
                                    lineSymbol = {
                                        type: "simple-line",
                                        color: overlayers.strokeColor,
                                        style: overlayers.style,
                                        width: overlayers.width,
                                        cap: overlayers.cap,
                                        join: overlayers.lineJoin
                                    };
                                }
                                else {
                                    lineSymbol = overlayers.symbol;
                                }
                                path_1 = [];
                                overlayers.path.forEach(function (item) {
                                    path_1.push([item.X, item.Y, item.Z]);
                                });
                                polyline = new ArcGISPolyline({
                                    hasZ: false,
                                    hasM: false,
                                    paths: path_1,
                                    spatialReference: this.view.spatialReference
                                });
                                polylineattributes = overlayers.attributes;
                                polylineattributes['uuid'] = overlayers.uuid;
                                polylineGraphic = new Graphic({
                                    geometry: polyline,
                                    symbol: lineSymbol,
                                    attributes: polylineattributes
                                });
                                result.push(polylineGraphic);
                                this.mapoverlayers.push(['smap-default',
                                    overlayers.uuid, polylineGraphic]);
                                cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (cgraphicLayer) {
                                    cgraphicLayer.add(polylineGraphic);
                                }
                                if (overlayers.label.visible) {
                                    polylabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        polylabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        polylabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: polylineGraphic.geometry.extent.center,
                                        symbol: polylabel,
                                        attributes: polylineattributes
                                    });
                                    graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                fillSymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (overlayers.symboltype === 'simple') {
                                        fillSymbol = {
                                            type: "simple-fill",
                                            color: overlayers.fillColor,
                                            style: overlayers.style,
                                            outline: {
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight,
                                                style: overlayers.strokestyle
                                            }
                                        };
                                    }
                                    else {
                                        fillSymbol = {
                                            type: "picture-fill",
                                            url: overlayers.url,
                                            width: overlayers.picwidth,
                                            height: overlayers.picheight,
                                            outline: {
                                                style: overlayers.strokestyle,
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight
                                            }
                                        };
                                    }
                                }
                                else {
                                    fillSymbol = overlayers.symbol;
                                }
                                rs_1 = [];
                                overlayers.paths.forEach(function (item) {
                                    rs_1.push([item.X, item.Y, item.Z]);
                                });
                                polygonattributes = overlayers.attributes;
                                polygonattributes['uuid'] = overlayers.uuid;
                                polygon = new ArcGISPolygon({
                                    hasZ: true,
                                    hasM: true,
                                    rings: rs_1,
                                    spatialReference: this.view.spatialReference
                                });
                                polygonGraphic = new Graphic({
                                    geometry: polygon,
                                    symbol: fillSymbol,
                                    attributes: polygonattributes
                                });
                                result.push(polygonGraphic);
                                this.mapoverlayers.push(['smap-default',
                                    overlayers.uuid, polygonGraphic]);
                                graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (graphicLayer) {
                                    graphicLayer.add(polygonGraphic);
                                }
                                if (overlayers.label.visible) {
                                    polylabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        polylabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        polylabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: polygonGraphic.geometry.extent.center,
                                        symbol: polylabel,
                                        attributes: polygonattributes
                                    });
                                    cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                fillSymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (overlayers.symboltype === 'simple') {
                                        fillSymbol = {
                                            type: "simple-fill",
                                            color: overlayers.fillColor,
                                            style: overlayers.style,
                                            outline: {
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight,
                                                style: overlayers.strokestyle
                                            }
                                        };
                                    }
                                    else {
                                        fillSymbol = {
                                            type: "picture-fill",
                                            url: overlayers.url,
                                            width: overlayers.picwidth,
                                            height: overlayers.picheight,
                                            outline: {
                                                style: overlayers.strokestyle,
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight
                                            }
                                        };
                                    }
                                }
                                else {
                                    fillSymbol = overlayers.symbol;
                                }
                                if (overlayers.attributes
                                    && overlayers.center
                                    && overlayers.radius) {
                                    dataattributes = overlayers.attributes;
                                    dataattributes['uuid'] = overlayers.uuid;
                                    circlegraphic = new Graphic({
                                        geometry: new esriCircle({
                                            center: new Point({
                                                x: overlayers.center.X,
                                                y: overlayers.center.Y,
                                                z: overlayers.center.Z,
                                                spatialReference: this.view.spatialReference
                                            }),
                                            radius: overlayers.radius,
                                            radiusUnit: overlayers.radiusUnit,
                                            spatialReference: this.view.spatialReference
                                        }),
                                        symbol: fillSymbol,
                                        attributes: dataattributes
                                    });
                                    result.push(circlegraphic);
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, circlegraphic]);
                                    graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(circlegraphic);
                                    }
                                    if (overlayers.label.visible) {
                                        polygonlabel = null;
                                        if (!overlayers.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overlayers.label.labelingInfo;
                                        }
                                        graphictext = new Graphic({
                                            geometry: circlegraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: dataattributes
                                        });
                                        cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        this.mapoverlayers.push(['smap-default',
                                            overlayers.uuid, graphictext]);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, new utils.Promise(function (resolve, reject) {
                                resolve(result);
                            })];
                }
            });
        });
    };
    GraphicOverlays.prototype.remove = function (overlayers) {
        var _this = this;
        if (overlayers instanceof Array) {
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                    if (graphicLayer) {
                        graphicLayer.remove(item[2]);
                    }
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
        }
        else if (overlayers.type === 'group') {
            var graphiclist = this.mapoverlayers.filter(function (item) { return item[0] ===
                overlayers.uuid; });
            graphiclist.forEach(function (item) {
                var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                if (graphicLayer) {
                    graphicLayer.remove(item[2]);
                }
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[0] !==
                overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayers.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            graphiclist.forEach(function (item) {
                var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                if (graphicLayer) {
                    graphicLayer.remove(item[2]);
                }
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    GraphicOverlays.prototype.update = function (overlayers) {
        return __awaiter$14(this, void 0, void 0, function () {
            var _a, Graphic, Point, GraphicsLayer, PictureMarkerSymbol, 
            // tslint:disable-next-line:variable-name
            ArcGISPolyline, ArcGISPolygon, esriCircle, result, graphiclist, graphiclist, psymbol, markerattributes, graphic, cgraphicLayer, marklabel, graphictext, graphicLayer, lineSymbol, path_4, polyline, polylineattributes, polylineGraphic, graphicLayer, polylabel, graphictext, cgraphicLayer, fillSymbol, rs_4, polygon, polygonattributes, polygonGraphic, cgraphicLayer, polylabel, graphictext, graphicLayer, fillSymbol, dataattributes, circlegraphic, graphicLayer, polygonlabel, graphictext, cgraphicLayer;
            var _this = this;
            return __generator$14(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, load(['esri/Graphic', 'esri/geometry/Point',
                            'esri/layers/GraphicsLayer', 'esri/symbols/PictureMarkerSymbol',
                            "esri/geometry/Polyline", "esri/geometry/Polygon", 'esri/geometry/Circle'])];
                    case 1:
                        _a = _b.sent(), Graphic = _a[0], Point = _a[1], GraphicsLayer = _a[2], PictureMarkerSymbol = _a[3], ArcGISPolyline = _a[4], ArcGISPolygon = _a[5], esriCircle = _a[6];
                        result = [];
                        if (overlayers instanceof Array) {
                            overlayers.forEach(function (overelement) {
                                var graphiclist = _this.mapoverlayers.filter(function (item) {
                                    return item[1] === overelement.uuid;
                                });
                                graphiclist.forEach(function (item) {
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.remove(item[2]);
                                    }
                                });
                                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !== overelement.uuid; });
                                if (overelement.overlaytype.toLowerCase() === 'marker') {
                                    var psymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (_this.view.type === '2d') {
                                            psymbol = {
                                                type: "picture-marker",
                                                url: overelement.icon.image,
                                                width: overelement.icon.size.width,
                                                height: overelement.icon.size.height
                                            };
                                        }
                                        else {
                                            psymbol = {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overelement.icon.size.width,
                                                        resource: {
                                                            href: overelement.icon.image
                                                        }
                                                    }]
                                            };
                                        }
                                    }
                                    else {
                                        psymbol = overelement.symbol;
                                    }
                                    var markerattributes = overelement.attributes;
                                    markerattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        symbol: psymbol,
                                        attributes: markerattributes
                                    });
                                    result.push(graphic);
                                    _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                                    var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(graphic);
                                    }
                                    if (overelement.label.visible) {
                                        var marklabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            marklabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            marklabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: new Point({
                                                x: _this.view.type === '3d' ? overelement.position[0]
                                                    // tslint:disable-next-line:max-line-length
                                                    + overelement.label.xoffset : overelement.position[0],
                                                y: _this.view.type === '3d' ? overelement.position[1]
                                                    + overelement.label.yoffset : overelement.position[1],
                                                z: _this.view.type === '3d' ? overelement.position[2]
                                                    + overelement.label.zoffset : overelement.position[2],
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: marklabel,
                                            attributes: markerattributes
                                        });
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                    var lineSymbol = null;
                                    if (!overelement.symbol) {
                                        lineSymbol = {
                                            type: "simple-line",
                                            color: overelement.strokeColor,
                                            style: overelement.style,
                                            width: overelement.width,
                                            cap: overelement.cap,
                                            join: overelement.lineJoin
                                        };
                                    }
                                    else {
                                        lineSymbol = overelement.symbol;
                                    }
                                    var path_5 = [];
                                    overelement.path.forEach(function (item) {
                                        path_5.push([item.X, item.Y, item.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_5,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polylineattributes = overelement.attributes;
                                    polylineattributes['uuid'] = overelement.uuid;
                                    var polylineGraphic = new Graphic({
                                        geometry: polyline,
                                        symbol: lineSymbol,
                                        attributes: polylineattributes
                                    });
                                    result.push(polylineGraphic);
                                    _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(polylineGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polylinelabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polylinelabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polylinelabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polylineGraphic.geometry.extent.center,
                                            symbol: polylinelabel,
                                            attributes: polylineattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    var rs_5 = [];
                                    overelement.paths.forEach(function (item) {
                                        rs_5.push([item.X, item.Y, item.Z]);
                                    });
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_5,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polygonattributes = overelement.attributes;
                                    polygonattributes['uuid'] = overelement.uuid;
                                    var polygonGraphic = new Graphic({
                                        geometry: polygon,
                                        symbol: fillSymbol,
                                        attributes: polygonattributes
                                    });
                                    result.push(polygonGraphic);
                                    _this.mapoverlayers.push(['smap-default',
                                        overelement.uuid, polygonGraphic]);
                                    var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(polygonGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polygonlabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polygonGraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: polygonattributes
                                        });
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default',
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    if (overelement.attributes
                                        && overelement.center
                                        && overelement.radius) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var circlegraphic = new Graphic({
                                            geometry: new esriCircle({
                                                center: new Point({
                                                    x: overelement.center.X,
                                                    y: overelement.center.Y,
                                                    z: overelement.center.Z,
                                                    spatialReference: _this.view.spatialReference
                                                }),
                                                radius: overelement.radius,
                                                radiusUnit: overelement.radiusUnit,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: fillSymbol,
                                            attributes: dataattributes
                                        });
                                        result.push(circlegraphic);
                                        _this.mapoverlayers.push(['smap-default',
                                            overelement.uuid, circlegraphic]);
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(circlegraphic);
                                        }
                                        if (overelement.label.visible) {
                                            var polygonlabel = null;
                                            if (!overelement.label.labelingInfo) {
                                                polygonlabel = {
                                                    type: overelement.label.type,
                                                    text: overelement.label.text,
                                                    color: overelement.label.color,
                                                    angle: overelement.label.angle,
                                                    backgroundColor: overelement.label.backgroundColor,
                                                    borderLineColor: overelement.label.borderLineColor,
                                                    borderLineSize: overelement.label.borderLineSize,
                                                    kerning: overelement.label.kerning,
                                                    lineHeight: overelement.label.lineHeight,
                                                    lineWidth: overelement.label.lineWidth,
                                                    rotated: overelement.label.rotated,
                                                    haloColor: overelement.label.haloColor,
                                                    haloSize: overelement.label.haloSize,
                                                    xoffset: overelement.label.xoffset,
                                                    yoffset: overelement.label.yoffset,
                                                    verticalAlignment: overelement.label.verticalAlignment,
                                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                                    font: {
                                                        size: overelement.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overelement.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                polygonlabel = overelement.label.labelingInfo;
                                            }
                                            var graphictext = new Graphic({
                                                geometry: circlegraphic.geometry.extent.center,
                                                symbol: polygonlabel,
                                                attributes: dataattributes
                                            });
                                            var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                            if (cgraphicLayer) {
                                                cgraphicLayer.add(graphictext);
                                            }
                                            _this.mapoverlayers.push(['smap-default',
                                                overelement.uuid, graphictext]);
                                        }
                                    }
                                }
                            });
                        }
                        else if (overlayers.type === 'group') {
                            graphiclist = this.mapoverlayers.filter(function (item) {
                                return item[0] === overlayers.uuid;
                            });
                            graphiclist.forEach(function (item) {
                                var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                if (graphicLayer) {
                                    graphicLayer.remove(item[2]);
                                }
                            });
                            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[0] !== overlayers.uuid; });
                            overlayers.overlayers.forEach(function (overelement) {
                                if (overelement.overlaytype.toLowerCase() === 'marker') {
                                    var psymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (_this.view.type === '2d') {
                                            psymbol = {
                                                type: "picture-marker",
                                                url: overelement.icon.image,
                                                width: overelement.icon.size.width,
                                                height: overelement.icon.size.height
                                            };
                                        }
                                        else {
                                            psymbol = {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overelement.icon.size.width,
                                                        resource: {
                                                            href: overelement.icon.image
                                                        }
                                                    }]
                                            };
                                        }
                                    }
                                    else {
                                        psymbol = overelement.symbol;
                                    }
                                    var markerattributes = overelement.attributes;
                                    markerattributes['uuid'] = overelement.uuid;
                                    var graphic = new Graphic({
                                        geometry: new Point({
                                            x: overelement.position[0],
                                            y: overelement.position[1],
                                            z: overelement.position[2] === undefined ? 0 :
                                                overelement.position[2],
                                            spatialReference: _this.view.spatialReference
                                        }),
                                        symbol: psymbol,
                                        attributes: markerattributes
                                    });
                                    result.push(graphic);
                                    _this.mapoverlayers.push([overlayers.uuid,
                                        overelement.uuid, graphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(graphic);
                                    }
                                    if (overelement.label.visible) {
                                        var marklabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            marklabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            marklabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: new Point({
                                                x: _this.view.type === '3d' ? overelement.position[0]
                                                    + overelement.label.xoffset :
                                                    overelement.position[0],
                                                y: _this.view.type === '3d' ? overelement.position[1]
                                                    + overelement.label.yoffset :
                                                    overelement.position[1],
                                                z: _this.view.type === '3d' ? overelement.position[2]
                                                    + overelement.label.zoffset :
                                                    overelement.position[2],
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: marklabel,
                                            attributes: markerattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push([overlayers.uuid,
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                                    var lineSymbol = null;
                                    if (!overelement.symbol) {
                                        lineSymbol = {
                                            type: "simple-line",
                                            color: overelement.strokeColor,
                                            style: overelement.style,
                                            width: overelement.width,
                                            cap: overelement.cap,
                                            join: overelement.lineJoin
                                        };
                                    }
                                    else {
                                        lineSymbol = overelement.symbol;
                                    }
                                    var path_6 = [];
                                    overelement.path.forEach(function (item) {
                                        path_6.push([item.X, item.Y, item.Z]);
                                    });
                                    var polyline = new ArcGISPolyline({
                                        hasZ: false,
                                        hasM: false,
                                        paths: path_6,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polylineattributes = overelement.attributes;
                                    polylineattributes['uuid'] = overelement.uuid;
                                    var polylineGraphic = new Graphic({
                                        geometry: polyline,
                                        symbol: lineSymbol,
                                        attributes: polylineattributes
                                    });
                                    result.push(polylineGraphic);
                                    _this.mapoverlayers.push([overlayers.uuid,
                                        overelement.uuid, polylineGraphic]);
                                    var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(polylineGraphic);
                                    }
                                    if (overelement.label.visible) {
                                        var polylinelabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polylinelabel = {
                                                type: overelement.label.type,
                                                text: overelement.label.text,
                                                color: overelement.label.color,
                                                angle: overelement.label.angle,
                                                backgroundColor: overelement.label.backgroundColor,
                                                borderLineColor: overelement.label.borderLineColor,
                                                borderLineSize: overelement.label.borderLineSize,
                                                kerning: overelement.label.kerning,
                                                lineHeight: overelement.label.lineHeight,
                                                lineWidth: overelement.label.lineWidth,
                                                rotated: overelement.label.rotated,
                                                haloColor: overelement.label.haloColor,
                                                haloSize: overelement.label.haloSize,
                                                xoffset: overelement.label.xoffset,
                                                yoffset: overelement.label.yoffset,
                                                verticalAlignment: overelement.label.verticalAlignment,
                                                horizontalAlignment: overelement.label.horizontalAlignment,
                                                font: {
                                                    size: overelement.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelement.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polylinelabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polylineGraphic.geometry.extent.center,
                                            symbol: polylinelabel,
                                            attributes: polylineattributes
                                        });
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push([overlayers.uuid,
                                            overelement.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overlayers.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overlayers.fillColor,
                                                style: overlayers.style,
                                                outline: {
                                                    color: overlayers.strokeColor,
                                                    width: overlayers.strokeWeight,
                                                    style: overlayers.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overlayers.url,
                                                width: overlayers.picwidth,
                                                height: overlayers.picheight,
                                                outline: {
                                                    style: overlayers.strokestyle,
                                                    color: overlayers.strokeColor,
                                                    width: overlayers.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    var rs_6 = [];
                                    overlayers.paths.forEach(function (item) {
                                        rs_6.push([item.X, item.Y, item.Z]);
                                    });
                                    var polygonattributes = overelement.attributes;
                                    polygonattributes['uuid'] = overelement.uuid;
                                    var polygon = new ArcGISPolygon({
                                        hasZ: true,
                                        hasM: true,
                                        rings: rs_6,
                                        spatialReference: _this.view.spatialReference
                                    });
                                    var polygonGraphic = new Graphic({
                                        geometry: polygon,
                                        symbol: fillSymbol,
                                        attributes: polygonattributes
                                    });
                                    result.push(polygonGraphic);
                                    _this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, polygonGraphic]);
                                    var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(polygonGraphic);
                                    }
                                    if (overlayers.label.visible) {
                                        var polygonlabel = null;
                                        if (!overelement.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overelement.label.labelingInfo;
                                        }
                                        var graphictext = new Graphic({
                                            geometry: polygonGraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: polygonattributes
                                        });
                                        var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        _this.mapoverlayers.push(['smap-default',
                                            overlayers.uuid, graphictext]);
                                    }
                                }
                                else if (overelement.overlaytype.toLowerCase() === 'circle') {
                                    var fillSymbol = void 0;
                                    if (!overelement.symbol) {
                                        if (overelement.symboltype === 'simple') {
                                            fillSymbol = {
                                                type: "simple-fill",
                                                color: overelement.fillColor,
                                                style: overelement.style,
                                                outline: {
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight,
                                                    style: overelement.strokestyle
                                                }
                                            };
                                        }
                                        else {
                                            fillSymbol = {
                                                type: "picture-fill",
                                                url: overelement.url,
                                                width: overelement.picwidth,
                                                height: overelement.picheight,
                                                outline: {
                                                    style: overelement.strokestyle,
                                                    color: overelement.strokeColor,
                                                    width: overelement.strokeWeight
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        fillSymbol = overelement.symbol;
                                    }
                                    if (overelement.attributes
                                        && overelement.center
                                        && overelement.radius) {
                                        var dataattributes = overelement.attributes;
                                        dataattributes['uuid'] = overelement.uuid;
                                        var circlegraphic = new Graphic({
                                            geometry: new esriCircle({
                                                center: new Point({
                                                    x: overelement.center.X,
                                                    y: overelement.center.Y,
                                                    z: overelement.center.Z,
                                                    spatialReference: _this.view.spatialReference
                                                }),
                                                radius: overelement.radius,
                                                radiusUnit: overelement.radiusUnit,
                                                spatialReference: _this.view.spatialReference
                                            }),
                                            symbol: fillSymbol,
                                            attributes: dataattributes
                                        });
                                        result.push(circlegraphic);
                                        _this.mapoverlayers.push(['smap-default',
                                            overelement.uuid, circlegraphic]);
                                        var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                        if (graphicLayer) {
                                            graphicLayer.add(circlegraphic);
                                        }
                                        if (overelement.label.visible) {
                                            var polygonlabel = null;
                                            if (!overelement.label.labelingInfo) {
                                                polygonlabel = {
                                                    type: overelement.label.type,
                                                    text: overelement.label.text,
                                                    color: overelement.label.color,
                                                    angle: overelement.label.angle,
                                                    backgroundColor: overelement.label.backgroundColor,
                                                    borderLineColor: overelement.label.borderLineColor,
                                                    borderLineSize: overelement.label.borderLineSize,
                                                    kerning: overelement.label.kerning,
                                                    lineHeight: overelement.label.lineHeight,
                                                    lineWidth: overelement.label.lineWidth,
                                                    rotated: overelement.label.rotated,
                                                    haloColor: overelement.label.haloColor,
                                                    haloSize: overelement.label.haloSize,
                                                    xoffset: overelement.label.xoffset,
                                                    yoffset: overelement.label.yoffset,
                                                    verticalAlignment: overelement.label.verticalAlignment,
                                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                                    font: {
                                                        size: overelement.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overelement.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                polygonlabel = overelement.label.labelingInfo;
                                            }
                                            var graphictext = new Graphic({
                                                geometry: circlegraphic.geometry.extent.center,
                                                symbol: polygonlabel,
                                                attributes: dataattributes
                                            });
                                            var cgraphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                            if (cgraphicLayer) {
                                                cgraphicLayer.add(graphictext);
                                            }
                                            _this.mapoverlayers.push(['smap-default',
                                                overelement.uuid, graphictext]);
                                        }
                                    }
                                }
                            });
                        }
                        else if (overlayers.type === 'element') {
                            graphiclist = this.mapoverlayers.filter(function (item) {
                                return item[1] === overlayers.uuid;
                            });
                            graphiclist.forEach(function (item) {
                                var graphicLayer = _this.view.map.findLayerById(_this.displayedLayerid);
                                if (graphicLayer) {
                                    graphicLayer.remove(item[2]);
                                }
                            });
                            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
                            if (overlayers.overlaytype.toLowerCase() === 'marker') {
                                psymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (this.view.type === '2d') {
                                        psymbol = {
                                            type: "picture-marker",
                                            url: overlayers.icon.image,
                                            width: overlayers.icon.size.width,
                                            height: overlayers.icon.size.height
                                        };
                                    }
                                    else {
                                        psymbol = {
                                            type: "point-3d",
                                            symbolLayers: [{
                                                    type: "icon",
                                                    size: overlayers.icon.size.width,
                                                    resource: {
                                                        href: overlayers.icon.image
                                                    }
                                                }]
                                        };
                                    }
                                }
                                else {
                                    psymbol = overlayers.symbol;
                                }
                                markerattributes = overlayers.attributes;
                                markerattributes['uuid'] = overlayers.uuid;
                                graphic = new Graphic({
                                    geometry: new Point({
                                        x: overlayers.position[0],
                                        y: overlayers.position[1],
                                        z: overlayers.position[2] === undefined ? 0 :
                                            overlayers.position[2],
                                        spatialReference: this.view.spatialReference
                                    }),
                                    symbol: psymbol,
                                    attributes: markerattributes
                                });
                                result.push(graphic);
                                this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                                cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (cgraphicLayer) {
                                    cgraphicLayer.add(graphic);
                                }
                                if (overlayers.label.visible) {
                                    marklabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        marklabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        marklabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: new Point({
                                            x: this.view.type === '3d' ? overlayers.position[0]
                                                + overlayers.label.xoffset : overlayers.position[0],
                                            y: this.view.type === '3d' ? overlayers.position[1]
                                                + overlayers.label.yoffset : overlayers.position[1],
                                            z: this.view.type === '3d' ? overlayers.position[2]
                                                + overlayers.label.zoffset : overlayers.position[2],
                                            spatialReference: this.view.spatialReference
                                        }),
                                        symbol: marklabel,
                                        attributes: markerattributes
                                    });
                                    graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                                lineSymbol = null;
                                if (!overlayers.symbol) {
                                    lineSymbol = {
                                        type: "simple-line",
                                        color: overlayers.strokeColor,
                                        style: overlayers.style,
                                        width: overlayers.width,
                                        cap: overlayers.cap,
                                        join: overlayers.lineJoin
                                    };
                                }
                                else {
                                    lineSymbol = overlayers.symbol;
                                }
                                path_4 = [];
                                overlayers.path.forEach(function (item) {
                                    path_4.push([item.X, item.Y, item.Z]);
                                });
                                polyline = new ArcGISPolyline({
                                    hasZ: false,
                                    hasM: false,
                                    paths: path_4,
                                    spatialReference: this.view.spatialReference
                                });
                                polylineattributes = overlayers.attributes;
                                polylineattributes['uuid'] = overlayers.uuid;
                                polylineGraphic = new Graphic({
                                    geometry: polyline,
                                    symbol: lineSymbol,
                                    attributes: polylineattributes
                                });
                                result.push(polylineGraphic);
                                this.mapoverlayers.push(['smap-default',
                                    overlayers.uuid, polylineGraphic]);
                                graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (graphicLayer) {
                                    graphicLayer.add(polylineGraphic);
                                }
                                if (overlayers.label.visible) {
                                    polylabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        polylabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        polylabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: polylineGraphic.geometry.extent.center,
                                        symbol: polylabel,
                                        attributes: polylineattributes
                                    });
                                    cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (cgraphicLayer) {
                                        cgraphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                                fillSymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (overlayers.symboltype === 'simple') {
                                        fillSymbol = {
                                            type: "simple-fill",
                                            color: overlayers.fillColor,
                                            style: overlayers.style,
                                            outline: {
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight,
                                                style: overlayers.strokestyle
                                            }
                                        };
                                    }
                                    else {
                                        fillSymbol = {
                                            type: "picture-fill",
                                            url: overlayers.url,
                                            width: overlayers.picwidth,
                                            height: overlayers.picheight,
                                            outline: {
                                                style: overlayers.strokestyle,
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight
                                            }
                                        };
                                    }
                                }
                                else {
                                    fillSymbol = overlayers.symbol;
                                }
                                rs_4 = [];
                                overlayers.paths.forEach(function (item) {
                                    rs_4.push([item.X, item.Y, item.Z]);
                                });
                                polygon = new ArcGISPolygon({
                                    hasZ: true,
                                    hasM: true,
                                    rings: rs_4,
                                    spatialReference: this.view.spatialReference
                                });
                                polygonattributes = overlayers.attributes;
                                polygonattributes['uuid'] = overlayers.uuid;
                                polygonGraphic = new Graphic({
                                    geometry: polygon,
                                    symbol: fillSymbol,
                                    attributes: polygonattributes
                                });
                                result.push(polygonGraphic);
                                this.mapoverlayers.push(['smap-default',
                                    overlayers.uuid, polygonGraphic]);
                                cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                if (cgraphicLayer) {
                                    cgraphicLayer.add(polygonGraphic);
                                }
                                if (overlayers.label.visible) {
                                    polylabel = null;
                                    if (!overlayers.label.labelingInfo) {
                                        polylabel = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        polylabel = overlayers.label.labelingInfo;
                                    }
                                    graphictext = new Graphic({
                                        geometry: polygonGraphic.geometry.extent.center,
                                        symbol: polylabel,
                                        attributes: polygonattributes
                                    });
                                    graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(graphictext);
                                    }
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, graphictext]);
                                }
                            }
                            else if (overlayers.overlaytype.toLowerCase() === 'circle') {
                                fillSymbol = void 0;
                                if (!overlayers.symbol) {
                                    if (overlayers.symboltype === 'simple') {
                                        fillSymbol = {
                                            type: "simple-fill",
                                            color: overlayers.fillColor,
                                            style: overlayers.style,
                                            outline: {
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight,
                                                style: overlayers.strokestyle
                                            }
                                        };
                                    }
                                    else {
                                        fillSymbol = {
                                            type: "picture-fill",
                                            url: overlayers.url,
                                            width: overlayers.picwidth,
                                            height: overlayers.picheight,
                                            outline: {
                                                style: overlayers.strokestyle,
                                                color: overlayers.strokeColor,
                                                width: overlayers.strokeWeight
                                            }
                                        };
                                    }
                                }
                                else {
                                    fillSymbol = overlayers.symbol;
                                }
                                if (overlayers.attributes
                                    && overlayers.center
                                    && overlayers.radius) {
                                    dataattributes = overlayers.attributes;
                                    dataattributes['uuid'] = overlayers.uuid;
                                    circlegraphic = new Graphic({
                                        geometry: new esriCircle({
                                            center: new Point({
                                                x: overlayers.center.X,
                                                y: overlayers.center.Y,
                                                z: overlayers.center.Z,
                                                spatialReference: this.view.spatialReference
                                            }),
                                            radius: overlayers.radius,
                                            radiusUnit: overlayers.radiusUnit,
                                            spatialReference: this.view.spatialReference
                                        }),
                                        symbol: fillSymbol,
                                        attributes: dataattributes
                                    });
                                    result.push(circlegraphic);
                                    this.mapoverlayers.push(['smap-default',
                                        overlayers.uuid, circlegraphic]);
                                    graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                    if (graphicLayer) {
                                        graphicLayer.add(circlegraphic);
                                    }
                                    if (overlayers.label.visible) {
                                        polygonlabel = null;
                                        if (!overlayers.label.labelingInfo) {
                                            polygonlabel = {
                                                type: overlayers.label.type,
                                                text: overlayers.label.text,
                                                color: overlayers.label.color,
                                                angle: overlayers.label.angle,
                                                backgroundColor: overlayers.label.backgroundColor,
                                                borderLineColor: overlayers.label.borderLineColor,
                                                borderLineSize: overlayers.label.borderLineSize,
                                                kerning: overlayers.label.kerning,
                                                lineHeight: overlayers.label.lineHeight,
                                                lineWidth: overlayers.label.lineWidth,
                                                rotated: overlayers.label.rotated,
                                                haloColor: overlayers.label.haloColor,
                                                haloSize: overlayers.label.haloSize,
                                                xoffset: overlayers.label.xoffset,
                                                yoffset: overlayers.label.yoffset,
                                                verticalAlignment: overlayers.label.verticalAlignment,
                                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                                font: {
                                                    size: overlayers.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overlayers.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            polygonlabel = overlayers.label.labelingInfo;
                                        }
                                        graphictext = new Graphic({
                                            geometry: circlegraphic.geometry.extent.center,
                                            symbol: polygonlabel,
                                            attributes: dataattributes
                                        });
                                        cgraphicLayer = this.view.map.findLayerById(this.displayedLayerid);
                                        if (cgraphicLayer) {
                                            cgraphicLayer.add(graphictext);
                                        }
                                        this.mapoverlayers.push(['smap-default',
                                            overlayers.uuid, graphictext]);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, new utils.Promise(function (resolve, reject) {
                                resolve(result);
                            })];
                }
            });
        });
    };
    GraphicOverlays.prototype.removeAll = function () {
        var graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (graphicLayer) {
            graphicLayer.removeAll();
            this.mapoverlayers = [];
        }
    };
    GraphicOverlays.prototype.delete = function () {
        var graphicLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (graphicLayer) {
            this.view.map.remove(graphicLayer);
            this.mapoverlayers = [];
        }
    };
    GraphicOverlays.prototype.show = function () {
        var gLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (gLayer) {
            gLayer.visible = true;
        }
    };
    GraphicOverlays.prototype.hide = function () {
        var gLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (gLayer) {
            gLayer.visible = false;
        }
    };
    GraphicOverlays.prototype.init = function (view) {
        return __awaiter$14(this, void 0, void 0, function () {
            var _this = this;
            return __generator$14(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                this.view.on(MapEvent.click, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$14(_this, void 0, void 0, function () {
                        var layerid;
                        return __generator$14(this, function (_a) {
                            if (response.results.length > 0) {
                                if (!response.results[0].graphic.layer) {
                                    return [2 /*return*/];
                                }
                                layerid = response.results[0].graphic.layer.id;
                                if (!layerid) {
                                    return [2 /*return*/];
                                }
                                if (layerid === this.displayedLayerid) {
                                    this.emit(MapEvent.click, response, event.mapPoint);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                this.view.on(MapEvent.pointermove, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$14(_this, void 0, void 0, function () {
                        var layerid;
                        return __generator$14(this, function (_a) {
                            if (response.results.length > 0) {
                                if (!response.results[0].graphic.layer) {
                                    return [2 /*return*/];
                                }
                                layerid = response.results[0].graphic.layer.id;
                                if (!layerid) {
                                    return [2 /*return*/];
                                }
                                if (layerid === this.displayedLayerid) {
                                    this.emit(MapEvent.pointermove, response, this.view.toMap({
                                        x: event.x,
                                        y: event.y
                                    }));
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return GraphicOverlays;
}(EventEmitter$1));

var __extends$16 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$15 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$15 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HeatMap = /** @class */ (function (_super) {
    __extends$16(HeatMap, _super);
    function HeatMap(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.heatmaplayer = null;
        _this.init(view);
        return _this;
    }
    HeatMap.prototype.add = function (heatmapOptions) {
        var _this = this;
        load(['82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/734A3D86-CF65-FC97-E8B7B8A0197A043B'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var HeatMapLayer = _a[0];
            var config = {
                container: document.getElementById(heatmapOptions.container),
                radius: heatmapOptions.radius || 30,
                maxOpacity: heatmapOptions.maxOpacity || 0.8,
                minOpacity: heatmapOptions.minOpacity || 0,
                blur: heatmapOptions.blur || .7,
                gradient: heatmapOptions.gradient || {
                    0: "rgb(0,0,0)",
                    0.3: "rgb(0,0,255)",
                    0.8: "rgb(0,255,0)",
                    0.98: "rgb(255,255,0)",
                    1: "rgb(255,0,0)"
                }
            };
            _this.heatmaplayer = new HeatMapLayer(_this.view, config, heatmapOptions.datas, heatmapOptions.h337, heatmapOptions.id);
            _this.heatmaplayer.addData();
        });
    };
    HeatMap.prototype.remove = function (heatmapid) {
        var parent = document.getElementsByClassName("esri-view-surface")[0];
        var box = document.getElementById(heatmapid);
        if (box != null) {
            parent.removeChild(box);
        }
    };
    HeatMap.prototype.refreshdata = function (datas) {
        this.heatmaplayer.setVisible(true);
        this.heatmaplayer.freshenLayerData(datas);
    };
    HeatMap.prototype.show = function () {
        this.heatmaplayer.setVisible(true);
    };
    HeatMap.prototype.hide = function () {
        this.heatmaplayer.setVisible(false);
    };
    HeatMap.prototype.init = function (view) {
        return __awaiter$15(this, void 0, void 0, function () {
            return __generator$15(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return HeatMap;
}(EventEmitter$1));

var __extends$17 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$16 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$16 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HeatMap3dLayer = /** @class */ (function (_super) {
    __extends$17(HeatMap3dLayer, _super);
    function HeatMap3dLayer(view) {
        var _this = _super.call(this) || this;
        _this.heatMap3dLayerRenderer = null;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    HeatMap3dLayer.prototype.add = function (heatMap3dLayerOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/90ABC595-73BF-08E9-0567CA1FA6278EEC", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var heatmap3dRenderer = _a[0], externalRenderers = _a[1];
            _this.heatMap3dLayerRenderer = new heatmap3dRenderer(_this.view, heatMap3dLayerOptions.data, heatMap3dLayerOptions.options);
            externalRenderers.add(_this.view, _this.heatMap3dLayerRenderer);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    HeatMap3dLayer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            if (!_this.heatMap3dLayerRenderer) {
                return;
            }
            externalRenderers.remove(_this.view, _this.heatMap3dLayerRenderer);
        });
    };
    HeatMap3dLayer.prototype.setMaterialColor = function (color) {
        if (!this.heatMap3dLayerRenderer) {
            return;
        }
        this.heatMap3dLayerRenderer.setMaterialColor(color);
    };
    HeatMap3dLayer.prototype.setwireframe = function () {
        if (!this.heatMap3dLayerRenderer) {
            return;
        }
        this.heatMap3dLayerRenderer.setwireframe();
    };
    HeatMap3dLayer.prototype.setaltitude = function (altitude) {
        if (!this.heatMap3dLayerRenderer) {
            return;
        }
        this.heatMap3dLayerRenderer.setaltitude(altitude);
    };
    HeatMap3dLayer.prototype.setscaleZ = function (scaleZ) {
        if (!this.heatMap3dLayerRenderer) {
            return;
        }
        this.heatMap3dLayerRenderer.setscaleZ(scaleZ);
    };
    HeatMap3dLayer.prototype.setopacity = function (opacity) {
        if (!this.heatMap3dLayerRenderer) {
            return;
        }
        this.heatMap3dLayerRenderer.setopacity(opacity);
    };
    HeatMap3dLayer.prototype.init = function (view) {
        return __awaiter$16(this, void 0, void 0, function () {
            return __generator$16(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return HeatMap3dLayer;
}(EventEmitter$1));

var Layers = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Layers() {
    }
    Layers.shqxboundary = 'qx_boundary';
    Layers.shjdboundary = 'jd_boundary';
    Layers.shjwhboundary = 'jwh_boundary';
    return Layers;
}());

var __extends$18 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$17 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$17 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LayerSkyRenderer = /** @class */ (function (_super) {
    __extends$18(LayerSkyRenderer, _super);
    function LayerSkyRenderer(view) {
        var _this = _super.call(this) || this;
        _this.cloudRendererRenderer = null;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    LayerSkyRenderer.prototype.add = function (layerSkyRendererOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/LayerSkyRenderer", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var layerSkyRenderer = _a[0], externalRenderers = _a[1];
            _this.cloudRendererRenderer = new layerSkyRenderer(_this.view, layerSkyRendererOptions.url, layerSkyRendererOptions.options);
            externalRenderers.add(_this.view, _this.cloudRendererRenderer);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    LayerSkyRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            if (!_this.cloudRendererRenderer) {
                return;
            }
            externalRenderers.remove(_this.view, _this.cloudRendererRenderer);
        });
    };
    LayerSkyRenderer.prototype.init = function (view) {
        return __awaiter$17(this, void 0, void 0, function () {
            return __generator$17(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return LayerSkyRenderer;
}(EventEmitter$1));

var __extends$19 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$18 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$18 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MaskBoundary = /** @class */ (function (_super) {
    __extends$19(MaskBoundary, _super);
    function MaskBoundary(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.init(view);
        return _this;
    }
    MaskBoundary.prototype.add = function (maskOptions) {
        var _this = this;
        load(['esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngineAsync',
            'esri/geometry/SpatialReference', 'esri/Color'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1], ArcPolygon = _a[2], geometryEngineAsync = _a[3], SpatialReference = _a[4], Color = _a[5];
            var boundaryLayer = null;
            if (maskOptions.boundaryType === "qx_boundary") {
                boundaryLayer = _this.view.map.findLayerById(maskOptions.boundaryType);
            }
            else if (maskOptions.boundaryType === "jd_boundary") {
                boundaryLayer = _this.view.map.findLayerById(maskOptions.boundaryType);
            }
            else if (maskOptions.boundaryType === "jwh_boundary") {
                boundaryLayer = _this.view.map.findLayerById(maskOptions.boundaryType);
            }
            var maskgraphiclayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (maskgraphiclayer == null) {
                maskgraphiclayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: maskOptions.boundaryType + '遮罩层',
                    listMode: 'hide'
                });
                _this.view.map.add(maskgraphiclayer);
            }
            maskgraphiclayer.removeAll();
            if (maskOptions.inputgeometry) {
                boundaryLayer = _this.view.map.findLayerById('qx_boundary');
                if (boundaryLayer === null) {
                    return;
                }
                var pgon = new ArcPolygon({
                    rings: maskOptions.inputgeometry,
                    spatialReference: _this.view.spatialReference
                });
                var fullgeometry_1 = boundaryLayer.fullExtent;
                fullgeometry_1.spatialReference = _this.view.spatialReference;
                var geomtry_1 = pgon;
                geomtry_1.spatialReference = _this.view.spatialReference;
                geometryEngineAsync.buffer(geomtry_1, maskOptions.boundarydistance, 'meters').
                    then(function (targetGeometry) {
                    geometryEngineAsync.difference(fullgeometry_1, targetGeometry).then(function (outermask) {
                        var masksymbol;
                        if (_this.view.type === '3d') {
                            if (maskOptions.symbol) {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'extrude',
                                            material: { color: maskOptions.maskColor },
                                            size: maskOptions.symbol.size,
                                            edges: {
                                                type: "solid",
                                                color: maskOptions.maskColor
                                            }
                                        }]
                                };
                            }
                            else {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'fill',
                                            material: { color: maskOptions.maskColor },
                                            outline: {
                                                color: 'white',
                                                size: '0px'
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            masksymbol = {
                                type: "simple-fill",
                                color: maskOptions.maskColor,
                                style: "solid",
                                outline: {
                                    color: maskOptions.maskColor,
                                    width: 1
                                }
                            };
                        }
                        var outermaskGraphic = new Graphic({
                            geometry: outermask,
                            symbol: masksymbol
                        });
                        maskgraphiclayer.add(outermaskGraphic);
                        var length = maskOptions.bounarycount === undefined ? 30 : maskOptions.bounarycount;
                        var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                        var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                        var _loop_1 = function (j) {
                            geometryEngineAsync.buffer(geomtry_1, j * length, 'meters').
                                then(function (resgeometryouter) {
                                geometryEngineAsync.buffer(geomtry_1, (j - 1) * length, 'meters').
                                    then(function (resgeometryinner) {
                                    geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                        then(function (clipgeometry) {
                                        setingcolor[3] = (1 / maskgcount) * j;
                                        var maskroundsymbol;
                                        if (_this.view.type === '3d') {
                                            if (maskOptions.symbol) {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'extrude',
                                                            material: { color: setingcolor },
                                                            size: maskOptions.symbol.size,
                                                            edges: {
                                                                type: "solid",
                                                                color: setingcolor
                                                            }
                                                        }]
                                                };
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'fill',
                                                            material: { color: setingcolor },
                                                            outline: {
                                                                color: 'white',
                                                                size: '0px'
                                                            }
                                                        }]
                                                };
                                            }
                                        }
                                        else {
                                            maskroundsymbol = {
                                                type: "simple-fill",
                                                color: setingcolor,
                                                style: "solid",
                                                outline: {
                                                    color: setingcolor,
                                                    width: 1
                                                }
                                            };
                                        }
                                        var maskroundGraphic = new Graphic({
                                            geometry: clipgeometry,
                                            symbol: maskroundsymbol
                                        });
                                        maskgraphiclayer.add(maskroundGraphic);
                                    });
                                });
                            });
                        };
                        for (var j = 1; j <= maskgcount; j++) {
                            _loop_1(j);
                        }
                    });
                });
            }
            else {
                // console.log(boundaryLayer);
                if (boundaryLayer === null) {
                    return;
                }
                var queryParams = boundaryLayer.createQuery();
                queryParams.where = maskOptions.boundaryDefinition;
                boundaryLayer.queryFeatures(queryParams).then(function (results) {
                    if (!results.features.length) {
                        return;
                    }
                    var fullgeometry = boundaryLayer.fullExtent;
                    fullgeometry.spatialReference = _this.view.spatialReference;
                    var geomtry = results.features[0].geometry;
                    geomtry.spatialReference = _this.view.spatialReference;
                    geometryEngineAsync.buffer(geomtry, maskOptions.boundarydistance, 'meters').
                        then(function (targetGeometry) {
                        geometryEngineAsync.difference(fullgeometry, targetGeometry).then(function (outermask) {
                            var masksymbol;
                            if (_this.view.type === '3d') {
                                if (maskOptions.symbol) {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'extrude',
                                                material: { color: maskOptions.maskColor },
                                                size: maskOptions.symbol.size,
                                                edges: {
                                                    type: "solid",
                                                    color: maskOptions.maskColor
                                                }
                                            }]
                                    };
                                }
                                else {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'fill',
                                                material: { color: maskOptions.maskColor },
                                                outline: {
                                                    color: 'white',
                                                    size: '0px'
                                                }
                                            }]
                                    };
                                }
                            }
                            else {
                                masksymbol = {
                                    type: "simple-fill",
                                    color: maskOptions.maskColor,
                                    style: "solid",
                                    outline: {
                                        color: maskOptions.maskColor,
                                        width: 1
                                    }
                                };
                            }
                            var outermaskGraphic = new Graphic({
                                geometry: outermask,
                                symbol: masksymbol
                            });
                            maskgraphiclayer.add(outermaskGraphic);
                            var length = maskOptions.bounarycount === undefined ? 30
                                : maskOptions.bounarycount;
                            var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                            //  let calgeometry = geomtry;
                            var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                            var _loop_2 = function (j) {
                                geometryEngineAsync.buffer(geomtry, j * length, 'meters').
                                    then(function (resgeometryouter) {
                                    geometryEngineAsync.buffer(geomtry, (j - 1) * length, 'meters').
                                        then(function (resgeometryinner) {
                                        geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                            then(function (clipgeometry) {
                                            setingcolor[3] = (1 / maskgcount) * j;
                                            var maskroundsymbol;
                                            if (_this.view.type === '3d') {
                                                if (maskOptions.symbol) {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'extrude',
                                                                material: { color: setingcolor },
                                                                size: maskOptions.symbol.size,
                                                                edges: {
                                                                    type: "solid",
                                                                    color: setingcolor
                                                                }
                                                            }]
                                                    };
                                                }
                                                else {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'fill',
                                                                material: { color: setingcolor },
                                                                outline: {
                                                                    color: 'white',
                                                                    size: '0px'
                                                                }
                                                            }]
                                                    };
                                                }
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: "simple-fill",
                                                    color: setingcolor,
                                                    style: "solid",
                                                    outline: {
                                                        color: setingcolor,
                                                        width: 1
                                                    }
                                                };
                                            }
                                            var maskroundGraphic = new Graphic({
                                                geometry: clipgeometry,
                                                symbol: maskroundsymbol
                                            });
                                            maskgraphiclayer.add(maskroundGraphic);
                                        });
                                    });
                                });
                            };
                            for (var j = 1; j <= maskgcount; j++) {
                                _loop_2(j);
                            }
                        });
                    });
                });
            }
        });
    };
    MaskBoundary.prototype.remove = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            this.view.map.remove(boundaryResultLayer);
        }
    };
    MaskBoundary.prototype.show = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            boundaryResultLayer.visible = true;
        }
    };
    MaskBoundary.prototype.hide = function () {
        var maskResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (maskResultLayer) {
            maskResultLayer.visible = false;
        }
    };
    MaskBoundary.prototype.init = function (view) {
        return __awaiter$18(this, void 0, void 0, function () {
            return __generator$18(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return MaskBoundary;
}(EventEmitter$1));

var __extends$20 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$19 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$19 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Measurement = /** @class */ (function (_super) {
    __extends$20(Measurement, _super);
    function Measurement(view) {
        var _this = _super.call(this) || this;
        _this.marksymbol = null;
        _this.polylinesymbol = null;
        _this.polygonsymbol = null;
        _this.textsymbol = null;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.drawtool = null;
        _this.drawlayerscollection = [];
        _this.init(view);
        return _this;
    }
    Measurement.prototype.circle = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], Point = _a[3], geometryEngine = _a[4];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (drawresultlayer == null) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawcircleLayerid = new Guid().uuid;
            var drawcircleresultlayer = _this.view.map.findLayerById(drawcircleLayerid);
            if (!drawcircleresultlayer) {
                drawcircleresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量圆实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawcircleresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("circle", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                if (event.vertices.length === 2) {
                    drawcircleresultlayer.removeAll();
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var radiusgraphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: [[event.vertices[0], event.vertices[1]]],
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var distance = geometryEngine.geodesicLength(radiusgraphic.geometry, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var area = geometryEngine.geodesicArea(geommetry, 'square-meters');
                    var circlegraphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    var radiusdistancelabelsymbol = _this.textsymbol;
                    var radiusdistancelabelstring = distance > 1000 ? "半径:" + (distance / 1000).toFixed(3) + "千米"
                        : "半径:" + parseFloat(distance).toFixed(3) + "米";
                    radiusdistancelabelsymbol.text = radiusdistancelabelstring;
                    var radiusdistancelabelgraphic = new Graphic({
                        geometry: point2,
                        symbol: radiusdistancelabelsymbol
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var arealabelstring = area > 100000 ? "面积:" + (area / 1000000).toFixed(3) + "平千方米"
                        : "面积:" + parseFloat(area).toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: point1,
                        symbol: arealabelsymbol
                    });
                    drawcircleresultlayer.add(circlegraphic);
                    drawcircleresultlayer.add(radiusgraphic);
                    drawcircleresultlayer.add(radiusdistancelabelgraphic);
                    drawcircleresultlayer.add(arealabelgraphic);
                }
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                if (event.vertices.length === 2) {
                    drawcircleresultlayer.removeAll();
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var radiusgraphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: [[event.vertices[0], event.vertices[1]]],
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var distance = geometryEngine.geodesicLength(radiusgraphic.geometry, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var area = geometryEngine.geodesicArea(geommetry, 'square-meters');
                    var circlegraphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    var radiusdistancelabelsymbol = _this.textsymbol;
                    var radiusdistancelabelstring = distance > 1000 ? "半径:" + (distance / 1000).toFixed(3) + "千米"
                        : "半径:" + parseFloat(distance).toFixed(3) + "米";
                    radiusdistancelabelsymbol.text = radiusdistancelabelstring;
                    var radiusdistancelabelgraphic = new Graphic({
                        geometry: point2,
                        symbol: radiusdistancelabelsymbol
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var arealabelstring = area > 100000 ? "面积:" + (area / 1000000).toFixed(3) + "平千方米"
                        : "面积:" + parseFloat(area).toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: point1,
                        symbol: arealabelsymbol
                    });
                    drawcircleresultlayer.add(circlegraphic);
                    drawcircleresultlayer.add(radiusgraphic);
                    drawcircleresultlayer.add(radiusdistancelabelgraphic);
                    drawcircleresultlayer.add(arealabelgraphic);
                }
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                if (event.vertices.length === 2) {
                    var point1 = new Point({
                        x: event.vertices[0][0],
                        y: event.vertices[0][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var point2 = new Point({
                        x: event.vertices[1][0],
                        y: event.vertices[1][1],
                        spatialReference: _this.view.spatialReference
                    });
                    var radiusgraphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: [[event.vertices[0], event.vertices[1]]],
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var distance = geometryEngine.geodesicLength(radiusgraphic.geometry, 'meters');
                    var geommetry = geometryEngine.buffer(point1, distance, 'meters');
                    var area = geometryEngine.geodesicArea(geommetry, 'square-meters');
                    var circlegraphic = new Graphic({
                        geometry: geommetry,
                        symbol: _this.polygonsymbol
                    });
                    var radiusdistancelabelsymbol = _this.textsymbol;
                    var radiusdistancelabelstring = distance > 1000 ? "半径:" + (distance / 1000).toFixed(3) + "千米"
                        : "半径:" + parseFloat(distance).toFixed(3) + "米";
                    radiusdistancelabelsymbol.text = radiusdistancelabelstring;
                    var radiusdistancelabelgraphic = new Graphic({
                        geometry: point2,
                        symbol: radiusdistancelabelsymbol
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var arealabelstring = area > 100000 ? "面积:" + (area / 1000000).toFixed(3) + "平千方米"
                        : "面积:" + parseFloat(area).toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: point1,
                        symbol: arealabelsymbol
                    });
                    _this.view.map.remove(drawcircleresultlayer);
                    drawresultlayer.add(circlegraphic);
                    drawresultlayer.add(radiusgraphic);
                    drawresultlayer.add(radiusdistancelabelgraphic);
                    drawresultlayer.add(arealabelgraphic);
                    var result = {
                        radiusdistance: distance,
                        circlearea: area
                    };
                    _this.emit('measurementcomplete', circlegraphic, result, 'circle');
                }
            });
        });
    };
    Measurement.prototype.rectangle = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Point', "esri/geometry/Polygon", 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], Point = _a[3], Polygon = _a[4], geometryEngine = _a[5];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawrectangleLayerid = new Guid().uuid;
            var drawrectangleresultlayer = _this.view.map.findLayerById(drawrectangleLayerid);
            if (drawrectangleresultlayer == null) {
                drawrectangleresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量矩形实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawrectangleresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("rectangle", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                if (event.vertices.length === 2) {
                    drawrectangleresultlayer.removeAll();
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    var rlengthGeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthbegin = new Point({
                        x: xmin,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthend = new Point({
                        x: xmax,
                        y: xmin,
                        spatialReference: _this.view.spatialReference
                    });
                    var length_1 = geometryEngine.distance(rlengthbegin, rlengthend, 'meters');
                    var rlengthlabelsymbol = _this.textsymbol;
                    var rlengthlabelstring = length_1 > 1000 ? "长度:" + (length_1 / 1000).toFixed(3) + "千米"
                        : "长度:" + length_1.toFixed(3) + "米";
                    rlengthlabelsymbol.text = rlengthlabelstring;
                    var rlengthlabelgraphic = new Graphic({
                        geometry: rlengthGeometry,
                        symbol: rlengthlabelsymbol
                    });
                    var rwidthGeometry = new Point({
                        x: xmax,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthbegin = new Point({
                        x: xmax,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthend = new Point({
                        x: xmax,
                        y: ymax,
                        spatialReference: _this.view.spatialReference
                    });
                    var width = geometryEngine.distance(rwidthbegin, rwidthend, 'meters');
                    var rwidthlabelsymbol = _this.textsymbol;
                    var rwidthlabelstring = width > 1000 ? "宽度:" + (width / 1000).toFixed(3) + "千米"
                        : "宽度:" + width.toFixed(3) + "米";
                    rwidthlabelsymbol.text = rwidthlabelstring;
                    var rlwidthlabelgraphic = new Graphic({
                        geometry: rwidthGeometry,
                        symbol: rwidthlabelsymbol
                    });
                    var centergeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var area = length_1 * width;
                    var arealabelstring = area > 100000 ? "面积:" + (area / 1000000).toFixed(3) + "平方千米"
                        : "面积:" + area.toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: centergeometry,
                        symbol: arealabelsymbol
                    });
                    drawrectangleresultlayer.add(rlengthlabelgraphic);
                    drawrectangleresultlayer.add(rlwidthlabelgraphic);
                    drawrectangleresultlayer.add(arealabelgraphic);
                    drawrectangleresultlayer.add(graphic);
                }
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                if (event.vertices.length === 2) {
                    drawrectangleresultlayer.removeAll();
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    var rlengthGeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthbegin = new Point({
                        x: xmin,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthend = new Point({
                        x: xmax,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var length_2 = geometryEngine.distance(rlengthbegin, rlengthend, 'meters');
                    var rlengthlabelsymbol = _this.textsymbol;
                    var rlengthlabelstring = length_2 > 1000 ? "长度:" + (length_2 / 1000).toFixed(3) + "千米"
                        : "长度:" + length_2.toFixed(3) + "米";
                    rlengthlabelsymbol.text = rlengthlabelstring;
                    var rlengthlabelgraphic = new Graphic({
                        geometry: rlengthGeometry,
                        symbol: rlengthlabelsymbol
                    });
                    var rwidthGeometry = new Point({
                        x: xmax,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthbegin = new Point({
                        x: xmax,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthend = new Point({
                        x: xmax,
                        y: ymax,
                        spatialReference: _this.view.spatialReference
                    });
                    var width = geometryEngine.distance(rwidthbegin, rwidthend, 'meters');
                    var rwidthlabelsymbol = _this.textsymbol;
                    var rwidthlabelstring = width > 1000 ? "宽度:" + (width / 1000).toFixed(3) + "千米"
                        : "宽度:" + width.toFixed(3) + "米";
                    rwidthlabelsymbol.text = rwidthlabelstring;
                    var rlwidthlabelgraphic = new Graphic({
                        geometry: rwidthGeometry,
                        symbol: rwidthlabelsymbol
                    });
                    var centergeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var area = length_2 * width;
                    var arealabelstring = area > 100000 ? "面积:" + (area / 1000000).toFixed(3) + "平方千米"
                        : "面积:" + area.toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: centergeometry,
                        symbol: arealabelsymbol
                    });
                    drawrectangleresultlayer.add(rlengthlabelgraphic);
                    drawrectangleresultlayer.add(rlwidthlabelgraphic);
                    drawrectangleresultlayer.add(arealabelgraphic);
                    drawrectangleresultlayer.add(graphic);
                }
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                if (event.vertices.length === 2) {
                    var xmin = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[1][0] : event.vertices[0][0];
                    var ymin = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[1][1] : event.vertices[0][1];
                    var xmax = event.vertices[0][0] > event.vertices[1][0] ?
                        event.vertices[0][0] : event.vertices[1][0];
                    var ymax = event.vertices[0][1] > event.vertices[1][1] ?
                        event.vertices[0][1] : event.vertices[1][1];
                    var ringsss = [[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]];
                    var pgon = new Polygon({
                        hasZ: true,
                        hasM: true,
                        rings: ringsss,
                        spatialReference: _this.view.spatialReference
                    });
                    var graphic = new Graphic({
                        geometry: pgon,
                        symbol: _this.polygonsymbol
                    });
                    var rlengthGeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthbegin = new Point({
                        x: xmin,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlengthend = new Point({
                        x: xmax,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rlength = geometryEngine.distance(rlengthbegin, rlengthend, 'meters');
                    var rlengthlabelsymbol = _this.textsymbol;
                    var rlengthlabelstring = rlength > 1000 ? "长度:" + (rlength / 1000).toFixed(3) + "千米"
                        : "长度:" + rlength.toFixed(3) + "米";
                    rlengthlabelsymbol.text = rlengthlabelstring;
                    var rlengthlabelgraphic = new Graphic({
                        geometry: rlengthGeometry,
                        symbol: rlengthlabelsymbol
                    });
                    var rwidthGeometry = new Point({
                        x: xmax,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthbegin = new Point({
                        x: xmax,
                        y: ymin,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidthend = new Point({
                        x: xmax,
                        y: ymax,
                        spatialReference: _this.view.spatialReference
                    });
                    var rwidth = geometryEngine.distance(rwidthbegin, rwidthend, 'meters');
                    var rwidthlabelsymbol = _this.textsymbol;
                    var rwidthlabelstring = rwidth > 1000 ? "宽度:" + (rwidth / 1000).toFixed(3) + "千米"
                        : "宽度:" + rwidth.toFixed(3) + "米";
                    rwidthlabelsymbol.text = rwidthlabelstring;
                    var rlwidthlabelgraphic = new Graphic({
                        geometry: rwidthGeometry,
                        symbol: rwidthlabelsymbol
                    });
                    var centergeometry = new Point({
                        x: xmin + (xmax - xmin) / 2,
                        y: ymin + (ymax - ymin) / 2,
                        spatialReference: _this.view.spatialReference
                    });
                    var arealabelsymbol = _this.textsymbol;
                    var rarea = rlength * rwidth;
                    var arealabelstring = rarea > 100000 ? "面积:" + (rarea / 1000000).toFixed(3) + "平方千米"
                        : "面积:" + rarea.toFixed(3) + "平方米";
                    arealabelsymbol.text = arealabelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: centergeometry,
                        symbol: arealabelsymbol
                    });
                    _this.view.map.remove(drawrectangleresultlayer);
                    drawresultlayer.add(rlengthlabelgraphic);
                    drawresultlayer.add(rlwidthlabelgraphic);
                    drawresultlayer.add(arealabelgraphic);
                    drawresultlayer.add(graphic);
                    _this.emit('measurementcomplete', graphic, {
                        length: rlength,
                        width: rwidth,
                        area: rwidth * rlength
                    }, 'rectangle');
                }
            });
        });
    };
    Measurement.prototype.Point = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPointLayerid = new Guid().uuid;
            var drawPointresultlayer = _this.view.map.findLayerById(drawPointLayerid);
            if (drawPointresultlayer == null) {
                drawPointresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量点移动实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPointresultlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("point", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) { console.log(event); });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                drawPointresultlayer.removeAll();
                var point = {
                    type: "point",
                    x: event.vertices[0][0],
                    y: event.vertices[0][1],
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: point,
                    symbol: _this.marksymbol
                });
                drawPointresultlayer.add(graphic);
                var labelsymbol = _this.textsymbol;
                labelsymbol.text = "(" + parseFloat(event.vertices[0][0]).toFixed(3)
                    + "," + parseFloat(event.vertices[0][1]).toFixed(3) + ")";
                var labelgraphic = new Graphic({
                    geometry: point,
                    symbol: labelsymbol
                });
                drawPointresultlayer.add(labelgraphic);
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                var point = {
                    type: "point",
                    x: event.vertices[0][0],
                    y: event.vertices[0][1],
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: point,
                    symbol: _this.marksymbol
                });
                var labelsymbol = _this.textsymbol;
                labelsymbol.text = "(" + parseFloat(event.vertices[0][0]).toFixed(3)
                    + "," + parseFloat(event.vertices[0][1]).toFixed(3) + ")";
                var labelgraphic = new Graphic({
                    geometry: point,
                    symbol: labelsymbol
                });
                _this.view.map.remove(drawPointresultlayer);
                drawresultlayer.add(labelgraphic);
                drawresultlayer.add(graphic);
                var coordinates = "(" + parseFloat(event.vertices[0][0]).toFixed(3)
                    + "," + parseFloat(event.vertices[0][0]).toFixed(3) + ")";
                _this.emit('measurementcomplete', graphic, coordinates, 'point');
            });
        });
    };
    Measurement.prototype.Multipoint = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/views/draw/PointDrawAction', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], PointDrawAction = _a[1], Graphic = _a[2], GraphicsLayer = _a[3], Polygon = _a[4], geometryEngine = _a[5];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawmultipointLayerid = new Guid().uuid;
            var drawmultipointresultlayer = _this.view.map.findLayerById(drawmultipointLayerid);
            if (drawmultipointresultlayer == null) {
                drawmultipointresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量多点临时显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawmultipointresultlayer);
            }
            var drawmultipointMoveLayerid = new Guid().uuid;
            var drawmultipointMovelayer = _this.view.map.findLayerById(drawmultipointMoveLayerid);
            if (drawmultipointMovelayer == null) {
                drawmultipointMovelayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量多点移动追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawmultipointMovelayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("multipoint", { mode: "click" });
            _this.view.focus();
            action.on("vertex-add", function (event) {
                drawmultipointresultlayer.removeAll();
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    var labelsymbol = _this.textsymbol;
                    labelsymbol.text = "(" + parseFloat(addpoint[0]).toFixed(3)
                        + "," + parseFloat(addpoint[1]).toFixed(3) + ")";
                    var labelgraphic = new Graphic({
                        geometry: point,
                        symbol: labelsymbol
                    });
                    drawmultipointresultlayer.add(labelgraphic);
                    drawmultipointresultlayer.add(graphic);
                });
            });
            action.on("vertex-remove", function (event) { console.log(event); });
            action.on("cursor-update", function (event) {
                drawmultipointMovelayer.removeAll();
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    var labelsymbol = _this.textsymbol;
                    labelsymbol.text = "(" + parseFloat(addpoint[0]).toFixed(3)
                        + "," + parseFloat(addpoint[1]).toFixed(3) + ")";
                    var labelgraphic = new Graphic({
                        geometry: point,
                        symbol: labelsymbol
                    });
                    drawmultipointMovelayer.add(labelgraphic);
                    drawmultipointMovelayer.add(graphic);
                });
            });
            action.on("redo", function (event) { console.log(event); });
            action.on("undo", function (event) { console.log(event); });
            action.on("draw-complete", function (event) {
                _this.view.map.remove(drawmultipointresultlayer);
                _this.view.map.remove(drawmultipointMovelayer);
                var graphicsmutipointlist = [];
                var pointarraylist = [];
                event.vertices.map(function (addpoint) {
                    var point = {
                        type: "point",
                        x: addpoint[0],
                        y: addpoint[1],
                        spatialReference: _this.view.spatialReference
                    };
                    var graphic = new Graphic({
                        geometry: point,
                        symbol: _this.marksymbol
                    });
                    var labelsymbol = _this.textsymbol;
                    labelsymbol.text = "(" + parseFloat(addpoint[0]).toFixed(3)
                        + "," + parseFloat(addpoint[1]).toFixed(3) + ")";
                    var labelgraphic = new Graphic({
                        geometry: point,
                        symbol: labelsymbol
                    });
                    drawresultlayer.add(graphic);
                    drawresultlayer.add(labelgraphic);
                    graphicsmutipointlist.push(graphic);
                    pointarraylist.push(addpoint);
                });
                _this.emit('measurementcomplete', graphicsmutipointlist, pointarraylist, 'multipoint');
            });
        });
    };
    Measurement.prototype.drawPolyline = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], geometryEngine = _a[3];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPolylineid = new Guid().uuid;
            var drawPolylinelayer = _this.view.map.findLayerById(drawPolylineid);
            if (drawPolylinelayer == null) {
                drawPolylinelayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量多边线实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPolylinelayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("polyline");
            _this.view.focus();
            action.on([
                "vertex-add",
                "vertex-remove",
                "cursor-update",
                "redo",
                "undo"
            ], function (event) {
                if (event.vertices.length > 1) {
                    var vertices = event.vertices;
                    drawPolylinelayer.removeAll();
                    var graphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: vertices,
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var getLastSegment_1 = function (polyline) {
                        var line = polyline.clone();
                        var lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
                        var existingLineFinalPoint = line.getPoint(0, line.paths[0].length - 1);
                        return {
                            type: "polyline",
                            spatialReference: _this.view.spatialReference,
                            hasZ: false,
                            paths: [[
                                    [existingLineFinalPoint.x, existingLineFinalPoint.y],
                                    [lastXYPoint.x, lastXYPoint.y]
                                ]]
                        };
                    };
                    var isSelfIntersecting = function (polylineIn) {
                        if (polylineIn.paths[0].length < 3) {
                            return false;
                        }
                        var line = polylineIn.clone();
                        var lastSegment = getLastSegment_1(polylineIn);
                        line.removePoint(0, line.paths[0].length - 1);
                        return geometryEngine.crosses(lastSegment, line);
                    };
                    if (isSelfIntersecting(graphic.geometry)) {
                        var pyline = new Graphic({
                            geometry: getLastSegment_1(graphic.geometry),
                            symbol: _this.polylinesymbol
                        });
                        if (pyline) {
                            drawPolylinelayer.addMany([graphic, pyline]);
                        }
                        if (pyline) {
                            event.preventDefault();
                        }
                    }
                    else {
                        drawPolylinelayer.add(graphic);
                    }
                    var labelsymbol = _this.textsymbol;
                    var lengthdistance = geometryEngine.geodesicLength(graphic.geometry, 'meters');
                    var labelstring = lengthdistance > 1000 ? "长度:" + (lengthdistance / 1000).toFixed(3) + "千米"
                        : "长度:" + lengthdistance.toFixed(3) + "米";
                    labelsymbol.text = labelstring;
                    var pline = graphic.geometry.clone();
                    var plastXYPoint = pline.removePoint(0, pline.paths[0].length - 1);
                    var labelgraphic = new Graphic({
                        geometry: plastXYPoint,
                        symbol: labelsymbol
                    });
                    drawPolylinelayer.add(labelgraphic);
                }
            });
            action.on("draw-complete", function (event) {
                if (event.vertices.length > 1) {
                    var vertices = event.vertices;
                    drawPolylinelayer.removeAll();
                    var graphic = new Graphic({
                        geometry: {
                            type: "polyline",
                            paths: vertices,
                            spatialReference: _this.view.spatialReference
                        },
                        symbol: _this.polylinesymbol
                    });
                    var getLastSegment_2 = function (polyline) {
                        var line = polyline.clone();
                        var lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
                        var existingLineFinalPoint = line.getPoint(0, line.paths[0].length - 1);
                        return {
                            type: "polyline",
                            spatialReference: _this.view.spatialReference,
                            hasZ: false,
                            paths: [[
                                    [existingLineFinalPoint.x, existingLineFinalPoint.y],
                                    [lastXYPoint.x, lastXYPoint.y]
                                ]]
                        };
                    };
                    var isSelfIntersecting = function (polylineIn) {
                        if (polylineIn.paths[0].length < 3) {
                            return false;
                        }
                        var line = polylineIn.clone();
                        var lastSegment = getLastSegment_2(polylineIn);
                        line.removePoint(0, line.paths[0].length - 1);
                        return geometryEngine.crosses(lastSegment, line);
                    };
                    var polyLine = null;
                    if (isSelfIntersecting(graphic.geometry)) {
                        var pyline = new Graphic({
                            geometry: getLastSegment_2(graphic.geometry),
                            symbol: _this.polylinesymbol
                        });
                        if (pyline) {
                            drawresultlayer.addMany([graphic, pyline]);
                            polyLine = new Graphic({
                                geometry: geometryEngine.union(graphic.geometry, pyline.geometry),
                                symbol: _this.polylinesymbol
                            });
                        }
                        if (pyline) {
                            event.preventDefault();
                        }
                    }
                    else {
                        polyLine = graphic;
                        drawresultlayer.add(graphic);
                    }
                    var labelsymbol = _this.textsymbol;
                    var lengthdistance = geometryEngine.geodesicLength(graphic.geometry, 'meters');
                    var labelstring = lengthdistance > 1000 ? "长度:" + (lengthdistance / 1000).toFixed(3) + "千米"
                        : "长度:" + lengthdistance.toFixed(3) + "米";
                    labelsymbol.text = labelstring;
                    var pline = graphic.geometry.clone();
                    var plastXYPoint = pline.removePoint(0, pline.paths[0].length - 1);
                    var labelgraphic = new Graphic({
                        geometry: plastXYPoint,
                        symbol: labelsymbol
                    });
                    drawresultlayer.add(labelgraphic);
                    _this.view.map.remove(drawPolylinelayer);
                    _this.emit('measurementcomplete', polyLine, {
                        distance: lengthdistance
                    }, 'polyline');
                }
            });
        });
    };
    Measurement.prototype.drawPolygon = function () {
        var _this = this;
        load(['esri/views/draw/Draw', 'esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/geometryEngine'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var draw = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], geometryEngine = _a[3];
            _this.drawtool = new draw({
                view: _this.view
            });
            _this.drawtool.reset();
            var drawresultlayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (!drawresultlayer) {
                drawresultlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量结果显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawresultlayer);
            }
            var drawPolygonid = new Guid().uuid;
            var drawPolygonlayer = _this.view.map.findLayerById(drawPolygonid);
            if (drawPolygonlayer == null) {
                drawPolygonlayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '测量多边形实时追踪显示层',
                    listMode: 'hide'
                });
                _this.view.map.add(drawPolygonlayer);
            }
            // this.drawlayerscollection.push(['drwacircle', drwacircleLayerid, drwacircleresultlayer]);
            var action = _this.drawtool.create("polygon");
            _this.view.focus();
            action.on([
                "vertex-add",
                "vertex-remove",
                "cursor-update",
                "redo",
                "undo"
            ], function (event) {
                var vertices = event.vertices;
                drawPolygonlayer.removeAll();
                var polygon = {
                    type: "polygon",
                    rings: vertices,
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: polygon,
                    symbol: _this.polygonsymbol
                });
                if (event.vertices.length > 3) {
                    var area = geometryEngine.geodesicArea(graphic.geometry, "square-meters");
                    var arealabelsymbol = _this.textsymbol;
                    var labelstring = Math.abs(area) > 100000 ? "面积:" + (Math.abs(area) / 1000000).toFixed(3) + "平方千米"
                        : "面积:" + Math.abs(area).toFixed(3) + "平方米";
                    arealabelsymbol.text = labelstring;
                    var arealabelgraphic = new Graphic({
                        geometry: graphic.geometry.extent.center,
                        symbol: arealabelsymbol
                    });
                    drawPolygonlayer.add(arealabelgraphic);
                }
                drawPolygonlayer.add(graphic);
            });
            action.on("draw-complete", function (event) {
                var vertices = event.vertices;
                drawPolygonlayer.removeAll();
                var polygon = {
                    type: "polygon",
                    rings: vertices,
                    spatialReference: _this.view.spatialReference
                };
                var graphic = new Graphic({
                    geometry: polygon,
                    symbol: _this.polygonsymbol
                });
                var polygonarea = geometryEngine.geodesicArea(graphic.geometry, "square-meters");
                var arealabelsymbol = _this.textsymbol;
                var labelstring = Math.abs(polygonarea) > 100000 ? "面积:" +
                    (Math.abs(polygonarea) / 1000000).toFixed(3) + "平方千米"
                    : "面积:" + Math.abs(polygonarea).toFixed(3) + "平方米";
                arealabelsymbol.text = labelstring;
                var arealabelgraphic = new Graphic({
                    geometry: graphic.geometry.extent.center,
                    symbol: arealabelsymbol
                });
                _this.view.map.remove(drawPolygonlayer);
                drawresultlayer.add(arealabelgraphic);
                drawresultlayer.add(graphic);
                _this.emit('measurementcomplete', graphic, { area: polygonarea }, 'polygon');
            });
        });
    };
    Measurement.prototype.reset = function () {
        if (this.drawtool) {
            this.drawtool.reset();
        }
    };
    Measurement.prototype.clean = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            this.view.map.remove(drawresultlayer);
        }
    };
    Measurement.prototype.show = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            drawresultlayer.visible = true;
        }
    };
    Measurement.prototype.hide = function () {
        var drawresultlayer = this.view.map.findLayerById(this.displayedLayerid);
        if (drawresultlayer) {
            drawresultlayer.visible = false;
        }
    };
    Measurement.prototype.init = function (view) {
        return __awaiter$19(this, void 0, void 0, function () {
            var _this = this;
            return __generator$19(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                if (this.view.type === '2d') {
                    this.polygonsymbol = {
                        type: "simple-fill",
                        color: [255, 255, 255, 0.6],
                        style: "solid",
                        outline: {
                            color: [255, 255, 0, 0.8],
                            width: 2
                        }
                    };
                    this.polylinesymbol = {
                        type: "simple-line",
                        color: [255, 255, 255, 0.6],
                        width: "4px",
                        style: "solid"
                    };
                    this.marksymbol = {
                        type: "simple-marker",
                        style: "circle",
                        color: [255, 255, 0, 0.6],
                        size: "24px",
                        outline: {
                            color: [255, 255, 0, 0.8],
                            width: 2
                        }
                    };
                    this.textsymbol = {
                        type: "text",
                        color: "white",
                        angle: 0,
                        text: "",
                        xoffset: 60,
                        yoffset: 10,
                        horizontalAlignment: 'right',
                        verticalAlignment: 'bottom',
                        font: {
                            size: 12,
                            family: "Josefin Slab",
                            weight: "bold"
                        }
                    };
                }
                else {
                    this.polygonsymbol = {
                        type: "polygon-3d",
                        symbolLayers: [{
                                type: "extrude",
                                castShadows: false,
                                size: 10,
                                material: { color: [255, 255, 255, 0.4] },
                                edges: {
                                    type: "solid",
                                    color: [50, 50, 50, 0.5]
                                }
                            }]
                    };
                    this.polylinesymbol = {
                        type: "line-3d",
                        symbolLayers: [{
                                type: "path",
                                anchor: "center",
                                Values: "center",
                                profile: "quad",
                                width: 2,
                                height: 10,
                                material: { color: [255, 255, 255, 0.4] },
                                cap: "square",
                                join: "miter",
                                castShadows: false,
                                profileRotation: "heading"
                            }]
                    };
                    this.marksymbol = {
                        type: "point-3d",
                        symbolLayers: [{
                                type: "object",
                                width: 20,
                                height: 20,
                                depth: 20,
                                resource: { primitive: "sphere" },
                                material: { color: [0, 0, 255, 0.8] }
                            }],
                        verticalOffset: {
                            screenLength: 60,
                            maxWorldLength: 1000,
                            minWorldLength: 20
                        },
                        callout: {
                            type: "line",
                            size: 1.5,
                            color: "white",
                            border: {
                                color: "black"
                            }
                        }
                    };
                    this.textsymbol = {
                        type: "text",
                        color: "white",
                        angle: 0,
                        text: "",
                        xoffset: 60,
                        yoffset: 10,
                        horizontalAlignment: 'right',
                        verticalAlignment: 'bottom',
                        font: {
                            size: 12,
                            family: "Josefin Slab",
                            weight: "bold"
                        }
                    };
                }
                this.view.on(MapEvent.click, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$19(_this, void 0, void 0, function () {
                        return __generator$19(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); });
                });
                this.view.on(MapEvent.pointermove, function (event) {
                    _this.view.hitTest(event).then(function (response) { return __awaiter$19(_this, void 0, void 0, function () {
                        return __generator$19(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return Measurement;
}(EventEmitter$1));

var __extends$21 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$20 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$20 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MeshLine = /** @class */ (function (_super) {
    __extends$21(MeshLine, _super);
    function MeshLine(view) {
        var _this = _super.call(this) || this;
        _this.meshLineRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    MeshLine.prototype.add = function (meshLineOptions) {
        var _this = this;
        if (meshLineOptions === void 0) { meshLineOptions = {}; }
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/B622344F-BB19-15F1-3920E863621B4D9B", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var MeshLines = _a[0], externalRenderers = _a[1];
            if (!meshLineOptions.paths) {
                return;
            }
            var meshLineRenderer = new MeshLines(_this.view, meshLineOptions.paths, meshLineOptions.width, meshLineOptions.color, meshLineOptions.opacity, meshLineOptions.dash, meshLineOptions.rest, meshLineOptions.linesegment, meshLineOptions.linesegmentfade);
            externalRenderers.add(_this.view, meshLineRenderer);
            _this.meshLineRendererArray.push([new Guid().uuid, meshLineRenderer]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    MeshLine.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.meshLineRendererArray.map(function (meshLineRendereritem) {
                externalRenderers.remove(_this.view, meshLineRendereritem[1]);
            });
            _this.meshLineRendererArray = [];
        });
    };
    MeshLine.prototype.init = function (view) {
        return __awaiter$20(this, void 0, void 0, function () {
            return __generator$20(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return MeshLine;
}(EventEmitter$1));

var __extends$22 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$21 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$21 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MigrationMap = /** @class */ (function (_super) {
    __extends$22(MigrationMap, _super);
    function MigrationMap(view) {
        var _this = _super.call(this) || this;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    MigrationMap.prototype.add = function (mgrationMapOptions) {
        var _this = this;
        if (mgrationMapOptions === void 0) { mgrationMapOptions = {}; }
        load(['esri/layers/599EFB79-18C9-DC0A-E2C9FC2F2316C660'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var echartsLayer = _a[0];
            //  this.loadAPIScript('echartsgl', Mapcofig.jsapi + '/extensions/echarts/echarts-gl.js').then(() => {
            //  this.loadAPIScript('echartsmin', Mapcofig.jsapi + '/extensions/echarts/echarts.min.js').then(() => {
            var eseries = [];
            mgrationMapOptions.datas.forEach(function (item, i) {
                eseries.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    coordinateSystem: 'arcgis',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: _this.convertData(item[1], mgrationMapOptions.geoCoordMap)
                }, {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: mgrationMapOptions.planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: _this.convertData(item[1], mgrationMapOptions.geoCoordMap)
                }, {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    legendHoverLink: true,
                    hoverAnimation: true,
                    symbol: mgrationMapOptions.symbol,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: mgrationMapOptions.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
            });
            var chart = new echartsLayer(_this.view, "", mgrationMapOptions.id);
            var option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: eseries
            };
            chart.setChartOption(option);
        });
        //     });
        //   });
    };
    MigrationMap.prototype.remove = function (echartid) {
        var parent = document.getElementsByClassName("esri-view-surface")[0];
        var box = document.getElementById(echartid);
        if (box != null) {
            parent.removeChild(box);
        }
    };
    MigrationMap.prototype.convertData = function (data, geoCoordMap) {
        var res = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            var dataItem = value;
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };
    MigrationMap.prototype.getAPIScript = function (name) {
        return document.querySelector('script[' + name + ']');
    };
    MigrationMap.prototype.loadAPIScript = function (name, url) {
        var _this = this;
        return new utils.Promise(function (resolve, reject) {
            var script = _this.getAPIScript(name);
            if (script) {
                var src = script.getAttribute('src');
                if (src !== url) {
                    reject(new Error("The echartgl is already loaded (" + src + ")."));
                }
                else {
                    _this.handleScriptLoad(script, resolve, reject);
                }
            }
            else {
                script = _this.createScript(name, url);
                _this.handleScriptLoad(script, function () {
                    script.setAttribute(name, 'loaded');
                    resolve(script);
                }, reject);
                document.head.appendChild(script);
            }
        });
    };
    MigrationMap.prototype.createScript = function (name, url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.setAttribute(name, 'loading');
        return script;
    };
    MigrationMap.prototype.handleScriptLoad = function (script, callback, errback) {
        var onScriptError;
        if (errback) {
            onScriptError = this.handleScriptError(script, errback);
        }
        var onScriptLoad = function () {
            callback(script);
            script.removeEventListener('load', onScriptLoad, false);
            if (onScriptError) {
                script.removeEventListener('error', onScriptError, false);
            }
        };
        script.addEventListener('load', onScriptLoad, false);
    };
    MigrationMap.prototype.handleScriptError = function (script, callback) {
        var onScriptError = function (e) {
            callback(e.error || new Error("There was an error attempting to load " + script.src));
            script.removeEventListener('error', onScriptError, false);
        };
        script.addEventListener('error', onScriptError, false);
        return onScriptError;
    };
    MigrationMap.prototype.init = function (view) {
        return __awaiter$21(this, void 0, void 0, function () {
            return __generator$21(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return MigrationMap;
}(EventEmitter$1));

var __extends$23 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$22 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$22 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var RipplewallRenderer = /** @class */ (function (_super) {
    __extends$23(RipplewallRenderer, _super);
    function RipplewallRenderer(view) {
        var _this = _super.call(this) || this;
        _this.ripplewallRenderer = null;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    RipplewallRenderer.prototype.add = function (ripplewallOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/A3918F4D-C4F3-2F18-68573969137963CE", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var ripplewallRenderer = _a[0], externalRenderers = _a[1];
            _this.ripplewallRenderer = new ripplewallRenderer(_this.view, ripplewallOptions.points, ripplewallOptions.options);
            externalRenderers.add(_this.view, _this.ripplewallRenderer);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    RipplewallRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            if (!_this.ripplewallRenderer) {
                return;
            }
            externalRenderers.remove(_this.view, _this.ripplewallRenderer);
        });
    };
    RipplewallRenderer.prototype.setMaterialColor = function (color) {
        if (!this.ripplewallRenderer) {
            return;
        }
        this.ripplewallRenderer.setMaterialColor(color);
    };
    RipplewallRenderer.prototype.setwireframe = function () {
        if (!this.ripplewallRenderer) {
            return;
        }
        this.ripplewallRenderer.setwireframe();
    };
    RipplewallRenderer.prototype.setaltitude = function (altitude) {
        if (!this.ripplewallRenderer) {
            return;
        }
        this.ripplewallRenderer.setaltitude(altitude);
    };
    RipplewallRenderer.prototype.setscaleZ = function (scaleZ) {
        if (!this.ripplewallRenderer) {
            return;
        }
        this.ripplewallRenderer.setscaleZ(scaleZ);
    };
    RipplewallRenderer.prototype.setopacity = function (opacity) {
        if (!this.ripplewallRenderer) {
            return;
        }
        this.ripplewallRenderer.setopacity(opacity);
    };
    RipplewallRenderer.prototype.init = function (view) {
        return __awaiter$22(this, void 0, void 0, function () {
            return __generator$22(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return RipplewallRenderer;
}(EventEmitter$1));

var __extends$24 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$23 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$23 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SpriteLineRenderer = /** @class */ (function (_super) {
    __extends$24(SpriteLineRenderer, _super);
    function SpriteLineRenderer(view) {
        var _this = _super.call(this) || this;
        _this.spriteLineRendererArray = [];
        _this.view = null;
        _this.init(view);
        return _this;
    }
    SpriteLineRenderer.prototype.add = function (spritesLineOptions) {
        var _this = this;
        load(["82B44794-5CE0-A64A-9047F07CAF08BD2C/08F60FEF-C6FF-A788-344D-1755CB0E3870/2FEB8C35-3834-8C8E-451683376C475670", "esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var SpriteLine = _a[0], externalRenderers = _a[1];
            for (var _i = 0, _b = spritesLineOptions.multiLineStrings; _i < _b.length; _i++) {
                var multiLineString = _b[_i];
                multiLineString._geometries.map(function (lineString) {
                    var spriteLineRenderer = new SpriteLine(_this.view, lineString, spritesLineOptions.options);
                    _this.spriteLineRendererArray.push([new Guid().uuid, spriteLineRenderer]);
                    externalRenderers.add(_this.view, spriteLineRenderer);
                });
            }
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    SpriteLineRenderer.prototype.remove = function () {
        var _this = this;
        load(["esri/views/3d/externalRenderers"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var externalRenderers = _a[0];
            _this.spriteLineRendererArray.map(function (spriteLineRendereritem) {
                externalRenderers.remove(_this.view, spriteLineRendereritem[1]);
            });
        });
    };
    SpriteLineRenderer.prototype.init = function (view) {
        return __awaiter$23(this, void 0, void 0, function () {
            return __generator$23(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return SpriteLineRenderer;
}(EventEmitter$1));

var __extends$25 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$24 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$24 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Trajectory = /** @class */ (function (_super) {
    __extends$25(Trajectory, _super);
    function Trajectory(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.routepalybackinternal = null;
        _this.track = null;
        _this.init(view);
        return _this;
    }
    Trajectory.prototype.play = function (playbackoption) {
        var _this = this;
        if (playbackoption === void 0) { playbackoption = {}; }
        load(['geolocate', "esri/widgets/Track", 'esri/geometry/support/webMercatorUtils'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var geolocate = _a[0], track = _a[1], webMercatorUtils = _a[2];
            if (playbackoption.coords === undefined) {
                return;
            }
            var trajectorycount = 0;
            _this.track = new track({
                view: _this.view,
                goToLocationEnabled: false
            });
            // this.map.ui.add(this.track , "bottom-left");
            var currentCoordIndex = 0;
            geolocate.use();
            if (typeof (_this.routepalybackinternal) !== 'undefined') {
                clearInterval(_this.routepalybackinternal);
            }
            _this.routepalybackinternal = setInterval(function () {
                var lngLatArr = webMercatorUtils.xyToLngLat(playbackoption.coords[currentCoordIndex].x, playbackoption.coords[currentCoordIndex].y);
                var lngLatObj = {
                    lng: lngLatArr[0],
                    lat: lngLatArr[1]
                };
                geolocate.change(lngLatObj);
                currentCoordIndex = (currentCoordIndex + 1) % playbackoption.coords.length;
                ++trajectorycount;
                if (trajectorycount === playbackoption.coords.length) {
                    clearInterval(_this.routepalybackinternal);
                }
            }, 2500);
            _this.view.when(function () {
                var prevLocation = _this.view.center;
                _this.track.on("track", function () {
                    if (playbackoption.mobilesymbol) {
                        _this.track.graphic.symbol = playbackoption.mobilesymbol;
                    }
                    var location = _this.track.graphic.geometry;
                    if (trajectorycount > 1) {
                        if (playbackoption.showtrail) {
                            _this.createAnimateRoute(location, prevLocation, playbackoption.trailsymbol);
                        }
                    }
                    _this.view.goTo({
                        center: location,
                        tilt: 70,
                        scale: 2500,
                        heading: 360 - _this.getHeading(location, prevLocation),
                        rotation: 360 - _this.getHeading(location, prevLocation) // only applies to MapView
                    })
                        .catch(function (error) {
                        if (error.name !== "AbortError") {
                            console.error(error);
                        }
                    });
                    prevLocation = location.clone();
                });
                _this.track.start();
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Trajectory.prototype.remove = function () {
        if (typeof (this.routepalybackinternal) !== undefined) {
            clearInterval(this.routepalybackinternal);
            this.track.destroy();
            var animateRouteLayer = this.view.map.findLayerById(this.displayedLayerid);
            if (animateRouteLayer) {
                this.view.map.remove(animateRouteLayer);
            }
        }
    };
    Trajectory.prototype.getHeading = function (point, oldPoint) {
        var angleInDegrees = (Math.atan2(point.y - oldPoint.y, point.x - oldPoint.x) * 180) /
            Math.PI;
        return -90 + angleInDegrees;
    };
    Trajectory.prototype.createAnimateRoute = function (point, oldPoint, trailsymbol) {
        var _this = this;
        load(['esri/Graphic', "esri/layers/GraphicsLayer"])
            // tslint:disable-next-line:no-shadowed-variable
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1];
            var animateLine = {
                type: 'polyline',
                paths: [
                    [oldPoint.longitude, oldPoint.latitude],
                    [point.longitude, point.latitude]
                ]
            };
            var polylineSymbol;
            if (trailsymbol !== undefined) {
                polylineSymbol = trailsymbol;
            }
            else {
                polylineSymbol = {
                    type: 'simple-line',
                    color: [156, 39, 176],
                    width: 10
                };
            }
            var animateGraphic = new Graphic({
                geometry: animateLine,
                symbol: polylineSymbol
            });
            var animateRouteLayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (typeof (animateRouteLayer) === 'undefined') {
                animateRouteLayer = new GraphicsLayer({
                    title: '路径轨迹播放',
                    id: _this.displayedLayerid,
                    listMode: 'hide'
                });
                _this.view.map.add(animateRouteLayer);
            }
            animateRouteLayer.add(animateGraphic);
        });
    };
    Trajectory.prototype.init = function (view) {
        return __awaiter$24(this, void 0, void 0, function () {
            return __generator$24(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return Trajectory;
}(EventEmitter$1));

var __extends$26 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter$25 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$25 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var TrajectoryPlus = /** @class */ (function (_super) {
    __extends$26(TrajectoryPlus, _super);
    function TrajectoryPlus(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.mapRoamplayinternal = null;
        _this.mobilelayerid = "";
        _this.init(view);
        return _this;
    }
    TrajectoryPlus.prototype.play = function (playbackoption) {
        var _this = this;
        if (playbackoption === void 0) { playbackoption = {}; }
        load(['esri/geometry/Point', 'esri/Graphic', "esri/layers/GraphicsLayer", 'esri/geometry/support/webMercatorUtils'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var point = _a[0], graphic = _a[1], graphicsLayer = _a[2], webMercatorUtils = _a[3];
            if (playbackoption.coords === undefined) {
                return;
            }
            var trajectorycount = 0;
            var currentCoordIndex = 0;
            var prevLocation = _this.view.center;
            if (typeof (_this.mapRoamplayinternal) !== 'undefined') {
                clearInterval(_this.mapRoamplayinternal);
            }
            var timespan = playbackoption.duration !== undefined ? playbackoption.duration : 2000;
            var speed = playbackoption.speedFactor !== undefined ? playbackoption.speedFactor : 1;
            _this.mapRoamplayinternal = setInterval(function () {
                var xyz = {
                    x: playbackoption.coords[currentCoordIndex].x,
                    y: playbackoption.coords[currentCoordIndex].y,
                    z: playbackoption.coords[currentCoordIndex].z !== undefined ?
                        playbackoption.coords[currentCoordIndex].z : 0
                };
                currentCoordIndex = (currentCoordIndex + 1) % playbackoption.coords.length;
                ++trajectorycount;
                var location = new point({
                    x: xyz.x,
                    y: xyz.y,
                    z: xyz.z,
                    spatialReference: _this.view.spatialReference
                });
                var mobileLayer = _this.view.map.findLayerById(_this.mobilelayerid);
                if (typeof (mobileLayer) === 'undefined') {
                    mobileLayer = new graphicsLayer({
                        title: '漫游路径' + _this.mobilelayerid,
                        id: _this.mobilelayerid,
                        listMode: 'hide'
                    });
                    _this.view.map.add(mobileLayer);
                }
                mobileLayer.removeAll();
                var animateGraphic = new graphic({
                    geometry: location,
                    symbol: playbackoption.mobilesymbol
                });
                mobileLayer.add(animateGraphic);
                if (trajectorycount > 1) {
                    if (playbackoption.showtrail) {
                        _this.createAnimateRoute(location, prevLocation, playbackoption.trailsymbol);
                    }
                }
                _this.view.goTo({
                    center: location,
                    tilt: 70,
                    scale: 2500,
                    heading: 360 - _this.getHeading(location, prevLocation),
                    rotation: 360 - _this.getHeading(location, prevLocation) // only applies to MapView
                }, {
                    speedFactor: speed,
                    duration: timespan - timespan * 0.2,
                    maxDuration: timespan - timespan * 0.2,
                    easing: "in-out-coast-quadratic"
                }).then()
                    .catch(function (error) {
                    if (error.name !== "AbortError") {
                        console.error(error);
                    }
                });
                prevLocation = location.clone();
                if (trajectorycount === playbackoption.coords.length) {
                    clearInterval(_this.mapRoamplayinternal);
                }
            }, timespan);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    TrajectoryPlus.prototype.remove = function () {
        if (typeof (this.mapRoamplayinternal) !== undefined) {
            clearInterval(this.mapRoamplayinternal);
            var animateRouteLayer = this.view.map.findLayerById(this.displayedLayerid);
            if (animateRouteLayer) {
                this.view.map.remove(animateRouteLayer);
            }
            var mobilelayer = this.view.map.findLayerById(this.mobilelayerid);
            if (mobilelayer) {
                this.view.map.remove(mobilelayer);
            }
        }
    };
    TrajectoryPlus.prototype.getHeading = function (point, oldPoint) {
        var angleInDegrees = (Math.atan2(point.y - oldPoint.y, point.x - oldPoint.x) * 180) /
            Math.PI;
        return -90 + angleInDegrees;
    };
    TrajectoryPlus.prototype.createAnimateRoute = function (point, oldPoint, trailsymbol) {
        var _this = this;
        load(['esri/Graphic', "esri/layers/GraphicsLayer"])
            // tslint:disable-next-line:no-shadowed-variable
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1];
            var animateLine = {
                type: 'polyline',
                paths: [
                    [oldPoint.x, oldPoint.y, oldPoint.z],
                    [point.x, point.y, point.z]
                ],
                spatialReference: _this.view.spatialReference
            };
            var polylineSymbol;
            if (trailsymbol !== undefined) {
                polylineSymbol = trailsymbol;
            }
            else {
                polylineSymbol = {
                    type: 'simple-line',
                    color: [156, 39, 176],
                    width: 10
                };
            }
            var animateGraphic = new Graphic({
                geometry: animateLine,
                symbol: polylineSymbol
            });
            var animateRouteLayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (typeof (animateRouteLayer) === 'undefined') {
                animateRouteLayer = new GraphicsLayer({
                    title: '漫游路径' + _this.displayedLayerid,
                    id: _this.displayedLayerid,
                    listMode: 'hide'
                });
                _this.view.map.add(animateRouteLayer);
            }
            animateRouteLayer.add(animateGraphic);
        });
    };
    TrajectoryPlus.prototype.init = function (view) {
        return __awaiter$25(this, void 0, void 0, function () {
            return __generator$25(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.mobilelayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return TrajectoryPlus;
}(EventEmitter$1));

var Plugins = {
    load: load,
    Aurora: Aurora,
    Layers: Layers,
    Boundary: Boundary,
    CloudRenderer: CloudRenderer,
    FireRenderer: FireRenderer,
    Draw: Draw,
    RipplewallRenderer: RipplewallRenderer,
    ElectricShieldRenderer: ElectricShieldRenderer,
    DynamicPolygon: DynamicPolygon,
    GraphicOverlays: GraphicOverlays,
    FeaureOverlays: FeaureOverlays,
    EchartFlashPointLayer: EchartFlashPointLayer,
    FlashPoint3DLayer: FlashPoint3DLayer,
    FlashGifLayer: FlashGifLayer,
    HeatMap: HeatMap,
    LayerSkyRenderer: LayerSkyRenderer,
    HeatMap3dLayer: HeatMap3dLayer,
    ContourMapLayer: ContourMapLayer,
    Measurement: Measurement,
    MeshLine: MeshLine,
    MaskBoundary: MaskBoundary,
    SpriteLineRenderer: SpriteLineRenderer,
    ArcLineRenderer: ArcLineRenderer,
    TrajectoryPlus: TrajectoryPlus,
    DynamicSquareFence: DynamicSquareFence,
    DynamicCylinderFence: DynamicCylinderFence,
    MigrationMap: MigrationMap,
    Trajectory: Trajectory
};

return Plugins;

})));
//# sourceMappingURL=Plugins.js.map
