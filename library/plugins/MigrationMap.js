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
import utils from './utils/index.js';
var MigrationMap = /** @class */ (function (_super) {
    __extends(MigrationMap, _super);
    function MigrationMap(view) {
        var _this = _super.call(this) || this;
        _this.view = null;
        _this.init(view);
        return _this;
    }
    MigrationMap.prototype.add = function (mgrationMapOptions) {
        var _this = this;
        if (mgrationMapOptions === void 0) { mgrationMapOptions = {}; }
        load(['esri/layers/echartsLayer'])
            // tslint:disable-next-line:no-shadowed-variable
            .then(function (_a) {
            var echartsLayer = _a[0];
            //  this.loadAPIScript('echartsgl', Mapcofig.jsapi + '/extensions/echarts/echarts-gl.js').then(() => {
            //  this.loadAPIScript('echartsmin', Mapcofig.jsapi + '/extensions/echarts/echarts.min.js').then(() => {
            var eseries = [];
            mgrationMapOptions.datas.forEach(function (item, i) {
                eseries.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    coordinateSystem: 'arcgis',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: _this.convertData(item[1], mgrationMapOptions.geoCoordMap)
                }, {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: mgrationMapOptions.planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: _this.convertData(item[1], mgrationMapOptions.geoCoordMap)
                }, {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'arcgis',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    legendHoverLink: true,
                    hoverAnimation: true,
                    symbol: mgrationMapOptions.symbol,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: mgrationMapOptions.color[i],
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: mgrationMapOptions.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
            });
            var chart = new echartsLayer(_this.view, "", mgrationMapOptions.id);
            var option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: eseries
            };
            chart.setChartOption(option);
        });
        //     });
        //   });
    };
    MigrationMap.prototype.remove = function (echartid) {
        var parent = document.getElementsByClassName("esri-view-surface")[0];
        var box = document.getElementById(echartid);
        if (box != null) {
            parent.removeChild(box);
        }
    };
    MigrationMap.prototype.convertData = function (data, geoCoordMap) {
        var res = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            var dataItem = value;
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };
    MigrationMap.prototype.getAPIScript = function (name) {
        return document.querySelector('script[' + name + ']');
    };
    MigrationMap.prototype.loadAPIScript = function (name, url) {
        var _this = this;
        return new utils.Promise(function (resolve, reject) {
            var script = _this.getAPIScript(name);
            if (script) {
                var src = script.getAttribute('src');
                if (src !== url) {
                    reject(new Error("The echartgl is already loaded (" + src + ")."));
                }
                else {
                    _this.handleScriptLoad(script, resolve, reject);
                }
            }
            else {
                script = _this.createScript(name, url);
                _this.handleScriptLoad(script, function () {
                    script.setAttribute(name, 'loaded');
                    resolve(script);
                }, reject);
                document.head.appendChild(script);
            }
        });
    };
    MigrationMap.prototype.createScript = function (name, url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.setAttribute(name, 'loading');
        return script;
    };
    MigrationMap.prototype.handleScriptLoad = function (script, callback, errback) {
        var onScriptError;
        if (errback) {
            onScriptError = this.handleScriptError(script, errback);
        }
        var onScriptLoad = function () {
            callback(script);
            script.removeEventListener('load', onScriptLoad, false);
            if (onScriptError) {
                script.removeEventListener('error', onScriptError, false);
            }
        };
        script.addEventListener('load', onScriptLoad, false);
    };
    MigrationMap.prototype.handleScriptError = function (script, callback) {
        var onScriptError = function (e) {
            callback(e.error || new Error("There was an error attempting to load " + script.src));
            script.removeEventListener('error', onScriptError, false);
        };
        script.addEventListener('error', onScriptError, false);
        return onScriptError;
    };
    MigrationMap.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return MigrationMap;
}(EventEmitter));
export default MigrationMap;
