var LngLat = /** @class */ (function () {
    function LngLat(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z === undefined ? 0 : z;
    }
    return LngLat;
}());
export default LngLat;
