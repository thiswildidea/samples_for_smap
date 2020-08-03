import IOverLayerGroupOption from '../interface/IOverLayerGroupOption.js';
import Label from '../Overlays/Label.js';
import FeatureReduction from './FeatureReduction.js';
import Overlayerbase from './Overlayerbase.js';
export default class OverlayGroup {
    uuid: string;
    type: any;
    overlayers: Overlayerbase[];
    overlaytype: string;
    datafiled: any;
    style: any;
    label: Label;
    frreduction: FeatureReduction;
    constructor(olayers: Overlayerbase[], overLayerGroupOption: IOverLayerGroupOption);
}
