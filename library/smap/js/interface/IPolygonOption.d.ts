import LngLat from '../common/LngLat.js';
import IOverlayerOptions from './IOverlayerOptions.js';
export default interface IPolygonOption extends IOverlayerOptions {
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
}
