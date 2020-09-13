;
import {
    Matrix4,
    Object3D,
    Vector3
} from './three.module.r119.js';
var CSS2DObject = function (b) {
    Object3D.call(this);
    this.element = b || document.createElement('div');
    this.element.style.position = 'absolute';
    this.addEventListener('removed', function () {
        this.traverse(function (a) {
            if (a.element instanceof Element && a.element.parentNode !== null) {
                a.element.parentNode.removeChild(a.element)
            }
        })
    })
};
CSS2DObject.prototype = Object.assign(Object.create(Object3D.prototype), {
    constructor: CSS2DObject,
    copy: function (a, b) {
        Object3D.prototype.copy.call(this, a, b);
        this.element = a.element.cloneNode(true);
        return this
    },
});
var CSS2DRenderer = function () {
    var h = this;
    var j, _height;
    var k, _heightHalf;
    var m = new Vector3();
    var n = new Matrix4();
    var o = new Matrix4();
    var p = {
        objects: new WeakMap(),
    };
    var q = document.createElement('div');
    q.style.overflow = 'hidden';
    this.domElement = q;
    this.getSize = function () {
        return {
            width: j,
            height: _height,
        }
    };
    this.setSize = function (a, b) {
        j = a;
        _height = b;
        k = j / 2;
        _heightHalf = _height / 2;
        q.style.width = a + 'px';
        q.style.height = b + 'px'
    };
    var r = function (a, b, c) {
        if (a instanceof CSS2DObject) {
            a.onBeforeRender(h, b, c);
            m.setFromMatrixPosition(a.matrixWorld);
            m.applyMatrix4(o);
            var d = a.element;
            var e = 'translate(-50%,-50%) translate(' + (m.x * k + k) + 'px,' + (-m.y * _heightHalf + _heightHalf) + 'px)';
            d.style.WebkitTransform = e;
            d.style.MozTransform = e;
            d.style.oTransform = e;
            d.style.transform = e;
            d.style.display = a.visible && m.z >= -1 && m.z <= 1 ? '' : 'none';
            var f = {
                distanceToCameraSquared: s(c, a),
            };
            p.objects.set(a, f);
            if (d.parentNode !== q) {
                q.appendChild(d)
            }
            a.onAfterRender(h, b, c)
        }
        for (var i = 0, l = a.children.length; i < l; i++) {
            r(a.children[i], b, c)
        }
    };
    var s = (function () {
        var a = new Vector3();
        var b = new Vector3();
        return function (c, d) {
            a.setFromMatrixPosition(c.matrixWorld);
            b.setFromMatrixPosition(d.matrixWorld);
            return a.distanceToSquared(b)
        }
    })();
    var t = function (b) {
        var c = [];
        b.traverse(function (a) {
            if (a instanceof CSS2DObject) c.push(a)
        });
        return c
    };
    var u = function (e) {
        var f = t(e).sort(function (a, b) {
            var c = p.objects.get(a).distanceToCameraSquared;
            var d = p.objects.get(b).distanceToCameraSquared;
            return c - d
        });
        var g = f.length;
        for (var i = 0, l = f.length; i < l; i++) {
            f[i].element.style.zIndex = g - i
        }
    };
    this.render = function (a, b) {
        if (a.autoUpdate === true) a.updateMatrixWorld();
        if (b.parent === null) b.updateMatrixWorld();
        n.copy(b.matrixWorldInverse);
        o.multiplyMatrices(b.projectionMatrix, n);
        r(a, a, b);
        u(a)
    }
};
export {
    CSS2DObject,
    CSS2DRenderer
};;