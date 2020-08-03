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
import { init2DBaseMaplayers, init3DBaseMaplayers, initiallayers } from './utils/initlayers.js';
export function init3Dmap(containerv, mapconfig, maplayers, mapwidgets, mapProxys, mapextent, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, Point, urlUtils, esriConfig, watchUtils, SceneView, IdentityManager, SpatialReference, baseLayersconfig, basemaplayers, bmap, mapv, sceneView, opertalayers, cameraheading;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/geometry/Point',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/core/watchUtils',
                        'esri/views/SceneView',
                        'esri/identity/IdentityManager',
                        'esri/geometry/SpatialReference'
                        // 'esri/Camera',
                        // 'esri/geometry/Extent'
                        // 'esri/layers/SceneLayer',
                        // 'esri/layers/SHCTiledMapServiceLayer',
                        // 'esri/widgets/LayerList',
                        // 'esri/widgets/Fullscreen',
                        // 'esri/widgets/MeasureMent3DTool',
                        // 'esri/widgets/MeasureMent2DTool',
                        // 'esri/widgets/DistanceMeasureMentButton3D',
                        // 'esri/widgets/AreaMeasureMentButton3D',
                        // 'esri/widgets/DistanceMeasureMentButton2D',
                        // 'esri/widgets/AreaMeasureMentButton2D',
                        // 'esri/widgets/BaseMapSwitchButton3D',
                        // 'esri/widgets/BaseMapSwitchButton2D',
                        // 'esri/widgets/AddressLocationSearch',
                        // 'esri/widgets/AboveBelowModeSwitch',
                        // 'esri/widgets/MapSceneViewSwitch3DDefault',
                        // 'esri/widgets/MapSceneViewSwitch2DDefault',
                        // 'esri/widgets/Expand',
                        // 'esri/widgets/Zoom',
                        // 'esri/widgets/Compass',
                        // 'esri/widgets/Home',
                        // 'esri/core/watchUtils',
                        // 'esri/views/SceneView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], Point = _a[2], urlUtils = _a[3], esriConfig = _a[4], watchUtils = _a[5], SceneView = _a[6], IdentityManager = _a[7], SpatialReference = _a[8];
                    if (parseFloat(mapconfig.useProxy)) {
                        mapProxys.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = mapconfig.geometryserviceUrl;
                    baseLayersconfig = maplayers.filter(function (layergroup) {
                        return layergroup.layerEName === 'basemap';
                    });
                    if (mapconfig.tokenType !== '2') {
                        IdentityManager.registerToken({
                            server: Mapcofig.tokenserviceurl,
                            token: maptoken
                        });
                        // IdentityManager.registerToken({
                        //   server: baseLayersconfig[0].children[0].url.
                        //     substring(0, baseLayersconfig[0].children[0].url.lastIndexOf('/rest/services')) + '/rest/services',
                        //   token: maptoken
                        // });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init3DBaseMaplayers(baseLayersconfig[0].children, maptoken)];
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
                            case "smap://styles/light":
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
                    sceneView = new SceneView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        },
                        viewingMode: 'local'
                    });
                    load(['esri/core/Collection'])
                        // tslint:disable-next-line:no-shadowed-variable
                        .then(function (_a) {
                        var collection = _a[0];
                        return __awaiter(_this, void 0, void 0, function () {
                            var viewMode;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        opertalayers = new collection();
                                        viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                                        return [4 /*yield*/, initiallayers(opertalayers, maplayers.slice(1), maptoken, viewMode)];
                                    case 1:
                                        _b.sent();
                                        mapv.addMany(opertalayers);
                                        ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
                                            var buildingmodel = mapv.findLayerById(layname);
                                            if (mapoptions.showBuildingBlock === false) {
                                                if (buildingmodel) {
                                                    buildingmodel.visible = false;
                                                }
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
                                        return [2 /*return*/];
                                }
                            });
                        });
                    })
                        .catch(function (err) {
                        console.error(err);
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
                            spatialReference: SpatialReference.WebMercator
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        sceneView.zoom = mapoptions.zoom;
                    }
                    if (!(mapoptions.pitch !== undefined)) return [3 /*break*/, 4];
                    cameraheading = 0;
                    return [4 /*yield*/, sceneView.goTo({
                            center: sceneView.center,
                            zoom: sceneView.zoom,
                            tilt: mapoptions.pitch,
                            heading: cameraheading
                        })];
                case 3:
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
                    _b.label = 4;
                case 4: return [2 /*return*/, { sceneView: sceneView, mapv: mapv }];
            }
        });
    });
}
export function init2Dmap(containerv, mapconfig, maplayers, mapwidgets, mapProxys, mapextent, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, urlUtils, esriConfig, IdentityManager, SpatialReference, Point, MapView, baseLayersconfig, basemaplayers, bmap, mapv, shanghaiSR, mapView, opertalayers;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/identity/IdentityManager',
                        'esri/geometry/SpatialReference',
                        'esri/geometry/Point',
                        'esri/views/MapView'
                        // 'esri/Camera',
                        // 'esri/geometry/Extent',
                        // 'esri/layers/SceneLayer',
                        // 'esri/layers/TileLayer',
                        // 'esri/widgets/LayerList',
                        // 'esri/widgets/Fullscreen',
                        // 'esri/widgets/MeasureMent3DTool',
                        // 'esri/widgets/MeasureMent2DTool',
                        // 'esri/widgets/DistanceMeasureMentButton3D',
                        // 'esri/widgets/AreaMeasureMentButton3D',
                        // 'esri/widgets/DistanceMeasureMentButton2D',
                        // 'esri/widgets/AreaMeasureMentButton2D',
                        // 'esri/widgets/BaseMapSwitchButton3D',
                        // 'esri/widgets/BaseMapSwitchButton2D',
                        // 'esri/widgets/AddressLocationSearch',
                        // 'esri/widgets/AboveBelowModeSwitch',
                        // 'esri/widgets/MapSceneViewSwitch3DDefault',
                        // 'esri/widgets/MapSceneViewSwitch2DDefault',
                        // 'esri/widgets/Expand',
                        // 'esri/widgets/Zoom',
                        // 'esri/widgets/Compass',
                        // 'esri/widgets/Home'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], urlUtils = _a[2], esriConfig = _a[3], IdentityManager = _a[4], SpatialReference = _a[5], Point = _a[6], MapView = _a[7];
                    if (parseFloat(mapconfig.useProxy)) {
                        mapProxys.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = mapconfig.geometryserviceUrl;
                    baseLayersconfig = maplayers.filter(function (layergroup) {
                        return layergroup.layerEName === 'basemap';
                    });
                    if (mapconfig.tokenType !== '2') {
                        IdentityManager.registerToken({
                            server: baseLayersconfig[0].children[1].url.substring(0, baseLayersconfig[0].children[1].url.lastIndexOf('/rest/services')) + '/rest/services',
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init2DBaseMaplayers(baseLayersconfig[0].children, maptoken)];
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
                            case "smap://styles/light":
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
                    shanghaiSR = new SpatialReference({
                        wkt: 'PROJCS["shanghaicity",GEOGCS["GCS_Beijing_1954",DATUM["D_Beijing_1954",SPHEROID["Krasovsky_1940",6378245.0,298.3]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",-3457147.81],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",121.2751921],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
                    });
                    mapView = new MapView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                    load(['esri/core/Collection'])
                        // tslint:disable-next-line:no-shadowed-variable
                        .then(function (_a) {
                        var collection = _a[0];
                        return __awaiter(_this, void 0, void 0, function () {
                            var viewMode;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        opertalayers = new collection();
                                        viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                                        return [4 /*yield*/, initiallayers(opertalayers, maplayers.slice(1), maptoken, viewMode)];
                                    case 1:
                                        _b.sent();
                                        mapv.addMany(opertalayers);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    })
                        .catch(function (err) {
                        console.error(err);
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
