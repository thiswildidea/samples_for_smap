import IQueryOptions from './interface/IQueryOptions.js';
import EventEmitter from './mod.js';
export default class Query extends EventEmitter {
    private view;
    private displayedLayerid;
    constructor(view: any);
    featureLayer<T extends any = any>(queryFeaturelayerOptions?: IQueryOptions): Promise<T>;
    mapImageLayer<T extends any = any>(queryFeaturelayerOptions?: IQueryOptions): Promise<T>;
    remove(): void;
    show(): void;
    hide(): void;
    private init;
}
