import Bounds from './Bounds.js';
import LngLat from './common/LngLat.js';
import BasemapToggle from './control/BasemapToggle.js';
import BIMFilterControl from './control/BIMFilterControl.js';
import BMapGallery from './control/BMapGallery.js';
import BMapGalleryExpand from './control/BMapGalleryExpand.js';
import Compass from './control/Compass.js';
import Fullscreen from './control/Fullscreen.js';
import Home from './control/Home.js';
import LayerListControl from './control/LayerListControl.js';
import MeasureArea from './control/MeasureArea.js';
import MeasureLine from './control/MeasureLine.js';
import UndergroundSwitch from './control/UndergroundSwitch.js';
import Zoom from './control/Zoom.js';
import Map from './Map.js';
import { load } from './modules.js';
import FeatureReduction from './Overlays/FeatureReduction.js';
import Icon from './Overlays/Icon.js';
import Label from './Overlays/Label.js';
import Marker from './Overlays/Marker.js';
import OverlayGroup from './Overlays/OverlayGroup.js';
import Polygon from './Overlays/Polygon.js';
import Polyline from './Overlays/Polyline.js';
import Size from './Overlays/Size.js';
import MapEvent from './utils/MapEvent.js';
export default {
    load: load,
    Bounds: Bounds,
    LayerListControl: LayerListControl,
    Zoom: Zoom,
    Home: Home,
    Compass: Compass,
    Fullscreen: Fullscreen,
    MeasureArea: MeasureArea,
    MeasureLine: MeasureLine,
    BasemapToggle: BasemapToggle,
    BMapGallery: BMapGallery,
    BMapGalleryExpand: BMapGalleryExpand,
    UndergroundSwitch: UndergroundSwitch,
    BIMFilterControl: BIMFilterControl,
    Marker: Marker,
    Icon: Icon,
    Size: Size,
    Label: Label,
    FeatureReduction: FeatureReduction,
    OverlayGroup: OverlayGroup,
    LngLat: LngLat,
    Polyline: Polyline,
    Polygon: Polygon,
    MapEvent: MapEvent,
    Map: Map
};
