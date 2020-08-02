import Mapcofig from '../config/Mapcofig.js';
var DEFAULT_VERSION = Mapcofig.jsapiversion4X;
var NEXT = 'next';
export function parseVersion(version) {
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
export function parseVersionnew(version) {
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
export function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return Mapcofig.jsapi + ("/" + version + "/init.js");
}
export function getCdnCssUrl(version) {
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
