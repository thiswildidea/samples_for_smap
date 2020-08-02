var Guid = /** @class */ (function () {
    function Guid() {
        this.uuid = this.get_uuid();
    }
    Guid.prototype.S4 = function () {
        // tslint:disable-next-line:no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    Guid.prototype.get_uuid = function () {
        return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() +
            "-" + this.S4() + this.S4() + this.S4());
    };
    return Guid;
}());
export default Guid;
