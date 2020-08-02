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
var TrajectoryPlus = /** @class */ (function (_super) {
    __extends(TrajectoryPlus, _super);
    function TrajectoryPlus(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.mapRoamplayinternal = null;
        _this.mobilelayerid = "";
        _this.init(view);
        return _this;
    }
    TrajectoryPlus.prototype.play = function (playbackoption) {
        var _this = this;
        if (playbackoption === void 0) { playbackoption = {}; }
        load(['esri/geometry/Point', 'esri/Graphic', "esri/layers/GraphicsLayer", 'esri/geometry/support/webMercatorUtils'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var point = _a[0], graphic = _a[1], graphicsLayer = _a[2], webMercatorUtils = _a[3];
            if (playbackoption.coords === undefined) {
                return;
            }
            var trajectorycount = 0;
            var currentCoordIndex = 0;
            var prevLocation = _this.view.center;
            if (typeof (_this.mapRoamplayinternal) !== 'undefined') {
                clearInterval(_this.mapRoamplayinternal);
            }
            var timespan = playbackoption.duration !== undefined ? playbackoption.duration : 2000;
            var speed = playbackoption.speedFactor !== undefined ? playbackoption.speedFactor : 1;
            _this.mapRoamplayinternal = setInterval(function () {
                var xyz = {
                    x: playbackoption.coords[currentCoordIndex].x,
                    y: playbackoption.coords[currentCoordIndex].y,
                    z: playbackoption.coords[currentCoordIndex].z !== undefined ?
                        playbackoption.coords[currentCoordIndex].z : 0
                };
                currentCoordIndex = (currentCoordIndex + 1) % playbackoption.coords.length;
                ++trajectorycount;
                var location = new point({
                    x: xyz.x,
                    y: xyz.y,
                    z: xyz.z,
                    spatialReference: _this.view.spatialReference
                });
                var mobileLayer = _this.view.map.findLayerById(_this.mobilelayerid);
                if (typeof (mobileLayer) === 'undefined') {
                    mobileLayer = new graphicsLayer({
                        title: '漫游路径' + _this.mobilelayerid,
                        id: _this.mobilelayerid,
                        listMode: 'hide'
                    });
                    _this.view.map.add(mobileLayer);
                }
                mobileLayer.removeAll();
                var animateGraphic = new graphic({
                    geometry: location,
                    symbol: playbackoption.mobilesymbol
                });
                mobileLayer.add(animateGraphic);
                if (trajectorycount > 1) {
                    if (playbackoption.showtrail) {
                        _this.createAnimateRoute(location, prevLocation, playbackoption.trailsymbol);
                    }
                }
                _this.view.goTo({
                    center: location,
                    tilt: 70,
                    scale: 2500,
                    heading: 360 - _this.getHeading(location, prevLocation),
                    rotation: 360 - _this.getHeading(location, prevLocation) // only applies to MapView
                }, {
                    speedFactor: speed,
                    duration: timespan - timespan * 0.2,
                    maxDuration: timespan - timespan * 0.2,
                    easing: "in-out-coast-quadratic"
                }).then()
                    .catch(function (error) {
                    if (error.name !== "AbortError") {
                        console.error(error);
                    }
                });
                prevLocation = location.clone();
                if (trajectorycount === playbackoption.coords.length) {
                    clearInterval(_this.mapRoamplayinternal);
                }
            }, timespan);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    TrajectoryPlus.prototype.remove = function () {
        if (typeof (this.mapRoamplayinternal) !== undefined) {
            clearInterval(this.mapRoamplayinternal);
            var animateRouteLayer = this.view.map.findLayerById(this.displayedLayerid);
            if (animateRouteLayer) {
                this.view.map.remove(animateRouteLayer);
            }
            var mobilelayer = this.view.map.findLayerById(this.mobilelayerid);
            if (mobilelayer) {
                this.view.map.remove(mobilelayer);
            }
        }
    };
    TrajectoryPlus.prototype.getHeading = function (point, oldPoint) {
        var angleInDegrees = (Math.atan2(point.y - oldPoint.y, point.x - oldPoint.x) * 180) /
            Math.PI;
        return -90 + angleInDegrees;
    };
    TrajectoryPlus.prototype.createAnimateRoute = function (point, oldPoint, trailsymbol) {
        var _this = this;
        load(['esri/Graphic', "esri/layers/GraphicsLayer"])
            // tslint:disable-next-line:no-shadowed-variable
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1];
            var animateLine = {
                type: 'polyline',
                paths: [
                    [oldPoint.x, oldPoint.y, oldPoint.z],
                    [point.x, point.y, point.z]
                ],
                spatialReference: _this.view.spatialReference
            };
            var polylineSymbol;
            if (trailsymbol !== undefined) {
                polylineSymbol = trailsymbol;
            }
            else {
                polylineSymbol = {
                    type: 'simple-line',
                    color: [156, 39, 176],
                    width: 10
                };
            }
            var animateGraphic = new Graphic({
                geometry: animateLine,
                symbol: polylineSymbol
            });
            var animateRouteLayer = _this.view.map.findLayerById(_this.displayedLayerid);
            if (typeof (animateRouteLayer) === 'undefined') {
                animateRouteLayer = new GraphicsLayer({
                    title: '漫游路径' + _this.displayedLayerid,
                    id: _this.displayedLayerid,
                    listMode: 'hide'
                });
                _this.view.map.add(animateRouteLayer);
            }
            animateRouteLayer.add(animateGraphic);
        });
    };
    TrajectoryPlus.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.mobilelayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return TrajectoryPlus;
}(EventEmitter));
export default TrajectoryPlus;
