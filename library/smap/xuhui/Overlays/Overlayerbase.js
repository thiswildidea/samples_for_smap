import Guid from '../utils/Guid.js';
var Overlayerbase = /** @class */ (function () {
    function Overlayerbase(overlayeroption) {
        this.uuid = new Guid().uuid;
        this.label = overlayeroption.label;
        this.attributes = overlayeroption.attributes === undefined ? {} : overlayeroption.attributes;
        this.type = "element";
    }
    return Overlayerbase;
}());
export default Overlayerbase;
