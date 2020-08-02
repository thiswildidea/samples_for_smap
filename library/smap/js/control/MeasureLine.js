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
import MapControlBase from '../interface/MapControlBase.js';
var MeasureLine = /** @class */ (function (_super) {
    __extends(MeasureLine, _super);
    // tslint:disable-next-line:no-empty
    function MeasureLine(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'measureline';
        return _this;
    }
    return MeasureLine;
}(MapControlBase));
export default MeasureLine;
