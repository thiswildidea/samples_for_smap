import LngLat from '../common/LngLat.js';
import IOverlayerOptions from './IOverlayerOptions.js';
export default interface IPolylineOption extends IOverlayerOptions {
    path: LngLat[];
    cap: string;
    strokeColor: string;
    style: string;
    lineJoin: string;
    width: number;
}
