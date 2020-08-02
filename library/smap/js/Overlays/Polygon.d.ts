import LngLat from '../common/LngLat.js';
import IPolygonOption from '../interface/IPolygonOption.js';
import Overlayerbase from './Overlayerbase.js';
export default class Polygon extends Overlayerbase {
    paths: LngLat[];
    symboltype: string;
    fillColor: string;
    strokeColor: string;
    style: string;
    strokeWeight: number;
    url: string;
    picwidth: number;
    picheight: number;
    strokestyle: string;
    constructor(ploption: IPolygonOption);
}
