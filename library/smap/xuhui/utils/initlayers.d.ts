import ILayerOptions from '../interface/ILayerOptions.js';
export declare function init3DBaseMaplayers(layers: any[], maptoken: any): Promise<any>;
export declare function init2DBaseMaplayers(layers: any[], maptoken: any): Promise<any>;
export declare function initsmapbussinesslayers(layerGroups: any, maptoken: any, viewMode: any): Promise<any>;
export declare function initbuildingsLayers(buildingsLayers: any, maptoken: any): Promise<any>;
export declare function addLayer(layerOptions: ILayerOptions, view: any, maptoken: string): Promise<any>;
