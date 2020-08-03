declare class EventEmitter {
    static defaultMaxListeners: number;
    private maxListeners;
    private events;
    constructor();
    private _addListener;
    addListener(eventName: string | symbol, listener: Function): this;
    emit(eventName: string | symbol, ...args: any[]): boolean;
    eventNames(): [string | symbol];
    getMaxListeners(): number;
    listenerCount(eventName: string | symbol): number;
    private _listeners;
    private unwrapListeners;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    off(eventName: string | symbol, listener: Function): this;
    on(eventName: string | symbol, listener: Function): this;
    once(eventName: string | symbol, listener: Function): this;
    private onceWrap;
    prependListener(eventName: string | symbol, listener: Function): this;
    prependOnceListener(eventName: string | symbol, listener: Function): this;
    removeAllListeners(eventName?: string | symbol): this;
    removeListener(eventName: string | symbol, listener: Function): this;
    setMaxListeners(n: number): this;
}
export default EventEmitter;
