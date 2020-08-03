import IOverlayerOptions from '../interface/IOverlayerOptions.js';
import Label from '../Overlays/Label.js';
export default class Overlayerbase {
    overlaytype: string;
    uuid: string;
    type: any;
    label: Label;
    attributes: any;
    constructor(overlayeroption: IOverlayerOptions);
}
