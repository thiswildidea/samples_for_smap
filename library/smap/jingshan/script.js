import Mapcofig from './config/Mapcofig.js';
import { loadSMIMapCss } from './utils/css.js';
import utils from './utils/index.js';
import { getCdnUrl } from './utils/url.js';
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
export function setSMIMapOptions(options) {
    if (options === void 0) { options = {}; }
    defaultOptions = options;
}
export function getAPIScript() {
    return document.querySelector('script[data-shsmi]');
}
export function isLoaded() {
    var globalRequire = window['require'];
    return globalRequire && globalRequire.on;
}
export function loadAPIScript(options) {
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
                                name: 'smiapi'
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
