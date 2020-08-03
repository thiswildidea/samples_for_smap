import Overlayerbase from '../Overlays/Overlayerbase.js';
import OverlayGroup from '../Overlays/OverlayGroup.js';
export default interface IOverlayers {
    add(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
    remove(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
    update(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
    addfeature(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
    updatefeature(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
    removefeature(overlayers: Overlayerbase | Overlayerbase[] | OverlayGroup): void;
}
