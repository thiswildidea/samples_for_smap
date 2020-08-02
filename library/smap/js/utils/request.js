var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var RequestCache;
(function (RequestCache) {
    RequestCache["noCache"] = "no-cache";
    RequestCache["default"] = "default";
    RequestCache["reload"] = "reload";
    RequestCache["forceCache"] = "force-cache";
    RequestCache["onlyIfCached"] = "only-if-cached";
    RequestCache["cache"] = "cache";
})(RequestCache || (RequestCache = {}));
var RequestMode;
(function (RequestMode) {
    RequestMode["noCors"] = "no-cors";
    RequestMode["sameOrigin"] = "same-origin";
    RequestMode["cors"] = "cors";
})(RequestMode || (RequestMode = {}));
/* tslint:disable */
function mock_post(mock_res, url, token, data, mode, cache) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, mock_res];
        });
    });
}
;
/**
 *
 * @param {string} url
 * @param {string} token
 * @param {string} data
 * @param {RequestMode} mode
 * @param {RequestCache} cache
 * @returns {Promise<any>}
 */
var post = function postRequest(url, token, data, mode, cache) {
    if (!mode) {
        mode = RequestMode.sameOrigin;
    }
    if (!cache) {
        cache = RequestCache.default;
    }
    // config request
    var config = {
        body: JSON.stringify(data),
        cache: cache,
        // *default, cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            'X-Authorization': 'Bearer' + token,
        },
        method: 'POST',
        mode: mode,
        redirect: 'follow',
        referrer: 'no-referrer',
    };
    // fetch api
    return fetch(url, config)
        // decode as json
        .then(function (response) {
        if (response.status != 200 && response.status != 204) { // 更改密码时,返回204
            return response.json().then(function (json) { return Promise.reject(json); });
        }
        else if (response.statusText == 'No Content') {
            return;
        }
        else {
            return response.json();
        }
    });
};
var mock_get = function getRequest(mock_res, url, token, data, mode, cache) {
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, mock_res];
        });
    });
};
var get = function getRequest(url, token, data, mode, cache) {
    if (data === void 0) { data = {}; }
    if (!mode) {
        mode = RequestMode.sameOrigin;
    }
    if (!cache) {
        cache = RequestCache.default;
    }
    // config request
    var config = {
        cache: cache,
        // *default, cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            'X-Authorization': 'Bearer' + token,
        },
        method: 'GET',
        // mode: mode, // no-cors, *same-origin, cors
        redirect: 'follow',
        referrer: 'no-referrer',
    };
    var esc = encodeURIComponent;
    var query = Object.keys(data)
        .map(function (k) { return esc(k) + '=' + esc(data[k]); })
        .join('&');
    url += '?' + query;
    // fetch api
    return fetch(url, config)
        // decode as json
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        if (json.error) {
            if (json.error.statusCode == 401) {
                // User.logout();
            }
            return Promise.reject(new Error(json.error));
        }
        return Promise.resolve(json);
    });
};
var deleteReq = function deleteRequest(url, token, mode, cache) {
    if (!mode) {
        mode = RequestMode.sameOrigin;
    }
    if (!cache) {
        cache = RequestCache.default;
    }
    // config request
    var config = {
        cache: cache,
        // *default, cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            'X-Authorization': 'Bearer' + token,
        },
        method: 'DELETE',
        mode: mode,
        redirect: 'follow',
        referrer: 'no-referrer',
    };
    // fetch api
    return fetch(url, config)
        // decode as json
        .then(function (response) {
        if (response.status === 204) {
            return Promise.resolve({});
        }
        return response.json();
    });
};
var put = function putRequest(url, token, data, mode, cache) {
    if (!mode) {
        mode = RequestMode.sameOrigin;
    }
    if (!cache) {
        cache = RequestCache.default;
    }
    // config request
    var config = {
        // body: JSON.stringify(data), // must match 'Content-Type' header
        cache: cache,
        // *default, cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            'X-Authorization': 'Bearer' + token,
        },
        method: 'PUT',
        mode: mode,
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    };
    return fetch(url, config)
        // decode as json
        .then(function (response) {
        if (response.status != 200 && response.status != 204) {
            return response.json().then(function (json) { return Promise.reject(json); });
        }
        else if (response.statusText == 'No Content') {
            return;
        }
        else {
            return response.json();
        }
    });
};
var patch = function patchRequest(url, token, data, mode, cache) {
    if (!mode) {
        mode = RequestMode.sameOrigin;
    }
    if (!cache) {
        cache = RequestCache.default;
    }
    // config request
    var config = {
        body: JSON.stringify(data),
        cache: cache,
        // *default, cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            'X-Authorization': 'Bearer' + token,
        },
        method: 'PATCH',
        mode: mode,
        redirect: 'follow',
        referrer: 'no-referrer',
    };
    // fetch api
    return fetch(url, config)
        // decode as json
        .then(function (response) {
        if (response.status != 200)
            return Promise.reject(response.json());
        else
            return response.json();
    });
};
export { post, get, deleteReq, put, RequestCache, RequestMode, patch, mock_post, mock_get };
