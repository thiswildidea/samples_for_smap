export declare function parseVersion(version: any): "next" | {
    major: number;
    minor: number;
};
export declare function parseVersionnew(version: any): {
    major: number;
    minor: number;
};
export declare function getCdnUrl(version?: string): string;
export declare function getCdnCssUrl(version?: string): string;
