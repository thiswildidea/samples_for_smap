import IMigrationMapOptions from './interface/IMigrationMapOptions.js';
import EventEmitter from './mod.js';
export default class MigrationMap extends EventEmitter {
    private view;
    constructor(view: any);
    add(mgrationMapOptions?: IMigrationMapOptions): void;
    remove(echartid: any): void;
    private convertData;
    private getAPIScript;
    private loadAPIScript;
    private createScript;
    private handleScriptLoad;
    private handleScriptError;
    private init;
}
