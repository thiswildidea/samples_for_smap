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
import { load } from '../modules.js';
export function init3DBaseMaplayers(layers, maptoken) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, SHCTiledMapServiceLayer, SpatialReference, layerscollection;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/geometry/SpatialReference'
                        // 'esri/layers/TileLayer'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], SHCTiledMapServiceLayer = _a[1], SpatialReference = _a[2];
                    layerscollection = [];
                    layers.forEach(function (item) {
                        switch (item.mapType) {
                            case 'SHCTiledMapServiceLayer':
                                // eslint-disable-next-line no-case-declarations
                                var fExtent = new Extent({
                                    xmin: -65000,
                                    ymin: -76000,
                                    xmax: 75000.00000000003,
                                    ymax: 72000.00000000003,
                                    spatialReference: SpatialReference.WebMercator
                                });
                                if (parseFloat(item.isToken) === 1) {
                                    layerscollection.push(new SHCTiledMapServiceLayer({
                                        url: item.url,
                                        token: maptoken,
                                        fullExtent: fExtent,
                                        opacity: item.opacity,
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    }));
                                }
                                else {
                                    layerscollection.push(new SHCTiledMapServiceLayer({
                                        url: item.url,
                                        fullExtent: fExtent,
                                        opacity: item.opacity,
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    }));
                                }
                            // case 'TileLayer':
                            //     layerscollection.push(new TileLayer(item.url, {
                            //             id: item.layerEName,
                            //             visible: parseFloat(item.isVisible),
                            //             opacity: item.opacity,
                            //             // listMode: item.listMode,
                            //             title: item.layerCName
                            //     })) ;
                        }
                    });
                    return [2 /*return*/, layerscollection];
            }
        });
    });
}
export function init2DBaseMaplayers(layers, maptoken) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, SHCTiledMapServiceLayer, SpatialReference, TileLayer, layerscollection;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/geometry/SpatialReference',
                        'esri/layers/TileLayer'
                        // 'esri/layers/SceneLayer',
                        // 'esri/layers/MapImageLayer',
                        // 'esri/layers/GroupLayer',
                        // 'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], SHCTiledMapServiceLayer = _a[1], SpatialReference = _a[2], TileLayer = _a[3];
                    layerscollection = [];
                    layers.map(function (item) {
                        switch (item.mapType) {
                            case 'SHCTiledMapServiceLayer':
                            // eslint-disable-next-line no-case-declarations
                            // const fExtent = new Extent({
                            //     xmin: -65000,
                            //     ymin: -76000,
                            //     xmax: 75000.00000000003,
                            //     ymax: 72000.00000000003,
                            //     spatialReference: SpatialReference.WebMercator
                            // });
                            // if (parseFloat(item.isToken) === 1) {
                            //     layerscollection.push(new SHCTiledMapServiceLayer({
                            //         url: item.url,
                            //         token: maptoken,
                            //         fullExtent: fExtent,
                            //         opacity: item.opacity,
                            //         title: item.layerCName,
                            //         id: item.layerEName,
                            //         visible: parseFloat(item.isVisible)
                            //     }));
                            // } else {
                            //     layerscollection.push(new SHCTiledMapServiceLayer({
                            //         url: item.url,
                            //         fullExtent: fExtent,
                            //         opacity: item.opacity,
                            //         title: item.layerCName,
                            //         id: item.layerEName,
                            //         visible: parseFloat(item.isVisible)
                            //     }));
                            // }
                            case 'TileLayer':
                                layerscollection.push(new TileLayer(item.url, {
                                    id: item.layerEName,
                                    visible: parseFloat(item.isVisible),
                                    opacity: item.opacity,
                                    listMode: item.listMode,
                                    title: item.layerCName
                                }));
                        }
                    });
                    return [2 /*return*/, layerscollection];
            }
        });
    });
}
export function initiallayers(addlayer, layers, maptoken, viewMode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, SHCTiledMapServiceLayer, SceneLayer, TileLayer, GraphicsLayer, MapImageLayer, 
        // tslint:disable-next-line:variable-name
        GeoJSONLayer, GroupLayer, FeatureLayer, SpatialReference;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/layers/SceneLayer',
                        'esri/layers/TileLayer',
                        'esri/layers/GraphicsLayer',
                        'esri/layers/MapImageLayer',
                        'esri/layers/GeoJSONLayer',
                        'esri/layers/GroupLayer',
                        'esri/layers/FeatureLayer',
                        'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], SHCTiledMapServiceLayer = _a[1], SceneLayer = _a[2], TileLayer = _a[3], GraphicsLayer = _a[4], MapImageLayer = _a[5], GeoJSONLayer = _a[6], GroupLayer = _a[7], FeatureLayer = _a[8], SpatialReference = _a[9];
                    layers.map(function (item) {
                        if (item.mapType.trim() === 'GroupLayer') {
                            if (viewMode === "3D") {
                                var grouplayer = new GroupLayer({
                                    id: item.layerEName,
                                    title: item.layerCName,
                                    visible: parseFloat(item.isVisible),
                                    opacity: parseFloat(item.opacity)
                                });
                                addlayer.add(grouplayer);
                                if (item.hasChildren) {
                                    initiallayers(grouplayer, item.children, maptoken, viewMode);
                                }
                            }
                            else {
                                if (parseFloat(item.modeType) === 1) {
                                    var grouplayer = new GroupLayer({
                                        id: item.layerEName,
                                        title: item.layerCName,
                                        visible: parseFloat(item.isVisible),
                                        opacity: parseFloat(item.opacity)
                                    });
                                    addlayer.add(grouplayer);
                                    if (item.hasChildren) {
                                        initiallayers(grouplayer, item.children, maptoken, viewMode);
                                    }
                                }
                            }
                        }
                        else {
                            switch (item.mapType.trim()) {
                                case 'SHCTiledMapServiceLayer':
                                    if (viewMode === '3D') {
                                        // eslint-disable-next-line no-case-declarations
                                        var fExtent = new Extent({
                                            xmin: -65000,
                                            ymin: -76000,
                                            xmax: 75000.00000000003,
                                            ymax: 72000.00000000003,
                                            spatialReference: SpatialReference.WebMercator
                                        });
                                        if (!parseFloat(item.isToken) === true) {
                                            addlayer.add(SHCTiledMapServiceLayer({
                                                url: item.url,
                                                fullExtent: fExtent,
                                                opacity: parseFloat(item.opacity),
                                                title: item.layerCName,
                                                id: item.layerEName,
                                                visible: parseFloat(item.isVisible)
                                            }));
                                        }
                                        else {
                                            addlayer.add(SHCTiledMapServiceLayer({
                                                url: item.url,
                                                token: maptoken,
                                                fullExtent: fExtent,
                                                opacity: parseFloat(item.opacity),
                                                title: item.layerCName,
                                                id: item.layerEName,
                                                visible: parseFloat(item.isVisible)
                                            }));
                                        }
                                    }
                                    else {
                                        addlayer.add(TileLayer({
                                            url: item.url,
                                            id: item.layerEName,
                                            visible: parseFloat(item.isVisible),
                                            opacity: parseFloat(item.opacity),
                                            listMode: item.listMode,
                                            title: item.layerCName
                                        }));
                                    }
                                    break;
                                case 'MapImageLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    addlayer.add(new MapImageLayer({
                                        url: item.url,
                                        opacity: parseFloat(item.opacity),
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    }));
                                    break;
                                case 'SceneLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var scenelayer = new SceneLayer({
                                        url: item.url,
                                        opacity: parseFloat(item.opacity),
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    });
                                    if (item.renderer) {
                                        var srender = JSON.parse(item.renderer);
                                        scenelayer.renderer = srender;
                                    }
                                    if (item.popuptemplate) {
                                        var popuptemplate = JSON.parse(item.popuptemplate);
                                        scenelayer.popupTemplate = popuptemplate;
                                    }
                                    if (item.definitionExpress) {
                                        scenelayer.definitionExpression = item.definitionExpress;
                                    }
                                    if (item.elevationInfo) {
                                        var eInfo = JSON.parse(item.elevationInfo);
                                        scenelayer.elevationInfo = eInfo;
                                    }
                                    if (item.maxScale) {
                                        scenelayer.maxScale = item.maxScale;
                                    }
                                    if (item.minScale) {
                                        scenelayer.minScale = item.minScale;
                                    }
                                    addlayer.add(scenelayer);
                                    break;
                                case 'GraphicsLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var graphicsLayer = new GraphicsLayer({
                                        opacity: parseFloat(item.opacity),
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    });
                                    addlayer.add(graphicsLayer);
                                    break;
                                case 'GeoJSONLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var geogJSONLayer = new GeoJSONLayer({
                                        url: item.url,
                                        opacity: parseFloat(item.opacity),
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    });
                                    addlayer.add(geogJSONLayer);
                                    break;
                                case 'FeatureLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var featureLayer = new FeatureLayer({
                                        url: item.url,
                                        opacity: parseFloat(item.opacity),
                                        title: item.layerCName,
                                        id: item.layerEName,
                                        visible: parseFloat(item.isVisible)
                                    });
                                    if (item.renderer) {
                                        var srender = JSON.parse(item.renderer);
                                        featureLayer.renderer = srender;
                                    }
                                    if (item.popuptemplate) {
                                        var popuptemplate = JSON.parse(item.popuptemplate);
                                        featureLayer.popupTemplate = popuptemplate;
                                    }
                                    if (item.definitionExpress) {
                                        featureLayer.definitionExpression = item.definitionExpress;
                                    }
                                    if (item.elevationInfo) {
                                        featureLayer.elevationInfo = JSON.parse(item.elevationInfo);
                                    }
                                    if (item.maxScale) {
                                        featureLayer.maxScale = item.maxScale;
                                    }
                                    if (item.maxScale) {
                                        featureLayer.minScale = item.minScale;
                                    }
                                    addlayer.add(featureLayer);
                                    break;
                            }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
