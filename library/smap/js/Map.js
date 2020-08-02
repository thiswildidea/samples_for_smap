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
import Mapcofig from './config/Mapcofig.js';
import { init2Dmap, init3Dmap } from './initMap.js';
import EventEmitter from './mod.js';
import { load } from './modules.js';
import MapEvent from './utils/MapEvent.js';
import * as request from './utils/request.js';
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(container, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.viewMode = '2D' || '3D';
        _this.showBuildingBlock = false;
        _this.map = null;
        _this.mapControl = [];
        _this.mapoverlayers = [];
        _this.mapoverlayersflayer = [];
        _this.watchHandles = [];
        _this.viewMode = options.viewMode === undefined || options.viewMode === '2D' ? '2D' : '3D';
        _this.zooms = options.zooms === undefined ? [1, 12] : options.zooms;
        _this.showBuildingBlock = options.showBuildingBlock ? true : false;
        _this.init(container, _this.viewMode, options);
        return _this;
    }
    Map.prototype.getZoom = function () {
        if (this.map === null) {
            return;
        }
        return this.map.zoom;
    };
    Map.prototype.setZoom = function (zoomlevel) {
        if (this.map === null) {
            return;
        }
        this.map.zoom = zoomlevel;
    };
    Map.prototype.panTo = function (targetpoint) {
        var _this = this;
        if (this.map === null) {
            return;
        }
        // tslint:disable-next-line:variable-name
        load(['esri/geometry/Point'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var point = _a[0];
            var mappoint = new point({
                x: targetpoint[0],
                y: targetpoint[1],
                z: targetpoint[2] !== undefined ? targetpoint[2] : 0,
                spatialReference: _this.map.spatialReference
            });
            _this.map.center = mappoint;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Map.prototype.panBy = function (offsetx, offsety) {
        if (this.map === null) {
            return;
        }
        var mapcenter = this.map.center;
        var mapcenterscreen = this.map.toScreen(mapcenter);
        this.map.center = this.map.toMap({
            x: mapcenterscreen.x + offsetx,
            y: mapcenterscreen.y + offsety
        });
    };
    Map.prototype.getBounds = function () {
        if (this.map === null) {
            return;
        }
        var bounds = {};
        bounds.southwest = [this.map.extent.xmin.toFixed(6), this.map.extent.ymin.toFixed(6)];
        if (this.viewMode === '3D') {
            if (this.map.extent.zmin !== undefined) {
                bounds.southwest.push(this.map.extent.zmin.toFixed(6));
            }
        }
        bounds.northeast = [this.map.extent.xmax.toFixed(6), this.map.extent.ymax.toFixed(6)];
        if (this.viewMode === '3D') {
            if (this.map.extent.zmax !== undefined) {
                bounds.northeast.push(this.map.extent.zmax.toFixed(6));
            }
        }
        return bounds;
    };
    Map.prototype.setBounds = function (bds) {
        var _this = this;
        if (this.map === null) {
            return;
        }
        var dojoConfig = {
            async: true,
            packages: []
        };
        // tslint:disable-next-line:variable-name
        load(['esri/geometry/Extent', 'esri/geometry/SpatialReference'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var extent = _a[0], spatialReference = _a[1];
            var EXTENT = new extent({
                xmin: bds.xmin,
                ymin: bds.ymin,
                xmax: bds.xmax,
                zmax: bds.ymax,
                spatialReference: _this.map.spatialReference
            });
            if (_this.viewMode === '3D') {
                if (bds.zmin !== undefined && bds.zmax !== undefined) {
                    EXTENT.zmin = bds.zmin;
                    EXTENT.zmax = bds.zmax;
                }
            }
            _this.map.extent = EXTENT;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Map.prototype.setCenter = function (centerx, centery, centerz) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Point, SpatialReference, mapcenter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.map === null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, load([
                                'esri/geometry/Point',
                                'esri/geometry/SpatialReference'
                            ])];
                    case 1:
                        _a = _b.sent(), Point = _a[0], SpatialReference = _a[1];
                        mapcenter = null;
                        if (this.viewMode === '2D') {
                            mapcenter = new Point({
                                x: centerx,
                                y: centery,
                                spatialReference: this.map.spatialReference
                            });
                        }
                        else {
                            mapcenter = new Point({
                                x: centerx,
                                y: centery,
                                z: (centerz !== undefined ? centerz : 0),
                                spatialReference: this.map.spatialReference
                            });
                        }
                        this.map.center = mapcenter;
                        return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.setZoomAndCenter = function (zoomlevel, center) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Point, SpatialReference, mapcenter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.map === null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, load([
                                'esri/geometry/Point',
                                'esri/geometry/SpatialReference'
                            ])];
                    case 1:
                        _a = _b.sent(), Point = _a[0], SpatialReference = _a[1];
                        mapcenter = null;
                        if (this.viewMode === '2D') {
                            this.map.zoom = zoomlevel;
                            mapcenter = new Point({
                                x: center[0],
                                y: center[1],
                                spatialReference: this.map.spatialReference
                            });
                            this.map.center = mapcenter;
                        }
                        else {
                            mapcenter = new Point({
                                x: center[0],
                                y: center[1],
                                z: (center[2] !== undefined ? center[2] : 0),
                                spatialReference: this.map.spatialReference
                            });
                            this.map.goTo({
                                center: mapcenter,
                                zoom: zoomlevel,
                                tilt: this.map.camera.tilt,
                                heading: this.map.camera.heading
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.getCenter = function () {
        if (this.map === null) {
            return;
        }
        var pointxy = [];
        pointxy.push(this.map.center.x.toFixed(6));
        pointxy.push(this.map.center.y.toFixed(6));
        if (this.viewMode === '3D') {
            pointxy.push(this.map.center.z.toFixed(6));
        }
        return pointxy;
    };
    Map.prototype.getScale = function () {
        if (this.map === null) {
            return;
        }
        return this.map.scale;
    };
    Map.prototype.setRotation = function (rotation) {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '2D') {
            this.map.rotation = rotation;
        }
        else {
            var flyanimation = this.map.goTo({
                center: this.map.center,
                zoom: this.map.zoom,
                tilt: this.map.camera.tilt,
                heading: rotation
            });
        }
    };
    Map.prototype.setPitch = function (pitch) {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '3D') {
            this.map.goTo({
                center: this.map.center,
                zoom: this.map.zoom,
                tilt: pitch,
                heading: this.map.camera.heading
            });
        }
    };
    Map.prototype.getPitch = function () {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '3D') {
            return this.map.camera.tilt;
        }
    };
    Map.prototype.zoomIn = function () {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '3D') {
            if (this.map.zoom + 1 >= this.zooms[0] && this.map.zoom + 1 <= this.zooms[1]) {
                this.map.goTo({
                    center: this.map.center,
                    zoom: this.map.zoom + 1,
                    tilt: this.map.camera.tilt,
                    heading: this.map.camera.heading
                });
            }
        }
        else {
            this.map.goTo({
                center: this.map.center,
                zoom: this.map.zoom + 1
            });
        }
    };
    Map.prototype.zoomOut = function () {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '3D') {
            if (this.map.zoom - 1 >= this.zooms[0] && this.map.zoom - 1 <= this.zooms[1]) {
                this.map.goTo({
                    center: this.map.center,
                    zoom: this.map.zoom - 1,
                    tilt: this.map.camera.tilt,
                    heading: this.map.camera.heading
                });
            }
        }
        else {
            this.map.goTo({
                center: this.map.center,
                zoom: this.map.zoom - 1
            });
        }
    };
    Map.prototype.setMapStyle = function (style) {
        var _this = this;
        if (this.map === null) {
            return;
        }
        switch (style) {
            case "smap://styles/light":
                this.map.map.basemap.id = 'basemap_zw';
                break;
            case "smap://styles/dark":
                this.map.map.basemap.id = 'basemap_as';
                break;
            case "smap://styles/image":
                this.map.map.basemap.id = 'basemap_air';
                break;
            default:
                return;
        }
        this.map.map.basemap.baseLayers.items.forEach(function (layer) {
            // tslint:disable-next-line:prefer-conditional-expression
            if (layer.id === _this.map.map.basemap.id) {
                layer.visible = true;
            }
            else {
                layer.visible = false;
            }
        });
        if (this.viewMode === '2D') {
            return;
        }
        ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
            var buildingmodel = _this.map.map.findLayerById(layname);
            if (_this.showBuildingBlock === false) {
                buildingmodel.visible = false;
            }
            else {
                if (buildingmodel) {
                    // tslint:disable-next-line:prefer-conditional-expression
                    if (_this.map.map.basemap.id === 'basemap_zw') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_zw') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.map.map.basemap.id === 'basemap_as') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_as') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.map.map.basemap.id === 'basemap_air') {
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
    };
    Map.prototype.getMapStyle = function () {
        if (this.map === null) {
            return;
        }
        switch (this.map.map.basemap.id) {
            case "basemap_zw":
                return 'smap://styles/light';
                break;
            case "basemap_as":
                return 'smap://styles/dark';
                break;
            case "basemap_air":
                return 'smap://styles/image';
                break;
        }
    };
    Map.prototype.showBuilding = function (isbuidingBlockshow) {
        var _this = this;
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '2D') {
            return;
        }
        isbuidingBlockshow ? this.showBuildingBlock = true : this.showBuildingBlock = false;
        ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
            var buildingmodel = _this.map.map.findLayerById(layname);
            if (_this.showBuildingBlock === false) {
                buildingmodel.visible = false;
            }
            else {
                if (buildingmodel) {
                    // tslint:disable-next-line:prefer-conditional-expression
                    if (_this.map.map.basemap.id === 'basemap_zw') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_zw') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.map.map.basemap.id === 'basemap_as') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_as') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.map.map.basemap.id === 'basemap_air') {
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
    };
    Map.prototype.addControl = function (control) {
        var _this = this;
        if (control.controlName.toLowerCase() === 'toc') {
            load(['esri/widgets/LayerList', 'esri/widgets/Expand'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var LayerList = _a[0], Expand = _a[1];
                // eslint-disable-next-line no-case-declarations
                var layerlistWidget = new LayerList({
                    container: document.createElement('div'),
                    id: 'maplayerlist',
                    view: _this.map
                });
                if (control.collapse) {
                    var layerListExpand = new Expand({
                        id: 'layerlistonly',
                        view: _this.map,
                        content: layerlistWidget.domNode,
                        expandIconClass: 'esri-icon-layers',
                        expandTooltip: '专题图层框',
                        group: 'top-left'
                    });
                    _this.mapControl.push([control.controlName, layerListExpand]);
                    if (control.visible) {
                        _this.map.ui.add(layerListExpand, control.position);
                    }
                }
                else {
                    _this.mapControl.push([control.controlName, layerlistWidget]);
                    _this.map.ui.add(layerlistWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'zoom') {
            load(['esri/widgets/Zoom'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Zoom = _a[0];
                // eslint-disable-next-line no-case-declarations
                var zoomWidget = new Zoom({
                    view: _this.map
                });
                _this.mapControl.push([control.controlName, zoomWidget]);
                if (control.visible) {
                    _this.map.ui.add(zoomWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'compass') {
            load(['esri/widgets/Compass'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Compass = _a[0];
                // eslint-disable-next-line no-case-declarations
                var comcpassWidget = new Compass({
                    view: _this.map
                });
                _this.mapControl.push([control.controlName, comcpassWidget]);
                if (control.visible) {
                    _this.map.ui.add(comcpassWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'home') {
            load(['esri/widgets/Home'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Home = _a[0];
                // eslint-disable-next-line no-case-declarations
                var homeWidget = new Home({
                    view: _this.map
                });
                _this.mapControl.push([control.controlName, homeWidget]);
                if (control.visible) {
                    _this.map.ui.add(homeWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'fullscreen') {
            load(['esri/widgets/Fullscreen'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Fullscreen = _a[0];
                // eslint-disable-next-line no-case-declarations
                var fullscreenWidget = new Fullscreen({
                    view: _this.map
                });
                _this.mapControl.push([control.controlName, fullscreenWidget]);
                if (control.visible) {
                    _this.map.ui.add(fullscreenWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'undergroundswitch') {
            if (this.viewMode === '2D') {
                return;
            }
            else {
                load(['esri/widgets/AboveBelowModeSwitch'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AboveBelowModeSwitch = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var aboveBelowModeSwitchWidget = new AboveBelowModeSwitch({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, aboveBelowModeSwitchWidget]);
                    if (control.visible) {
                        _this.map.ui.add(aboveBelowModeSwitchWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'measurearea') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/AreaMeasureMentButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AreaMeasureMentButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var areaMeasureMentButton2dWidget = new AreaMeasureMentButton2D({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, areaMeasureMentButton2dWidget]);
                    if (control.visible) {
                        _this.map.ui.add(areaMeasureMentButton2dWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/AreaMeasureMentButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AreaMeasureMentButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var areaMeasureMentButtonWidget = new AreaMeasureMentButton3D({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, areaMeasureMentButtonWidget]);
                    if (control.visible) {
                        _this.map.ui.add(areaMeasureMentButtonWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'measureline') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/DistanceMeasureMentButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var DistanceMeasureMentButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var distanceMeasureMentButton2dWidget = new DistanceMeasureMentButton2D({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, distanceMeasureMentButton2dWidget]);
                    if (control.visible) {
                        _this.map.ui.add(distanceMeasureMentButton2dWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/DistanceMeasureMentButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var DistanceMeasureMentButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var distanceMeasureMentButtonWidget = new DistanceMeasureMentButton3D({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, distanceMeasureMentButtonWidget]);
                    if (control.visible) {
                        _this.map.ui.add(distanceMeasureMentButtonWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'basemaptoggle') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/BaseMapSwitchButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BaseMapSwitchButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var baseMapSwitchButton2DWidget = new BaseMapSwitchButton2D({
                        view: _this.map
                    });
                    _this.mapControl.push([control.controlName, baseMapSwitchButton2DWidget]);
                    if (control.visible) {
                        _this.map.ui.add(baseMapSwitchButton2DWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/BaseMapSwitchButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BaseMapSwitchButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var baseMapSwitchButton3DWidget = new BaseMapSwitchButton3D({
                        view: _this.map,
                        showBuildingBlock: _this.showBuildingBlock
                    });
                    _this.mapControl.push([control.controlName, baseMapSwitchButton3DWidget]);
                    if (control.visible) {
                        _this.map.ui.add(baseMapSwitchButton3DWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'basemapgallery') {
            load(['esri/widgets/BMapGallery_Control'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var BMapGallery_Control = _a[0];
                // eslint-disable-next-line no-case-declarations
                var bMapGallerywidget = new BMapGallery_Control({
                    view: _this.map,
                    showBuildingBlock: _this.showBuildingBlock
                });
                _this.mapControl.push([control.controlName, bMapGallerywidget]);
                if (control.visible) {
                    _this.map.ui.add(bMapGallerywidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'basemapgalleryexpand') {
            load(['esri/widgets/BMapGallery_Expand'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var BMapGallery_Expand = _a[0];
                // eslint-disable-next-line no-case-declarations
                var bMapGalleryexpandwidget = new BMapGallery_Expand({
                    view: _this.map,
                    showBuildingBlock: _this.showBuildingBlock
                });
                _this.mapControl.push([control.controlName, bMapGalleryexpandwidget]);
                if (control.visible) {
                    _this.map.ui.add(bMapGalleryexpandwidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'bimfilter') {
            if (this.viewMode === '2D') {
                return;
            }
            else {
                load(['esri/widgets/BuildingSencelayerFilter'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BuildingSencelayerFilter = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var buildingSencelayerFilterwidget = new BuildingSencelayerFilter({
                        view: _this.map,
                        layerid: control.layerid
                    });
                    _this.mapControl.push([control.controlName, buildingSencelayerFilterwidget]);
                    if (control.visible) {
                        _this.map.ui.add(buildingSencelayerFilterwidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
    };
    Map.prototype.removeControl = function (control) {
        var _this = this;
        this.mapControl.forEach(function (controlelement, idx, array) {
            if (controlelement[0] === control.controlName) {
                _this.map.ui.remove(controlelement[1]);
                _this.mapControl.slice(idx, 1);
            }
        });
    };
    Map.prototype.enableThroughGround = function (isunderground) {
        if (this.map === null) {
            return;
        }
        if (this.viewMode === '2D') {
            return;
        }
        if (isunderground) {
            this.map.map.ground.surfaceColor = '#fff';
            this.map.map.ground.opacity = 0;
            this.map.map.ground.navigationConstraint = {
                type: "none"
            };
        }
        else {
            this.map.map.ground.surfaceColor = null;
            this.map.map.ground.opacity = 1;
            this.map.map.ground.navigationConstraint = {
                type: "stay-above"
            };
        }
    };
    Map.prototype.setExtentConstrain = function (leftbottom, righttop) {
        var _this = this;
        load(['esri/geometry/Extent', 'esri/geometry/geometryEngine', 'esri/core/watchUtils'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Extent = _a[0], geometryEngine = _a[1], watchUtils = _a[2];
            var cextent = new Extent({
                xmin: leftbottom[0],
                ymin: leftbottom[1],
                xmax: righttop[0],
                ymax: righttop[1],
                spatialReference: _this.map.spatialReference
            });
            _this.map.extent = cextent;
            var extentconstraintshander = watchUtils.whenTrue(_this.map, "stationary", function () {
                var iscontainer = geometryEngine.contains(cextent, _this.map.extent);
                if (!iscontainer) {
                    _this.map.extent = cextent;
                }
            });
            _this.watchHandles.push(['extentcontrain', extentconstraintshander]);
        });
    };
    Map.prototype.removeExtentConstrain = function () {
        var watchextentHandles = this.watchHandles.filter(function (item) {
            return item[0] === 'extentcontrain';
        });
        watchextentHandles.forEach(function (handle) {
            handle[1].remove();
        });
        this.watchHandles = this.watchHandles.filter(function (item) {
            return item[0] !== 'extentcontrain';
        });
    };
    Map.prototype.add = function (overlayers) {
        var _this = this;
        load(['esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], Point = _a[1], PictureMarkerSymbol = _a[2], ArcGISPolyline = _a[3], ArcGISPolygon = _a[4];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (_this.viewMode === '2D') {
                            psymbol = {
                                type: "picture-marker",
                                url: overelement.icon.image,
                                width: overelement.icon.size.width,
                                height: overelement.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overelement.icon.size.width,
                                        resource: {
                                            href: overelement.icon.image
                                        }
                                    }]
                            };
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                        _this.map.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.viewMode === '3D' ? overelement.position[0]
                                        + overelement.label.xoffset : overelement.position[0],
                                    y: _this.viewMode === '3D' ? overelement.position[1]
                                        + overelement.label.yoffset : overelement.position[1],
                                    z: _this.viewMode === '3D' ? overelement.position[2]
                                        + overelement.label.zoffset : overelement.position[2],
                                    spatialReference: _this.map.spatialReference
                                }),
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: markerattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = {
                            type: "simple-line",
                            color: overelement.strokeColor,
                            style: overelement.style,
                            width: overelement.width,
                            cap: overelement.cap,
                            join: overelement.lineJoin
                        };
                        var path_1 = [];
                        overelement.path.forEach(function (item) {
                            path_1.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_1,
                            spatialReference: _this.map.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                        _this.map.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polylineattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (overelement.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overelement.fillColor,
                                style: overelement.style,
                                outline: {
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight,
                                    style: overelement.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overelement.url,
                                width: overelement.picwidth,
                                height: overelement.picheight,
                                outline: {
                                    style: overelement.strokestyle,
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight
                                }
                            };
                        }
                        var rs_1 = [];
                        overelement.paths.forEach(function (item) {
                            rs_1.push([item.X, item.Y, item.Z]);
                        });
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_1,
                            spatialReference: _this.map.spatialReference
                        });
                        var polygoneattributes = overelement.attributes;
                        polygoneattributes['uuid'] = overelement.uuid;
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygoneattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polygonGraphic]);
                        _this.map.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polygoneattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                overlayers.overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (_this.viewMode === '2D') {
                            psymbol = {
                                type: "picture-marker",
                                url: overelement.icon.image,
                                width: overelement.icon.size.width,
                                height: overelement.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overelement.icon.size.width,
                                        resource: {
                                            href: overelement.icon.image
                                        }
                                    }]
                            };
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, graphic]);
                        _this.map.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.viewMode === '3D' ? overelement.position[0]
                                        + overelement.label.xoffset :
                                        overelement.position[0],
                                    y: _this.viewMode === '3D' ? overelement.position[1]
                                        + overelement.label.yoffset :
                                        overelement.position[1],
                                    z: _this.viewMode === '3D' ? overelement.position[2]
                                        + overelement.label.zoffset :
                                        overelement.position[2],
                                    spatialReference: _this.map.spatialReference
                                }),
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: markerattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = {
                            type: "simple-line",
                            color: overelement.strokeColor,
                            style: overelement.style,
                            width: overelement.width,
                            cap: overelement.cap,
                            join: overelement.lineJoin
                        };
                        var path_2 = [];
                        overelement.path.forEach(function (item) {
                            path_2.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_2,
                            spatialReference: _this.map.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polylineGraphic]);
                        _this.map.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polylineattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (overelement.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overelement.fillColor,
                                style: overelement.style,
                                outline: {
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight,
                                    style: overelement.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overelement.url,
                                width: overelement.picwidth,
                                height: overelement.picheight,
                                outline: {
                                    style: overelement.strokestyle,
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight
                                }
                            };
                        }
                        var rs_2 = [];
                        overelement.paths.forEach(function (item) {
                            rs_2.push([item.X, item.Y, item.Z]);
                        });
                        var polygoneattributes = overelement.attributes;
                        polygoneattributes['uuid'] = overelement.uuid;
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_2,
                            spatialReference: _this.map.spatialReference
                        });
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygoneattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polygonGraphic]);
                        _this.map.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polygoneattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'element') {
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var psymbol = void 0;
                    if (_this.viewMode === '2D') {
                        psymbol = {
                            type: "picture-marker",
                            url: overlayers.icon.image,
                            width: overlayers.icon.size.width,
                            height: overlayers.icon.size.height
                        };
                    }
                    else {
                        psymbol = {
                            type: "point-3d",
                            symbolLayers: [{
                                    type: "icon",
                                    size: overlayers.icon.size.width,
                                    resource: {
                                        href: overlayers.icon.image
                                    }
                                }]
                        };
                    }
                    var markeattributes = overlayers.attributes;
                    markeattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.map.spatialReference
                        }),
                        symbol: psymbol,
                        attributes: markeattributes
                    });
                    _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                    _this.map.graphics.add(graphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: new Point({
                                x: _this.viewMode === '3D' ? overlayers.position[0]
                                    + overlayers.label.xoffset : overlayers.position[0],
                                y: _this.viewMode === '3D' ? overlayers.position[1]
                                    + overlayers.label.yoffset : overlayers.position[1],
                                z: _this.viewMode === '3D' ? overlayers.position[2]
                                    + overlayers.label.zoffset : overlayers.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: markeattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                    var lineSymbol = {
                        type: "simple-line",
                        color: overlayers.strokeColor,
                        style: overlayers.style,
                        width: overlayers.width,
                        cap: overlayers.cap,
                        join: overlayers.lineJoin
                    };
                    var path_3 = [];
                    overlayers.path.forEach(function (item) {
                        path_3.push([item.X, item.Y, item.Z]);
                    });
                    var polyline = new ArcGISPolyline({
                        hasZ: false,
                        hasM: false,
                        paths: path_3,
                        spatialReference: _this.map.spatialReference
                    });
                    var polylineattributes = overlayers.attributes;
                    polylineattributes['uuid'] = overlayers.uuid;
                    var polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                        attributes: polylineattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polylineGraphic]);
                    _this.map.graphics.add(polylineGraphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: polylineGraphic.geometry.extent.center,
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: polylineattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                    var fillSymbol = void 0;
                    if (overlayers.symboltype === 'simple') {
                        fillSymbol = {
                            type: "simple-fill",
                            color: overlayers.fillColor,
                            style: overlayers.style,
                            outline: {
                                color: overlayers.strokeColor,
                                width: overlayers.strokeWeight,
                                style: overlayers.strokestyle
                            }
                        };
                    }
                    else {
                        fillSymbol = {
                            type: "picture-fill",
                            url: overlayers.url,
                            width: overlayers.picwidth,
                            height: overlayers.picheight,
                            outline: {
                                style: overlayers.strokestyle,
                                color: overlayers.strokeColor,
                                width: overlayers.strokeWeight
                            }
                        };
                    }
                    var rs_3 = [];
                    overlayers.paths.forEach(function (item) {
                        rs_3.push([item.X, item.Y, item.Z]);
                    });
                    var polygonattributes = overlayers.attributes;
                    polygonattributes['uuid'] = overlayers.uuid;
                    var polygon = new ArcGISPolygon({
                        hasZ: true,
                        hasM: true,
                        rings: rs_3,
                        spatialReference: _this.map.spatialReference
                    });
                    var polygonGraphic = new Graphic({
                        geometry: polygon,
                        symbol: fillSymbol,
                        attributes: polygonattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polygonGraphic]);
                    _this.map.graphics.add(polygonGraphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: polygonGraphic.geometry.extent.center,
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: polygonattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
            }
        }).catch(function (err) { console.error(err); });
    };
    Map.prototype.remove = function (overlayers) {
        var _this = this;
        if (overlayers instanceof Array) {
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.map.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
        }
        else if (overlayers.type === 'group') {
            var graphiclist = this.mapoverlayers.filter(function (item) { return item[0] ===
                overlayers.uuid; });
            graphiclist.forEach(function (item) {
                _this.map.graphics.remove(item[2]);
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[0] !==
                overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayers.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            graphiclist.forEach(function (item) {
                _this.map.graphics.remove(item[2]);
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    Map.prototype.update = function (overlayers) {
        var _this = this;
        load(['esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], Point = _a[1], PictureMarkerSymbol = _a[2], ArcGISPolyline = _a[3], ArcGISPolygon = _a[4];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    var graphiclist = _this.mapoverlayers.filter(function (item) {
                        return item[1] === overelement.uuid;
                    });
                    graphiclist.forEach(function (item) {
                        _this.map.graphics.remove(item[2]);
                    });
                    _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !== overelement.uuid; });
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (_this.viewMode === '2D') {
                            psymbol = {
                                type: "picture-marker",
                                url: overelement.icon.image,
                                width: overelement.icon.size.width,
                                height: overelement.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overelement.icon.size.width,
                                        resource: {
                                            href: overelement.icon.image
                                        }
                                    }]
                            };
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                        _this.map.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.viewMode === '3D' ? overelement.position[0]
                                        + overelement.label.xoffset : overelement.position[0],
                                    y: _this.viewMode === '3D' ? overelement.position[1]
                                        + overelement.label.yoffset : overelement.position[1],
                                    z: _this.viewMode === '3D' ? overelement.position[2]
                                        + overelement.label.zoffset : overelement.position[2],
                                    spatialReference: _this.map.spatialReference
                                }),
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: markerattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = {
                            type: "simple-line",
                            color: overelement.strokeColor,
                            style: overelement.style,
                            width: overelement.width,
                            cap: overelement.cap,
                            join: overelement.lineJoin
                        };
                        var path_4 = [];
                        overelement.path.forEach(function (item) {
                            path_4.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_4,
                            spatialReference: _this.map.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                        _this.map.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polylineattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (overelement.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overelement.fillColor,
                                style: overelement.style,
                                outline: {
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight,
                                    style: overelement.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overelement.url,
                                width: overelement.picwidth,
                                height: overelement.picheight,
                                outline: {
                                    style: overelement.strokestyle,
                                    color: overelement.strokeColor,
                                    width: overelement.strokeWeight
                                }
                            };
                        }
                        var rs_4 = [];
                        overelement.paths.forEach(function (item) {
                            rs_4.push([item.X, item.Y, item.Z]);
                        });
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_4,
                            spatialReference: _this.map.spatialReference
                        });
                        var polygonattributes = overelement.attributes;
                        polygonattributes['uuid'] = overelement.uuid;
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygonattributes
                        });
                        _this.mapoverlayers.push(['smap-default',
                            overelement.uuid, polygonGraphic]);
                        _this.map.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polygonattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default',
                                overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[0] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.map.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[0] !== overlayers.uuid; });
                overlayers.overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (_this.viewMode === '2D') {
                            psymbol = {
                                type: "picture-marker",
                                url: overelement.icon.image,
                                width: overelement.icon.size.width,
                                height: overelement.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overelement.icon.size.width,
                                        resource: {
                                            href: overelement.icon.image
                                        }
                                    }]
                            };
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, graphic]);
                        _this.map.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.viewMode === '3D' ? overelement.position[0]
                                        + overelement.label.xoffset :
                                        overelement.position[0],
                                    y: _this.viewMode === '3D' ? overelement.position[1]
                                        + overelement.label.yoffset :
                                        overelement.position[1],
                                    z: _this.viewMode === '3D' ? overelement.position[2]
                                        + overelement.label.zoffset :
                                        overelement.position[2],
                                    spatialReference: _this.map.spatialReference
                                }),
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: markerattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = {
                            type: "simple-line",
                            color: overelement.strokeColor,
                            style: overelement.style,
                            width: overelement.width,
                            cap: overelement.cap,
                            join: overelement.lineJoin
                        };
                        var path_5 = [];
                        overelement.path.forEach(function (item) {
                            path_5.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_5,
                            spatialReference: _this.map.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polylineGraphic]);
                        _this.map.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                },
                                attributes: polylineattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (overlayers.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overlayers.fillColor,
                                style: overlayers.style,
                                outline: {
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight,
                                    style: overlayers.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overlayers.url,
                                width: overlayers.picwidth,
                                height: overlayers.picheight,
                                outline: {
                                    style: overlayers.strokestyle,
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight
                                }
                            };
                        }
                        var rs_5 = [];
                        overlayers.paths.forEach(function (item) {
                            rs_5.push([item.X, item.Y, item.Z]);
                        });
                        var polygonattributes = overelement.attributes;
                        polygonattributes['uuid'] = overelement.uuid;
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_5,
                            spatialReference: _this.map.spatialReference
                        });
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygonattributes
                        });
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, polygonGraphic]);
                        _this.map.graphics.add(polygonGraphic);
                        if (overlayers.label.visible) {
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: {
                                    type: overlayers.label.type,
                                    text: overlayers.label.text,
                                    color: overlayers.label.color,
                                    angle: overlayers.label.angle,
                                    backgroundColor: overlayers.label.backgroundColor,
                                    borderLineColor: overlayers.label.borderLineColor,
                                    borderLineSize: overlayers.label.borderLineSize,
                                    kerning: overlayers.label.kerning,
                                    lineHeight: overlayers.label.lineHeight,
                                    lineWidth: overlayers.label.lineWidth,
                                    rotated: overlayers.label.rotated,
                                    haloColor: overlayers.label.haloColor,
                                    haloSize: overlayers.label.haloSize,
                                    xoffset: overlayers.label.xoffset,
                                    yoffset: overlayers.label.yoffset,
                                    verticalAlignment: overlayers.label.verticalAlignment,
                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                    font: {
                                        size: overlayers.label.size,
                                        family: "Josefin Slab",
                                        weight: overlayers.label.weight
                                    }
                                },
                                attributes: polygonattributes
                            });
                            _this.map.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default',
                                overlayers.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'element') {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[1] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.map.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var psymbol = void 0;
                    if (_this.viewMode === '2D') {
                        psymbol = {
                            type: "picture-marker",
                            url: overlayers.icon.image,
                            width: overlayers.icon.size.width,
                            height: overlayers.icon.size.height
                        };
                    }
                    else {
                        psymbol = {
                            type: "point-3d",
                            symbolLayers: [{
                                    type: "icon",
                                    size: overlayers.icon.size.width,
                                    resource: {
                                        href: overlayers.icon.image
                                    }
                                }]
                        };
                    }
                    var markerattributes = overlayers.attributes;
                    markerattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.map.spatialReference
                        }),
                        symbol: psymbol,
                        attributes: markerattributes
                    });
                    _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                    _this.map.graphics.add(graphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: new Point({
                                x: _this.viewMode === '3D' ? overlayers.position[0]
                                    + overlayers.label.xoffset : overlayers.position[0],
                                y: _this.viewMode === '3D' ? overlayers.position[1]
                                    + overlayers.label.yoffset : overlayers.position[1],
                                z: _this.viewMode === '3D' ? overlayers.position[2]
                                    + overlayers.label.zoffset : overlayers.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: markerattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                    var lineSymbol = {
                        type: "simple-line",
                        color: overlayers.strokeColor,
                        style: overlayers.style,
                        width: overlayers.width,
                        cap: overlayers.cap,
                        join: overlayers.lineJoin
                    };
                    var path_6 = [];
                    overlayers.path.forEach(function (item) {
                        path_6.push([item.X, item.Y, item.Z]);
                    });
                    var polyline = new ArcGISPolyline({
                        hasZ: false,
                        hasM: false,
                        paths: path_6,
                        spatialReference: _this.map.spatialReference
                    });
                    var polylineattributes = overlayers.attributes;
                    polylineattributes['uuid'] = overlayers.uuid;
                    var polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                        attributes: polylineattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polylineGraphic]);
                    _this.map.graphics.add(polylineGraphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: polylineGraphic.geometry.extent.center,
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: polylineattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                    var fillSymbol = void 0;
                    if (overlayers.symboltype === 'simple') {
                        fillSymbol = {
                            type: "simple-fill",
                            color: overlayers.fillColor,
                            style: overlayers.style,
                            outline: {
                                color: overlayers.strokeColor,
                                width: overlayers.strokeWeight,
                                style: overlayers.strokestyle
                            }
                        };
                    }
                    else {
                        fillSymbol = {
                            type: "picture-fill",
                            url: overlayers.url,
                            width: overlayers.picwidth,
                            height: overlayers.picheight,
                            outline: {
                                style: overlayers.strokestyle,
                                color: overlayers.strokeColor,
                                width: overlayers.strokeWeight
                            }
                        };
                    }
                    var rs_6 = [];
                    overlayers.paths.forEach(function (item) {
                        rs_6.push([item.X, item.Y, item.Z]);
                    });
                    var polygon = new ArcGISPolygon({
                        hasZ: true,
                        hasM: true,
                        rings: rs_6,
                        spatialReference: _this.map.spatialReference
                    });
                    var polygonattributes = overlayers.attributes;
                    polygonattributes['uuid'] = overlayers.uuid;
                    var polygonGraphic = new Graphic({
                        geometry: polygon,
                        symbol: fillSymbol,
                        attributes: polygonattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polygonGraphic]);
                    _this.map.graphics.add(polygonGraphic);
                    if (overlayers.label.visible) {
                        var graphictext = new Graphic({
                            geometry: polygonGraphic.geometry.extent.center,
                            symbol: {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            },
                            attributes: polygonattributes
                        });
                        _this.map.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
            }
        });
    };
    Map.prototype.addfeature = function (overlayers) {
        var _this = this;
        load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol',
            "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], PictureMarkerSymbol = _a[4], ArcGISPolyline = _a[5], ArcGISPolygon = _a[6];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var markrenderer = void 0;
                        if (_this.viewMode === '3D') {
                            markrenderer = {
                                type: "simple",
                                symbol: {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overelement.icon.size.width,
                                            resource: {
                                                href: overelement.icon.image
                                            }
                                        }]
                                }
                            };
                        }
                        else {
                            markrenderer = {
                                type: "simple",
                                symbol: {
                                    type: "picture-marker",
                                    url: overelement.icon.image,
                                    width: overelement.icon.size.width,
                                    height: overelement.icon.size.height
                                }
                            };
                        }
                        var datafiled_1 = [{
                                name: 'objectId',
                                alias: 'objectId',
                                type: 'oid'
                            }, {
                                name: 'uuid',
                                alias: '唯一标识',
                                type: 'string'
                            }];
                        Object.keys(overelement.attributes).forEach(function (element) {
                            datafiled_1.push({
                                name: element,
                                alias: element,
                                type: "string"
                            });
                        });
                        var clientoperateLayer = new FeatureLayer({
                            id: overelement.uuid,
                            title: overelement.uuid,
                            objectIdField: 'OBJECTID',
                            geometryType: 'point',
                            renderer: markrenderer,
                            screenSizePerspectiveEnabled: true,
                            popupEnabled: false,
                            popupTemplate: false,
                            // elevationInfo: 'on-the-ground',
                            fields: datafiled_1,
                            source: [],
                            spatialReference: _this.map.spatialReference
                        });
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            attributes: dataattributes
                        });
                        clientoperateLayer.source.add(graphic);
                        _this.map.map.add(clientoperateLayer);
                        _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                            graphic]);
                        if (overelement.label.visible) {
                            var labelsymbol = void 0;
                            if (_this.viewMode === '2D') {
                                labelsymbol = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                labelsymbol = {
                                    type: "label-3d",
                                    symbolLayers: [{
                                            type: "text",
                                            material: { color: overelement.label.color },
                                            size: overelement.label.size,
                                            halo: {
                                                color: overelement.label.haloColor,
                                                size: overelement.label.haloSize
                                            }
                                        }]
                                };
                            }
                            var statesLabelClass = new LabelClass({
                                labelExpressionInfo: {
                                    expression: '$feature.NAME'
                                },
                                symbol: labelsymbol,
                                labelPlacement: overelement.label.placement,
                                minScale: overelement.label.minScale,
                                maxScale: overelement.label.maxScale
                            });
                            clientoperateLayer.labelingInfo = [statesLabelClass];
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var datafiled_2 = [{
                        name: 'objectId',
                        alias: 'objectId',
                        type: 'oid'
                    }, {
                        name: 'uuid',
                        alias: '唯一标识',
                        type: 'string'
                    }];
                datafiled_2.push({
                    name: 'style',
                    alias: '样式',
                    type: 'string'
                });
                overlayers.datafiled.forEach(function (element) {
                    datafiled_2.push(element);
                });
                var symbolrenderer_1;
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    symbolrenderer_1 = {
                        type: 'unique-value',
                        field: 'style',
                        uniqueValueInfos: []
                    };
                    overlayers.style.forEach(function (styleelement) {
                        if (_this.viewMode === '3D') {
                            symbolrenderer_1.uniqueValueInfos.push({
                                value: styleelement.style,
                                label: styleelement.style,
                                symbol: {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: styleelement.size.height,
                                            resource: {
                                                href: styleelement.url
                                            }
                                        }]
                                }
                            });
                        }
                        else {
                            symbolrenderer_1.uniqueValueInfos.push({
                                value: styleelement.style,
                                label: styleelement.style,
                                symbol: {
                                    type: "picture-marker",
                                    url: styleelement.url,
                                    width: styleelement.size.height,
                                    height: styleelement.size.height
                                }
                            });
                        }
                    });
                    var clientoperateLayer_1 = new FeatureLayer({
                        id: overlayers.uuid,
                        title: overlayers.uuid,
                        objectIdField: 'OBJECTID',
                        geometryType: 'point',
                        renderer: symbolrenderer_1,
                        screenSizePerspectiveEnabled: _this.viewMode === '3D',
                        popupEnabled: false,
                        popupTemplate: false,
                        // elevationInfo: 'on-the-ground',
                        fields: datafiled_2,
                        source: [],
                        spatialReference: _this.map.spatialReference
                    });
                    _this.map.map.add(clientoperateLayer_1);
                    overlayers.overlayers.forEach(function (overelement) {
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.map.spatialReference
                            }),
                            attributes: overelement.attributes
                        });
                        clientoperateLayer_1.source.add(graphic);
                        _this.mapoverlayersflayer.push([overlayers.uuid,
                            overelement.uuid,
                            graphic]);
                    });
                    if (clientoperateLayer_1.source.items.length > 100) {
                        if (overlayers.frreduction != null) {
                            clientoperateLayer_1.featureReduction = {
                                type: overlayers.frreduction.type,
                                clusterRadius: overlayers.frreduction.clusterRadius
                            };
                        }
                    }
                    if (overlayers.label.visible) {
                        var labelsymbol = void 0;
                        if (_this.viewMode === '2D') {
                            labelsymbol = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            labelsymbol = {
                                type: "label-3d",
                                symbolLayers: [{
                                        type: "text",
                                        material: { color: overlayers.label.color },
                                        size: overlayers.label.size,
                                        halo: {
                                            color: overlayers.label.haloColor,
                                            size: overlayers.label.haloSize
                                        }
                                    }]
                            };
                        }
                        var statesLabelClass = new LabelClass({
                            labelExpressionInfo: {
                                expression: '$feature.NAME'
                            },
                            symbol: labelsymbol,
                            labelPlacement: overlayers.label.placement,
                            minScale: overlayers.label.minScale,
                            maxScale: overlayers.label.maxScale
                        });
                        clientoperateLayer_1.labelingInfo = [statesLabelClass];
                    }
                }
            }
            else if (overlayers.type === 'element') {
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var markrenderer = void 0;
                    if (_this.viewMode === '3D') {
                        markrenderer = {
                            type: "simple",
                            symbol: {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overlayers.icon.size.width,
                                        resource: {
                                            href: overlayers.icon.image
                                        }
                                    }]
                            }
                        };
                    }
                    else {
                        markrenderer = {
                            type: "simple",
                            symbol: {
                                type: "picture-marker",
                                url: overlayers.icon.image,
                                width: overlayers.icon.size.width,
                                height: overlayers.icon.size.height
                            }
                        };
                    }
                    var datafiled_3 = [{
                            name: 'objectId',
                            alias: 'objectId',
                            type: 'oid'
                        }, {
                            name: 'uuid',
                            alias: '唯一标识',
                            type: 'string'
                        }];
                    Object.keys(overlayers.attributes).forEach(function (element) {
                        datafiled_3.push({
                            name: element,
                            alias: element,
                            type: "string"
                        });
                    });
                    var clientoperateLayer = new FeatureLayer({
                        id: overlayers.uuid,
                        title: overlayers.uuid,
                        objectIdField: 'OBJECTID',
                        geometryType: 'point',
                        renderer: markrenderer,
                        screenSizePerspectiveEnabled: true,
                        popupEnabled: false,
                        popupTemplate: false,
                        // elevationInfo: 'on-the-ground',
                        fields: datafiled_3,
                        source: [],
                        spatialReference: _this.map.spatialReference
                    });
                    var dataattributes = overlayers.attributes;
                    dataattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.map.spatialReference
                        }),
                        attributes: dataattributes
                    });
                    clientoperateLayer.source.add(graphic);
                    _this.map.map.add(clientoperateLayer);
                    _this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                        graphic]);
                    if (overlayers.label.visible) {
                        var labelsymbol = void 0;
                        if (_this.viewMode === '2D') {
                            labelsymbol = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            labelsymbol = {
                                type: "label-3d",
                                symbolLayers: [{
                                        type: "text",
                                        material: { color: overlayers.label.color },
                                        size: overlayers.label.size,
                                        halo: {
                                            color: overlayers.label.haloColor,
                                            size: overlayers.label.haloSize
                                        }
                                    }]
                            };
                        }
                        var statesLabelClass = new LabelClass({
                            labelExpressionInfo: {
                                expression: '$feature.NAME'
                            },
                            symbol: labelsymbol,
                            labelPlacement: overlayers.label.placement,
                            minScale: overlayers.label.minScale,
                            maxScale: overlayers.label.maxScale
                        });
                        clientoperateLayer.labelingInfo = [statesLabelClass];
                    }
                }
            }
        });
    };
    Map.prototype.updatefeature = function (overlayers) {
        var _this = this;
        load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol',
            "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], PictureMarkerSymbol = _a[4], ArcGISPolyline = _a[5], ArcGISPolygon = _a[6];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelemnt) {
                    if (overelemnt.overlaytype.toLowerCase() === 'marker') {
                        var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                            return item[1] === overelemnt.uuid;
                        });
                        graphiclist.forEach(function (item) {
                            var upFeatures = [];
                            var point = new Point({
                                x: overelemnt.position[0],
                                y: overelemnt.position[1],
                                z: overelemnt.position[2] === undefined ? 0 :
                                    overelemnt.position[2],
                                spatialReference: _this.map.spatialReference
                            });
                            item[2].geometry = point;
                            var keys = Object.keys(overelemnt.attributes);
                            keys.map(function (attributeitem) {
                                if (attributeitem !== 'objectId') {
                                    item[2].setAttribute(attributeitem, overelemnt.attributes[attributeitem]);
                                }
                            });
                            upFeatures.push(item[2]);
                            var flayer = _this.map.map.findLayerById(item[0]);
                            if (flayer !== null) {
                                flayer.applyEdits({
                                    updateFeatures: upFeatures
                                    // tslint:disable-next-line:no-empty
                                }).then(function (editsResult) {
                                    var markrenderer;
                                    if (_this.viewMode === '3D') {
                                        markrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "point-3d",
                                                symbolLayers: [{
                                                        type: "icon",
                                                        size: overelemnt.icon.size.width,
                                                        resource: {
                                                            href: overelemnt.icon.image
                                                        }
                                                    }]
                                            }
                                        };
                                    }
                                    else {
                                        markrenderer = {
                                            type: "simple",
                                            symbol: {
                                                type: "picture-marker",
                                                url: overelemnt.icon.image,
                                                width: overelemnt.icon.size.width,
                                                height: overelemnt.icon.size.height
                                            }
                                        };
                                    }
                                    if (overelemnt.label.visible) {
                                        var labelsymbol = void 0;
                                        if (_this.viewMode === '2D') {
                                            labelsymbol = {
                                                type: overelemnt.label.type,
                                                text: overelemnt.label.text,
                                                color: overelemnt.label.color,
                                                angle: overelemnt.label.angle,
                                                backgroundColor: overelemnt.label.backgroundColor,
                                                borderLineColor: overelemnt.label.borderLineColor,
                                                borderLineSize: overelemnt.label.borderLineSize,
                                                kerning: overelemnt.label.kerning,
                                                lineHeight: overelemnt.label.lineHeight,
                                                lineWidth: overelemnt.label.lineWidth,
                                                rotated: overelemnt.label.rotated,
                                                haloColor: overelemnt.label.haloColor,
                                                haloSize: overelemnt.label.haloSize,
                                                xoffset: overelemnt.label.xoffset,
                                                yoffset: overelemnt.label.yoffset,
                                                verticalAlignment: overelemnt.label.verticalAlignment,
                                                horizontalAlignment: overelemnt.label.horizontalAlignment,
                                                font: {
                                                    size: overelemnt.label.size,
                                                    family: "Josefin Slab",
                                                    weight: overelemnt.label.weight
                                                }
                                            };
                                        }
                                        else {
                                            labelsymbol = {
                                                type: "label-3d",
                                                symbolLayers: [{
                                                        type: "text",
                                                        material: { color: overelemnt.label.color },
                                                        size: overelemnt.label.size,
                                                        halo: {
                                                            color: overelemnt.label.haloColor,
                                                            size: overelemnt.label.haloSize
                                                        }
                                                    }]
                                            };
                                        }
                                        var statesLabelClass = new LabelClass({
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            },
                                            symbol: labelsymbol,
                                            labelPlacement: overelemnt.label.placement,
                                            minScale: overelemnt.label.minScale,
                                            maxScale: overelemnt.label.maxScale
                                        });
                                        flayer.labelingInfo = [statesLabelClass];
                                    }
                                    flayer.renderer = markrenderer;
                                    flayer.refresh();
                                });
                            }
                        });
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var upFeatures_1 = [];
                overlayers.overlayers.forEach(function (overelement) {
                    var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                        return item[1] === overelement.uuid;
                    });
                    if (graphiclist.length === 1) {
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var point = new Point({
                            x: overelement.position[0],
                            y: overelement.position[1],
                            z: overelement.position[2] === undefined ? 0 :
                                overelement.position[2],
                            spatialReference: _this.map.spatialReference
                        });
                        graphiclist[0][2].geometry = point;
                        var keys = Object.keys(overelement.attributes);
                        keys.map(function (attributeitem) {
                            if (attributeitem !== 'objectId') {
                                graphiclist[0][2].setAttribute(attributeitem, overelement.attributes[attributeitem]);
                            }
                        });
                        upFeatures_1.push(graphiclist[0][2]);
                    }
                });
                var flayer_1 = _this.map.map.findLayerById(overlayers.uuid);
                if (flayer_1 !== null) {
                    flayer_1.applyEdits({
                        updateFeatures: upFeatures_1
                        // tslint:disable-next-line:no-empty
                    }).then(function (editsResult) {
                        var symbolrenderer = {
                            type: 'unique-value',
                            field: 'style',
                            uniqueValueInfos: []
                        };
                        overlayers.style.forEach(function (styleelement) {
                            if (_this.viewMode === '3D') {
                                symbolrenderer.uniqueValueInfos.push({
                                    value: styleelement.style,
                                    label: styleelement.style,
                                    symbol: {
                                        type: "point-3d",
                                        symbolLayers: [{
                                                type: "icon",
                                                size: styleelement.size.height,
                                                resource: {
                                                    href: styleelement.url
                                                }
                                            }]
                                    }
                                });
                            }
                            else {
                                symbolrenderer.uniqueValueInfos.push({
                                    value: styleelement.style,
                                    label: styleelement.style,
                                    symbol: {
                                        type: "picture-marker",
                                        url: styleelement.url,
                                        width: styleelement.size.height,
                                        height: styleelement.size.height
                                    }
                                });
                            }
                        });
                        flayer_1.renderer = symbolrenderer;
                        if (flayer_1.source.items.length > 100) {
                            if (overlayers.frreduction != null) {
                                flayer_1.featureReduction = {
                                    type: overlayers.frreduction.type,
                                    clusterRadius: overlayers.frreduction.clusterRadius
                                };
                            }
                        }
                        if (overlayers.label.visible) {
                            var labelsymbol = void 0;
                            if (_this.viewMode === '2D') {
                                labelsymbol = {
                                    type: overlayers.label.type,
                                    text: overlayers.label.text,
                                    color: overlayers.label.color,
                                    angle: overlayers.label.angle,
                                    backgroundColor: overlayers.label.backgroundColor,
                                    borderLineColor: overlayers.label.borderLineColor,
                                    borderLineSize: overlayers.label.borderLineSize,
                                    kerning: overlayers.label.kerning,
                                    lineHeight: overlayers.label.lineHeight,
                                    lineWidth: overlayers.label.lineWidth,
                                    rotated: overlayers.label.rotated,
                                    haloColor: overlayers.label.haloColor,
                                    haloSize: overlayers.label.haloSize,
                                    xoffset: overlayers.label.xoffset,
                                    yoffset: overlayers.label.yoffset,
                                    verticalAlignment: overlayers.label.verticalAlignment,
                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                    font: {
                                        size: overlayers.label.size,
                                        family: "Josefin Slab",
                                        weight: overlayers.label.weight
                                    }
                                };
                            }
                            else {
                                labelsymbol = {
                                    type: "label-3d",
                                    symbolLayers: [{
                                            type: "text",
                                            material: { color: overlayers.label.color },
                                            size: overlayers.label.size,
                                            halo: {
                                                color: overlayers.label.haloColor,
                                                size: overlayers.label.haloSize
                                            }
                                        }]
                                };
                            }
                            var statesLabelClass = new LabelClass({
                                labelExpressionInfo: {
                                    expression: '$feature.NAME'
                                },
                                symbol: labelsymbol,
                                labelPlacement: overlayers.label.placement,
                                minScale: overlayers.label.minScale,
                                maxScale: overlayers.label.maxScale
                            });
                            flayer_1.labelingInfo = [statesLabelClass];
                        }
                        flayer_1.refresh();
                    });
                }
            }
            else if (overlayers.type === 'element') {
                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                    return item[1] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    var upFeatures = [];
                    var dataattributes = overlayers.attributes;
                    dataattributes['uuid'] = overlayers.uuid;
                    var point = new Point({
                        x: overlayers.position[0],
                        y: overlayers.position[1],
                        z: overlayers.position[2] === undefined ? 0 :
                            overlayers.position[2],
                        spatialReference: _this.map.spatialReference
                    });
                    item[2].geometry = point;
                    var keys = Object.keys(overlayers.attributes);
                    keys.map(function (attributeitem) {
                        if (attributeitem !== 'objectId') {
                            item[2].setAttribute(attributeitem, overlayers.attributes[attributeitem]);
                        }
                    });
                    upFeatures.push(item[2]);
                    var flayer = _this.map.map.findLayerById(item[0]);
                    if (flayer !== null) {
                        flayer.applyEdits({
                            updateFeatures: upFeatures
                            // tslint:disable-next-line:no-empty
                        }).then(function (editsResult) {
                            if (item[0] !== item[1]) {
                                return;
                            }
                            var markrenderer;
                            if (_this.viewMode === '3D') {
                                markrenderer = {
                                    type: "simple",
                                    symbol: {
                                        type: "point-3d",
                                        symbolLayers: [{
                                                type: "icon",
                                                size: overlayers.icon.size.width,
                                                resource: {
                                                    href: overlayers.icon.image
                                                }
                                            }]
                                    }
                                };
                            }
                            else {
                                markrenderer = {
                                    type: "simple",
                                    symbol: {
                                        type: "picture-marker",
                                        url: overlayers.icon.image,
                                        width: overlayers.icon.size.width,
                                        height: overlayers.icon.size.height
                                    }
                                };
                            }
                            flayer.renderer = markrenderer;
                            if (overlayers.label.visible) {
                                var labelsymbol = void 0;
                                if (_this.viewMode === '2D') {
                                    labelsymbol = {
                                        type: overlayers.label.type,
                                        text: overlayers.label.text,
                                        color: overlayers.label.color,
                                        angle: overlayers.label.angle,
                                        backgroundColor: overlayers.label.backgroundColor,
                                        borderLineColor: overlayers.label.borderLineColor,
                                        borderLineSize: overlayers.label.borderLineSize,
                                        kerning: overlayers.label.kerning,
                                        lineHeight: overlayers.label.lineHeight,
                                        lineWidth: overlayers.label.lineWidth,
                                        rotated: overlayers.label.rotated,
                                        haloColor: overlayers.label.haloColor,
                                        haloSize: overlayers.label.haloSize,
                                        xoffset: overlayers.label.xoffset,
                                        yoffset: overlayers.label.yoffset,
                                        verticalAlignment: overlayers.label.verticalAlignment,
                                        horizontalAlignment: overlayers.label.horizontalAlignment,
                                        font: {
                                            size: overlayers.label.size,
                                            family: "Josefin Slab",
                                            weight: overlayers.label.weight
                                        }
                                    };
                                }
                                else {
                                    labelsymbol = {
                                        type: "label-3d",
                                        symbolLayers: [{
                                                type: "text",
                                                material: { color: overlayers.label.color },
                                                size: overlayers.label.size,
                                                halo: {
                                                    color: overlayers.label.haloColor,
                                                    size: overlayers.label.haloSize
                                                }
                                            }]
                                    };
                                }
                                flayer.refresh();
                            }
                        });
                    }
                });
            }
        });
    };
    Map.prototype.removefeature = function (overlayers) {
        var _this = this;
        if (overlayers instanceof Array) {
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    var flayer = _this.map.map.findLayerById(item[0]);
                    if (flayer !== null) {
                        flayer.applyEdits({
                            deleteFeatures: [item[2]]
                        }).then(function (editsResult) {
                            flayer.queryFeatures().then(function (results) {
                                if (results.features.length === 0) {
                                    _this.map.map.remove(flayer);
                                }
                            });
                        });
                    }
                });
                _this.mapoverlayersflayer = _this.mapoverlayersflayer.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
        }
        else if (overlayers.type === 'group') {
            var flayer = this.map.map.findLayerById(overlayers.uuid);
            if (flayer !== null) {
                this.map.map.remove(flayer);
            }
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[0] !==
                overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayersflayer.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            graphiclist.forEach(function (item) {
                var flayer = _this.map.map.findLayerById(item[0]);
                if (flayer !== null) {
                    flayer.applyEdits({
                        deleteFeatures: [item[2]]
                    }).then(function (editsResult) {
                        flayer.queryFeatures().then(function (results) {
                            if (results.features.length === 0) {
                                _this.map.map.remove(flayer);
                            }
                        });
                    });
                }
            });
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    Map.prototype.clearMap = function () {
        this.map.graphics.removeAll();
        this.mapoverlayers = [];
    };
    Map.prototype.setmaskboundary = function (maskOptions) {
        var _this = this;
        load(['esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngineAsync',
            'esri/geometry/SpatialReference', 'esri/Color'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1], ArcPolygon = _a[2], geometryEngineAsync = _a[3], SpatialReference = _a[4], Color = _a[5];
            var boundaryLayer = null;
            if (maskOptions.boundaryType === "qx") {
                boundaryLayer = _this.map.map.findLayerById('qx_boundary');
            }
            else if (maskOptions.boundaryType === "jd") {
                boundaryLayer = _this.map.map.findLayerById('jd_boundary');
            }
            else if (maskOptions.boundaryType === "jwh") {
                boundaryLayer = _this.map.map.findLayerById('jwh_boundary');
            }
            var maskgraphiclayer = _this.map.map.findLayerById('mask_boundary_graphiclayer');
            if (maskgraphiclayer == null) {
                maskgraphiclayer = new GraphicsLayer({
                    id: 'mask_boundary_graphiclayer',
                    title: '遮罩层',
                    listMode: 'hide'
                });
                _this.map.map.add(maskgraphiclayer);
            }
            maskgraphiclayer.removeAll();
            if (maskOptions.inputgeometry) {
                boundaryLayer = _this.map.map.findLayerById('qx_boundary');
                if (boundaryLayer === null) {
                    return;
                }
                var pgon = new ArcPolygon({
                    rings: maskOptions.inputgeometry,
                    spatialReference: _this.map.spatialReference
                });
                var fullgeometry_1 = boundaryLayer.fullExtent;
                fullgeometry_1.spatialReference = _this.map.spatialReference;
                var geomtry_1 = pgon;
                geomtry_1.spatialReference = _this.map.spatialReference;
                geometryEngineAsync.buffer(geomtry_1, maskOptions.boundarydistance, 'meters').
                    then(function (targetGeometry) {
                    geometryEngineAsync.difference(fullgeometry_1, targetGeometry).then(function (outermask) {
                        var masksymbol;
                        if (_this.viewMode === '3D') {
                            if (maskOptions.symbol) {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'extrude',
                                            material: { color: maskOptions.maskColor },
                                            size: maskOptions.symbol.size,
                                            edges: {
                                                type: "solid",
                                                color: maskOptions.maskColor
                                            }
                                        }]
                                };
                            }
                            else {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'fill',
                                            material: { color: maskOptions.maskColor },
                                            outline: {
                                                color: 'white',
                                                size: '0px'
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            masksymbol = {
                                type: "simple-fill",
                                color: maskOptions.maskColor,
                                style: "solid",
                                outline: {
                                    color: maskOptions.maskColor,
                                    width: 1
                                }
                            };
                        }
                        var outermaskGraphic = new Graphic({
                            geometry: outermask,
                            symbol: masksymbol
                        });
                        maskgraphiclayer.add(outermaskGraphic);
                        var length = maskOptions.bounarycount === undefined ? 30 : maskOptions.bounarycount;
                        var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                        var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                        var _loop_1 = function (j) {
                            geometryEngineAsync.buffer(geomtry_1, j * length, 'meters').
                                then(function (resgeometryouter) {
                                geometryEngineAsync.buffer(geomtry_1, (j - 1) * length, 'meters').
                                    then(function (resgeometryinner) {
                                    geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                        then(function (clipgeometry) {
                                        setingcolor[3] = (1 / maskgcount) * j;
                                        var maskroundsymbol;
                                        if (_this.viewMode === '3D') {
                                            if (maskOptions.symbol) {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'extrude',
                                                            material: { color: setingcolor },
                                                            size: maskOptions.symbol.size,
                                                            edges: {
                                                                type: "solid",
                                                                color: setingcolor
                                                            }
                                                        }]
                                                };
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'fill',
                                                            material: { color: setingcolor },
                                                            outline: {
                                                                color: 'white',
                                                                size: '0px'
                                                            }
                                                        }]
                                                };
                                            }
                                        }
                                        else {
                                            maskroundsymbol = {
                                                type: "simple-fill",
                                                color: setingcolor,
                                                style: "solid",
                                                outline: {
                                                    color: setingcolor,
                                                    width: 1
                                                }
                                            };
                                        }
                                        var maskroundGraphic = new Graphic({
                                            geometry: clipgeometry,
                                            symbol: maskroundsymbol
                                        });
                                        maskgraphiclayer.add(maskroundGraphic);
                                    });
                                });
                            });
                        };
                        for (var j = 1; j <= maskgcount; j++) {
                            _loop_1(j);
                        }
                    });
                });
            }
            else {
                if (boundaryLayer === null) {
                    return;
                }
                var queryParams = boundaryLayer.createQuery();
                queryParams.where = maskOptions.boundaryDefinition;
                boundaryLayer.queryFeatures(queryParams).then(function (results) {
                    if (!results.features.length) {
                        return;
                    }
                    var fullgeometry = boundaryLayer.fullExtent;
                    fullgeometry.spatialReference = _this.map.spatialReference;
                    var geomtry = results.features[0].geometry;
                    geomtry.spatialReference = _this.map.spatialReference;
                    geometryEngineAsync.buffer(geomtry, maskOptions.boundarydistance, 'meters').
                        then(function (targetGeometry) {
                        geometryEngineAsync.difference(fullgeometry, targetGeometry).then(function (outermask) {
                            var masksymbol;
                            if (_this.viewMode === '3D') {
                                if (maskOptions.symbol) {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'extrude',
                                                material: { color: maskOptions.maskColor },
                                                size: maskOptions.symbol.size,
                                                edges: {
                                                    type: "solid",
                                                    color: maskOptions.maskColor
                                                }
                                            }]
                                    };
                                }
                                else {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'fill',
                                                material: { color: maskOptions.maskColor },
                                                outline: {
                                                    color: 'white',
                                                    size: '0px'
                                                }
                                            }]
                                    };
                                }
                            }
                            else {
                                masksymbol = {
                                    type: "simple-fill",
                                    color: maskOptions.maskColor,
                                    style: "solid",
                                    outline: {
                                        color: maskOptions.maskColor,
                                        width: 1
                                    }
                                };
                            }
                            var outermaskGraphic = new Graphic({
                                geometry: outermask,
                                symbol: masksymbol
                            });
                            maskgraphiclayer.add(outermaskGraphic);
                            var length = maskOptions.bounarycount === undefined ? 30 : maskOptions.bounarycount;
                            var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                            //  let calgeometry = geomtry;
                            var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                            var _loop_2 = function (j) {
                                geometryEngineAsync.buffer(geomtry, j * length, 'meters').
                                    then(function (resgeometryouter) {
                                    geometryEngineAsync.buffer(geomtry, (j - 1) * length, 'meters').
                                        then(function (resgeometryinner) {
                                        geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                            then(function (clipgeometry) {
                                            setingcolor[3] = (1 / maskgcount) * j;
                                            var maskroundsymbol;
                                            if (_this.viewMode === '3D') {
                                                if (maskOptions.symbol) {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'extrude',
                                                                material: { color: setingcolor },
                                                                size: maskOptions.symbol.size,
                                                                edges: {
                                                                    type: "solid",
                                                                    color: setingcolor
                                                                }
                                                            }]
                                                    };
                                                }
                                                else {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'fill',
                                                                material: { color: setingcolor },
                                                                outline: {
                                                                    color: 'white',
                                                                    size: '0px'
                                                                }
                                                            }]
                                                    };
                                                }
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: "simple-fill",
                                                    color: setingcolor,
                                                    style: "solid",
                                                    outline: {
                                                        color: setingcolor,
                                                        width: 1
                                                    }
                                                };
                                            }
                                            var maskroundGraphic = new Graphic({
                                                geometry: clipgeometry,
                                                symbol: maskroundsymbol
                                            });
                                            maskgraphiclayer.add(maskroundGraphic);
                                        });
                                    });
                                });
                            };
                            for (var j = 1; j <= maskgcount; j++) {
                                _loop_2(j);
                            }
                        });
                    });
                });
            }
        });
    };
    Map.prototype.init = function (container, viewMode, mapoptions) {
        return __awaiter(this, void 0, void 0, function () {
            var username, menuName;
            var _this = this;
            return __generator(this, function (_a) {
                username = mapoptions.userName === undefined ? Mapcofig.userName : mapoptions.userName;
                menuName = mapoptions.menuName === undefined ? Mapcofig.menuName : mapoptions.menuName;
                load(['smiapi/utils/xhrutils'])
                    // tslint:disable-next-line:no-shadowed-variable
                    .then(function (_a) {
                    var xhrutils = _a[0];
                    xhrutils.mapconfig(username, menuName, Mapcofig.proxyURL, Mapcofig.mapconfigbackendurl)
                        .then(function (mapconfigresult) { return __awaiter(_this, void 0, void 0, function () {
                        var tokenconfigname, domainName, response, response;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.mapconfig = mapconfigresult.data.mapconfig[0];
                                    this.maplayers = mapconfigresult.data.layers;
                                    this.mapwidgets = mapconfigresult.data.mapwidgets;
                                    this.mapProxys = mapconfigresult.data.mapProxys;
                                    this.mapextent = mapconfigresult.data.mapextent[0];
                                    if (!(this.mapconfig.tokenType === '1')) return [3 /*break*/, 1];
                                    tokenconfigname = this.mapconfig.backtokenconfigname === undefined ?
                                        Mapcofig.tokenconfigname : this.mapconfig.backtokenconfigname;
                                    domainName = window.location.host;
                                    xhrutils.maptoken_backend(Mapcofig.proxyURL, this.mapconfig.backtokenUrl, tokenconfigname, domainName)
                                        .then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                        var maptoken, response, response;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    maptoken = JSON.parse(maptokenResult.data).token;
                                                    if (!(this.viewMode === '3D')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                                case 1:
                                                    response = _a.sent();
                                                    this.map = response.sceneView;
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                                case 3:
                                                    response = _a.sent();
                                                    this.map = response.mapView;
                                                    _a.label = 4;
                                                case 4:
                                                    this.initEvent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [3 /*break*/, 7];
                                case 1:
                                    if (!(this.mapconfig.tokenType === '2')) return [3 /*break*/, 6];
                                    if (!(this.viewMode === '3D')) return [3 /*break*/, 3];
                                    return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, '', mapoptions)];
                                case 2:
                                    response = _a.sent();
                                    this.map = response.sceneView;
                                    return [3 /*break*/, 5];
                                case 3: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, '', mapoptions)];
                                case 4:
                                    response = _a.sent();
                                    this.map = response.mapView;
                                    _a.label = 5;
                                case 5:
                                    this.initEvent();
                                    return [3 /*break*/, 7];
                                case 6:
                                    xhrutils.maptoken_front(this.mapconfig.fronttokenUrl, Mapcofig.tokenUser, Mapcofig.tokenPassword).then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                        var maptoken, response, response;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    maptoken = maptokenResult.token;
                                                    if (!(viewMode === '3D')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                                case 1:
                                                    response = _a.sent();
                                                    this.map = response.sceneView;
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                                case 3:
                                                    response = _a.sent();
                                                    this.map = response.mapView;
                                                    _a.label = 4;
                                                case 4:
                                                    this.initEvent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); });
                })
                    .catch(function (err) {
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    Map.prototype.init1 = function (container, viewMode, mapoptions) {
        return __awaiter(this, void 0, void 0, function () {
            var data, requesturl;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    username: mapoptions.userName === undefined ? Mapcofig.userName : mapoptions.userName,
                    menuName: mapoptions.menuName === undefined ? Mapcofig.menuName : mapoptions.menuName
                };
                requesturl = Mapcofig.mapconfigbackendurl;
                request.get(requesturl, '', data, request.RequestMode.noCors, request.RequestCache.forceCache).then(function (mapconfigresult) { return __awaiter(_this, void 0, void 0, function () {
                    var tokendata, maptokenrequesturl, response, response, expirationTime, tokenUrl;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.mapconfig = mapconfigresult.data.mapconfig[0];
                                this.maplayers = mapconfigresult.data.layers;
                                this.mapwidgets = mapconfigresult.data.mapwidgets;
                                this.mapProxys = mapconfigresult.data.mapProxys;
                                this.mapextent = mapconfigresult.data.mapextent[0];
                                if (!(this.mapconfig.tokenType === '1')) return [3 /*break*/, 1];
                                tokendata = {
                                    tokenconfigname: this.mapconfig.backtokenconfigname === undefined
                                        ? Mapcofig.tokenconfigname : this.mapconfig.backtokenconfigname,
                                    domainName: window.location.host
                                };
                                maptokenrequesturl = this.mapconfig.backtokenUrl;
                                request.get(maptokenrequesturl, '', tokendata, request.RequestMode.noCors, request.RequestCache.forceCache).then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                    var maptoken, response, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                maptoken = JSON.parse(maptokenResult.data).token;
                                                if (!(this.viewMode === '3D')) return [3 /*break*/, 2];
                                                return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                            case 1:
                                                response = _a.sent();
                                                this.map = response.sceneView;
                                                return [3 /*break*/, 4];
                                            case 2: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                            case 3:
                                                response = _a.sent();
                                                this.map = response.mapView;
                                                _a.label = 4;
                                            case 4:
                                                this.initEvent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [3 /*break*/, 7];
                            case 1:
                                if (!(this.mapconfig.tokenType === '2')) return [3 /*break*/, 6];
                                if (!(this.viewMode === '3D')) return [3 /*break*/, 3];
                                return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, '', mapoptions)];
                            case 2:
                                response = _a.sent();
                                this.map = response.sceneView;
                                return [3 /*break*/, 5];
                            case 3: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, '', mapoptions)];
                            case 4:
                                response = _a.sent();
                                this.map = response.mapView;
                                _a.label = 5;
                            case 5:
                                this.initEvent();
                                return [3 /*break*/, 7];
                            case 6:
                                expirationTime = 1440;
                                tokenUrl = this.mapconfig.fronttokenUrl + '?request=getToken&username=' + Mapcofig.tokenUser
                                    + '&password=' + Mapcofig.tokenPassword + '&clientid=ref.' + window.location.host + '&expiration='
                                    + expirationTime + '&f=json';
                                request.post(tokenUrl, '', '', request.RequestMode.noCors, request.RequestCache.default).then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                    var maptoken, response, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                maptoken = maptokenResult.token;
                                                if (!(viewMode === '3D')) return [3 /*break*/, 2];
                                                return [4 /*yield*/, init3Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                            case 1:
                                                response = _a.sent();
                                                this.map = response.sceneView;
                                                return [3 /*break*/, 4];
                                            case 2: return [4 /*yield*/, init2Dmap(container, this.mapconfig, this.maplayers, this.mapwidgets, this.mapProxys, this.mapextent, maptoken, mapoptions)];
                                            case 3:
                                                response = _a.sent();
                                                this.map = response.mapView;
                                                _a.label = 4;
                                            case 4:
                                                this.initEvent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                _a.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    Map.prototype.initEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                load(['esri/core/watchUtils'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var watchUtils = _a[0];
                    _this.map.when(function () {
                        watchUtils.whenTrueOnce(_this.map, 'ready', function () {
                            _this.emit(MapEvent.maploaded, _this.map);
                        });
                        watchUtils.whenTrue(_this.map, 'stationary', function () {
                            if (_this.map.extent) {
                                {
                                    var mapextent = {
                                        xmin: _this.map.extent.xmin.toFixed(6),
                                        ymin: _this.map.extent.ymin.toFixed(6),
                                        xmax: _this.map.extent.xmax.toFixed(6),
                                        ymax: _this.map.extent.ymax.toFixed(6)
                                    };
                                    if (_this.viewMode === '2D') {
                                        _this.emit(MapEvent.extentchanged, mapextent);
                                    }
                                    else {
                                        var mapextent3d = {
                                            xmin: _this.map.extent.xmin.toFixed(6),
                                            ymin: _this.map.extent.ymin.toFixed(6),
                                            xmax: _this.map.extent.xmax.toFixed(6),
                                            ymax: _this.map.extent.ymax.toFixed(6),
                                            zmin: _this.map.extent.zmin,
                                            zmax: _this.map.extent.zmax
                                        };
                                        _this.emit(MapEvent.extentchanged, mapextent3d);
                                    }
                                }
                                if (_this.map.center) {
                                    if (_this.viewMode === '2D') {
                                        _this.emit(MapEvent.centerchanged, {
                                            x: _this.map.center.x.toFixed(6),
                                            y: _this.map.center.y.toFixed(6)
                                        });
                                    }
                                    else {
                                        _this.emit(MapEvent.centerchanged, {
                                            x: _this.map.center.x.toFixed(6),
                                            y: _this.map.center.y.toFixed(6),
                                            z: _this.map.center.z
                                        });
                                    }
                                }
                                if (_this.map.zoom) {
                                    _this.emit(MapEvent.zoomchanged, _this.map.zoom);
                                }
                            }
                        });
                        _this.map.popup.watch("visible", function (visible) {
                            _this.emit(MapEvent.popupvisible, visible);
                        });
                        _this.map.on("blur", function (event) {
                            _this.emit(MapEvent.blur, _this.map, event);
                        });
                        _this.map.on("click", function (event) {
                            _this.emit(MapEvent.click, _this.map, event);
                        });
                        _this.map.on("double-click", function (event) {
                            _this.emit(MapEvent.doubleclick, _this.map, event);
                        });
                        _this.map.on("drag", function (event) {
                            _this.emit(MapEvent.drag, _this.map, event);
                        });
                        _this.map.on("focus", function (event) {
                            _this.emit(MapEvent.focus, _this.map, event);
                        });
                        _this.map.on("hold", function (event) {
                            _this.emit(MapEvent.hold, _this.map, event);
                        });
                        _this.map.on("key-down", function (event) {
                            _this.emit(MapEvent.keydown, _this.map, event);
                        });
                        _this.map.on("key-up", function (event) {
                            _this.emit(MapEvent.keyup, _this.map, event);
                        });
                        _this.map.on("mouse-wheel", function (event) {
                            _this.emit(MapEvent.mousewheel, _this.map, event);
                        });
                        _this.map.on("pointer-down", function (event) {
                            _this.emit(MapEvent.pointerdown, _this.map, event);
                        });
                        _this.map.on("pointer-enter", function (event) {
                            _this.emit(MapEvent.pointerenter, _this.map, event);
                        });
                        _this.map.on("pointer-leave", function (event) {
                            _this.emit(MapEvent.pointerleave, _this.map, event);
                        });
                        _this.map.on("pointer-move", function (event) {
                            _this.emit(MapEvent.pointermove, _this.map, event);
                        });
                        _this.map.on("pointer-up", function (event) {
                            _this.emit(MapEvent.pointerup, _this.map, event);
                        });
                        _this.map.on("resize", function (event) {
                            _this.emit(MapEvent.resize, _this.map, event);
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return Map;
}(EventEmitter));
export default Map;
