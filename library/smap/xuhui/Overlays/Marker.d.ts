import IMarkOptions from '../interface/IMarkOptions.js';
import Icon from '../Overlays/Icon.js';
import Overlayerbase from './Overlayerbase.js';
export default class Marker extends Overlayerbase {
    icon: Icon;
    position: [number, number, number?];
    constructor(markeroption: IMarkOptions);
}
