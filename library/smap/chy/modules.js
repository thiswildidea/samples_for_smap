import { getAPIScript, isLoaded, loadAPIScript } from './script.js';
import utils from './utils/index.js';
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
export function load(modules, loadAPIScriptOptions) {
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
