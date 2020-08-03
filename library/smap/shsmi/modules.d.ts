import { ILoadAPIScriptOptions } from './script.js';
export declare function load<T extends any[] = any[]>(modules: string[], loadAPIScriptOptions?: ILoadAPIScriptOptions): Promise<T>;
