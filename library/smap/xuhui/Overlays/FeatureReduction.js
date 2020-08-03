var FeatureReduction = /** @class */ (function () {
    function FeatureReduction(froption) {
        this.type = 'text';
        this.type = froption.type === undefined ? 'cluster' : froption.type;
        this.clusterRadius = froption.clusterRadius === undefined ? 100 : froption.clusterRadius;
    }
    return FeatureReduction;
}());
export default FeatureReduction;
