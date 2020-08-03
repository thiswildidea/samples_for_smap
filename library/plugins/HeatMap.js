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
var HeatMap = /** @class */ (function (_super) {
    __extends(HeatMap, _super);
    function HeatMap(view) {
        var _this = _super.call(this) || this;
        _this.displayedLayerid = "";
        _this.view = null;
        _this.heatmaplayer = null;
        _this.init(view);
        return _this;
    }
    HeatMap.prototype.add = function (heatmapOptions) {
        var _this = this;
        load(['smiapi/utils/HeatMapLayer'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var HeatMapLayer = _a[0];
            var config = {
                container: document.getElementById(heatmapOptions.container),
                radius: heatmapOptions.radius || 30,
                maxOpacity: heatmapOptions.maxOpacity || 0.8,
                minOpacity: heatmapOptions.minOpacity || 0,
                blur: heatmapOptions.blur || .7,
                gradient: heatmapOptions.gradient || {
                    0: "rgb(0,0,0)",
                    0.3: "rgb(0,0,255)",
                    0.8: "rgb(0,255,0)",
                    0.98: "rgb(255,255,0)",
                    1: "rgb(255,0,0)"
                }
            };
            _this.heatmaplayer = new HeatMapLayer(_this.view, config, heatmapOptions.datas, heatmapOptions.h337, heatmapOptions.id);
            _this.heatmaplayer.addData();
        });
    };
    HeatMap.prototype.remove = function (heatmapid) {
        var parent = document.getElementsByClassName("esri-view-surface")[0];
        var box = document.getElementById(heatmapid);
        if (box != null) {
            parent.removeChild(box);
        }
    };
    HeatMap.prototype.refreshdata = function (datas) {
        this.heatmaplayer.setVisible(true);
        this.heatmaplayer.freshenLayerData(datas);
    };
    HeatMap.prototype.show = function () {
        this.heatmaplayer.setVisible(true);
    };
    HeatMap.prototype.hide = function () {
        this.heatmaplayer.setVisible(false);
    };
    HeatMap.prototype.init = function (view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.displayedLayerid = new Guid().uuid;
                this.view = view;
                return [2 /*return*/];
            });
        });
    };
    return HeatMap;
}(EventEmitter));
export default HeatMap;
