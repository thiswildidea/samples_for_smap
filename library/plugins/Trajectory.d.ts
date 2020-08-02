import ITrajectoryOptions from './interface/ITrajectoryOptions.js';
import EventEmitter from './mod.js';
export default class Trajectory extends EventEmitter {
    displayedLayerid: any;
    private view;
    private routepalybackinternal;
    private track;
    constructor(view: any);
    play(playbackoption?: ITrajectoryOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
