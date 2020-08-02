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
var Boundary = /** @class */ (function (_super) {
    __extends(Boundary, _super);
    function Boundary(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.init(view);
        return _this;
    }
    Boundary.prototype.add = function (maskOptions) {
        var _this = this;
        load(['esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngineAsync',
            'esri/geometry/SpatialReference', 'esri/Color'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1], ArcPolygon = _a[2], geometryEngineAsync = _a[3], SpatialReference = _a[4], Color = _a[5];
            var boundaryLayer = null;
            if (maskOptions.boundaryType === "qx_boundary") {
                boundaryLayer = _this.view.map.findLayerById('qx_boundary');
            }
            else if (maskOptions.boundaryType === "jd_boundary") {
                boundaryLayer = _this.view.map.findLayerById('jd_boundary');
            }
            else if (maskOptions.boundaryType === "jwh_boundary") {
                boundaryLayer = _this.view.map.findLayerById('jwh_boundary');
            }
            var maskgraphiclayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (maskgraphiclayer == null) {
                maskgraphiclayer = new GraphicsLayer({
                    id: _this.displayedLayerid,
                    title: '遮罩层',
                    listMode: 'hide'
                });
                _this.view.map.add(maskgraphiclayer);
            }
            maskgraphiclayer.removeAll();
            if (maskOptions.inputgeometry) {
                boundaryLayer = _this.view.map.findLayerById('qx_boundary');
                if (boundaryLayer === null) {
                    return;
                }
                var pgon = new ArcPolygon({
                    rings: maskOptions.inputgeometry,
                    spatialReference: _this.view.spatialReference
                });
                var fullgeometry_1 = boundaryLayer.fullExtent;
                fullgeometry_1.spatialReference = _this.view.spatialReference;
                var geomtry_1 = pgon;
                geomtry_1.spatialReference = _this.view.spatialReference;
                geometryEngineAsync.buffer(geomtry_1, maskOptions.boundarydistance, 'meters').
                    then(function (targetGeometry) {
                    geometryEngineAsync.difference(fullgeometry_1, targetGeometry).then(function (outermask) {
                        var masksymbol;
                        if (_this.view.type === '3d') {
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
                                        if (_this.view.type === '3d') {
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
                    fullgeometry.spatialReference = _this.view.spatialReference;
                    var geomtry = results.features[0].geometry;
                    geomtry.spatialReference = _this.view.spatialReference;
                    geometryEngineAsync.buffer(geomtry, maskOptions.boundarydistance, 'meters').
                        then(function (targetGeometry) {
                        geometryEngineAsync.difference(fullgeometry, targetGeometry).then(function (outermask) {
                            var masksymbol;
                            if (_this.view.type === '3d') {
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
                            var length = maskOptions.bounarycount === undefined ? 30
                                : maskOptions.bounarycount;
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
                                            if (_this.view.type === '3d') {
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
    Boundary.prototype.remove = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            this.view.map.remove(boundaryResultLayer);
        }
    };
    Boundary.prototype.show = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            boundaryResultLayer.visible = true;
        }
    };
    Boundary.prototype.hide = function () {
        var boundaryResultLayer = this.view.map.findLayerById(this.displayedLayerid);
        if (boundaryResultLayer) {
            boundaryResultLayer.visible = false;
        }
    };
    Boundary.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return Boundary;
}(EventEmitter));
export default Boundary;
