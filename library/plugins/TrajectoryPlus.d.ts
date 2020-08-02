import ITrajectoryPlusOptions from './interface/ITrajectoryPlusOptions.js';
import EventEmitter from './mod.js';
export default class TrajectoryPlus extends EventEmitter {
    displayedLayerid: any;
    private view;
    private mapRoamplayinternal;
    private mobilelayerid;
    constructor(view: any);
    play(playbackoption?: ITrajectoryPlusOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
