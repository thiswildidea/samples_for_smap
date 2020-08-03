import LngLat from '../common/LngLat.js';
import IPolylineOption from '../interface/IPolylineOption.js';
import Overlayerbase from './Overlayerbase.js';
export default class Polyline extends Overlayerbase {
    path: LngLat[];
    cap: string;
    strokeColor: string;
    style: string;
    lineJoin: string;
    width: number;
    constructor(ploption: IPolylineOption);
}
