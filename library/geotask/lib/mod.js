// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = new Map();
    }
    EventEmitter.prototype._addListener = function (eventName, listener, prepend) {
        this.emit("newListener", eventName, listener);
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName);
            if (prepend) {
                listeners.unshift(listener);
            }
            else {
                listeners.push(listener);
            }
        }
        else {
            this.events.set(eventName, [listener]);
        }
        var max = this.getMaxListeners();
        if (max > 0 && this.listenerCount(eventName) > max) {
            var warning = new Error("Possible EventEmitter memory leak detected.\n         " + this.listenerCount(eventName) + " " + eventName.toString() + " listeners.\n         Use emitter.setMaxListeners() to increase limit");
            warning.name = "MaxListenersExceededWarning";
            console.warn(warning);
        }
        return this;
    };
    EventEmitter.prototype.addListener = function (eventName, listener) {
        return this._addListener(eventName, listener, false);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName).slice(); // We copy with slice() so array is not mutated during emit
            for (var _a = 0, listeners_1 = listeners; _a < listeners_1.length; _a++) {
                var listener = listeners_1[_a];
                try {
                    listener.apply(this, args);
                }
                catch (err) {
                    this.emit("error", err);
                }
            }
            return true;
        }
        else if (eventName === "error") {
            var errMsg = args.length > 0 ? args[0] : Error("Unhandled error.");
            throw errMsg;
        }
        return false;
    };
    EventEmitter.prototype.eventNames = function () {
        return Array.from(this.events.keys());
    };
    EventEmitter.prototype.getMaxListeners = function () {
        return this.maxListeners || EventEmitter.defaultMaxListeners;
    };
    EventEmitter.prototype.listenerCount = function (eventName) {
        if (this.events.has(eventName)) {
            return this.events.get(eventName).length;
        }
        else {
            return 0;
        }
    };
    EventEmitter.prototype._listeners = function (target, eventName, unwrap) {
        if (!target.events.has(eventName)) {
            return [];
        }
        var eventListeners = target.events.get(eventName);
        return unwrap
            ? this.unwrapListeners(eventListeners)
            : eventListeners.slice(0);
    };
    EventEmitter.prototype.unwrapListeners = function (arr) {
        var unwrappedListeners = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) {
            unwrappedListeners[i] = arr[i]["listener"] || arr[i];
        }
        return unwrappedListeners;
    };
    EventEmitter.prototype.listeners = function (eventName) {
        return this._listeners(this, eventName, true);
    };
    EventEmitter.prototype.rawListeners = function (eventName) {
        return this._listeners(this, eventName, false);
    };
    EventEmitter.prototype.off = function (eventName, listener) {
        return this.removeListener(eventName, listener);
    };
    EventEmitter.prototype.on = function (eventName, listener) {
        return this.addListener(eventName, listener);
    };
    EventEmitter.prototype.once = function (eventName, listener) {
        var wrapped = this.onceWrap(eventName, listener);
        this.on(eventName, wrapped);
        return this;
    };
    // Wrapped function that calls EventEmitter.removeListener(eventName, self) on execution.
    EventEmitter.prototype.onceWrap = function (eventName, listener) {
        var wrapper = function () {
            var args = []; // eslint-disable-line @typescript-eslint/no-explicit-any
            for (var _i = 0 // eslint-disable-line @typescript-eslint/no-explicit-any
            ; _i < arguments.length // eslint-disable-line @typescript-eslint/no-explicit-any
            ; _i++ // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
                args[_i] = arguments[_i]; // eslint-disable-line @typescript-eslint/no-explicit-any
            }
            this.context.removeListener(this.eventName, this.rawListener);
            this.listener.apply(this.context, args);
        };
        var wrapperContext = {
            eventName: eventName,
            listener: listener,
            rawListener: wrapper,
            context: this
        };
        var wrapped = wrapper.bind(wrapperContext);
        wrapperContext.rawListener = wrapped;
        wrapped.listener = listener;
        return wrapped;
    };
    EventEmitter.prototype.prependListener = function (eventName, listener) {
        return this._addListener(eventName, listener, true);
    };
    EventEmitter.prototype.prependOnceListener = function (eventName, listener) {
        var wrapped = this.onceWrap(eventName, listener);
        this.prependListener(eventName, wrapped);
        return this;
    };
    EventEmitter.prototype.removeAllListeners = function (eventName) {
        var _this = this;
        if (this.events === undefined) {
            return this;
        }
        if (this.events.has(eventName)) {
            var listeners = this.events.get(eventName).slice(); // Create a copy; We use it AFTER it's deleted.
            this.events.delete(eventName);
            for (var _i = 0, listeners_2 = listeners; _i < listeners_2.length; _i++) {
                var listener = listeners_2[_i];
                this.emit("removeListener", eventName, listener);
            }
        }
        else {
            var eventList = this.eventNames();
            eventList.map(function (value) {
                _this.removeAllListeners(value);
            });
        }
        return this;
    };
    EventEmitter.prototype.removeListener = function (eventName, listener) {
        if (this.events.has(eventName)) {
            var arr = this.events.get(eventName);
            if (arr.indexOf(listener) !== -1) {
                arr.splice(arr.indexOf(listener), 1);
                this.emit("removeListener", eventName, listener);
                if (arr.length === 0) {
                    this.events.delete(eventName);
                }
            }
        }
        return this;
    };
    EventEmitter.prototype.setMaxListeners = function (n) {
        this.maxListeners = n;
        return this;
    };
    EventEmitter.defaultMaxListeners = 50;
    return EventEmitter;
}());
export default EventEmitter;
