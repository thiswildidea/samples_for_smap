export default interface IMapOptions {
    userName?: string;
    menuName?: string;
    tokenconfigname?: string;
    viewMode?: string;
    zoom?: number;
    zooms?: [number, number];
    center?: number[];
    pitch?: number;
    rotateEnable?: boolean;
    mapStyle?: string;
    showBuildingBlock?: boolean;
}
