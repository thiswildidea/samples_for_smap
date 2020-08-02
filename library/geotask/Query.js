var __extends = (this && this.__extends) || (function () {
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
import EventEmitter from './mod.js';
import { load } from './modules.js';
import Guid from './utils/Guid.js';
import utils from './utils/index.js';
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query(view) {
        var _this = _super.call(this) || this;
        _this.view = null;
        _this.displayedLayerid = "";
        _this.init(view);
        return _this;
    }
    Query.prototype.featureLayer = function (queryFeaturelayerOptions) {
        if (queryFeaturelayerOptions === void 0) { queryFeaturelayerOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = null;
                        return [4 /*yield*/, load(["esri/layers/GraphicsLayer", "esri/Graphic", "esri/layers/FeatureLayer"])
                                // tslint:disable-next-line:variable-name
                                .then(function (_a) {
                                var GraphicsLayer = _a[0], Graphic = _a[1], FeatureLayer = _a[2];
                                return __awaiter(_this, void 0, void 0, function () {
                                    var layer, boundaryqueryParams;
                                    var _this = this;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                if (!this.view) {
                                                    return [2 /*return*/];
                                                }
                                                if (queryFeaturelayerOptions.layerUniqueId) {
                                                    layer = this.view.map.findLayerById(queryFeaturelayerOptions.layerUniqueId);
                                                }
                                                else {
                                                    if (queryFeaturelayerOptions.queryurl) {
                                                        layer = new FeatureLayer({
                                                            url: queryFeaturelayerOptions.queryurl
                                                        });
                                                    }
                                                }
                                                if (!layer) {
                                                    return [2 /*return*/];
                                                }
                                                boundaryqueryParams = layer.createQuery();
                                                boundaryqueryParams.where = queryFeaturelayerOptions.queryDefinition;
                                                boundaryqueryParams.outFields = queryFeaturelayerOptions.outFields === undefined ? ["*"]
                                                    : queryFeaturelayerOptions.outFields;
                                                return [4 /*yield*/, layer.queryFeatures(boundaryqueryParams).then(function (response) {
                                                        if (response.features.length > 0) {
                                                            var boundaryLayer_1 = _this.view.map.findLayerById(_this.displayedLayerid);
                                                            if (typeof (boundaryLayer_1) === 'undefined') {
                                                                boundaryLayer_1 = new GraphicsLayer({
                                                                    title: _this.displayedLayerid + '查询结果',
                                                                    id: _this.displayedLayerid,
                                                                    listMode: 'hide'
                                                                });
                                                                _this.view.map.add(boundaryLayer_1);
                                                            }
                                                            if (queryFeaturelayerOptions.displayed) {
                                                                var simpleSymbol_1;
                                                                if (queryFeaturelayerOptions.symbol) {
                                                                    simpleSymbol_1 = queryFeaturelayerOptions.symbol;
                                                                }
                                                                else {
                                                                    if (queryFeaturelayerOptions.type === 'polygon') {
                                                                        simpleSymbol_1 = {
                                                                            type: "simple-fill",
                                                                            color: [255, 255, 255, 0],
                                                                            outline: {
                                                                                color: [255, 0, 0, 1],
                                                                                width: "5px"
                                                                            }
                                                                        };
                                                                    }
                                                                    else if (queryFeaturelayerOptions.type === 'polyline') {
                                                                        simpleSymbol_1 = {
                                                                            type: "simple-line",
                                                                            color: [255, 0, 0, 0],
                                                                            width: "2px",
                                                                            style: "short-dot"
                                                                        };
                                                                    }
                                                                    else if (queryFeaturelayerOptions.type === 'point') {
                                                                        simpleSymbol_1 = {
                                                                            type: "simple-marker",
                                                                            style: "square",
                                                                            color: [255, 0, 0, 0],
                                                                            size: "8px",
                                                                            outline: {
                                                                                color: [255, 0, 0, 0],
                                                                                width: 1
                                                                            }
                                                                        };
                                                                    }
                                                                }
                                                                response.features.map(function (feature) {
                                                                    feature.geometry.spatialReference = _this.view.spatialReference;
                                                                    var animateGraphic = new Graphic({
                                                                        geometry: feature.geometry,
                                                                        attributes: feature.attributes,
                                                                        symbol: simpleSymbol_1
                                                                    });
                                                                    boundaryLayer_1.add(animateGraphic);
                                                                });
                                                            }
                                                            result = response;
                                                        }
                                                    })];
                                            case 1:
                                                _b.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new utils.Promise(function (resolve, reject) {
                                resolve(result);
                            })];
                }
            });
        });
    };
    Query.prototype.mapImageLayer = function (queryFeaturelayerOptions) {
        if (queryFeaturelayerOptions === void 0) { queryFeaturelayerOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = null;
                        return [4 /*yield*/, load(["esri/layers/GraphicsLayer", "esri/Graphic", 'esri/tasks/QueryTask', 'esri/tasks/support/Query'])
                                // tslint:disable-next-line:variable-name
                                .then(function (_a) {
                                var GraphicsLayer = _a[0], Graphic = _a[1], QueryTask = _a[2], MQuery = _a[3];
                                return __awaiter(_this, void 0, void 0, function () {
                                    var querylayerurl, layer, queryTask, query;
                                    var _this = this;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                if (queryFeaturelayerOptions.layerUniqueId) {
                                                    layer = this.view.map.findLayerById(queryFeaturelayerOptions.layerUniqueId);
                                                    if (layer) {
                                                        querylayerurl = layer.url;
                                                    }
                                                }
                                                else {
                                                    querylayerurl = queryFeaturelayerOptions.queryurl;
                                                }
                                                if (!queryFeaturelayerOptions.layerId) {
                                                    return [2 /*return*/];
                                                }
                                                queryTask = new QueryTask({
                                                    url: querylayerurl + "/" + queryFeaturelayerOptions.layerId
                                                });
                                                query = new MQuery();
                                                query.returnGeometry = true;
                                                query.outFields = queryFeaturelayerOptions.outFields === undefined ? ["*"]
                                                    : queryFeaturelayerOptions.outFields;
                                                return [4 /*yield*/, queryTask.execute(query).then(function (response) {
                                                        if (response.features.length > 0) {
                                                            var boundaryLayer_2 = _this.view.map.findLayerById(_this.displayedLayerid);
                                                            if (typeof (boundaryLayer_2) === 'undefined') {
                                                                boundaryLayer_2 = new GraphicsLayer({
                                                                    title: _this.displayedLayerid + '查询结果',
                                                                    id: _this.displayedLayerid,
                                                                    listMode: 'hide'
                                                                });
                                                                _this.view.map.add(boundaryLayer_2);
                                                            }
                                                            if (queryFeaturelayerOptions.displayed) {
                                                                var simpleSymbol_2;
                                                                if (queryFeaturelayerOptions.symbol) {
                                                                    simpleSymbol_2 = queryFeaturelayerOptions.symbol;
                                                                }
                                                                else {
                                                                    if (queryFeaturelayerOptions.type === 'polygon') {
                                                                        simpleSymbol_2 = {
                                                                            type: "simple-fill",
                                                                            color: [255, 255, 255, 0],
                                                                            outline: {
                                                                                color: [255, 0, 0, 1],
                                                                                width: "5px"
                                                                            }
                                                                        };
                                                                    }
                                                                    else if (queryFeaturelayerOptions.type === 'polyline') {
                                                                        simpleSymbol_2 = {
                                                                            type: "simple-line",
                                                                            color: [255, 0, 0, 0],
                                                                            width: "2px",
                                                                            style: "short-dot"
                                                                        };
                                                                    }
                                                                    else if (queryFeaturelayerOptions.type === 'point') {
                                                                        simpleSymbol_2 = {
                                                                            type: "simple-marker",
                                                                            style: "square",
                                                                            color: [255, 0, 0, 0],
                                                                            size: "8px",
                                                                            outline: {
                                                                                color: [255, 0, 0, 0],
                                                                                width: 1
                                                                            }
                                                                        };
                                                                    }
                                                                }
                                                                response.features.map(function (feature) {
                                                                    feature.geometry.spatialReference = _this.view.spatialReference;
                                                                    var animateGraphic = new Graphic({
                                                                        geometry: feature.geometry,
                                                                        attributes: feature.attributes,
                                                                        symbol: simpleSymbol_2
                                                                    });
                                                                    boundaryLayer_2.add(animateGraphic);
                                                                });
                                                            }
                                                            result = response;
                                                        }
                                                    })];
                                            case 1:
                                                _b.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new utils.Promise(function (resolve, reject) {
                                resolve(result);
                            })];
                }
            });
        });
    };
    Query.prototype.remove = function () {
        var queryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (queryResultLayer) {
            this.view.map.remove(queryResultLayer);
        }
    };
    Query.prototype.show = function () {
        var queryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (queryResultLayer) {
            queryResultLayer.visible = true;
        }
    };
    Query.prototype.hide = function () {
        var queryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (queryResultLayer) {
            queryResultLayer.visible = false;
        }
    };
    Query.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return Query;
}(EventEmitter));
export default Query;
