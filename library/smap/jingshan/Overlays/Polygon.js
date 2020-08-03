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
import Overlayerbase from './Overlayerbase.js';
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(ploption) {
        var _this = _super.call(this, ploption) || this;
        _this.overlaytype = 'polygon';
        _this.paths = ploption.paths;
        _this.symboltype = ploption.symboltype === undefined ? 'simple' : ploption.symboltype;
        _this.fillColor = ploption.fillColor === undefined ? 'white' : ploption.fillColor;
        _this.style = ploption.style === undefined ? 'solid' : ploption.style;
        _this.strokeColor = ploption.strokeColor === undefined ? 'red' : ploption.strokeColor;
        _this.strokestyle = ploption.strokestyle === undefined ? 'solid' : ploption.strokestyle;
        _this.strokeWeight = ploption.strokeWeight === undefined ? 2 : ploption.strokeWeight;
        _this.url = ploption.url === undefined ? '' : ploption.url;
        _this.picwidth = ploption.picwidth === undefined ? 20 : ploption.picwidth;
        _this.picheight = ploption.picheight === undefined ? 20 : ploption.picheight;
        return _this;
    }
    return Polygon;
}(Overlayerbase));
export default Polygon;
