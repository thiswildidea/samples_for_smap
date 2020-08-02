import Icon from '../Overlays/Icon.js';
import IOverlayerOptions from './IOverlayerOptions.js';
export default interface IMarkOptions extends IOverlayerOptions {
    position: [number, number, number?];
    icon: Icon;
}
