import { getCdnCssUrl, parseVersion, parseVersionnew } from './url.js';
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
export function loadSMIMapCss(urlOrVersion, before) {
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
