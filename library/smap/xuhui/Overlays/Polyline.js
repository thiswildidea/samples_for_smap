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
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(ploption) {
        var _this = _super.call(this, ploption) || this;
        _this.overlaytype = 'Polyline';
        _this.path = ploption.path;
        _this.cap = ploption.cap === undefined ? 'square' : ploption.cap;
        _this.strokeColor = ploption.strokeColor === undefined ? 'red' : ploption.strokeColor;
        _this.style = ploption.style === undefined ? 'solid' : ploption.style;
        _this.lineJoin = ploption.lineJoin === undefined ? 'round' : ploption.lineJoin;
        _this.width = ploption.width === undefined ? 5 : ploption.width;
        return _this;
    }
    return Polyline;
}(Overlayerbase));
export default Polyline;
