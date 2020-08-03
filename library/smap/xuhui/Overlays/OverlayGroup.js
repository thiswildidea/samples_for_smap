import Guid from '../utils/Guid.js';
var OverlayGroup = /** @class */ (function () {
    function OverlayGroup(olayers, overLayerGroupOption) {
        this.uuid = new Guid().uuid;
        this.overlayers = olayers;
        this.type = "group";
        this.overlaytype = overLayerGroupOption.overlaytype === undefined ? 'marker' : overLayerGroupOption.overlaytype;
        this.datafiled = overLayerGroupOption.datafiled === undefined ? [] : overLayerGroupOption.datafiled;
        this.style = overLayerGroupOption.style === undefined ? [] : overLayerGroupOption.style;
        this.label = overLayerGroupOption.label === undefined ? null : overLayerGroupOption.label;
        this.frreduction = overLayerGroupOption.frreduction === undefined ? null : overLayerGroupOption.frreduction;
    }
    return OverlayGroup;
}());
export default OverlayGroup;
