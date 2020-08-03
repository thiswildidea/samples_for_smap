var MapControlBase = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function MapControlBase(mapoptons) {
        this.visible = mapoptons.visible === undefined || mapoptons.visible ? true : false;
        this.position = mapoptons.position === undefined || mapoptons.position === 'top-right' ?
            'top-right' : mapoptons.position;
        this.collapse = mapoptons.collapse === true ? true : false;
    }
    return MapControlBase;
}());
export default MapControlBase;
