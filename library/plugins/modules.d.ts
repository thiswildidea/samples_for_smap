import { ILoadAPIScriptOptions } from './script';
export declare function load<T extends any[] = any[]>(modules: string[], loadAPIScriptOptions?: ILoadAPIScriptOptions): Promise<T>;
