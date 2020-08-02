export interface ILoadAPIScriptOptions {
    version?: string;
    url?: string;
    css?: string | boolean;
    dojoConfig?: {
        [propName: string]: any;
    };
    insertCssBefore?: string;
}
export declare function setSMIMapOptions(options?: ILoadAPIScriptOptions): void;
export declare function getAPIScript(): HTMLScriptElement;
export declare function isLoaded(): any;
export declare function loadAPIScript(options?: ILoadAPIScriptOptions): Promise<HTMLScriptElement>;
