import ILabelOption from '../interface/ILabelOption';
export default class Label {
    type: string;
    text: string;
    color: string;
    visible: boolean;
    size: number;
    weight: string;
    angle: number;
    backgroundColor: string;
    borderLineColor: string;
    borderLineSize: number;
    haloColor: string;
    haloSize: number;
    horizontalAlignment: string;
    verticalAlignment: string;
    kerning: boolean;
    lineHeight: number;
    lineWidth: number;
    rotated: boolean;
    xoffset: number;
    yoffset: number;
    zoffset: number;
    placement: string;
    maxScale: number;
    minScale: number;
    constructor(labeloption: ILabelOption);
}
