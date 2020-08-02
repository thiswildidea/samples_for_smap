declare enum RequestCache {
    noCache = "no-cache",
    default = "default",
    reload = "reload",
    forceCache = "force-cache",
    onlyIfCached = "only-if-cached",
    cache = "cache"
}
declare enum RequestMode {
    noCors = "no-cors",
    sameOrigin = "same-origin",
    cors = "cors"
}
declare function mock_post(mock_res: any, url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache): Promise<any>;
/**
 *
 * @param {string} url
 * @param {string} token
 * @param {string} data
 * @param {RequestMode} mode
 * @param {RequestCache} cache
 * @returns {Promise<any>}
 */
declare let post: (url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
declare let mock_get: (mock_res: any, url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
declare let get: (url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
declare let deleteReq: (url: string, token?: string, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
declare let put: (url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
declare let patch: (url: string, token?: string, data?: any, mode?: RequestMode, cache?: RequestCache) => Promise<any>;
export { post, get, deleteReq, put, RequestCache, RequestMode, patch, mock_post, mock_get };
