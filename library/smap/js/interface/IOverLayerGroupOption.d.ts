import FeatureReduction from '../Overlays/FeatureReduction.js';
import Label from '../Overlays/Label.js';
export default interface IOverLayerGroupOption {
    overlaytype?: string;
    datafiled?: any;
    style: any;
    label: Label;
    frreduction?: FeatureReduction;
}
