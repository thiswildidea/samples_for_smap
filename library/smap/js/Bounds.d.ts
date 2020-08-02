export default class Bounds {
    northeast: number[];
    southwest: number[];
    xmin: number;
    ymin: number;
    zmin?: number;
    xmax: number;
    ymax: number;
    zmax?: number;
    constructor(southwest: number[], northeast: number[]);
}
