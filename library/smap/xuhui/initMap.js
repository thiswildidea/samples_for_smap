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
import Mapcofig from './config/Mapcofig.js';
import { load } from './modules.js';
import { init2DBaseMaplayers, init3DBaseMaplayers, initbuildingsLayers, initsmapbussinesslayers } from './utils/initlayers.js';
export function init3Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, Point, urlUtils, esriConfig, 
        // tslint:disable-next-line:variable-name
        IdentityManager, watchUtils, SceneView, basemaplayers, bmap, mapv, buildingsLayers, viewMode, smapbussinesslayers, sceneView, cameraheading;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/geometry/Point',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/identity/IdentityManager',
                        'esri/core/watchUtils',
                        'esri/views/SceneView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], Point = _a[2], urlUtils = _a[3], esriConfig = _a[4], IdentityManager = _a[5], watchUtils = _a[6], SceneView = _a[7];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryServiceUrl;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init3DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_zw'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    return [4 /*yield*/, initbuildingsLayers(gisService.buildingsLayers, maptoken)];
                case 3:
                    buildingsLayers = _b.sent();
                    mapv.add(buildingsLayers);
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/normal":
                                mapv.basemap.id = 'basemap_zw';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                        }
                        mapv.basemap.baseLayers.items.forEach(function (layer) {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layer.id === mapv.basemap.id) {
                                layer.visible = true;
                            }
                            else {
                                layer.visible = false;
                            }
                        });
                        ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
                            var buildingmodel = mapv.findLayerById(layname);
                            if (mapoptions.showBuildingBlock === false) {
                                buildingmodel.visible = false;
                            }
                            else {
                                if (buildingmodel) {
                                    // tslint:disable-next-line:prefer-conditional-expression
                                    if (mapv.basemap.id === 'basemap_zw') {
                                        // tslint:disable-next-line:prefer-conditional-expression
                                        if (layname === 'model_white_zw') {
                                            buildingmodel.visible = true;
                                        }
                                        else {
                                            buildingmodel.visible = false;
                                        }
                                    }
                                    else if (mapv.basemap.id === 'basemap_as') {
                                        // tslint:disable-next-line:prefer-conditional-expression
                                        if (layname === 'model_white_as') {
                                            buildingmodel.visible = true;
                                        }
                                        else {
                                            buildingmodel.visible = false;
                                        }
                                    }
                                    else if (mapv.basemap.id === 'basemap_air') {
                                        // tslint:disable-next-line:prefer-conditional-expression
                                        if (layname === 'model_air_real') {
                                            buildingmodel.visible = true;
                                        }
                                        else {
                                            buildingmodel.visible = false;
                                        }
                                    }
                                }
                            }
                        });
                    }
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 4:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    sceneView = new SceneView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        },
                        viewingMode: 'local'
                    });
                    sceneView.ui.empty('top-left');
                    sceneView.ui.empty('top-right');
                    sceneView.ui.empty('bottom-left');
                    sceneView.ui.empty('bottom-right');
                    sceneView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    sceneView.when(function () {
                        sceneView.qualitySettings.memoryLimit = 4096;
                        IdentityManager.on('dialog-create', function () {
                            IdentityManager.dialog.open = true;
                        });
                    });
                    if (mapoptions.center !== undefined) {
                        sceneView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            z: mapoptions.center[2] !== undefined ? mapoptions.center[2] : 0,
                            spatialReference: {
                                wkid: 102100
                            }
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        sceneView.zoom = mapoptions.zoom;
                    }
                    if (!(mapoptions.pitch !== undefined)) return [3 /*break*/, 6];
                    cameraheading = 0;
                    return [4 /*yield*/, sceneView.goTo({
                            center: sceneView.center,
                            zoom: sceneView.zoom,
                            tilt: mapoptions.pitch,
                            heading: cameraheading
                        })];
                case 5:
                    _b.sent();
                    watchUtils.when(sceneView, "animation", function (animation) {
                        animation.when(function (anti) {
                            if (mapoptions.zooms !== undefined) {
                                sceneView.watch("zoom", function (value) {
                                    if (value >= mapoptions.zooms[1]) {
                                        sceneView.zoom = mapoptions.zooms[1];
                                    }
                                    if (value <= mapoptions.zooms[0]) {
                                        sceneView.zoom = mapoptions.zooms[0];
                                    }
                                });
                            }
                        }).catch(function (anti) {
                            console.log(anti);
                        });
                    });
                    _b.label = 6;
                case 6: return [2 /*return*/, { sceneView: sceneView, mapv: mapv }];
            }
        });
    });
}
export function init2Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, urlUtils, esriConfig, 
        // tslint:disable-next-line:variable-name
        IdentityManager, Point, MapView, basemaplayers, bmap, mapv, viewMode, smapbussinesslayers, mapView;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/identity/IdentityManager',
                        'esri/geometry/Point',
                        'esri/views/MapView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], urlUtils = _a[2], esriConfig = _a[3], IdentityManager = _a[4], Point = _a[5], MapView = _a[6];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryserviceUrl;
                    esriConfig.fontsUrl = Mapcofig.fonts.url;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init2DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_as'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/normal":
                                mapv.basemap.id = 'basemap_zw';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                        }
                        mapv.basemap.baseLayers.items.forEach(function (layer) {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layer.id === mapv.basemap.id) {
                                layer.visible = true;
                            }
                            else {
                                layer.visible = false;
                            }
                        });
                    }
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 3:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    mapView = new MapView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                    mapView.ui.empty('top-left');
                    mapView.ui.empty('top-right');
                    mapView.ui.empty('bottom-left');
                    mapView.ui.empty('bottom-right');
                    mapView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    if (mapoptions.center !== undefined) {
                        mapView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            spatialReference: {
                                wkid: 102100
                            }
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        mapView.zoom = mapoptions.zoom;
                    }
                    if (mapoptions.zooms !== undefined) {
                        mapView.constraints.minZoom = mapoptions.zooms[0];
                        mapView.constraints.maxZoom = mapoptions.zooms[1];
                    }
                    if (mapoptions.rotateEnable !== undefined) {
                        mapView.constraints.rotationEnabled = mapoptions.rotateEnable;
                    }
                    return [2 /*return*/, { mapView: mapView, mapv: mapv }];
            }
        });
    });
}
