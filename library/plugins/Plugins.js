import Boundary from './Boundary.js';
import HeatMap from './HeatMap.js';
import Layers from './interface/Layers.js';
import MaskBoundary from './MaskBoundary.js';
import MigrationMap from './MigrationMap.js';
import { load } from './modules.js';
import Trajectory from './Trajectory.js';
import TrajectoryPlus from './TrajectoryPlus.js';
export default {
    load: load,
    Layers: Layers,
    Boundary: Boundary,
    HeatMap: HeatMap,
    MaskBoundary: MaskBoundary,
    TrajectoryPlus: TrajectoryPlus,
    MigrationMap: MigrationMap,
    Trajectory: Trajectory
};
