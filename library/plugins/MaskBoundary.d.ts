import IMaskOptions from './interface/IMaskOptions.js';
import EventEmitter from './mod.js';
export default class Boundary extends EventEmitter {
    displayedLayerid: any;
    private view;
    constructor(view: any);
    add(maskOptions: IMaskOptions): void;
    remove(): void;
    show(): void;
    hide(): void;
    private init;
}
