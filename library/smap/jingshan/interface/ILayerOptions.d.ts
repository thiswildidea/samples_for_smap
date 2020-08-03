export default interface ILayerOptions {
    layerType: string;
    layerUrl: string;
    isToken: boolean;
    layerTitle: string;
    layerLayerId: string;
    layerOpacity?: number;
    layerVisible?: boolean;
    layerLabelingInfo?: any;
    layerMaxScale?: number;
    layerMinScale?: number;
    layerPopupEnabled?: boolean;
    layerPopupTemplate?: any;
    layerLabelsVisible?: boolean;
    layerRenderer?: any;
    layerSublayers?: any;
}
