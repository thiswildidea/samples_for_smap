var Bounds = /** @class */ (function () {
    function Bounds(southwest, northeast) {
        this.northeast = northeast;
        this.southwest = southwest;
        this.xmin = southwest[0];
        this.ymin = southwest[1];
        this.zmin = southwest[2] !== undefined ? southwest[2] : undefined;
        this.xmax = northeast[0];
        this.ymax = northeast[1];
        this.zmax = northeast[2] !== undefined ? northeast[2] : undefined;
    }
    return Bounds;
}());
export default Bounds;
