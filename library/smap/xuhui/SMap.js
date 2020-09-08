(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SMap = factory());
}(this, (function () { 'use strict';

var Bounds = /** @class */ (function () {
    function Bounds(southwest, northeast) {
        this.northeast = northeast;
        this.southwest = southwest;
        this.xmin = southwest[0];
        this.ymin = southwest[1];
        this.zmin = southwest[2] !== undefined ? southwest[2] : undefined;
        this.xmax = northeast[0];
        this.ymax = northeast[1];
        this.zmax = northeast[2] !== undefined ? northeast[2] : undefined;
    }
    return Bounds;
}());

var LngLat = /** @class */ (function () {
    function LngLat(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z === undefined ? 0.1 : z;
    }
    return LngLat;
}());

var MapControlBase = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function MapControlBase(mapoptons) {
        this.visible = mapoptons.visible === undefined || mapoptons.visible ? true : false;
        this.position = mapoptons.position === undefined || mapoptons.position === 'top-right' ?
            'top-right' : mapoptons.position;
        this.collapse = mapoptons.collapse === true ? true : false;
    }
    return MapControlBase;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasemapToggle = /** @class */ (function (_super) {
    __extends(BasemapToggle, _super);
    // tslint:disable-next-line:no-empty
    function BasemapToggle(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'basemaptoggle';
        return _this;
    }
    return BasemapToggle;
}(MapControlBase));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BIMFilterControl = /** @class */ (function (_super) {
    __extends$1(BIMFilterControl, _super);
    // tslint:disable-next-line:no-empty
    function BIMFilterControl(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'bimfilter';
        _this.layerid = mapoptons.layerid;
        return _this;
    }
    return BIMFilterControl;
}(MapControlBase));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMapGallery = /** @class */ (function (_super) {
    __extends$2(BMapGallery, _super);
    // tslint:disable-next-line:no-empty
    function BMapGallery(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'basemapgallery';
        return _this;
    }
    return BMapGallery;
}(MapControlBase));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMapGalleryExpand = /** @class */ (function (_super) {
    __extends$3(BMapGalleryExpand, _super);
    // tslint:disable-next-line:no-empty
    function BMapGalleryExpand(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'baseMapGalleryExpand';
        return _this;
    }
    return BMapGalleryExpand;
}(MapControlBase));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Compass = /** @class */ (function (_super) {
    __extends$4(Compass, _super);
    // tslint:disable-next-line:no-empty
    function Compass(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'compass';
        return _this;
    }
    return Compass;
}(MapControlBase));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fullscreen = /** @class */ (function (_super) {
    __extends$5(Fullscreen, _super);
    // tslint:disable-next-line:no-empty
    function Fullscreen(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'fullscreen';
        return _this;
    }
    return Fullscreen;
}(MapControlBase));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function (_super) {
    __extends$6(Home, _super);
    // tslint:disable-next-line:no-empty
    function Home(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'home';
        return _this;
    }
    return Home;
}(MapControlBase));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LayerListControl = /** @class */ (function (_super) {
    __extends$7(LayerListControl, _super);
    // tslint:disable-next-line:no-empty
    function LayerListControl(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'toc';
        return _this;
    }
    return LayerListControl;
}(MapControlBase));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MeasureArea = /** @class */ (function (_super) {
    __extends$8(MeasureArea, _super);
    // tslint:disable-next-line:no-empty
    function MeasureArea(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'measurearea';
        return _this;
    }
    return MeasureArea;
}(MapControlBase));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MeasureLine = /** @class */ (function (_super) {
    __extends$9(MeasureLine, _super);
    // tslint:disable-next-line:no-empty
    function MeasureLine(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'measureline';
        return _this;
    }
    return MeasureLine;
}(MapControlBase));

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PerformanceInfoControl = /** @class */ (function (_super) {
    __extends$10(PerformanceInfoControl, _super);
    // tslint:disable-next-line:no-empty
    function PerformanceInfoControl(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'performanceinfo';
        _this.layerid = mapoptons.layerid;
        return _this;
    }
    return PerformanceInfoControl;
}(MapControlBase));

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UndergroundSwitch = /** @class */ (function (_super) {
    __extends$11(UndergroundSwitch, _super);
    // tslint:disable-next-line:no-empty
    function UndergroundSwitch(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'undergroundswitch';
        return _this;
    }
    return UndergroundSwitch;
}(MapControlBase));

var __extends$12 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zoom = /** @class */ (function (_super) {
    __extends$12(Zoom, _super);
    // tslint:disable-next-line:no-empty
    function Zoom(mapoptons) {
        var _this = _super.call(this, mapoptons) || this;
        _this.controlName = 'zoom';
        return _this;
    }
    return Zoom;
}(MapControlBase));

var Layerbase = /** @class */ (function () {
    function Layerbase(layeroption) {
        this.type = "layer";
        this.layerType = layeroption.layerType;
        this.layerUrl = layeroption.layerUrl;
        this.layerId = layeroption.layerId;
        this.layerTitle = layeroption.layerTitle;
        this.isToken = layeroption.isToken !== undefined ? layeroption.isToken : false;
        this.layerOpacity = layeroption.layerOpacity !== undefined ? layeroption.layerOpacity : 1;
        this.layerVisible = layeroption.layerVisible !== undefined ? layeroption.layerVisible : true;
        this.layerLabelingInfo = layeroption.layerLabelingInfo !== undefined ? layeroption.layerLabelingInfo : null;
        this.layerMaxScale = layeroption.layerMaxScale !== undefined ? layeroption.layerMaxScale : 0;
        this.layerMinScale = layeroption.layerMinScale !== undefined ? layeroption.layerMinScale : 0;
        this.layerdefinitionExpression = layeroption.layerdefinitionExpression !== undefined ?
            layeroption.layerdefinitionExpression : null;
        this.layerelevationInfo = layeroption.layerelevationInfo !== undefined ? layeroption.layerelevationInfo : null;
        this.layerPopupEnabled = layeroption.layerPopupEnabled !== undefined ? layeroption.layerPopupEnabled : true;
        this.layerPopupTemplate = layeroption.layerPopupTemplate !== undefined ? layeroption.layerPopupTemplate : null;
        this.layerLabelsVisible = layeroption.layerLabelsVisible !== undefined ? layeroption.layerLabelsVisible : true;
        this.layerRenderer = layeroption.layerRenderer !== undefined ? layeroption.layerRenderer : null;
        this.layerSublayers = layeroption.layerSublayers !== undefined ? layeroption.layerSublayers : null;
        this.layerlistMode = layeroption.layerlistMode !== undefined ? layeroption.layerlistMode : true;
    }
    return Layerbase;
}());

var __extends$13 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Layer = /** @class */ (function (_super) {
    __extends$13(Layer, _super);
    function Layer(layerOptions) {
        return _super.call(this, layerOptions) || this;
    }
    return Layer;
}(Layerbase));

var LayerGroup = /** @class */ (function () {
    function LayerGroup(olayers) {
        this.type = "layergroup";
        this.layers = olayers;
    }
    return LayerGroup;
}());

var Mapcofig = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Mapcofig() {
    }
    Mapcofig.jsapi = 'http://10.201.37.225:8080/smiapi/arcgis';
    Mapcofig.bujianurl = 'http://10.201.37.225:8080/smiapi/arcgis/4.16/esri/layers/json/tileJson.json';
    Mapcofig.jsapiversion4X = '4.16';
    Mapcofig.tokenserver = {
        tokenType: 'free',
        token_front: {
            url: 'http://10.108.3.52:8080/onemap/tokens/generateToken',
            user: 'none',
            password: 'none'
        },
        token_black: {
            url: 'http://10.108.3.16:8401/mapconfig/gistoken',
            tokenconfigname: 'smiapi_new'
        }
    };
    Mapcofig.proxyConifg = {
        useProxy: true,
        url: 'http://10.201.37.225:8080/mapkProx/proxy.jsp?',
        httpsDomains: []
    };
    Mapcofig.fonts = {
        url: 'http://10.201.37.225:8080/smiapi/arcgis/4.16/fonts'
    };
    Mapcofig.gisService = {
        geometryServiceUrl: 'http:///mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Geometry/GeometryServer',
        serverurl: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services',
        baseMapServices: {
            isToken: true,
            tokenType: 'OneMap',
            layers: [{
                    url: 'http://10.201.37.222/arcgis/rest/services/Air2020/MapServer',
                    layerEName: 'basemap_air',
                    isToken: false,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '影像底图',
                    layerCName: '影像底图',
                    type: 'basemap_air'
                }, {
                    url: 'http://10.201.37.222/arcgis/rest/services/BaseMap/MapServer',
                    layerEName: 'basemap_zw',
                    isToken: false,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '政务底图',
                    layerCName: '政务底图',
                    type: 'basemap_zw'
                }, {
                    url: 'http://10.108.3.57/server/rest/services/Hosted/vBasemap2/VectorTileServer',
                    layerEName: 'basemap_as',
                    isToken: false,
                    visible: true,
                    opacity: 1.0,
                    mapType: 'VectorTileLayer',
                    tag: '暗色底图',
                    layerCName: '暗色底图',
                    type: 'basemap_as'
                }]
        },
        buildingsLayers: {
            id: "buildings_3d_layers",
            title: "空间基础",
            tag: "buildings_3d_layers",
            listMode: 'show',
            visible: true,
            layerGroups: [{
                    id: "buildings_3d_above_layers",
                    title: "地上",
                    tag: "buildings_3d_above_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: [{
                            url: 'http://10.201.37.222/arcgis/rest/services/Hosted/XuHuiJingMo/SceneServer',
                            id: 'model_air_real',
                            isToken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '影像底图精模',
                            title: '影像底图精模',
                            elevationInfo: {
                                mode: 'absolute-height',
                                offset: -4
                            },
                            type: 'model_air_real',
                            popupEnabled: true,
                            listMode: 'show'
                        },
                        {
                            url: 'http://10.201.37.222/arcgis/rest/services/Hosted/XuHuiQuBaiMo/SceneServer',
                            id: 'model_white_zw',
                            isToken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '政务白模型',
                            title: '政务白模型',
                            type: 'model_white_zw',
                            popupEnabled: true,
                            listMode: 'show',
                            renderer: {
                                type: 'simple',
                                symbol: {
                                    type: 'mesh-3d',
                                    symbolLayers: [{
                                            type: 'fill',
                                            material: {
                                                color: [255, 255, 255, 0.6],
                                                colorMixMode: 'replace'
                                            },
                                            edges: {
                                                type: 'solid',
                                                color: [0, 0, 0, 0.5],
                                                size: 2
                                            }
                                        }]
                                }
                            }
                        },
                        {
                            url: 'http://10.201.37.222/arcgis/rest/services/Hosted/XuHuiQuBaiMo/SceneServer',
                            id: 'model_white_as',
                            isToken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '暗色白模型',
                            title: '暗色白模型',
                            elevationInfo: {
                                mode: 'absolute-height',
                                offset: 0.5
                            },
                            type: 'model_white_as',
                            popupEnabled: true,
                            listMode: 'show',
                            renderer: {
                                type: 'simple',
                                symbol: {
                                    type: 'mesh-3d',
                                    symbolLayers: [{
                                            type: 'fill',
                                            material: {
                                                color: [52, 193, 229, 1],
                                                colorMixMode: 'replace'
                                            },
                                            edges: {
                                                type: 'solid',
                                                color: [0, 0, 0, 1],
                                                size: 0.5
                                            }
                                        }]
                                },
                                visualVariables: [
                                    {
                                        type: "color",
                                        field: "BUILDING_HEIGHT",
                                        stops: [
                                            {
                                                value: 0,
                                                color: [52, 193, 229, 0.2],
                                                label: "less than 10 meter"
                                            },
                                            {
                                                value: 10,
                                                color: [52, 193, 229, 0.4],
                                                label: "more than 10 floor"
                                            },
                                            {
                                                value: 20,
                                                color: [52, 193, 229, 0.6],
                                                label: "more than 20 floor"
                                            },
                                            {
                                                value: 32,
                                                color: [52, 193, 229, 0.8],
                                                label: "more than 32 floor"
                                            },
                                            {
                                                value: 400,
                                                color: [52, 193, 229, 1],
                                                label: "more than 400 floor"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }]
                }]
        },
        smapbussinessLayers: {
            serverurl: "http://10.201.37.222/arcgis/rest/services",
            istoken: false,
            tokenType: "OneMap",
            layerGroups: [{
                    id: "smap_3D_layers",
                    title: "三维业务组",
                    grouptype: '3D',
                    tag: "smap_3D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: [{
                            url: "http://10.201.37.222/arcgis/rest/services/Hosted/lake/FeatureServer",
                            id: "xh_lake",
                            istoken: true,
                            visible: true,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "xh_lake",
                            title: "徐汇河流",
                            MinScale: 128000,
                            MaxScale: 500,
                            // elevationInfo: {
                            //     mode: "on-the-ground",
                            //     offset: 0.
                            // },
                            renderer: {
                                type: "simple",
                                symbol: {
                                    type: "polygon-3d",
                                    symbolLayers: [{
                                            type: "water",
                                            waveDirection: 180,
                                            color: [0, 47, 71, 0.5],
                                            waveStrength: "moderate",
                                            waterbodySize: "large"
                                        }]
                                }
                            },
                            type: "image",
                            listMode: 'show'
                        }]
                }, {
                    id: "smap_2D_layers",
                    title: "二维业务组",
                    grouptype: '2D',
                    tag: "smap_2D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [{
                            id: "shanghaiboundary",
                            title: "上海边界范围数据",
                            tag: "shanghaiboundary",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://10.201.37.220/server/rest/services/Hosted/sh_qx_boundary/FeatureServer",
                                    id: "qx_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "qx_boundary",
                                    title: "上海区县边界",
                                    renderer: {
                                        type: "simple",
                                        symbol: {
                                            type: "simple-fill",
                                            color: [0, 227, 229, 0],
                                            outline: {
                                                color: [0, 0, 255, 1],
                                                width: "2px"
                                            }
                                        }
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://10.201.37.220/server/rest/services/Hosted/sh_jd_boundary/FeatureServer",
                                    id: "jd_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "jd_boundary",
                                    title: "上海街道边界",
                                    renderer: {
                                        type: "simple",
                                        symbol: {
                                            type: "simple-fill",
                                            color: [0, 227, 229, 0],
                                            outline: {
                                                color: [0, 255, 0, 1],
                                                width: "2px"
                                            }
                                        }
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://10.201.37.220/server/rest/services/Hosted/sh_jwh_boundary/FeatureServer",
                                    id: "jwh_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "jwh_boundary",
                                    title: "上海居委会边界",
                                    renderer: {
                                        type: "simple",
                                        symbol: {
                                            type: "simple-fill",
                                            color: [0, 227, 229, 0],
                                            outline: {
                                                color: [255, 0, 0, 1],
                                                width: "2px"
                                            }
                                        }
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }]
                        }],
                    layers: [
                        {
                            id: "Hight_Graphiclayer",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "GraphicsLayer",
                            tag: "辅助显示图层",
                            title: "辅助显示图层",
                            type: "image",
                            listMode: 'hide'
                        }, {
                            id: "location_Hightlight",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "GraphicsLayer",
                            tag: "地名地址高亮",
                            title: "地名地址高亮",
                            type: "image",
                            listMode: 'hide'
                        }
                    ]
                }]
        },
        smaplabel3d: {
            serverurl: "http://10.201.37.222/arcgis/rest/services",
            istoken: false,
            tokenType: "OneMap",
            layerGroups: [{
                    id: "smap_3d_labelGroup",
                    title: "三维标注",
                    grouptype: '3D',
                    tag: "smap_3d_labelGroup",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [{
                            id: "smap_3d_road_labelGroup",
                            title: "三维标注_路",
                            tag: "smap_3d_road_labelGroup",
                            visible: true,
                            listMode: 'show',
                            layers: [
                                {
                                    url: "http://10.201.37.222/arcgis/rest/services/3dlabel/label3d/MapServer/0",
                                    id: "roadstreet",
                                    istoken: true,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "roadlabel",
                                    title: "道路街道标注标注",
                                    renderer: null,
                                    popupTemplate: null,
                                    popupEnabled: false,
                                    screenSizePerspectiveEnabled: false,
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: 0
                                    },
                                    MaxScale: 0,
                                    MinScale: 4000,
                                    labelsVisible: true,
                                    labelingInfo: [{
                                            symbol: {
                                                type: 'label-3d',
                                                symbolLayers: [{
                                                        type: 'text',
                                                        material: {
                                                            color: '#46B489'
                                                        },
                                                        halo: {
                                                            size: 1,
                                                            color: "black"
                                                        },
                                                        font: {
                                                            family: "Ubuntu Mono Regular",
                                                            size: 32,
                                                            weight: "bold"
                                                        },
                                                        size: 36
                                                    }]
                                            },
                                            labelPlacement: 'center-center',
                                            labelExpressionInfo: {
                                                expression: '$feature.text'
                                            }
                                        }],
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://10.201.37.222/arcgis/rest/services/3dlabel/label3d/MapServer/1",
                                    id: "sroad4000",
                                    istoken: true,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "roadlabel",
                                    title: "道路标注4000-0",
                                    renderer: null,
                                    popupTemplate: null,
                                    popupEnabled: false,
                                    screenSizePerspectiveEnabled: false,
                                    definitionExpression: "ReferenceScale ='4000'",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: 0
                                    },
                                    MaxScale: 0,
                                    MinScale: 4000,
                                    labelsVisible: true,
                                    labelingInfo: [{
                                            symbol: {
                                                type: 'label-3d',
                                                symbolLayers: [{
                                                        type: 'text',
                                                        material: {
                                                            color: '#46B489'
                                                        },
                                                        halo: {
                                                            size: 1,
                                                            color: "black"
                                                        },
                                                        font: {
                                                            family: "Ubuntu Mono Regular",
                                                            size: 32,
                                                            weight: "bold"
                                                        },
                                                        size: 36
                                                    }]
                                            },
                                            labelPlacement: 'center-center',
                                            labelExpressionInfo: {
                                                expression: '$feature.text'
                                            }
                                        }],
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://10.201.37.222/arcgis/rest/services/3dlabel/label3d/MapServer/2",
                                    id: "xhpoi",
                                    istoken: true,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "徐汇兴趣点标注",
                                    title: "徐汇兴趣点标注",
                                    popupEnabled: false,
                                    screenSizePerspectiveEnabled: false,
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: 0
                                    },
                                    MaxScale: 0,
                                    MinScale: 8000,
                                    labelsVisible: true,
                                    labelingInfo: [{
                                            symbol: {
                                                type: 'label-3d',
                                                symbolLayers: [{
                                                        type: 'text',
                                                        material: {
                                                            color: '#46B489'
                                                        },
                                                        halo: {
                                                            size: 1,
                                                            color: "black"
                                                        },
                                                        font: {
                                                            family: "Ubuntu Mono Regular",
                                                            size: 32,
                                                            weight: "bold"
                                                        },
                                                        size: 36
                                                    }]
                                            },
                                            labelPlacement: 'above-center',
                                            labelExpressionInfo: {
                                                expression: '$feature.NAME'
                                            }
                                        }],
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }],
                    layers: []
                }]
        }
    };
    return Mapcofig;
}());

var DEFAULT_VERSION = Mapcofig.jsapiversion4X;
var NEXT = 'next';
function parseVersion(version) {
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    if (version.toString().toLowerCase() === NEXT) {
        return NEXT;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
function parseVersionnew(version) {
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return Mapcofig.jsapi + ("/" + version + "/init.js");
}
function getCdnCssUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    if (version === null) {
        version = DEFAULT_VERSION;
    }
    var url = getCdnUrl(version);
    var baseUrl = url.substring(0, url.indexOf('init.js'));
    var parsedVersion = parseVersion(version);
    if (parsedVersion !== NEXT && parsedVersion.major === 3) {
        var path = parsedVersion.minor <= 10 ? 'js/' : '';
        return "" + baseUrl + path + "esri/css/esri.css";
    }
    else {
        return baseUrl + "esri/themes/light/main.css";
    }
}

function createStylesheetLink(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    return link;
}
function insertLink(link, before) {
    if (before) {
        var beforeNode = document.querySelector(before);
        beforeNode.parentNode.insertBefore(link, beforeNode);
    }
    else {
        document.head.appendChild(link);
    }
}
function getCss(url) {
    return document.querySelector("link[href*=\"" + url + "\"]");
}
function getCssUrl(urlOrVersion) {
    return !urlOrVersion || parseVersion(urlOrVersion)
        ? getCdnCssUrl(urlOrVersion)
        : urlOrVersion;
}
function loadSMIMapCss(urlOrVersion, before) {
    var url = getCssUrl(urlOrVersion);
    var link = getCss(url);
    if (!link) {
        link = createStylesheetLink(url);
        insertLink(link, before);
    }
    var parsedVersion = parseVersionnew(urlOrVersion);
    if (parsedVersion.major === 4) {
        var custmomurl = url.substring(0, url.indexOf('esri/themes/')) + "esri/themes/gis/css/gis.css";
        var customlink = getCss(custmomurl);
        if (!customlink) {
            customlink = createStylesheetLink(custmomurl);
            insertLink(customlink, before);
        }
    }
    return link;
}

var isBrowser = typeof window !== 'undefined';
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};

var defaultOptions = {};
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('data-shsmi', 'loading');
    return script;
}
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        callback(script);
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}

function getAPIScript() {
    return document.querySelector('script[data-shsmi]');
}
function isLoaded() {
    var globalRequire = window['require'];
    return globalRequire && globalRequire.on;
}
function loadAPIScript(options) {
    if (options === void 0) { options = {}; }
    var opts = {};
    [defaultOptions, options].forEach(function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
            }
        }
    });
    var version = opts.version;
    var url = opts.url || getCdnUrl(version);
    return new utils.Promise(function (resolve, reject) {
        var script = getAPIScript();
        if (script) {
            var src = script.getAttribute('src');
            if (src !== url) {
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (isLoaded()) {
                    resolve(script);
                }
                else {
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (isLoaded()) {
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                var css = opts.css;
                if (css) {
                    var useVersion = css === true;
                    loadSMIMapCss(useVersion ? version : css, opts.insertCssBefore);
                }
                else {
                    loadSMIMapCss(null, opts.insertCssBefore);
                }
                if (opts.dojoConfig) {
                    window['dojoConfig'] = opts.dojoConfig;
                }
                else {
                    var dojoConfig = {
                        async: true,
                        packages: [{
                                location: Mapcofig.jsapi + '/extensions',
                                name: 'smiapi'
                            }, {
                                location: Mapcofig.jsapi + '/extensions/geolocation',
                                name: 'geolocate',
                                main: "geolocate"
                            }],
                        deps: ['@dojo/framework/shim/main'],
                        has: {
                            'esri-promise-compatibility': 1,
                            'esri-featurelayer-webgl': 1
                        }
                    };
                    window['dojoConfig'] = dojoConfig;
                }
                script = createScript(url);
                handleScriptLoad(script, function () {
                    script.setAttribute('data-shsmi', 'loaded');
                    resolve(script);
                }, reject);
                document.head.appendChild(script);
            }
        }
    });
}

function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            errorHandler.remove();
            resolve(args);
        });
    });
}
function load(modules, loadAPIScriptOptions) {
    if (loadAPIScriptOptions === void 0) { loadAPIScriptOptions = {}; }
    if (!isLoaded()) {
        var script = getAPIScript();
        var src = script && script.getAttribute('src');
        if (!loadAPIScriptOptions.url && src) {
            loadAPIScriptOptions.url = src;
        }
        return loadAPIScript(loadAPIScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        return requireModules(modules);
    }
}

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function init3DBaseMaplayers(layers, maptoken) {
    return __awaiter$2(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, SHCTiledMapServiceLayer, TileLayer, VectorTileLayer, SpatialReference;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/layers/TileLayer',
                        'esri/layers/VectorTileLayer',
                        'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], SHCTiledMapServiceLayer = _a[1], TileLayer = _a[2], VectorTileLayer = _a[3], SpatialReference = _a[4];
                    return [2 /*return*/, layers.map(function (item) {
                            switch (item.mapType) {
                                case 'SHCTiledMapServiceLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var fExtent = new Extent({
                                        xmin: -65000,
                                        ymin: -76000,
                                        xmax: 75000.00000000003,
                                        ymax: 72000.00000000003,
                                        spatialReference: SpatialReference.WebMercator
                                    });
                                    if (item.isToken === true) {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            token: maptoken,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                    else {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                case 'TileLayer':
                                    return new TileLayer({
                                        url: item.url,
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                                case 'VectorTileLayer':
                                    return new VectorTileLayer({
                                        url: item.url,
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                            }
                        })];
            }
        });
    });
}
function init2DBaseMaplayers(layers, maptoken) {
    return __awaiter$2(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, TileLayer, VectorTileLayer, SceneLayer, SHCTiledMapServiceLayer, 
        // tslint:disable-next-line:variable-name
        GroupLayer, SpatialReference;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/TileLayer',
                        'esri/layers/VectorTileLayer',
                        'esri/layers/SceneLayer',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/layers/GroupLayer',
                        'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], TileLayer = _a[1], VectorTileLayer = _a[2], SceneLayer = _a[3], SHCTiledMapServiceLayer = _a[4], GroupLayer = _a[5], SpatialReference = _a[6];
                    return [2 /*return*/, layers.map(function (item) {
                            switch (item.mapType) {
                                case 'SHCTiledMapServiceLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var fExtent = new Extent({
                                        xmin: -65000,
                                        ymin: -76000,
                                        xmax: 75000.00000000003,
                                        ymax: 72000.00000000003,
                                        spatialReference: SpatialReference.WebMercator
                                    });
                                    if (item.isToken === true) {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            token: maptoken,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                    else {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                case 'TileLayer':
                                    return new TileLayer(item.url, {
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                                case 'VectorTileLayer':
                                    return new VectorTileLayer({
                                        url: item.url,
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                            }
                        })];
            }
        });
    });
}
function initsmapbussinesslayers(layerGroups, maptoken, viewMode) {
    return __awaiter$2(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        TileLayer, SceneLayer, VectorTileLayer, MapImageLayer, IntegratedMeshLayer, PointCloudLayer, 
        // tslint:disable-next-line:variable-name
        BuildingSceneLayer, 
        // tslint:disable-next-line:variable-name
        SHCTiledMapServiceLayer, SHCMapServiceLayer, GroupLayer, GeoJSONLayer, FeatureLayer, GraphicsLayer, Extent, 
        // tslint:disable-next-line:variable-name
        SpatialReference, smapgrouplayer;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        "esri/layers/TileLayer",
                        "esri/layers/SceneLayer",
                        "esri/layers/VectorTileLayer",
                        "esri/layers/MapImageLayer",
                        "esri/layers/IntegratedMeshLayer",
                        "esri/layers/PointCloudLayer",
                        "esri/layers/BuildingSceneLayer",
                        "esri/layers/SHCTiledMapServiceLayer",
                        "esri/layers/SHCMapServiceLayer",
                        "esri/layers/GroupLayer",
                        "esri/layers/GeoJSONLayer",
                        "esri/layers/FeatureLayer",
                        "esri/layers/GraphicsLayer",
                        "esri/geometry/Extent",
                        "esri/geometry/SpatialReference"
                    ])];
                case 1:
                    _a = _b.sent(), TileLayer = _a[0], SceneLayer = _a[1], VectorTileLayer = _a[2], MapImageLayer = _a[3], IntegratedMeshLayer = _a[4], PointCloudLayer = _a[5], BuildingSceneLayer = _a[6], SHCTiledMapServiceLayer = _a[7], SHCMapServiceLayer = _a[8], GroupLayer = _a[9], GeoJSONLayer = _a[10], FeatureLayer = _a[11], GraphicsLayer = _a[12], Extent = _a[13], SpatialReference = _a[14];
                    smapgrouplayer = [];
                    layerGroups.map(function (itemsgroup) {
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.id,
                            title: itemsgroup.title,
                            visible: itemsgroup.visible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var groupslayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.id,
                                    title: items.title,
                                    visible: items.visible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.maptype) {
                                        case "TileLayer":
                                            grouplayer2.add(new TileLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "MapImageLayer":
                                            grouplayer2.add(new MapImageLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "GeoJSONLayer":
                                            grouplayer2.add(new GeoJSONLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "localFeatureLayer":
                                            var localflayer = new FeatureLayer({
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupTemplate: layer.popupTemplate,
                                                popupEnabled: layer.popupEnabled,
                                                source: []
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                localflayer.renderer = layer.renderer;
                                            }
                                            grouplayer2.add(localflayer);
                                            break;
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupTemplate: layer.popupTemplate,
                                                popupEnabled: layer.popupEnabled
                                            });
                                            if (layer.MaxScale) {
                                                flayer.maxScale = layer.MaxScale;
                                            }
                                            if (layer.MinScale) {
                                                flayer.minScale = layer.MinScale;
                                            }
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                flayer.renderer = layer.renderer;
                                            }
                                            if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                                flayer.elevationInfo = layer.elevationInfo;
                                            }
                                            if (layer.labelingInfo != null && layer.labelingInfo !== undefined) {
                                                flayer.labelingInfo = layer.labelingInfo;
                                            }
                                            if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                                flayer.popupTemplate = layer.popupTemplate;
                                            }
                                            grouplayer2.add(flayer);
                                            break;
                                        case "SceneLayer":
                                            var slayer = new SceneLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                renderer: layer.renderer,
                                                popupTemplate: layer.popupTemplate,
                                                popupEnabled: layer.popupEnabled,
                                                elevationInfo: layer.elevationInfo
                                            });
                                            if (layer.MaxScale) {
                                                slayer.maxScale = layer.MaxScale;
                                            }
                                            if (layer.MinScale) {
                                                slayer.minScale = layer.MinScale;
                                            }
                                            if (slayer.renderer != null && slayer.renderer !== undefined) {
                                                slayer.renderer = layer.renderer;
                                            }
                                            if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                                slayer.elevationInfo = layer.elevationInfo;
                                            }
                                            if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                                slayer.popupTemplate = layer.popupTemplate;
                                            }
                                            grouplayer2.add(slayer);
                                            break;
                                        case "BuildingSceneLayer":
                                            grouplayer2.add(new BuildingSceneLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity
                                            }));
                                            break;
                                        case "PointCloudLayer":
                                            grouplayer2.add(new PointCloudLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "IntegratedMeshLayer":
                                            grouplayer2.add(new IntegratedMeshLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                        case "GraphicsLayer":
                                            grouplayer2.add(new GraphicsLayer({
                                                id: layer.id,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                title: layer.title
                                            }));
                                            break;
                                        case "SHCTiledMapServiceLayer":
                                            // if (viewMode === '3D')   {
                                            var fExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(new SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(new SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            // } else {
                                            //     grouplayer2.add(new TileLayer(layer.url, {
                                            //         id: layer.id,
                                            //         title: layer.title,
                                            //         visible: layer.visible,
                                            //         opacity: layer.opacity,
                                            //         listMode: layer.listMode
                                            //     }));
                                            // }
                                            break;
                                        case "SHCMapServiceLayer":
                                            // if (viewMode === '3D') {
                                            var fuExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(new SHCMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(new SHCMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            // } else {
                                            //         grouplayer2.add(new MapImageLayer(layer.url, {
                                            //             id: layer.id,
                                            //             title: layer.title,
                                            //             visible: layer.visible,
                                            //             opacity: layer.opacity,
                                            //             listMode: layer.listMode
                                            //         }));
                                            //     }
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(groupslayers);
                        }
                        if (itemsgroup.layers != null) {
                            var layers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.maptype) {
                                    case "TileLayer":
                                        return new TileLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "MapImageLayer":
                                        return new MapImageLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer({
                                            url: layer.url,
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.MaxScale) {
                                            flayer.maxScale = layer.MaxScale;
                                        }
                                        if (layer.MinScale) {
                                            flayer.minScale = layer.MinScale;
                                        }
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            flayer.renderer = layer.renderer;
                                        }
                                        if (layer.labelingInfo != null && layer.labelingInfo !== undefined) {
                                            flayer.labelingInfo = layer.labelingInfo;
                                        }
                                        if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                            flayer.popupTemplate = layer.popupTemplate;
                                        }
                                        if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                            flayer.elevationInfo = layer.elevationInfo;
                                        }
                                        return flayer;
                                        break;
                                    case "SceneLayer":
                                        var slaayer = new SceneLayer({
                                            url: layer.url,
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.MaxScale) {
                                            slaayer.maxScale = layer.MaxScale;
                                        }
                                        if (layer.MinScale) {
                                            slaayer.minScale = layer.MinScale;
                                        }
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            slaayer.renderer = layer.renderer;
                                        }
                                        if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                            slaayer.popupTemplate = layer.popupTemplate;
                                        }
                                        if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                            slaayer.elevationInfo = layer.elevationInfo;
                                        }
                                        return slaayer;
                                        break;
                                    case "BuildingSceneLayer":
                                        return new BuildingSceneLayer({
                                            url: layer.url,
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                    case "PointCloudLayer":
                                        return new PointCloudLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                        break;
                                    case "IntegratedMeshLayer":
                                        return new IntegratedMeshLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                    case "GraphicsLayer":
                                        return new GraphicsLayer({
                                            id: layer.id,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode,
                                            title: layer.title
                                        });
                                        break;
                                }
                            });
                            grouplayer.addMany(layers);
                        }
                        if (viewMode === '2D') {
                            if (itemsgroup.grouptype === '2D') {
                                smapgrouplayer.push(grouplayer);
                            }
                        }
                        else {
                            smapgrouplayer.push(grouplayer);
                        }
                    });
                    return [2 /*return*/, smapgrouplayer];
            }
        });
    });
}
function set3dlabelLayers(view) {
    return __awaiter$2(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        FeatureLayer, GroupLayer, smapgrouplayer;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        "esri/layers/FeatureLayer",
                        'esri/layers/GroupLayer'
                    ])];
                case 1:
                    _a = _b.sent(), FeatureLayer = _a[0], GroupLayer = _a[1];
                    smapgrouplayer = [];
                    Mapcofig.gisService.smaplabel3d.layerGroups.map(function (itemsgroup) {
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.id,
                            title: itemsgroup.title,
                            visible: itemsgroup.visible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var groupslayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.id,
                                    title: items.title,
                                    visible: items.visible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.maptype) {
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            });
                                            if (layer.MaxScale) {
                                                flayer.maxScale = layer.MaxScale;
                                            }
                                            if (layer.MinScale) {
                                                flayer.minScale = layer.MinScale;
                                            }
                                            if (layer.renderer) {
                                                flayer.renderer = layer.renderer;
                                            }
                                            if (layer.screenSizePerspectiveEnabled) {
                                                flayer.screenSizePerspectiveEnabled = layer.screenSizePerspectiveEnabled;
                                            }
                                            if (layer.elevationInfo) {
                                                flayer.elevationInfo = layer.elevationInfo;
                                            }
                                            if (layer.labelsVisible) {
                                                flayer.labelsVisible = layer.labelsVisible;
                                                if (layer.labelingInfo) {
                                                    flayer.labelingInfo = layer.labelingInfo;
                                                }
                                            }
                                            if (layer.popupEnabled) {
                                                flayer.popupEnabled = layer.popupEnabled;
                                                if (layer.popupTemplate) {
                                                    flayer.popupTemplate = layer.popupTemplate;
                                                }
                                            }
                                            grouplayer2.add(flayer);
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(groupslayers);
                        }
                        if (itemsgroup.layers != null) {
                            var layers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.maptype) {
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.MaxScale) {
                                            flayer.maxScale = layer.MaxScale;
                                        }
                                        if (layer.MinScale) {
                                            flayer.minScale = layer.MinScale;
                                        }
                                        if (layer.renderer) {
                                            flayer.renderer = layer.renderer;
                                        }
                                        if (layer.screenSizePerspectiveEnabled) {
                                            flayer.screenSizePerspectiveEnabled = layer.screenSizePerspectiveEnabled;
                                        }
                                        if (layer.elevationInfo) {
                                            flayer.elevationInfo = layer.elevationInfo;
                                        }
                                        if (layer.labelsVisible) {
                                            flayer.labelsVisible = layer.labelsVisible;
                                            if (layer.labelingInfo) {
                                                flayer.labelingInfo = layer.labelingInfo;
                                            }
                                        }
                                        if (layer.popupEnabled) {
                                            flayer.popupEnabled = layer.popupEnabled;
                                            if (layer.popupTemplate) {
                                                flayer.popupTemplate = layer.popupTemplate;
                                            }
                                        }
                                        return flayer;
                                        break;
                                }
                            });
                            grouplayer.addMany(layers);
                        }
                        if (view.type === '2d') {
                            if (itemsgroup.grouptype === '2D') {
                                smapgrouplayer.push(grouplayer);
                            }
                        }
                        else {
                            smapgrouplayer.push(grouplayer);
                        }
                    });
                    view.map.addMany(smapgrouplayer);
                    return [2 /*return*/];
            }
        });
    });
}
function initbuildingsLayers(buildingsLayers, maptoken) {
    return __awaiter$2(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        TileLayer, SceneLayer, VectorTileLayer, MapImageLayer, IntegratedMeshLayer, PointCloudLayer, 
        // tslint:disable-next-line:variable-name
        BuildingSceneLayer, 
        // tslint:disable-next-line:variable-name
        SHCTiledMapServiceLayer, SHCMapServiceLayer, GroupLayer, FeatureLayer, GraphicsLayer, Extent, 
        // tslint:disable-next-line:variable-name
        SpatialReference, bLayers, grouplayers;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        "esri/layers/TileLayer",
                        "esri/layers/SceneLayer",
                        "esri/layers/VectorTileLayer",
                        "esri/layers/MapImageLayer",
                        "esri/layers/IntegratedMeshLayer",
                        "esri/layers/PointCloudLayer",
                        "esri/layers/BuildingSceneLayer",
                        "esri/layers/SHCTiledMapServiceLayer",
                        "esri/layers/SHCMapServiceLayer",
                        "esri/layers/GroupLayer",
                        "esri/layers/FeatureLayer",
                        "esri/layers/GraphicsLayer",
                        "esri/geometry/Extent",
                        "esri/geometry/SpatialReference"
                    ])];
                case 1:
                    _a = _b.sent(), TileLayer = _a[0], SceneLayer = _a[1], VectorTileLayer = _a[2], MapImageLayer = _a[3], IntegratedMeshLayer = _a[4], PointCloudLayer = _a[5], BuildingSceneLayer = _a[6], SHCTiledMapServiceLayer = _a[7], SHCMapServiceLayer = _a[8], GroupLayer = _a[9], FeatureLayer = _a[10], GraphicsLayer = _a[11], Extent = _a[12], SpatialReference = _a[13];
                    bLayers = new GroupLayer({
                        id: buildingsLayers.id,
                        title: buildingsLayers.title,
                        visible: buildingsLayers.visible,
                        listMode: buildingsLayers.listMode
                    });
                    grouplayers = buildingsLayers.layerGroups.map(function (itemsgroup) {
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.id,
                            title: itemsgroup.title,
                            visible: itemsgroup.visible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var glayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.id,
                                    title: items.title,
                                    visible: items.visible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.maptype) {
                                        case "TileLayer":
                                            grouplayer2.add(new TileLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "MapImageLayer":
                                            grouplayer2.add(new MapImageLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupEnabled: layer.popupEnabled
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                flayer.renderer = layer.renderer;
                                            }
                                            if (layer.labelingInfo != null && layer.labelingInfo !== undefined) {
                                                flayer.labelingInfo = layer.labelingInfo;
                                            }
                                            if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                                flayer.elevationInfo = layer.elevationInfo;
                                            }
                                            if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                                flayer.popupTemplate = layer.popupTemplate;
                                            }
                                            return flayer;
                                            grouplayer2.add(flayer);
                                            break;
                                        case "SceneLayer":
                                            var slayer = new SceneLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                popupEnabled: layer.popupEnabled
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                slayer.renderer = layer.renderer;
                                            }
                                            if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                                slayer.elevationInfo = layer.elevationInfo;
                                            }
                                            if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                                slayer.popupTemplate = layer.popupTemplate;
                                            }
                                            grouplayer2.add(slayer);
                                            break;
                                        case "BuildingSceneLayer":
                                            grouplayer2.add(new BuildingSceneLayer({
                                                url: layer.url,
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity
                                            }));
                                            break;
                                        case "PointCloudLayer":
                                            grouplayer2.add(new PointCloudLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "IntegratedMeshLayer":
                                            grouplayer2.add(new IntegratedMeshLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                        case "GraphicsLayer":
                                            grouplayer2.add(new GraphicsLayer({
                                                id: layer.id,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                title: layer.title
                                            }));
                                            break;
                                        case "SHCTiledMapServiceLayer":
                                            var fExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(new SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(new SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            break;
                                        case "SHCMapServiceLayer":
                                            var fuExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(new SHCMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(new SHCMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(glayers);
                        }
                        if (itemsgroup.layers != null) {
                            var layers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.maptype) {
                                    case "TileLayer":
                                        return new TileLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "MapImageLayer":
                                        return new MapImageLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            flayer.renderer = layer.renderer;
                                        }
                                        if (layer.labelingInfo != null && layer.labelingInfo !== undefined) {
                                            flayer.labelingInfo = layer.labelingInfo;
                                        }
                                        if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                            flayer.elevationInfo = layer.elevationInfo;
                                        }
                                        if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                            flayer.popupTemplate = layer.popupTemplate;
                                        }
                                        return flayer;
                                        break;
                                    case "SceneLayer":
                                        var slayer = new SceneLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            slayer.renderer = layer.renderer;
                                        }
                                        if (layer.elevationInfo != null && layer.elevationInfo !== undefined) {
                                            slayer.elevationInfo = layer.elevationInfo;
                                        }
                                        if (layer.popupTemplate != null && layer.popupTemplate !== undefined) {
                                            slayer.popupTemplate = layer.popupTemplate;
                                        }
                                        return slayer;
                                        break;
                                    case "BuildingSceneLayer":
                                        return new BuildingSceneLayer({
                                            url: layer.url,
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                    case "PointCloudLayer":
                                        return new PointCloudLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                        break;
                                    case "IntegratedMeshLayer":
                                        return new IntegratedMeshLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                    case "GraphicsLayer":
                                        return new GraphicsLayer({
                                            id: layer.id,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode,
                                            title: layer.title
                                        });
                                        break;
                                }
                            });
                            grouplayer.addMany(layers);
                        }
                        return grouplayer;
                    });
                    bLayers.addMany(grouplayers);
                    return [2 /*return*/, bLayers];
            }
        });
    });
}
function addLayer(layerOptions, view, maptoken) {
    return __awaiter$2(this, void 0, void 0, function () {
        return __generator$2(this, function (_a) {
            // tslint:disable-next-line:variable-name
            load(["esri/layers/TileLayer",
                "esri/layers/SceneLayer",
                "esri/layers/FeatureLayer",
                "esri/layers/MapImageLayer",
                "esri/layers/SHCTiledMapServiceLayer",
                "esri/layers/SHCDMapImageLayer",
                // "esri/layers/SHCMapServiceLayer",
                // "esri/layers/VectorTileLayer",
                // "esri/layers/IntegratedMeshLayer",
                // "esri/layers/PointCloudLayer",
                // "esri/layers/BuildingSceneLayer",
                "esri/layers/GraphicsLayer",
                "esri/geometry/Extent",
                "esri/geometry/SpatialReference"])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var TileLayer = _a[0], SceneLayer = _a[1], FeatureLayer = _a[2], MapImageLayer = _a[3], SHCTiledMapServiceLayer = _a[4], 
                // SHCMapServiceLayer,
                // tslint:disable-next-line:variable-name
                // VectorTileLayer, IntegratedMeshLayer, PointCloudLayer, BuildingSceneLayer,
                // tslint:disable-next-line:variable-name
                SHCDMapImageLayer = _a[5], GraphicsLayer = _a[6], Extent = _a[7], 
                // tslint:disable-next-line:variable-name
                SpatialReference = _a[8];
                switch (layerOptions.layerType) {
                    case 'TileLayer':
                        var tlayer = new TileLayer({
                            url: layerOptions.layerUrl,
                            id: layerOptions.layerId,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                            title: layerOptions.layerTitle
                        });
                        if (layerOptions.layerMaxScale) {
                            tlayer.maxScale = layerOptions.layerMaxScale;
                        }
                        if (layerOptions.layerMinScale) {
                            tlayer.minScale = layerOptions.layerMinScale;
                        }
                        view.map.add(tlayer);
                        break;
                    case 'FeatureLayer':
                        var flayer = new FeatureLayer({
                            url: layerOptions.layerUrl,
                            id: layerOptions.layerId,
                            title: layerOptions.layerTitle,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1
                        });
                        if (layerOptions.layerPopupEnabled) {
                            flayer.popupEnabled = layerOptions.layerPopupEnabled;
                            if (layerOptions.layerPopupTemplate) {
                                flayer.popupTemplate = layerOptions.layerPopupTemplate;
                            }
                        }
                        if (layerOptions.layerRenderer) {
                            flayer.renderer = layerOptions.layerRenderer;
                        }
                        if (layerOptions.layerMaxScale) {
                            flayer.maxScale = layerOptions.layerMaxScale;
                        }
                        if (layerOptions.layerMinScale) {
                            flayer.minScale = layerOptions.layerMinScale;
                        }
                        if (layerOptions.layerLabelsVisible) {
                            flayer.labelsVisible = layerOptions.layerLabelsVisible;
                            if (layerOptions.layerLabelingInfo) {
                                flayer.labelingInfo = layerOptions.layerLabelingInfo;
                            }
                        }
                        if (layerOptions.layerelevationInfo) {
                            flayer.elevationInfo = layerOptions.layerelevationInfo;
                        }
                        if (layerOptions.layerdefinitionExpression) {
                            flayer.definitionExpression = layerOptions.layerdefinitionExpression;
                        }
                        view.map.add(flayer);
                        break;
                    case 'SceneLayer':
                        var slayer = new SceneLayer({
                            url: layerOptions.layerUrl,
                            id: layerOptions.layerId,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                            title: layerOptions.layerTitle
                        });
                        if (layerOptions.layerPopupEnabled) {
                            slayer.popupEnabled = layerOptions.layerPopupEnabled;
                            if (layerOptions.layerPopupTemplate) {
                                slayer.popupTemplate = layerOptions.layerPopupTemplate;
                            }
                        }
                        if (layerOptions.layerRenderer) {
                            slayer.renderer = layerOptions.layerRenderer;
                        }
                        if (layerOptions.layerMaxScale) {
                            slayer.maxScale = layerOptions.layerMaxScale;
                        }
                        if (layerOptions.layerMinScale) {
                            slayer.minScale = layerOptions.layerMinScale;
                        }
                        if (layerOptions.layerelevationInfo) {
                            slayer.elevationInfo = layerOptions.layerelevationInfo;
                        }
                        if (layerOptions.layerdefinitionExpression) {
                            slayer.definitionExpression = layerOptions.layerdefinitionExpression;
                        }
                        view.map.add(slayer);
                        break;
                    case 'MapImageLayer':
                        var mlayer = new MapImageLayer({
                            url: layerOptions.layerUrl,
                            id: layerOptions.layerId,
                            title: layerOptions.layerTitle,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1
                        });
                        if (layerOptions.layerMaxScale) {
                            mlayer.maxScale = layerOptions.layerMaxScale;
                        }
                        if (layerOptions.layerMinScale) {
                            mlayer.minScale = layerOptions.layerMinScale;
                        }
                        if (layerOptions.layerSublayers) {
                            mlayer.sublayers = layerOptions.layerSublayers;
                        }
                        view.map.add(mlayer);
                        break;
                    case 'SHCDMapImageLayer':
                        var bjlengendlayer = new MapImageLayer({
                            url: layerOptions.layerUrl,
                            id: layerOptions.layerId + '_legend',
                            title: layerOptions.layerTitle,
                            //  definitionExpression: '1==1',
                            visible: false,
                            sublayers: layerOptions.layerSublayers,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1
                            // listMode: 'hide'
                        });
                        view.map.add(bjlengendlayer);
                        var fuxExtent = new Extent({
                            xmin: -65000,
                            ymin: -76000,
                            xmax: 75000.00000000003,
                            ymax: 72000.00000000003,
                            spatialReference: SpatialReference.WebMercator
                        });
                        var shclayer = new SHCDMapImageLayer({
                            url: layerOptions.layerUrl,
                            fullExtent: fuxExtent,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                            title: layerOptions.layerTitle,
                            id: layerOptions.layerId,
                            tileUrl: Mapcofig.bujianurl,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            legendEnabled: false,
                            sublayers: layerOptions.layerSublayers,
                            dLayer: bjlengendlayer
                        });
                        view.map.add(shclayer);
                        break;
                    case 'SHCTiledMapServiceLayer':
                        // eslint-disable-next-line no-case-declarations
                        var fExtent = new Extent({
                            xmin: -65000,
                            ymin: -76000,
                            xmax: 75000.00000000003,
                            ymax: 72000.00000000003,
                            spatialReference: SpatialReference.WebMercator
                        });
                        if (layerOptions.isToken === true) {
                            view.map.add(new SHCTiledMapServiceLayer({
                                url: layerOptions.layerUrl,
                                token: maptoken,
                                fullExtent: fExtent,
                                title: layerOptions.layerTitle,
                                opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                                id: layerOptions.layerId,
                                visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true
                            }));
                        }
                        else {
                            view.map.add(new SHCTiledMapServiceLayer({
                                url: layerOptions.layerUrl,
                                fullExtent: fExtent,
                                opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                                title: layerOptions.layerTitle,
                                id: layerOptions.layerId,
                                visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true
                            }));
                        }
                        break;
                    case 'GraphicsLayer':
                        var glayer = new GraphicsLayer({
                            id: layerOptions.layerId,
                            visible: layerOptions.layerVisible !== undefined ? layerOptions.layerVisible : true,
                            opacity: layerOptions.layerOpacity !== undefined ? layerOptions.layerOpacity : 1,
                            title: layerOptions.layerTitle
                        });
                        if (layerOptions.layerMaxScale) {
                            glayer.maxScale = layerOptions.layerMaxScale;
                        }
                        if (layerOptions.layerMinScale) {
                            glayer.minScale = layerOptions.layerMinScale;
                        }
                        if (layerOptions.layerelevationInfo) {
                            glayer.elevationInfo = layerOptions.layerelevationInfo;
                        }
                        view.map.add(glayer);
                        break;
                }
            })
                .catch(function (err) {
                console.error(err);
            });
            return [2 /*return*/];
        });
    });
}
function setLayerProperties(layerOptions, view) {
    return __awaiter$2(this, void 0, void 0, function () {
        var layer;
        return __generator$2(this, function (_a) {
            if (!layerOptions.layerId) {
                return [2 /*return*/];
            }
            layer = view.map.findLayerById(layerOptions.layerId);
            if (!layer) {
                return [2 /*return*/];
            }
            // console.log(layerOptions);
            if (typeof (layerOptions.layerTitle) !== 'undefined') {
                layer.title = layerOptions.layerTitle;
            }
            if (typeof (layerOptions.layerVisible) !== 'undefined') {
                layer.visible = layerOptions.layerVisible;
            }
            if (typeof (layerOptions.layerVisible) !== 'undefined') {
                layer.opacity = layerOptions.layerOpacity;
            }
            if (typeof (layerOptions.layerPopupEnabled) !== 'undefined') {
                layer.popupEnabled = layerOptions.layerPopupEnabled;
            }
            if (typeof (layerOptions.layerPopupTemplate) !== 'undefined') {
                layer.popupTemplate = layerOptions.layerPopupTemplate;
            }
            if (typeof (layerOptions.layerMaxScale) !== 'undefined') {
                layer.maxScale = layerOptions.layerMaxScale;
            }
            if (typeof (layerOptions.layerMinScale) !== 'undefined') {
                layer.minScale = layerOptions.layerMinScale;
            }
            if (typeof (layerOptions.layerLabelsVisible) !== 'undefined') {
                layer.labelsVisible = layerOptions.layerLabelsVisible;
            }
            if (typeof (layerOptions.layerLabelingInfo) !== 'undefined') {
                layer.labelingInfo = layerOptions.layerLabelingInfo;
            }
            if (typeof (layerOptions.layerRenderer) !== 'undefined') {
                layer.renderer = layerOptions.layerRenderer;
            }
            if (typeof (layerOptions.layerSublayers) !== 'undefined') {
                layer.sublayers = layerOptions.layerSublayers;
            }
            if (typeof (layerOptions.layerdefinitionExpression) !== 'undefined') {
                layer.definitionExpression = layerOptions.layerdefinitionExpression;
            }
            if (typeof (layerOptions.layerelevationInfo) !== 'undefined') {
                layer.elevationInfo = layerOptions.layerelevationInfo;
            }
            if (typeof (layerOptions.layerlistMode) !== 'undefined') {
                layer.layerlistMode = layerOptions.layerlistMode;
            }
            return [2 /*return*/];
        });
    });
}
function addLayers(layers, view, maptoken) {
    return __awaiter$2(this, void 0, void 0, function () {
        return __generator$2(this, function (_a) {
            load(["esri/layers/TileLayer",
                "esri/layers/SceneLayer",
                "esri/layers/FeatureLayer",
                "esri/layers/MapImageLayer",
                "esri/layers/GroupLayer"])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var TileLayer = _a[0], SceneLayer = _a[1], FeatureLayer = _a[2], MapImageLayer = _a[3], GroupLayer = _a[4];
                if (layers instanceof Array) {
                    layers.forEach(function (layer) {
                        switch (layer.layerType) {
                            case 'TileLayer':
                                var tlayer = new TileLayer({
                                    url: layer.layerUrl,
                                    id: layer.layerId,
                                    title: layer.layerTitle,
                                    visible: layer.layerVisible,
                                    opacity: layer.layerOpacity,
                                    listMode: layer.layerlistMode
                                });
                                if (layer.layerMaxScale) {
                                    tlayer.maxScale = layer.layerMaxScale;
                                }
                                if (layer.layerMinScale) {
                                    tlayer.minScale = layer.layerMinScale;
                                }
                                view.map.add(tlayer);
                                break;
                            case 'FeatureLayer':
                                var flayer = new FeatureLayer({
                                    url: layer.layerUrl,
                                    id: layer.layerId,
                                    title: layer.layerTitle,
                                    visible: layer.layerVisible,
                                    opacity: layer.layerOpacity,
                                    listMode: layer.layerlistMode,
                                    popupEnabled: layer.layerPopupEnabled
                                });
                                if (layer.layerPopupTemplate) {
                                    flayer.popupTemplate = layer.layerPopupTemplate;
                                }
                                if (layer.layerRenderer) {
                                    flayer.renderer = layer.layerRenderer;
                                }
                                if (layer.layerMaxScale) {
                                    flayer.maxScale = layer.layerMaxScale;
                                }
                                if (layer.layerMinScale) {
                                    flayer.minScale = layer.layerMinScale;
                                }
                                if (layer.layerLabelsVisible) {
                                    flayer.labelsVisible = layer.layerLabelsVisible;
                                    if (layer.layerLabelingInfo) {
                                        flayer.labelingInfo = layer.layerLabelingInfo;
                                    }
                                }
                                if (layer.layerelevationInfo) {
                                    flayer.elevationInfo = layer.layerelevationInfo;
                                }
                                if (layer.layerdefinitionExpression) {
                                    flayer.definitionExpression = layer.layerdefinitionExpression;
                                }
                                view.map.add(flayer);
                                break;
                            case 'SceneLayer':
                                var slayer = new SceneLayer({
                                    url: layer.layerUrl,
                                    id: layer.layerId,
                                    title: layer.layerTitle,
                                    visible: layer.layerVisible,
                                    opacity: layer.layerOpacity,
                                    listMode: layer.layerlistMode,
                                    popupEnabled: layer.layerPopupEnabled
                                });
                                if (layer.layerPopupTemplate) {
                                    slayer.popupTemplate = layer.layerPopupTemplate;
                                }
                                if (layer.layerRenderer) {
                                    slayer.renderer = layer.layerRenderer;
                                }
                                if (layer.layerMaxScale) {
                                    slayer.maxScale = layer.layerMaxScale;
                                }
                                if (layer.layerMinScale) {
                                    slayer.minScale = layer.layerMinScale;
                                }
                                if (layer.layerelevationInfo) {
                                    slayer.elevationInfo = layer.layerelevationInfo;
                                }
                                if (layer.layerdefinitionExpression) {
                                    slayer.definitionExpression = layer.layerdefinitionExpression;
                                }
                                view.map.add(slayer);
                                break;
                        }
                    });
                }
                else if (layers.type === 'layergroup') {
                    var smapgrouplayer_1 = [];
                    layers.layers.layerGroups.map(function (itemsgroup) {
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.layerId,
                            title: itemsgroup.layerTitle,
                            visible: itemsgroup.layerVisible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var groupslayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.layerId,
                                    title: items.layerTitle,
                                    visible: items.layerVisible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.layerType) {
                                        case "TileLayer":
                                            var tlayer = new TileLayer({
                                                url: layer.layerUrl,
                                                id: layer.layerId,
                                                title: layer.layerTitle,
                                                visible: layer.layerVisible,
                                                opacity: layer.layerOpacity,
                                                listMode: layer.listMode
                                            });
                                            if (layer.layerMaxScale) {
                                                tlayer.maxScale = layer.layerMaxScale;
                                            }
                                            if (layer.layerMinScale) {
                                                tlayer.minScale = layer.layerMinScale;
                                            }
                                            grouplayer2.add(tlayer);
                                            break;
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer({
                                                url: layer.layerUrl,
                                                id: layer.layerId,
                                                title: layer.layerTitle,
                                                visible: layer.layerVisible,
                                                opacity: layer.layerOpacity,
                                                listMode: layer.listMode
                                            });
                                            if (layer.layerPopupEnabled) {
                                                flayer.popupEnabled = layer.layerPopupEnabled;
                                                if (layer.layerPopupTemplate) {
                                                    flayer.popupTemplate = layer.layerPopupTemplate;
                                                }
                                            }
                                            if (layer.layerRenderer) {
                                                flayer.renderer = layer.layerRenderer;
                                            }
                                            if (layer.layerMaxScale) {
                                                flayer.maxScale = layer.layerMaxScale;
                                            }
                                            if (layer.layerMinScale) {
                                                flayer.minScale = layer.layerMinScale;
                                            }
                                            if (layer.layerLabelsVisible) {
                                                flayer.labelsVisible = layer.layerLabelsVisible;
                                                if (layer.layerLabelingInfo) {
                                                    flayer.labelingInfo = layer.layerLabelingInfo;
                                                }
                                            }
                                            if (layer.layerelevationInfo) {
                                                flayer.elevationInfo = layer.layerelevationInfo;
                                            }
                                            if (layer.layerdefinitionExpression) {
                                                flayer.definitionExpression = layer.layerdefinitionExpression;
                                            }
                                            grouplayer2.add(flayer);
                                            break;
                                        case "SceneLayer":
                                            var slayer = new SceneLayer({
                                                url: layer.layerUrl,
                                                id: layer.layerId,
                                                title: layer.layerTitle,
                                                visible: layer.layerVisible,
                                                opacity: layer.layerOpacity,
                                                listMode: layer.listMode
                                            });
                                            if (layer.layerPopupEnabled) {
                                                slayer.popupEnabled = layer.layerPopupEnabled;
                                                if (layer.layerPopupTemplate) {
                                                    slayer.popupTemplate = layer.layerPopupTemplate;
                                                }
                                            }
                                            if (layer.layerRenderer) {
                                                slayer.renderer = layer.layerRenderer;
                                            }
                                            if (layer.layerMaxScale) {
                                                slayer.maxScale = layer.layerMaxScale;
                                            }
                                            if (layer.layerMinScale) {
                                                slayer.minScale = layer.layerMinScale;
                                            }
                                            if (layer.layerelevationInfo) {
                                                slayer.elevationInfo = layer.layerelevationInfo;
                                            }
                                            if (layer.layerdefinitionExpression) {
                                                slayer.definitionExpression = layer.layerdefinitionExpression;
                                            }
                                            grouplayer2.add(slayer);
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(groupslayers);
                        }
                        if (itemsgroup.layers != null) {
                            var mlayers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.layerType) {
                                    case "TileLayer":
                                        var tlayer = new TileLayer({
                                            url: layer.layerUrl,
                                            id: layer.layerId,
                                            title: layer.layerTitle,
                                            visible: layer.layerVisible,
                                            opacity: layer.layerOpacity
                                        });
                                        if (layer.layerMaxScale) {
                                            tlayer.maxScale = layer.layerMaxScale;
                                        }
                                        if (layer.layerMinScale) {
                                            tlayer.minScale = layer.layerMinScale;
                                        }
                                        return tlayer;
                                        break;
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer({
                                            url: layer.layerUrl,
                                            id: layer.layerId,
                                            title: layer.layerTitle,
                                            visible: layer.layerVisible,
                                            opacity: layer.layerOpacity,
                                            listMode: layer.listMode
                                        });
                                        if (layer.layerPopupEnabled) {
                                            flayer.popupEnabled = layer.layerPopupEnabled;
                                            if (layer.layerPopupTemplate) {
                                                flayer.popupTemplate = layer.layerPopupTemplate;
                                            }
                                        }
                                        if (layer.layerRenderer) {
                                            flayer.renderer = layer.layerRenderer;
                                        }
                                        if (layer.layerMaxScale) {
                                            flayer.maxScale = layer.layerMaxScale;
                                        }
                                        if (layer.layerMinScale) {
                                            flayer.minScale = layer.layerMinScale;
                                        }
                                        if (layer.layerLabelsVisible) {
                                            flayer.labelsVisible = layer.layerLabelsVisible;
                                            if (layer.layerLabelingInfo) {
                                                flayer.labelingInfo = layer.layerLabelingInfo;
                                            }
                                        }
                                        if (layer.layerelevationInfo) {
                                            flayer.elevationInfo = layer.layerelevationInfo;
                                        }
                                        if (layer.layerdefinitionExpression) {
                                            flayer.definitionExpression = layer.layerdefinitionExpression;
                                        }
                                        return flayer;
                                        break;
                                    case "SceneLayer":
                                        var slayer = new SceneLayer({
                                            url: layer.layerUrl,
                                            id: layer.layerId,
                                            title: layer.layerTitle,
                                            visible: layer.layerVisible,
                                            opacity: layer.layerOpacity
                                        });
                                        if (layer.layerPopupEnabled) {
                                            slayer.popupEnabled = layer.layerPopupEnabled;
                                            if (layer.layerPopupTemplate) {
                                                slayer.popupTemplate = layer.layerPopupTemplate;
                                            }
                                        }
                                        if (layer.layerRenderer) {
                                            slayer.renderer = layer.layerRenderer;
                                        }
                                        if (layer.layerMaxScale) {
                                            slayer.maxScale = layer.layerMaxScale;
                                        }
                                        if (layer.layerMinScale) {
                                            slayer.minScale = layer.layerMinScale;
                                        }
                                        if (layer.layerelevationInfo) {
                                            slayer.elevationInfo = layer.layerelevationInfo;
                                        }
                                        if (layer.layerdefinitionExpression) {
                                            slayer.definitionExpression = layer.layerdefinitionExpression;
                                        }
                                        return slayer;
                                        break;
                                }
                            });
                            grouplayer.addMany(mlayers);
                        }
                        if (view.type === '2d') {
                            if (itemsgroup.grouptype === '2d') {
                                smapgrouplayer_1.push(grouplayer);
                            }
                        }
                        else {
                            smapgrouplayer_1.push(grouplayer);
                        }
                    });
                    view.map.addMany(smapgrouplayer_1);
                }
                else if (layers.type === 'layer') {
                    switch (layers.layerType) {
                        case 'TileLayer':
                            var tlayer = new TileLayer({
                                url: layers.layerUrl,
                                id: layers.layerId,
                                title: layers.layerTitle,
                                visible: layers.layerVisible,
                                opacity: layers.layerOpacity,
                                listMode: layers.layerlistMode
                            });
                            if (layers.layerMaxScale) {
                                tlayer.maxScale = layers.layerMaxScale;
                            }
                            if (layers.layerMinScale) {
                                tlayer.minScale = layers.layerMinScale;
                            }
                            view.map.add(tlayer);
                            break;
                        case 'FeatureLayer':
                            var flayer = new FeatureLayer({
                                url: layers.layerUrl,
                                id: layers.layerId,
                                title: layers.layerTitle,
                                visible: layers.layerVisible,
                                opacity: layers.layerOpacity,
                                listMode: layers.layerlistMode
                            });
                            if (layers.layerPopupEnabled) {
                                flayer.popupEnabled = layers.layerPopupEnabled;
                                if (layers.layerPopupTemplate) {
                                    flayer.popupTemplate = layers.layerPopupTemplate;
                                }
                            }
                            if (layers.layerRenderer) {
                                flayer.renderer = layers.layerRenderer;
                            }
                            if (layers.layerMaxScale) {
                                flayer.maxScale = layers.layerMaxScale;
                            }
                            if (layers.layerMinScale) {
                                flayer.minScale = layers.layerMinScale;
                            }
                            if (layers.layerLabelsVisible) {
                                flayer.labelsVisible = layers.layerLabelsVisible;
                                if (layers.layerLabelingInfo) {
                                    flayer.labelingInfo = layers.layerLabelingInfo;
                                }
                            }
                            if (layers.layerelevationInfo) {
                                flayer.elevationInfo = layers.layerelevationInfo;
                            }
                            if (layers.layerdefinitionExpression) {
                                flayer.definitionExpression = layers.layerdefinitionExpression;
                            }
                            view.map.add(flayer);
                            break;
                        case 'SceneLayer':
                            var slayer = new SceneLayer({
                                url: layers.layerUrl,
                                id: layers.layerId,
                                title: layers.layerTitle,
                                visible: layers.layerVisible,
                                opacity: layers.layerOpacity,
                                listMode: layers.layerlistMode
                            });
                            if (layers.layerPopupEnabled) {
                                slayer.popupEnabled = layers.layerPopupEnabled;
                                if (layers.layerPopupTemplate) {
                                    slayer.popupTemplate = layers.layerPopupTemplate;
                                }
                            }
                            if (layers.layerRenderer) {
                                slayer.renderer = layers.layerRenderer;
                            }
                            if (layers.layerMaxScale) {
                                slayer.maxScale = layers.layerMaxScale;
                            }
                            if (layers.layerMinScale) {
                                slayer.minScale = layers.layerMinScale;
                            }
                            if (layers.layerelevationInfo) {
                                slayer.elevationInfo = layers.layerelevationInfo;
                            }
                            if (layers.layerdefinitionExpression) {
                                slayer.definitionExpression = layers.layerdefinitionExpression;
                            }
                            view.map.add(slayer);
                            break;
                    }
                }
            });
            return [2 /*return*/];
        });
    });
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function init3Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter$1(this, void 0, void 0, function () {
        var _a, Map, Basemap, Point, urlUtils, esriConfig, 
        // tslint:disable-next-line:variable-name
        IdentityManager, watchUtils, SceneView, basemaplayers, bmap, mapv, buildingsLayers, viewMode, smapbussinesslayers, sceneView, cameraheading;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/geometry/Point',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/identity/IdentityManager',
                        'esri/core/watchUtils',
                        'esri/views/SceneView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], Point = _a[2], urlUtils = _a[3], esriConfig = _a[4], IdentityManager = _a[5], watchUtils = _a[6], SceneView = _a[7];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryServiceUrl;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init3DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_as'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    return [4 /*yield*/, initbuildingsLayers(gisService.buildingsLayers, maptoken)];
                case 3:
                    buildingsLayers = _b.sent();
                    mapv.add(buildingsLayers);
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/light":
                                mapv.basemap.id = 'basemap_zw';
                                mapv.ground.surfaceColor = '#EDEDED';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                mapv.ground.surfaceColor = '#021425';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                mapv.ground.surfaceColor = '#021425';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                                mapv.ground.surfaceColor = '#021425';
                        }
                    }
                    else {
                        mapv.basemap.id = 'basemap_as';
                        mapv.ground.surfaceColor = '#021425';
                    }
                    mapv.basemap.baseLayers.items.forEach(function (layer) {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layer.id === mapv.basemap.id) {
                            layer.visible = true;
                        }
                        else {
                            layer.visible = false;
                        }
                    });
                    ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
                        var buildingmodel = mapv.findLayerById(layname);
                        if (mapoptions.showBuildingBlock === false) {
                            if (buildingmodel) {
                                buildingmodel.visible = false;
                            }
                        }
                        else {
                            if (buildingmodel) {
                                // tslint:disable-next-line:prefer-conditional-expression
                                if (mapv.basemap.id === 'basemap_zw') {
                                    // tslint:disable-next-line:prefer-conditional-expression
                                    if (layname === 'model_white_zw') {
                                        buildingmodel.visible = true;
                                    }
                                    else {
                                        buildingmodel.visible = false;
                                    }
                                }
                                else if (mapv.basemap.id === 'basemap_as') {
                                    // tslint:disable-next-line:prefer-conditional-expression
                                    if (layname === 'model_white_as') {
                                        buildingmodel.visible = true;
                                    }
                                    else {
                                        buildingmodel.visible = false;
                                    }
                                }
                                else if (mapv.basemap.id === 'basemap_air') {
                                    // tslint:disable-next-line:prefer-conditional-expression
                                    if (layname === 'model_air_real') {
                                        buildingmodel.visible = true;
                                    }
                                    else {
                                        buildingmodel.visible = false;
                                    }
                                }
                            }
                        }
                    });
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 4:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    sceneView = new SceneView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        },
                        viewingMode: 'local'
                    });
                    sceneView.ui.empty('top-left');
                    sceneView.ui.empty('top-right');
                    sceneView.ui.empty('bottom-left');
                    sceneView.ui.empty('bottom-right');
                    sceneView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    sceneView.when(function () {
                        // sceneView.qualitySettings.memoryLimit = 4096;
                        sceneView.environment.lighting.waterReflectionEnabled = true;
                        IdentityManager.on('dialog-create', function () {
                            IdentityManager.dialog.open = true;
                        });
                    });
                    if (mapoptions.center !== undefined) {
                        sceneView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            z: mapoptions.center[2] !== undefined ? mapoptions.center[2] : 0,
                            spatialReference: {
                                wkid: 102100
                            }
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        sceneView.zoom = mapoptions.zoom;
                    }
                    if (!(mapoptions.pitch !== undefined)) return [3 /*break*/, 6];
                    cameraheading = 0;
                    return [4 /*yield*/, sceneView.goTo({
                            center: sceneView.center,
                            zoom: sceneView.zoom,
                            tilt: mapoptions.pitch,
                            heading: cameraheading
                        })];
                case 5:
                    _b.sent();
                    watchUtils.when(sceneView, "animation", function (animation) {
                        animation.when(function (anti) {
                            if (mapoptions.zooms !== undefined) {
                                sceneView.watch("zoom", function (value) {
                                    if (value >= mapoptions.zooms[1]) {
                                        sceneView.zoom = mapoptions.zooms[1];
                                    }
                                    if (value <= mapoptions.zooms[0]) {
                                        sceneView.zoom = mapoptions.zooms[0];
                                    }
                                });
                            }
                        }).catch(function (anti) {
                            console.log(anti);
                        });
                    });
                    _b.label = 6;
                case 6: return [2 /*return*/, { sceneView: sceneView, mapv: mapv }];
            }
        });
    });
}
function init2Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter$1(this, void 0, void 0, function () {
        var _a, Map, Basemap, urlUtils, esriConfig, 
        // tslint:disable-next-line:variable-name
        IdentityManager, Point, MapView, basemaplayers, bmap, mapv, viewMode, smapbussinesslayers, mapView;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/identity/IdentityManager',
                        'esri/geometry/Point',
                        'esri/views/MapView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], urlUtils = _a[2], esriConfig = _a[3], IdentityManager = _a[4], Point = _a[5], MapView = _a[6];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryserviceUrl;
                    esriConfig.fontsUrl = Mapcofig.fonts.url;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init2DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_as'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/light":
                                mapv.basemap.id = 'basemap_zw';
                                mapv.ground.surfaceColor = '#EDEDED';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                mapv.ground.surfaceColor = '#021425';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                mapv.ground.surfaceColor = '#021425';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                                mapv.ground.surfaceColor = '#021425';
                        }
                    }
                    else {
                        mapv.basemap.id = 'basemap_as';
                        mapv.ground.surfaceColor = '#021425';
                    }
                    mapv.basemap.baseLayers.items.forEach(function (layer) {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layer.id === mapv.basemap.id) {
                            layer.visible = true;
                        }
                        else {
                            layer.visible = false;
                        }
                    });
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 3:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    mapView = new MapView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        }
                    });
                    mapView.ui.empty('top-left');
                    mapView.ui.empty('top-right');
                    mapView.ui.empty('bottom-left');
                    mapView.ui.empty('bottom-right');
                    mapView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    if (mapoptions.center !== undefined) {
                        mapView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            spatialReference: {
                                wkid: 102100
                            }
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        mapView.zoom = mapoptions.zoom;
                    }
                    if (mapoptions.zooms !== undefined) {
                        mapView.constraints.minZoom = mapoptions.zooms[0];
                        mapView.constraints.maxZoom = mapoptions.zooms[1];
                    }
                    if (mapoptions.rotateEnable !== undefined) {
                        mapView.constraints.rotationEnabled = mapoptions.rotateEnable;
                    }
                    return [2 /*return*/, { mapView: mapView, mapv: mapv }];
            }
        });
    });
}

// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
var EventEmitter$1 = /** @class */ (function () {
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

// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
// Re-export default export
// Execute
// tslint:disable-next-line:no-duplicate-imports

var MapEvent = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function MapEvent() {
    }
    MapEvent.maploaded = 'maploaded';
    MapEvent.zoomchanged = 'zoomchanged';
    MapEvent.extentchanged = 'extentchanged';
    MapEvent.centerchanged = 'centerchanged';
    MapEvent.blur = 'blur';
    MapEvent.click = 'click';
    MapEvent.doubleclick = 'doubleclick';
    MapEvent.drag = 'drag';
    MapEvent.focus = 'focus';
    MapEvent.hold = 'hold';
    MapEvent.keydown = 'key-down';
    MapEvent.keyup = 'key-up';
    MapEvent.mousewheel = 'mouse-wheel';
    MapEvent.pointerdown = 'pointer-down';
    MapEvent.pointerenter = 'pointer-enter';
    MapEvent.pointerleave = 'pointer-leave';
    MapEvent.pointermove = 'pointer-move';
    MapEvent.pointerup = 'pointer-up';
    MapEvent.resize = 'pointer-up';
    MapEvent.popupvisible = 'popup-visible';
    return MapEvent;
}());

var __extends$14 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Map$1 = /** @class */ (function (_super) {
    __extends$14(Map, _super);
    function Map(container, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.maplayers = null;
        _this.viewMode = '2D' || '3D';
        _this.showBuildingBlock = false;
        _this.view = null;
        _this.maptoken = '';
        _this.mapControl = [];
        _this.mapoverlayers = [];
        _this.mapoverlayersflayer = [];
        _this.watchHandles = [];
        _this.viewMode = options.viewMode === undefined || options.viewMode === '2D' ? '2D' : '3D';
        _this.zooms = options.zooms === undefined ? [0, 11] : options.zooms;
        _this.showBuildingBlock = options.showBuildingBlock ? true : false;
        _this.init(container, _this.viewMode, options);
        return _this;
    }
    Map.prototype.setlayerRenderer = function (layerid, renderer) {
        var rendererLayer = this.view.map.findLayerById(layerid);
        if (rendererLayer) {
            rendererLayer.renderer = renderer;
        }
    };
    Map.prototype.addLayer = function (layeroption) {
        addLayer(layeroption, this.view, this.maptoken);
    };
    Map.prototype.addLayers = function (layers) {
        addLayers(layers, this.view, this.maptoken);
    };
    Map.prototype.getLayer = function (layerid) {
        var layer = this.view.map.findLayerById(layerid);
        return layer;
    };
    Map.prototype.setLayerProperties = function (layeroption) {
        setLayerProperties(layeroption, this.view);
    };
    Map.prototype.set3dlabel = function () {
        if (this.view.type === '2d') {
            return;
        }
        set3dlabelLayers(this.view);
    };
    Map.prototype.del3dlabel = function () {
        if (this.view.type === '2d') {
            return;
        }
        var threedlabel = this.view.map.findLayerById('smap_3d_labelGroup');
        if (threedlabel) {
            this.view.map.remove(threedlabel);
        }
    };
    Map.prototype.setmemoryLimit = function (memoryLimit) {
        this.view.qualitySettings.memoryLimit = memoryLimit;
    };
    Map.prototype.removeLayer = function (layerid) {
        var layer = this.view.map.findLayerById(layerid);
        if (layer) {
            this.view.map.remove(layer);
        }
    };
    Map.prototype.getZoom = function () {
        if (this.view) {
            return this.view.zoom;
        }
    };
    Map.prototype.setZoom = function (zoomlevel) {
        if (this.view) {
            this.view.zoom = zoomlevel;
        }
    };
    Map.prototype.panTo = function (targetpoint) {
        var _this = this;
        if (this.view) {
            // tslint:disable-next-line:variable-name
            load(['esri/geometry/Point'])
                // tslint:disable-next-line:no-shadowed-variable
                .then(function (_a) {
                var point = _a[0];
                var mappoint = new point({
                    x: targetpoint[0],
                    y: targetpoint[1],
                    z: targetpoint[2] !== undefined ? targetpoint[2] : 0,
                    spatialReference: _this.view.spatialReference
                });
                _this.view.center = mappoint;
            })
                .catch(function (err) {
                console.error(err);
            });
        }
    };
    Map.prototype.panBy = function (offsetx, offsety) {
        if (this.view) {
            var mapcenter = this.view.center;
            var mapcenterscreen = this.view.toScreen(mapcenter);
            this.view.center = this.view.toMap({
                x: mapcenterscreen.x + offsetx,
                y: mapcenterscreen.y + offsety
            });
        }
    };
    Map.prototype.getBounds = function () {
        if (this.view) {
            var bounds = {};
            bounds.southwest = [this.view.extent.xmin.toFixed(6), this.view.extent.ymin.toFixed(6)];
            if (this.viewMode === '3D') {
                if (this.view.extent.zmin !== undefined) {
                    bounds.southwest.push(this.view.extent.zmin.toFixed(6));
                }
            }
            bounds.northeast = [this.view.extent.xmax.toFixed(6), this.view.extent.ymax.toFixed(6)];
            if (this.viewMode === '3D') {
                if (this.view.extent.zmax !== undefined) {
                    bounds.northeast.push(this.view.extent.zmax.toFixed(6));
                }
            }
            return bounds;
        }
    };
    Map.prototype.setBounds = function (bds) {
        var _this = this;
        if (this.view) {
            var dojoConfig = {
                async: true,
                packages: []
            };
            // tslint:disable-next-line:variable-name
            load(['esri/geometry/Extent', 'esri/geometry/SpatialReference'])
                // tslint:disable-next-line:no-shadowed-variable
                .then(function (_a) {
                var extent = _a[0], spatialReference = _a[1];
                var EXTENT = new extent({
                    xmin: bds.xmin,
                    ymin: bds.ymin,
                    xmax: bds.xmax,
                    zmax: bds.ymax,
                    spatialReference: _this.view.spatialReference
                });
                if (_this.viewMode === '3D') {
                    if (bds.zmin !== undefined && bds.zmax !== undefined) {
                        EXTENT.zmin = bds.zmin;
                        EXTENT.zmax = bds.zmax;
                    }
                }
                _this.view.extent = EXTENT;
            })
                .catch(function (err) {
                console.error(err);
            });
        }
    };
    Map.prototype.setCenter = function (centerx, centery, centerz) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Point, SpatialReference, mapcenter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.view) return [3 /*break*/, 2];
                        return [4 /*yield*/, load([
                                'esri/geometry/Point',
                                'esri/geometry/SpatialReference'
                            ])];
                    case 1:
                        _a = _b.sent(), Point = _a[0], SpatialReference = _a[1];
                        mapcenter = null;
                        if (this.viewMode === '2D') {
                            mapcenter = new Point({
                                x: centerx,
                                y: centery,
                                spatialReference: this.view.spatialReference
                            });
                        }
                        else {
                            mapcenter = new Point({
                                x: centerx,
                                y: centery,
                                z: (centerz !== undefined ? centerz : 0),
                                spatialReference: this.view.spatialReference
                            });
                        }
                        this.view.center = mapcenter;
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.setZoomAndCenter = function (zoomlevel, center) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Point, SpatialReference, mapcenter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.view) return [3 /*break*/, 2];
                        return [4 /*yield*/, load([
                                'esri/geometry/Point',
                                'esri/geometry/SpatialReference'
                            ])];
                    case 1:
                        _a = _b.sent(), Point = _a[0], SpatialReference = _a[1];
                        mapcenter = null;
                        if (this.viewMode === '2D') {
                            this.view.zoom = zoomlevel;
                            mapcenter = new Point({
                                x: center[0],
                                y: center[1],
                                spatialReference: this.view.spatialReference
                            });
                            this.view.center = mapcenter;
                        }
                        else {
                            mapcenter = new Point({
                                x: center[0],
                                y: center[1],
                                z: (center[2] !== undefined ? center[2] : 0),
                                spatialReference: this.view.spatialReference
                            });
                            this.view.goTo({
                                center: mapcenter,
                                zoom: zoomlevel,
                                tilt: this.view.camera.tilt,
                                heading: this.view.camera.heading
                            });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.getCenter = function () {
        if (this.view) {
            var pointxy = [];
            pointxy.push(this.view.center.x.toFixed(6));
            pointxy.push(this.view.center.y.toFixed(6));
            if (this.viewMode === '3D') {
                pointxy.push(this.view.center.z.toFixed(6));
            }
            return pointxy;
        }
    };
    Map.prototype.getScale = function () {
        if (this.view) {
            return this.view.scale;
        }
    };
    Map.prototype.setRotation = function (rotation) {
        if (this.view) {
            if (this.viewMode === '2D') {
                this.view.rotation = rotation;
            }
            else {
                var flyanimation = this.view.goTo({
                    center: this.view.center,
                    zoom: this.view.zoom,
                    tilt: this.view.camera.tilt,
                    heading: rotation
                });
            }
        }
    };
    Map.prototype.setPitch = function (pitch) {
        if (this.view) {
            if (this.viewMode === '3D') {
                this.view.goTo({
                    center: this.view.center,
                    zoom: this.view.zoom,
                    tilt: pitch,
                    heading: this.view.camera.heading
                });
            }
        }
    };
    Map.prototype.getPitch = function () {
        if (this.view) {
            if (this.viewMode === '3D') {
                return this.view.camera.tilt;
            }
        }
    };
    Map.prototype.zoomIn = function () {
        if (this.view) {
            if (this.viewMode === '3D') {
                if (this.view.zoom + 1 >= this.zooms[0] && this.view.zoom + 1 <= this.zooms[1]) {
                    this.view.goTo({
                        center: this.view.center,
                        zoom: this.view.zoom + 1,
                        tilt: this.view.camera.tilt,
                        heading: this.view.camera.heading
                    });
                }
            }
            else {
                this.view.goTo({
                    center: this.view.center,
                    zoom: this.view.zoom + 1
                });
            }
        }
    };
    Map.prototype.zoomOut = function () {
        if (this.view) {
            if (this.viewMode === '3D') {
                if (this.view.zoom - 1 >= this.zooms[0] && this.view.zoom - 1 <= this.zooms[1]) {
                    this.view.goTo({
                        center: this.view.center,
                        zoom: this.view.zoom - 1,
                        tilt: this.view.camera.tilt,
                        heading: this.view.camera.heading
                    });
                }
            }
            else {
                this.view.goTo({
                    center: this.view.center,
                    zoom: this.view.zoom - 1
                });
            }
        }
    };
    Map.prototype.toggleBuildingBlock = function () {
        this.showBuildingBlock = !this.showBuildingBlock;
        switch (this.view.map.basemap.id) {
            case "basemap_zw":
                var buildingmodel = this.view.map.findLayerById('model_white_zw');
                if (buildingmodel) {
                    this.showBuildingBlock ? buildingmodel.visible = true : buildingmodel.visible = false;
                }
                break;
            case "basemap_as":
                var asbuildingmodel = this.view.map.findLayerById('model_white_as');
                if (asbuildingmodel) {
                    this.showBuildingBlock ? asbuildingmodel.visible = true : asbuildingmodel.visible = false;
                }
                break;
            case "basemap_air":
                var airbuildingmodel = this.view.map.findLayerById('model_air_real');
                if (airbuildingmodel) {
                    this.showBuildingBlock ? airbuildingmodel.visible = true : airbuildingmodel.visible = false;
                }
                break;
        }
    };
    Map.prototype.setMapStyle = function (style) {
        var _this = this;
        if (this.view) {
            switch (style) {
                case "smap://styles/light":
                    this.view.map.basemap.id = 'basemap_zw';
                    this.view.map.ground.surfaceColor = '#EDEDED';
                    break;
                case "smap://styles/dark":
                    this.view.map.basemap.id = 'basemap_as';
                    this.view.map.ground.surfaceColor = '#021425';
                    break;
                case "smap://styles/image":
                    this.view.map.basemap.id = 'basemap_air';
                    this.view.map.ground.surfaceColor = '#021425';
                    break;
                default:
                    this.view.map.basemap.id = 'basemap_as';
                    this.view.map.ground.surfaceColor = '#021425';
                    return;
            }
            this.view.map.basemap.baseLayers.items.forEach(function (layer) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (layer.id === _this.view.map.basemap.id) {
                    layer.visible = true;
                }
                else {
                    layer.visible = false;
                }
            });
            if (this.viewMode === '2D') {
                return;
            }
            ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
                var buildingmodel = _this.view.map.findLayerById(layname);
                if (_this.showBuildingBlock === false) {
                    if (buildingmodel) {
                        buildingmodel.visible = false;
                    }
                }
                else {
                    if (buildingmodel) {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (_this.view.map.basemap.id === 'basemap_zw') {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layname === 'model_white_zw') {
                                buildingmodel.visible = true;
                            }
                            else {
                                buildingmodel.visible = false;
                            }
                        }
                        else if (_this.view.map.basemap.id === 'basemap_as') {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layname === 'model_white_as') {
                                buildingmodel.visible = true;
                            }
                            else {
                                buildingmodel.visible = false;
                            }
                        }
                        else if (_this.view.map.basemap.id === 'basemap_air') {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layname === 'model_air_real') {
                                buildingmodel.visible = true;
                            }
                            else {
                                buildingmodel.visible = false;
                            }
                        }
                    }
                }
            });
        }
    };
    Map.prototype.getMapStyle = function () {
        if (this.view) {
            switch (this.view.map.basemap.id) {
                case "basemap_zw":
                    return 'smap://styles/light';
                    break;
                case "basemap_as":
                    return 'smap://styles/dark';
                    break;
                case "basemap_air":
                    return 'smap://styles/image';
                    break;
            }
        }
    };
    Map.prototype.enableMouseEvent = function (active) {
        if (active) {
            var viewmodeHandles = this.watchHandles.filter(function (item) {
                return item[0] === 'EnablemouseEventdraghandler' || item[0] === 'EnablemouseEventdoubleclickhandler'
                    || item[0] === 'EnablemouseEventmouseWheelhandler';
            });
            viewmodeHandles.forEach(function (handle) {
                handle[1].remove();
            });
            this.watchHandles = this.watchHandles.filter(function (item) {
                return item[0] !== 'EnablemouseEventdraghandler' && item[0] !== 'EnablemouseEventdoubleclickhandler' &&
                    item[0] !== 'EnablemouseEventmouseWheelhandler';
            });
        }
        else {
            var draghandler = this.view.on('drag', function (event) {
                event.stopPropagation();
            });
            this.watchHandles.push(['EnablemouseEventdraghandler', draghandler]);
            var doubleclickhandler = this.view.on('double-click', function (event) {
                event.stopPropagation();
            });
            this.watchHandles.push(['EnablemouseEventdoubleclickhandler', draghandler]);
            var mousewheelhandler = this.view.on('mouse-wheel', function (event) {
                event.stopPropagation();
            });
            this.watchHandles.push(['EnablemouseEventmouseWheelhandler', draghandler]);
        }
    };
    Map.prototype.switchMode = function (viemode) {
        if (viemode === '2d') {
            this.view.goTo({
                heading: 0,
                tilt: 0
            });
            var draghandler = this.view.on('drag', function (event) {
                if (event.button === 2) {
                    event.stopPropagation();
                }
            });
            this.watchHandles.push(['viewmodeswitchhandler', draghandler]);
        }
        else {
            this.view.goTo({
                heading: 0,
                tilt: 60
            });
            var viewmodeHandles = this.watchHandles.filter(function (item) {
                return item[0] === 'viewmodeswitchhandler';
            });
            viewmodeHandles.forEach(function (handle) {
                handle[1].remove();
            });
            this.watchHandles = this.watchHandles.filter(function (item) {
                return item[0] !== 'viewmodeswitchhandler';
            });
        }
    };
    Map.prototype.showBuilding = function (isbuidingBlockshow) {
        var _this = this;
        if (this.view === null) {
            return;
        }
        if (this.viewMode === '2D') {
            return;
        }
        isbuidingBlockshow ? this.showBuildingBlock = true : this.showBuildingBlock = false;
        ['model_white_zw', 'model_air_real', 'model_white_as'].forEach(function (layname) {
            var buildingmodel = _this.view.map.findLayerById(layname);
            if (_this.showBuildingBlock === false) {
                if (buildingmodel) {
                    buildingmodel.visible = false;
                }
            }
            else {
                if (buildingmodel) {
                    // tslint:disable-next-line:prefer-conditional-expression
                    if (_this.view.map.basemap.id === 'basemap_zw') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_zw') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.view.map.basemap.id === 'basemap_as') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_white_as') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                    else if (_this.view.map.basemap.id === 'basemap_air') {
                        // tslint:disable-next-line:prefer-conditional-expression
                        if (layname === 'model_air_real') {
                            buildingmodel.visible = true;
                        }
                        else {
                            buildingmodel.visible = false;
                        }
                    }
                }
            }
        });
    };
    Map.prototype.addControl = function (control) {
        var _this = this;
        if (control.controlName.toLowerCase() === 'toc') {
            load(['esri/widgets/LayerList', 'esri/widgets/Expand'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var LayerList = _a[0], Expand = _a[1];
                // eslint-disable-next-line no-case-declarations
                var layerlistWidget = new LayerList({
                    container: document.createElement('div'),
                    id: 'maplayerlist',
                    view: _this.view
                });
                if (control.collapse) {
                    var layerListExpand = new Expand({
                        id: 'layerlistonly',
                        view: _this.view,
                        content: layerlistWidget.domNode,
                        expandIconClass: 'esri-icon-layers',
                        expandTooltip: '专题图层框',
                        group: 'top-left'
                    });
                    _this.mapControl.push([control.controlName, layerListExpand]);
                    if (control.visible) {
                        _this.view.ui.add(layerListExpand, control.position);
                    }
                }
                else {
                    _this.mapControl.push([control.controlName, layerlistWidget]);
                    _this.view.ui.add(layerlistWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'zoom') {
            load(['esri/widgets/Zoom'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Zoom = _a[0];
                // eslint-disable-next-line no-case-declarations
                var zoomWidget = new Zoom({
                    view: _this.view
                });
                _this.mapControl.push([control.controlName, zoomWidget]);
                if (control.visible) {
                    _this.view.ui.add(zoomWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'compass') {
            load(['esri/widgets/Compass'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Compass = _a[0];
                // eslint-disable-next-line no-case-declarations
                var comcpassWidget = new Compass({
                    view: _this.view
                });
                _this.mapControl.push([control.controlName, comcpassWidget]);
                if (control.visible) {
                    _this.view.ui.add(comcpassWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'home') {
            load(['esri/widgets/Home'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Home = _a[0];
                // eslint-disable-next-line no-case-declarations
                var homeWidget = new Home({
                    view: _this.view
                });
                _this.mapControl.push([control.controlName, homeWidget]);
                if (control.visible) {
                    _this.view.ui.add(homeWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'fullscreen') {
            load(['esri/widgets/Fullscreen'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var Fullscreen = _a[0];
                // eslint-disable-next-line no-case-declarations
                var fullscreenWidget = new Fullscreen({
                    view: _this.view
                });
                _this.mapControl.push([control.controlName, fullscreenWidget]);
                if (control.visible) {
                    _this.view.ui.add(fullscreenWidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'undergroundswitch') {
            if (this.viewMode === '2D') {
                return;
            }
            else {
                load(['esri/widgets/AboveBelowModeSwitch'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AboveBelowModeSwitch = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var aboveBelowModeSwitchWidget = new AboveBelowModeSwitch({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, aboveBelowModeSwitchWidget]);
                    if (control.visible) {
                        _this.view.ui.add(aboveBelowModeSwitchWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'measurearea') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/AreaMeasureMentButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AreaMeasureMentButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var areaMeasureMentButton2dWidget = new AreaMeasureMentButton2D({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, areaMeasureMentButton2dWidget]);
                    if (control.visible) {
                        _this.view.ui.add(areaMeasureMentButton2dWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/AreaMeasureMentButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var AreaMeasureMentButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var areaMeasureMentButtonWidget = new AreaMeasureMentButton3D({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, areaMeasureMentButtonWidget]);
                    if (control.visible) {
                        _this.view.ui.add(areaMeasureMentButtonWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'measureline') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/DistanceMeasureMentButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var DistanceMeasureMentButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var distanceMeasureMentButton2dWidget = new DistanceMeasureMentButton2D({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, distanceMeasureMentButton2dWidget]);
                    if (control.visible) {
                        _this.view.ui.add(distanceMeasureMentButton2dWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/DistanceMeasureMentButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var DistanceMeasureMentButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var distanceMeasureMentButtonWidget = new DistanceMeasureMentButton3D({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, distanceMeasureMentButtonWidget]);
                    if (control.visible) {
                        _this.view.ui.add(distanceMeasureMentButtonWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'basemaptoggle') {
            if (this.viewMode === '2D') {
                load(['esri/widgets/BaseMapSwitchButton2D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BaseMapSwitchButton2D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var baseMapSwitchButton2DWidget = new BaseMapSwitchButton2D({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, baseMapSwitchButton2DWidget]);
                    if (control.visible) {
                        _this.view.ui.add(baseMapSwitchButton2DWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
            else {
                load(['esri/widgets/BaseMapSwitchButton3D'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BaseMapSwitchButton3D = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var baseMapSwitchButton3DWidget = new BaseMapSwitchButton3D({
                        view: _this.view,
                        showBuildingBlock: _this.showBuildingBlock
                    });
                    _this.mapControl.push([control.controlName, baseMapSwitchButton3DWidget]);
                    if (control.visible) {
                        _this.view.ui.add(baseMapSwitchButton3DWidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'basemapgallery') {
            load(['esri/widgets/BMapGallery_Control'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var BMapGallery_Control = _a[0];
                // eslint-disable-next-line no-case-declarations
                var bMapGallerywidget = new BMapGallery_Control({
                    view: _this.view,
                    showBuildingBlock: _this.showBuildingBlock
                });
                _this.mapControl.push([control.controlName, bMapGallerywidget]);
                if (control.visible) {
                    _this.view.ui.add(bMapGallerywidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'basemapgalleryexpand') {
            load(['esri/widgets/BMapGallery_Expand'])
                // tslint:disable-next-line:variable-name
                .then(function (_a) {
                var BMapGallery_Expand = _a[0];
                // eslint-disable-next-line no-case-declarations
                var bMapGalleryexpandwidget = new BMapGallery_Expand({
                    view: _this.view,
                    showBuildingBlock: _this.showBuildingBlock
                });
                _this.mapControl.push([control.controlName, bMapGalleryexpandwidget]);
                if (control.visible) {
                    _this.view.ui.add(bMapGalleryexpandwidget, control.position);
                }
            }).catch(function (err) { console.error(err); });
        }
        else if (control.controlName.toLowerCase() === 'bimfilter') {
            if (this.viewMode === '2D') {
                return;
            }
            else {
                load(['esri/widgets/BuildingSencelayerFilter'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var BuildingSencelayerFilter = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var buildingSencelayerFilterwidget = new BuildingSencelayerFilter({
                        view: _this.view,
                        layerid: control.layerid
                    });
                    _this.mapControl.push([control.controlName, buildingSencelayerFilterwidget]);
                    if (control.visible) {
                        _this.view.ui.add(buildingSencelayerFilterwidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
        else if (control.controlName.toLowerCase() === 'performanceinfo') {
            if (this.viewMode === '2D') {
                return;
            }
            else {
                load(['esri/widgets/PerformanceInfo'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var PerformanceInfo = _a[0];
                    // eslint-disable-next-line no-case-declarations
                    var performanceInfowidget = new PerformanceInfo({
                        view: _this.view
                    });
                    _this.mapControl.push([control.controlName, performanceInfowidget]);
                    if (control.visible) {
                        _this.view.ui.add(performanceInfowidget, control.position);
                    }
                }).catch(function (err) { console.error(err); });
            }
        }
    };
    Map.prototype.removeControl = function (control) {
        var _this = this;
        this.mapControl.forEach(function (controlelement, idx, array) {
            if (controlelement[0] === control.controlName) {
                _this.view.ui.remove(controlelement[1]);
                _this.mapControl.slice(idx, 1);
            }
        });
    };
    Map.prototype.enableThroughGround = function (isunderground) {
        if (this.view === null) {
            return;
        }
        if (this.viewMode === '2D') {
            return;
        }
        if (isunderground) {
            this.view.map.ground.surfaceColor = '#fff';
            this.view.map.ground.opacity = 0;
            this.view.map.ground.navigationConstraint = {
                type: "none"
            };
        }
        else {
            this.view.map.ground.surfaceColor = null;
            this.view.map.ground.opacity = 1;
            this.view.map.ground.navigationConstraint = {
                type: "stay-above"
            };
        }
    };
    Map.prototype.add = function (overlayers) {
        var _this = this;
        load(['esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], Point = _a[1], PictureMarkerSymbol = _a[2], ArcGISPolyline = _a[3], ArcGISPolygon = _a[4];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (!overelement.symbol) {
                            if (_this.view.type === '2d') {
                                psymbol = {
                                    type: "picture-marker",
                                    url: overelement.icon.image,
                                    width: overelement.icon.size.width,
                                    height: overelement.icon.size.height
                                };
                            }
                            else {
                                psymbol = {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overelement.icon.size.width,
                                            resource: {
                                                href: overelement.icon.image
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            psymbol = overelement.symbol;
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                        _this.view.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var marklabel = null;
                            if (!overelement.label.labelingInfo) {
                                marklabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                marklabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.view.type === '3d' ? overelement.position[0]
                                        + overelement.label.xoffset : overelement.position[0],
                                    y: _this.view.type === '3d' ? overelement.position[1]
                                        + overelement.label.yoffset : overelement.position[1],
                                    z: _this.view.type === '3d' ? overelement.position[2]
                                        + overelement.label.zoffset : overelement.position[2],
                                    spatialReference: _this.view.spatialReference
                                }),
                                symbol: marklabel,
                                attributes: markerattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = null;
                        if (!overelement.symbol) {
                            lineSymbol = {
                                type: "simple-line",
                                color: overelement.strokeColor,
                                style: overelement.style,
                                width: overelement.width,
                                cap: overelement.cap,
                                join: overelement.lineJoin
                            };
                        }
                        else {
                            lineSymbol = overelement.symbol;
                        }
                        var path_1 = [];
                        overelement.path.forEach(function (item) {
                            path_1.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_1,
                            spatialReference: _this.view.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                        _this.view.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var polylinelabel = null;
                            if (!overelement.label.labelingInfo) {
                                polylinelabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polylinelabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: polylinelabel,
                                attributes: polylineattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (!overelement.symbol) {
                            if (overelement.symboltype === 'simple') {
                                fillSymbol = {
                                    type: "simple-fill",
                                    color: overelement.fillColor,
                                    style: overelement.style,
                                    outline: {
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight,
                                        style: overelement.strokestyle
                                    }
                                };
                            }
                            else {
                                fillSymbol = {
                                    type: "picture-fill",
                                    url: overelement.url,
                                    width: overelement.picwidth,
                                    height: overelement.picheight,
                                    outline: {
                                        style: overelement.strokestyle,
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight
                                    }
                                };
                            }
                        }
                        else {
                            fillSymbol = overelement.symbol;
                        }
                        var rs_1 = [];
                        overelement.paths.forEach(function (item) {
                            rs_1.push([item.X, item.Y, item.Z]);
                        });
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_1,
                            spatialReference: _this.view.spatialReference
                        });
                        var polygoneattributes = overelement.attributes;
                        polygoneattributes['uuid'] = overelement.uuid;
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygoneattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polygonGraphic]);
                        _this.view.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var polygonlabel = null;
                            if (!overelement.label.labelingInfo) {
                                polygonlabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polygonlabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: polygonlabel,
                                attributes: polygoneattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                overlayers.overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (!overelement.symbol) {
                            if (_this.view.type === '2d') {
                                psymbol = {
                                    type: "picture-marker",
                                    url: overelement.icon.image,
                                    width: overelement.icon.size.width,
                                    height: overelement.icon.size.height
                                };
                            }
                            else {
                                psymbol = {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overelement.icon.size.width,
                                            resource: {
                                                href: overelement.icon.image
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            psymbol = overelement.symbol;
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, graphic]);
                        _this.view.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var marklabel = null;
                            if (!overelement.label.labelingInfo) {
                                marklabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                marklabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.view.type === '3d' ? overelement.position[0]
                                        + overelement.label.xoffset :
                                        overelement.position[0],
                                    y: _this.view.type === '3d' ? overelement.position[1]
                                        + overelement.label.yoffset :
                                        overelement.position[1],
                                    z: _this.view.type === '3d' ? overelement.position[2]
                                        + overelement.label.zoffset :
                                        overelement.position[2],
                                    spatialReference: _this.view.spatialReference
                                }),
                                symbol: marklabel,
                                attributes: markerattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = null;
                        if (!overelement.symbol) {
                            lineSymbol = {
                                type: "simple-line",
                                color: overelement.strokeColor,
                                style: overelement.style,
                                width: overelement.width,
                                cap: overelement.cap,
                                join: overelement.lineJoin
                            };
                        }
                        else {
                            lineSymbol = overelement.symbol;
                        }
                        var path_2 = [];
                        overelement.path.forEach(function (item) {
                            path_2.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_2,
                            spatialReference: _this.view.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polylineGraphic]);
                        _this.view.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var polylinelabel = null;
                            if (!overelement.label.labelingInfo) {
                                polylinelabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polylinelabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: polylinelabel,
                                attributes: polylineattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (!overelement.symbol) {
                            if (overelement.symboltype === 'simple') {
                                fillSymbol = {
                                    type: "simple-fill",
                                    color: overelement.fillColor,
                                    style: overelement.style,
                                    outline: {
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight,
                                        style: overelement.strokestyle
                                    }
                                };
                            }
                            else {
                                fillSymbol = {
                                    type: "picture-fill",
                                    url: overelement.url,
                                    width: overelement.picwidth,
                                    height: overelement.picheight,
                                    outline: {
                                        style: overelement.strokestyle,
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight
                                    }
                                };
                            }
                        }
                        else {
                            fillSymbol = overelement.symbol;
                        }
                        var rs_2 = [];
                        overelement.paths.forEach(function (item) {
                            rs_2.push([item.X, item.Y, item.Z]);
                        });
                        var polygoneattributes = overelement.attributes;
                        polygoneattributes['uuid'] = overelement.uuid;
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_2,
                            spatialReference: _this.view.spatialReference
                        });
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygoneattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polygonGraphic]);
                        _this.view.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var polygonlabel = null;
                            if (!overelement.label.labelingInfo) {
                                polygonlabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polygonlabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: polygonlabel,
                                attributes: polygoneattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'element') {
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var psymbol = void 0;
                    if (!overlayers.symbol) {
                        if (_this.view.type === '2d') {
                            psymbol = {
                                type: "picture-marker",
                                url: overlayers.icon.image,
                                width: overlayers.icon.size.width,
                                height: overlayers.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overlayers.icon.size.width,
                                        resource: {
                                            href: overlayers.icon.image
                                        }
                                    }]
                            };
                        }
                    }
                    else {
                        psymbol = overlayers.symbol;
                    }
                    var markeattributes = overlayers.attributes;
                    markeattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.view.spatialReference
                        }),
                        symbol: psymbol,
                        attributes: markeattributes
                    });
                    _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                    _this.view.graphics.add(graphic);
                    if (overlayers.label.visible) {
                        var marklabel = null;
                        if (!overlayers.label.labelingInfo) {
                            marklabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            marklabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: new Point({
                                x: _this.view.type === '3d' ? overlayers.position[0]
                                    + overlayers.label.xoffset : overlayers.position[0],
                                y: _this.view.type === '3d' ? overlayers.position[1]
                                    + overlayers.label.yoffset : overlayers.position[1],
                                z: _this.view.type === '3d' ? overlayers.position[2]
                                    + overlayers.label.zoffset : overlayers.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: marklabel,
                            attributes: markeattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                    var lineSymbol = null;
                    if (!overlayers.symbol) {
                        lineSymbol = {
                            type: "simple-line",
                            color: overlayers.strokeColor,
                            style: overlayers.style,
                            width: overlayers.width,
                            cap: overlayers.cap,
                            join: overlayers.lineJoin
                        };
                    }
                    else {
                        lineSymbol = overlayers.symbol;
                    }
                    var path_3 = [];
                    overlayers.path.forEach(function (item) {
                        path_3.push([item.X, item.Y, item.Z]);
                    });
                    var polyline = new ArcGISPolyline({
                        hasZ: false,
                        hasM: false,
                        paths: path_3,
                        spatialReference: _this.view.spatialReference
                    });
                    var polylineattributes = overlayers.attributes;
                    polylineattributes['uuid'] = overlayers.uuid;
                    var polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                        attributes: polylineattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polylineGraphic]);
                    _this.view.graphics.add(polylineGraphic);
                    if (overlayers.label.visible) {
                        var polylabel = null;
                        if (!overlayers.label.labelingInfo) {
                            polylabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            polylabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: polylineGraphic.geometry.extent.center,
                            symbol: polylabel,
                            attributes: polylineattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                    var fillSymbol = void 0;
                    if (!overlayers.symbol) {
                        if (overlayers.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overlayers.fillColor,
                                style: overlayers.style,
                                outline: {
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight,
                                    style: overlayers.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overlayers.url,
                                width: overlayers.picwidth,
                                height: overlayers.picheight,
                                outline: {
                                    style: overlayers.strokestyle,
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight
                                }
                            };
                        }
                    }
                    else {
                        fillSymbol = overlayers.symbol;
                    }
                    var rs_3 = [];
                    overlayers.paths.forEach(function (item) {
                        rs_3.push([item.X, item.Y, item.Z]);
                    });
                    var polygonattributes = overlayers.attributes;
                    polygonattributes['uuid'] = overlayers.uuid;
                    var polygon = new ArcGISPolygon({
                        hasZ: true,
                        hasM: true,
                        rings: rs_3,
                        spatialReference: _this.view.spatialReference
                    });
                    var polygonGraphic = new Graphic({
                        geometry: polygon,
                        symbol: fillSymbol,
                        attributes: polygonattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polygonGraphic]);
                    _this.view.graphics.add(polygonGraphic);
                    if (overlayers.label.visible) {
                        var polylabel = null;
                        if (!overlayers.label.labelingInfo) {
                            polylabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            polylabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: polygonGraphic.geometry.extent.center,
                            symbol: polylabel,
                            attributes: polygonattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
            }
        }).catch(function (err) { console.error(err); });
    };
    Map.prototype.remove = function (overlayers) {
        var _this = this;
        if (overlayers instanceof Array) {
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.view.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
        }
        else if (overlayers.type === 'group') {
            var graphiclist = this.mapoverlayers.filter(function (item) { return item[0] ===
                overlayers.uuid; });
            graphiclist.forEach(function (item) {
                _this.view.graphics.remove(item[2]);
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[0] !==
                overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayers.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            graphiclist.forEach(function (item) {
                _this.view.graphics.remove(item[2]);
            });
            this.mapoverlayers = this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    Map.prototype.update = function (overlayers) {
        var _this = this;
        load(['esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], Point = _a[1], PictureMarkerSymbol = _a[2], ArcGISPolyline = _a[3], ArcGISPolygon = _a[4];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    var graphiclist = _this.mapoverlayers.filter(function (item) {
                        return item[1] === overelement.uuid;
                    });
                    graphiclist.forEach(function (item) {
                        _this.view.graphics.remove(item[2]);
                    });
                    _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !== overelement.uuid; });
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (!overelement.symbol) {
                            if (_this.view.type === '2d') {
                                psymbol = {
                                    type: "picture-marker",
                                    url: overelement.icon.image,
                                    width: overelement.icon.size.width,
                                    height: overelement.icon.size.height
                                };
                            }
                            else {
                                psymbol = {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overelement.icon.size.width,
                                            resource: {
                                                href: overelement.icon.image
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            psymbol = overelement.symbol;
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, graphic]);
                        _this.view.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var marklabel = null;
                            if (!overelement.label.labelingInfo) {
                                marklabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                marklabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.view.type === '3d' ? overelement.position[0]
                                        + overelement.label.xoffset : overelement.position[0],
                                    y: _this.view.type === '3d' ? overelement.position[1]
                                        + overelement.label.yoffset : overelement.position[1],
                                    z: _this.view.type === '3d' ? overelement.position[2]
                                        + overelement.label.zoffset : overelement.position[2],
                                    spatialReference: _this.view.spatialReference
                                }),
                                symbol: marklabel,
                                attributes: markerattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = null;
                        if (!overelement.symbol) {
                            lineSymbol = {
                                type: "simple-line",
                                color: overelement.strokeColor,
                                style: overelement.style,
                                width: overelement.width,
                                cap: overelement.cap,
                                join: overelement.lineJoin
                            };
                        }
                        else {
                            lineSymbol = overelement.symbol;
                        }
                        var path_4 = [];
                        overelement.path.forEach(function (item) {
                            path_4.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_4,
                            spatialReference: _this.view.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push(['smap-default', overelement.uuid, polylineGraphic]);
                        _this.view.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var polylinelabel = null;
                            if (!overelement.label.labelingInfo) {
                                polylinelabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polylinelabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: polylinelabel,
                                attributes: polylineattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default', overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (!overelement.symbol) {
                            if (overelement.symboltype === 'simple') {
                                fillSymbol = {
                                    type: "simple-fill",
                                    color: overelement.fillColor,
                                    style: overelement.style,
                                    outline: {
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight,
                                        style: overelement.strokestyle
                                    }
                                };
                            }
                            else {
                                fillSymbol = {
                                    type: "picture-fill",
                                    url: overelement.url,
                                    width: overelement.picwidth,
                                    height: overelement.picheight,
                                    outline: {
                                        style: overelement.strokestyle,
                                        color: overelement.strokeColor,
                                        width: overelement.strokeWeight
                                    }
                                };
                            }
                        }
                        else {
                            fillSymbol = overelement.symbol;
                        }
                        var rs_4 = [];
                        overelement.paths.forEach(function (item) {
                            rs_4.push([item.X, item.Y, item.Z]);
                        });
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_4,
                            spatialReference: _this.view.spatialReference
                        });
                        var polygonattributes = overelement.attributes;
                        polygonattributes['uuid'] = overelement.uuid;
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygonattributes
                        });
                        _this.mapoverlayers.push(['smap-default',
                            overelement.uuid, polygonGraphic]);
                        _this.view.graphics.add(polygonGraphic);
                        if (overelement.label.visible) {
                            var polygonlabel = null;
                            if (!overelement.label.labelingInfo) {
                                polygonlabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polygonlabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: polygonlabel,
                                attributes: polygonattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default',
                                overelement.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[0] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.view.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[0] !== overlayers.uuid; });
                overlayers.overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var psymbol = void 0;
                        if (!overelement.symbol) {
                            if (_this.view.type === '2d') {
                                psymbol = {
                                    type: "picture-marker",
                                    url: overelement.icon.image,
                                    width: overelement.icon.size.width,
                                    height: overelement.icon.size.height
                                };
                            }
                            else {
                                psymbol = {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overelement.icon.size.width,
                                            resource: {
                                                href: overelement.icon.image
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            psymbol = overelement.symbol;
                        }
                        var markerattributes = overelement.attributes;
                        markerattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: psymbol,
                            attributes: markerattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, graphic]);
                        _this.view.graphics.add(graphic);
                        if (overelement.label.visible) {
                            var marklabel = null;
                            if (!overelement.label.labelingInfo) {
                                marklabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                marklabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: new Point({
                                    x: _this.view.type === '3d' ? overelement.position[0]
                                        + overelement.label.xoffset :
                                        overelement.position[0],
                                    y: _this.view.type === '3d' ? overelement.position[1]
                                        + overelement.label.yoffset :
                                        overelement.position[1],
                                    z: _this.view.type === '3d' ? overelement.position[2]
                                        + overelement.label.zoffset :
                                        overelement.position[2],
                                    spatialReference: _this.view.spatialReference
                                }),
                                symbol: marklabel,
                                attributes: markerattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polyline') {
                        var lineSymbol = null;
                        if (!overelement.symbol) {
                            lineSymbol = {
                                type: "simple-line",
                                color: overelement.strokeColor,
                                style: overelement.style,
                                width: overelement.width,
                                cap: overelement.cap,
                                join: overelement.lineJoin
                            };
                        }
                        else {
                            lineSymbol = overelement.symbol;
                        }
                        var path_5 = [];
                        overelement.path.forEach(function (item) {
                            path_5.push([item.X, item.Y, item.Z]);
                        });
                        var polyline = new ArcGISPolyline({
                            hasZ: false,
                            hasM: false,
                            paths: path_5,
                            spatialReference: _this.view.spatialReference
                        });
                        var polylineattributes = overelement.attributes;
                        polylineattributes['uuid'] = overelement.uuid;
                        var polylineGraphic = new Graphic({
                            geometry: polyline,
                            symbol: lineSymbol,
                            attributes: polylineattributes
                        });
                        _this.mapoverlayers.push([overlayers.uuid,
                            overelement.uuid, polylineGraphic]);
                        _this.view.graphics.add(polylineGraphic);
                        if (overelement.label.visible) {
                            var polylinelabel = null;
                            if (!overelement.label.labelingInfo) {
                                polylinelabel = {
                                    type: overelement.label.type,
                                    text: overelement.label.text,
                                    color: overelement.label.color,
                                    angle: overelement.label.angle,
                                    backgroundColor: overelement.label.backgroundColor,
                                    borderLineColor: overelement.label.borderLineColor,
                                    borderLineSize: overelement.label.borderLineSize,
                                    kerning: overelement.label.kerning,
                                    lineHeight: overelement.label.lineHeight,
                                    lineWidth: overelement.label.lineWidth,
                                    rotated: overelement.label.rotated,
                                    haloColor: overelement.label.haloColor,
                                    haloSize: overelement.label.haloSize,
                                    xoffset: overelement.label.xoffset,
                                    yoffset: overelement.label.yoffset,
                                    verticalAlignment: overelement.label.verticalAlignment,
                                    horizontalAlignment: overelement.label.horizontalAlignment,
                                    font: {
                                        size: overelement.label.size,
                                        family: "Josefin Slab",
                                        weight: overelement.label.weight
                                    }
                                };
                            }
                            else {
                                polylinelabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polylineGraphic.geometry.extent.center,
                                symbol: polylinelabel,
                                attributes: polylineattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push([overlayers.uuid,
                                overelement.uuid, graphictext]);
                        }
                    }
                    else if (overelement.overlaytype.toLowerCase() === 'polygon') {
                        var fillSymbol = void 0;
                        if (!overelement.symbol) {
                            if (overlayers.symboltype === 'simple') {
                                fillSymbol = {
                                    type: "simple-fill",
                                    color: overlayers.fillColor,
                                    style: overlayers.style,
                                    outline: {
                                        color: overlayers.strokeColor,
                                        width: overlayers.strokeWeight,
                                        style: overlayers.strokestyle
                                    }
                                };
                            }
                            else {
                                fillSymbol = {
                                    type: "picture-fill",
                                    url: overlayers.url,
                                    width: overlayers.picwidth,
                                    height: overlayers.picheight,
                                    outline: {
                                        style: overlayers.strokestyle,
                                        color: overlayers.strokeColor,
                                        width: overlayers.strokeWeight
                                    }
                                };
                            }
                        }
                        else {
                            fillSymbol = overelement.symbol;
                        }
                        var rs_5 = [];
                        overlayers.paths.forEach(function (item) {
                            rs_5.push([item.X, item.Y, item.Z]);
                        });
                        var polygonattributes = overelement.attributes;
                        polygonattributes['uuid'] = overelement.uuid;
                        var polygon = new ArcGISPolygon({
                            hasZ: true,
                            hasM: true,
                            rings: rs_5,
                            spatialReference: _this.view.spatialReference
                        });
                        var polygonGraphic = new Graphic({
                            geometry: polygon,
                            symbol: fillSymbol,
                            attributes: polygonattributes
                        });
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, polygonGraphic]);
                        _this.view.graphics.add(polygonGraphic);
                        if (overlayers.label.visible) {
                            var polygonlabel = null;
                            if (!overelement.label.labelingInfo) {
                                polygonlabel = {
                                    type: overlayers.label.type,
                                    text: overlayers.label.text,
                                    color: overlayers.label.color,
                                    angle: overlayers.label.angle,
                                    backgroundColor: overlayers.label.backgroundColor,
                                    borderLineColor: overlayers.label.borderLineColor,
                                    borderLineSize: overlayers.label.borderLineSize,
                                    kerning: overlayers.label.kerning,
                                    lineHeight: overlayers.label.lineHeight,
                                    lineWidth: overlayers.label.lineWidth,
                                    rotated: overlayers.label.rotated,
                                    haloColor: overlayers.label.haloColor,
                                    haloSize: overlayers.label.haloSize,
                                    xoffset: overlayers.label.xoffset,
                                    yoffset: overlayers.label.yoffset,
                                    verticalAlignment: overlayers.label.verticalAlignment,
                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                    font: {
                                        size: overlayers.label.size,
                                        family: "Josefin Slab",
                                        weight: overlayers.label.weight
                                    }
                                };
                            }
                            else {
                                polygonlabel = overelement.label.labelingInfo;
                            }
                            var graphictext = new Graphic({
                                geometry: polygonGraphic.geometry.extent.center,
                                symbol: polygonlabel,
                                attributes: polygonattributes
                            });
                            _this.view.graphics.add(graphictext);
                            _this.mapoverlayers.push(['smap-default',
                                overlayers.uuid, graphictext]);
                        }
                    }
                });
            }
            else if (overlayers.type === 'element') {
                var graphiclist = _this.mapoverlayers.filter(function (item) {
                    return item[1] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    _this.view.graphics.remove(item[2]);
                });
                _this.mapoverlayers = _this.mapoverlayers.filter(function (item) { return item[1] !== overlayers.uuid; });
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var psymbol = void 0;
                    if (!overlayers.symbol) {
                        if (_this.view.type === '2d') {
                            psymbol = {
                                type: "picture-marker",
                                url: overlayers.icon.image,
                                width: overlayers.icon.size.width,
                                height: overlayers.icon.size.height
                            };
                        }
                        else {
                            psymbol = {
                                type: "point-3d",
                                symbolLayers: [{
                                        type: "icon",
                                        size: overlayers.icon.size.width,
                                        resource: {
                                            href: overlayers.icon.image
                                        }
                                    }]
                            };
                        }
                    }
                    else {
                        psymbol = overlayers.symbol;
                    }
                    var markerattributes = overlayers.attributes;
                    markerattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.view.spatialReference
                        }),
                        symbol: psymbol,
                        attributes: markerattributes
                    });
                    _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphic]);
                    _this.view.graphics.add(graphic);
                    if (overlayers.label.visible) {
                        var marklabel = null;
                        if (!overlayers.label.labelingInfo) {
                            marklabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            marklabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: new Point({
                                x: _this.view.type === '3d' ? overlayers.position[0]
                                    + overlayers.label.xoffset : overlayers.position[0],
                                y: _this.view.type === '3d' ? overlayers.position[1]
                                    + overlayers.label.yoffset : overlayers.position[1],
                                z: _this.view.type === '3d' ? overlayers.position[2]
                                    + overlayers.label.zoffset : overlayers.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            symbol: marklabel,
                            attributes: markerattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default', overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polyline') {
                    var lineSymbol = null;
                    if (!overlayers.symbol) {
                        lineSymbol = {
                            type: "simple-line",
                            color: overlayers.strokeColor,
                            style: overlayers.style,
                            width: overlayers.width,
                            cap: overlayers.cap,
                            join: overlayers.lineJoin
                        };
                    }
                    else {
                        lineSymbol = overlayers.symbol;
                    }
                    var path_6 = [];
                    overlayers.path.forEach(function (item) {
                        path_6.push([item.X, item.Y, item.Z]);
                    });
                    var polyline = new ArcGISPolyline({
                        hasZ: false,
                        hasM: false,
                        paths: path_6,
                        spatialReference: _this.view.spatialReference
                    });
                    var polylineattributes = overlayers.attributes;
                    polylineattributes['uuid'] = overlayers.uuid;
                    var polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                        attributes: polylineattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polylineGraphic]);
                    _this.view.graphics.add(polylineGraphic);
                    if (overlayers.label.visible) {
                        var polylabel = null;
                        if (!overlayers.label.labelingInfo) {
                            polylabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            polylabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: polylineGraphic.geometry.extent.center,
                            symbol: polylabel,
                            attributes: polylineattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
                else if (overlayers.overlaytype.toLowerCase() === 'polygon') {
                    var fillSymbol = void 0;
                    if (!overlayers.symbol) {
                        if (overlayers.symboltype === 'simple') {
                            fillSymbol = {
                                type: "simple-fill",
                                color: overlayers.fillColor,
                                style: overlayers.style,
                                outline: {
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight,
                                    style: overlayers.strokestyle
                                }
                            };
                        }
                        else {
                            fillSymbol = {
                                type: "picture-fill",
                                url: overlayers.url,
                                width: overlayers.picwidth,
                                height: overlayers.picheight,
                                outline: {
                                    style: overlayers.strokestyle,
                                    color: overlayers.strokeColor,
                                    width: overlayers.strokeWeight
                                }
                            };
                        }
                    }
                    else {
                        fillSymbol = overlayers.symbol;
                    }
                    var rs_6 = [];
                    overlayers.paths.forEach(function (item) {
                        rs_6.push([item.X, item.Y, item.Z]);
                    });
                    var polygon = new ArcGISPolygon({
                        hasZ: true,
                        hasM: true,
                        rings: rs_6,
                        spatialReference: _this.view.spatialReference
                    });
                    var polygonattributes = overlayers.attributes;
                    polygonattributes['uuid'] = overlayers.uuid;
                    var polygonGraphic = new Graphic({
                        geometry: polygon,
                        symbol: fillSymbol,
                        attributes: polygonattributes
                    });
                    _this.mapoverlayers.push(['smap-default',
                        overlayers.uuid, polygonGraphic]);
                    _this.view.graphics.add(polygonGraphic);
                    if (overlayers.label.visible) {
                        var polylabel = null;
                        if (!overlayers.label.labelingInfo) {
                            polylabel = {
                                type: overlayers.label.type,
                                text: overlayers.label.text,
                                color: overlayers.label.color,
                                angle: overlayers.label.angle,
                                backgroundColor: overlayers.label.backgroundColor,
                                borderLineColor: overlayers.label.borderLineColor,
                                borderLineSize: overlayers.label.borderLineSize,
                                kerning: overlayers.label.kerning,
                                lineHeight: overlayers.label.lineHeight,
                                lineWidth: overlayers.label.lineWidth,
                                rotated: overlayers.label.rotated,
                                haloColor: overlayers.label.haloColor,
                                haloSize: overlayers.label.haloSize,
                                xoffset: overlayers.label.xoffset,
                                yoffset: overlayers.label.yoffset,
                                verticalAlignment: overlayers.label.verticalAlignment,
                                horizontalAlignment: overlayers.label.horizontalAlignment,
                                font: {
                                    size: overlayers.label.size,
                                    family: "Josefin Slab",
                                    weight: overlayers.label.weight
                                }
                            };
                        }
                        else {
                            polylabel = overlayers.label.labelingInfo;
                        }
                        var graphictext = new Graphic({
                            geometry: polygonGraphic.geometry.extent.center,
                            symbol: polylabel,
                            attributes: polygonattributes
                        });
                        _this.view.graphics.add(graphictext);
                        _this.mapoverlayers.push(['smap-default',
                            overlayers.uuid, graphictext]);
                    }
                }
            }
        });
    };
    Map.prototype.addfeature = function (overlayers) {
        var _this = this;
        load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol',
            "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], PictureMarkerSymbol = _a[4], ArcGISPolyline = _a[5], ArcGISPolygon = _a[6];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelement) {
                    if (overelement.overlaytype.toLowerCase() === 'marker') {
                        var markrenderer = void 0;
                        if (!overelement.renderer) {
                            if (_this.viewMode === '3D') {
                                markrenderer = {
                                    type: "simple",
                                    symbol: {
                                        type: "point-3d",
                                        symbolLayers: [{
                                                type: "icon",
                                                size: overelement.icon.size.width,
                                                resource: {
                                                    href: overelement.icon.image
                                                }
                                            }]
                                    }
                                };
                            }
                            else {
                                markrenderer = {
                                    type: "simple",
                                    symbol: {
                                        type: "picture-marker",
                                        url: overelement.icon.image,
                                        width: overelement.icon.size.width,
                                        height: overelement.icon.size.height
                                    }
                                };
                            }
                        }
                        else {
                            markrenderer = overelement.renderer;
                        }
                        var datafiled_1 = [{
                                name: 'objectId',
                                alias: 'objectId',
                                type: 'oid'
                            }, {
                                name: 'uuid',
                                alias: '唯一标识',
                                type: 'string'
                            }];
                        Object.keys(overelement.attributes).forEach(function (element) {
                            datafiled_1.push({
                                name: element,
                                alias: element,
                                type: "string"
                            });
                        });
                        var clientoperateLayer = new FeatureLayer({
                            id: overelement.uuid,
                            title: overelement.uuid,
                            objectIdField: 'OBJECTID',
                            geometryType: 'point',
                            renderer: markrenderer,
                            screenSizePerspectiveEnabled: true,
                            popupEnabled: false,
                            popupTemplate: false,
                            // elevationInfo: (overelement as Marker).elevationInfo,
                            fields: datafiled_1,
                            source: [],
                            spatialReference: _this.view.spatialReference
                        });
                        if (overelement.elevationInfo) {
                            if (_this.view.type === '3d') {
                                clientoperateLayer.elevationInfo = overelement.elevationInfo;
                            }
                        }
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            attributes: dataattributes
                        });
                        clientoperateLayer.source.add(graphic);
                        _this.view.map.add(clientoperateLayer);
                        _this.mapoverlayersflayer.push([overelement.uuid, overelement.uuid,
                            graphic]);
                        if (overelement.label.visible) {
                            var labelsymbol = void 0;
                            if (!overelement.label.labelingInfo) {
                                if (_this.viewMode === '2D') {
                                    labelsymbol = {
                                        type: overelement.label.type,
                                        text: overelement.label.text,
                                        color: overelement.label.color,
                                        angle: overelement.label.angle,
                                        backgroundColor: overelement.label.backgroundColor,
                                        borderLineColor: overelement.label.borderLineColor,
                                        borderLineSize: overelement.label.borderLineSize,
                                        kerning: overelement.label.kerning,
                                        lineHeight: overelement.label.lineHeight,
                                        lineWidth: overelement.label.lineWidth,
                                        rotated: overelement.label.rotated,
                                        haloColor: overelement.label.haloColor,
                                        haloSize: overelement.label.haloSize,
                                        xoffset: overelement.label.xoffset,
                                        yoffset: overelement.label.yoffset,
                                        verticalAlignment: overelement.label.verticalAlignment,
                                        horizontalAlignment: overelement.label.horizontalAlignment,
                                        font: {
                                            size: overelement.label.size,
                                            family: "Josefin Slab",
                                            weight: overelement.label.weight
                                        }
                                    };
                                }
                                else {
                                    labelsymbol = {
                                        type: "label-3d",
                                        symbolLayers: [{
                                                type: "text",
                                                material: { color: overelement.label.color },
                                                size: overelement.label.size,
                                                halo: {
                                                    color: overelement.label.haloColor,
                                                    size: overelement.label.haloSize
                                                }
                                            }]
                                    };
                                }
                                var statesLabelClass = new LabelClass({
                                    labelExpressionInfo: {
                                        expression: '$feature.NAME'
                                    },
                                    symbol: labelsymbol,
                                    labelPlacement: overelement.label.placement,
                                    minScale: overelement.label.minScale,
                                    maxScale: overelement.label.maxScale
                                });
                                clientoperateLayer.labelingInfo = [statesLabelClass];
                            }
                            else {
                                labelsymbol = overelement.label.labelingInfo;
                                clientoperateLayer.labelingInfo = labelsymbol;
                            }
                        }
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var datafiled_2 = [{
                        name: 'objectId',
                        alias: 'objectId',
                        type: 'oid'
                    }, {
                        name: 'uuid',
                        alias: '唯一标识',
                        type: 'string'
                    }];
                datafiled_2.push({
                    name: 'style',
                    alias: '样式',
                    type: 'string'
                });
                overlayers.datafiled.forEach(function (element) {
                    datafiled_2.push(element);
                });
                var symbolrenderer_1;
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    if (!overlayers.renderer) {
                        symbolrenderer_1 = {
                            type: 'unique-value',
                            field: 'style',
                            uniqueValueInfos: []
                        };
                        overlayers.style.forEach(function (styleelement) {
                            if (_this.viewMode === '3D') {
                                symbolrenderer_1.uniqueValueInfos.push({
                                    value: styleelement.style,
                                    label: styleelement.style,
                                    symbol: {
                                        type: "point-3d",
                                        symbolLayers: [{
                                                type: "icon",
                                                size: styleelement.size.height,
                                                resource: {
                                                    href: styleelement.url
                                                }
                                            }]
                                    }
                                });
                            }
                            else {
                                symbolrenderer_1.uniqueValueInfos.push({
                                    value: styleelement.style,
                                    label: styleelement.style,
                                    symbol: {
                                        type: "picture-marker",
                                        url: styleelement.url,
                                        width: styleelement.size.width,
                                        height: styleelement.size.height
                                    }
                                });
                            }
                        });
                    }
                    else {
                        symbolrenderer_1 = overlayers.renderer;
                    }
                    var clientoperateLayer_1 = new FeatureLayer({
                        id: overlayers.uuid,
                        title: overlayers.uuid,
                        visible: overlayers.visible,
                        objectIdField: 'OBJECTID',
                        geometryType: 'point',
                        renderer: symbolrenderer_1,
                        screenSizePerspectiveEnabled: _this.viewMode === '3D',
                        popupEnabled: false,
                        popupTemplate: false,
                        // elevationInfo: (overlayers as OverlayGroup).elevationInfo,
                        fields: datafiled_2,
                        source: [],
                        spatialReference: _this.view.spatialReference
                    });
                    if (overlayers.elevationInfo) {
                        if (_this.view.type === '3d') {
                            clientoperateLayer_1.elevationInfo = overlayers.elevationInfo;
                        }
                    }
                    if (overlayers.frreduction) {
                        if (_this.view.type === '3d') {
                            clientoperateLayer_1.featureReduction = {
                                type: overlayers.frreduction.type
                            };
                        }
                        else {
                            clientoperateLayer_1.featureReduction =
                                overlayers.frreduction.clusterConfig;
                        }
                    }
                    _this.view.map.add(clientoperateLayer_1);
                    overlayers.overlayers.forEach(function (overelement) {
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var graphic = new Graphic({
                            geometry: new Point({
                                x: overelement.position[0],
                                y: overelement.position[1],
                                z: overelement.position[2] === undefined ? 0 :
                                    overelement.position[2],
                                spatialReference: _this.view.spatialReference
                            }),
                            attributes: overelement.attributes
                        });
                        clientoperateLayer_1.source.add(graphic);
                        _this.mapoverlayersflayer.push([overlayers.uuid,
                            overelement.uuid,
                            graphic]);
                    });
                    // if (clientoperateLayer.source.items.length > 100) {
                    //     if ((overlayers as OverlayGroup).frreduction != null) {
                    //         clientoperateLayer.featureReduction = {
                    //             type: (overlayers as OverlayGroup).frreduction.type,
                    //             clusterRadius: (overlayers as OverlayGroup).frreduction.clusterRadius
                    //         };
                    //     }
                    // }
                    if (overlayers.label.visible) {
                        var labelsymbol = void 0;
                        if (!overlayers.label.labelingInfo) {
                            if (_this.viewMode === '2D') {
                                labelsymbol = {
                                    type: overlayers.label.type,
                                    text: overlayers.label.text,
                                    color: overlayers.label.color,
                                    angle: overlayers.label.angle,
                                    backgroundColor: overlayers.label.backgroundColor,
                                    borderLineColor: overlayers.label.borderLineColor,
                                    borderLineSize: overlayers.label.borderLineSize,
                                    kerning: overlayers.label.kerning,
                                    lineHeight: overlayers.label.lineHeight,
                                    lineWidth: overlayers.label.lineWidth,
                                    rotated: overlayers.label.rotated,
                                    haloColor: overlayers.label.haloColor,
                                    haloSize: overlayers.label.haloSize,
                                    xoffset: overlayers.label.xoffset,
                                    yoffset: overlayers.label.yoffset,
                                    verticalAlignment: overlayers.label.verticalAlignment,
                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                    font: {
                                        size: overlayers.label.size,
                                        family: "Josefin Slab",
                                        weight: overlayers.label.weight
                                    }
                                };
                            }
                            else {
                                labelsymbol = {
                                    type: "label-3d",
                                    symbolLayers: [{
                                            type: "text",
                                            material: { color: overlayers.label.color },
                                            size: overlayers.label.size,
                                            halo: {
                                                color: overlayers.label.haloColor,
                                                size: overlayers.label.haloSize
                                            }
                                        }]
                                };
                            }
                            var statesLabelClass = new LabelClass({
                                labelExpressionInfo: {
                                    expression: '$feature.NAME'
                                },
                                symbol: labelsymbol,
                                labelPlacement: overlayers.label.placement,
                                minScale: overlayers.label.minScale,
                                maxScale: overlayers.label.maxScale
                            });
                            clientoperateLayer_1.labelingInfo = [statesLabelClass];
                        }
                        else {
                            labelsymbol = overlayers.label.labelingInfo;
                            clientoperateLayer_1.labelingInfo = labelsymbol;
                        }
                    }
                }
            }
            else if (overlayers.type === 'element') {
                if (overlayers.overlaytype.toLowerCase() === 'marker') {
                    var markrenderer = void 0;
                    if (!overlayers.renderer) {
                        if (_this.viewMode === '3D') {
                            markrenderer = {
                                type: "simple",
                                symbol: {
                                    type: "point-3d",
                                    symbolLayers: [{
                                            type: "icon",
                                            size: overlayers.icon.size.width,
                                            resource: {
                                                href: overlayers.icon.image
                                            }
                                        }]
                                }
                            };
                        }
                        else {
                            markrenderer = {
                                type: "simple",
                                symbol: {
                                    type: "picture-marker",
                                    url: overlayers.icon.image,
                                    width: overlayers.icon.size.width,
                                    height: overlayers.icon.size.height
                                }
                            };
                        }
                    }
                    else {
                        markrenderer = overlayers.renderer;
                    }
                    var datafiled_3 = [{
                            name: 'objectId',
                            alias: 'objectId',
                            type: 'oid'
                        }, {
                            name: 'uuid',
                            alias: '唯一标识',
                            type: 'string'
                        }];
                    Object.keys(overlayers.attributes).forEach(function (element) {
                        datafiled_3.push({ name: element,
                            alias: element,
                            type: "string"
                        });
                    });
                    var clientoperateLayer = new FeatureLayer({
                        id: overlayers.uuid,
                        title: overlayers.uuid,
                        objectIdField: 'OBJECTID',
                        geometryType: 'point',
                        renderer: markrenderer,
                        screenSizePerspectiveEnabled: true,
                        popupEnabled: false,
                        popupTemplate: false,
                        // elevationInfo: (overlayers as Marker).elevationInfo,
                        fields: datafiled_3,
                        source: [],
                        spatialReference: _this.view.spatialReference
                    });
                    if (overlayers.elevationInfo) {
                        if (_this.view.type === '3d') {
                            clientoperateLayer.elevationInfo = overlayers.elevationInfo;
                        }
                    }
                    var dataattributes = overlayers.attributes;
                    dataattributes['uuid'] = overlayers.uuid;
                    var graphic = new Graphic({
                        geometry: new Point({
                            x: overlayers.position[0],
                            y: overlayers.position[1],
                            z: overlayers.position[2] === undefined ? 0 :
                                overlayers.position[2],
                            spatialReference: _this.view.spatialReference
                        }),
                        attributes: dataattributes
                    });
                    clientoperateLayer.source.add(graphic);
                    _this.view.map.add(clientoperateLayer);
                    _this.mapoverlayersflayer.push([overlayers.uuid, overlayers.uuid,
                        graphic]);
                    if (overlayers.label.visible) {
                        var labelsymbol = void 0;
                        if (overlayers.label.labelingInfo) {
                            labelsymbol = overlayers.label.labelingInfo;
                            clientoperateLayer.labelingInfo = labelsymbol;
                        }
                        else {
                            if (_this.viewMode === '2D') {
                                labelsymbol = {
                                    type: overlayers.label.type,
                                    text: overlayers.label.text,
                                    color: overlayers.label.color,
                                    angle: overlayers.label.angle,
                                    backgroundColor: overlayers.label.backgroundColor,
                                    borderLineColor: overlayers.label.borderLineColor,
                                    borderLineSize: overlayers.label.borderLineSize,
                                    kerning: overlayers.label.kerning,
                                    lineHeight: overlayers.label.lineHeight,
                                    lineWidth: overlayers.label.lineWidth,
                                    rotated: overlayers.label.rotated,
                                    haloColor: overlayers.label.haloColor,
                                    haloSize: overlayers.label.haloSize,
                                    xoffset: overlayers.label.xoffset,
                                    yoffset: overlayers.label.yoffset,
                                    verticalAlignment: overlayers.label.verticalAlignment,
                                    horizontalAlignment: overlayers.label.horizontalAlignment,
                                    font: {
                                        size: overlayers.label.size,
                                        family: "Josefin Slab",
                                        weight: overlayers.label.weight
                                    }
                                };
                            }
                            else {
                                labelsymbol = {
                                    type: "label-3d",
                                    symbolLayers: [{
                                            type: "text",
                                            material: { color: overlayers.label.color },
                                            size: overlayers.label.size,
                                            halo: {
                                                color: overlayers.label.haloColor,
                                                size: overlayers.label.haloSize
                                            }
                                        }]
                                };
                            }
                            var statesLabelClass = new LabelClass({
                                labelExpressionInfo: {
                                    expression: '$feature.NAME'
                                },
                                symbol: labelsymbol,
                                labelPlacement: overlayers.label.placement,
                                minScale: overlayers.label.minScale,
                                maxScale: overlayers.label.maxScale
                            });
                            clientoperateLayer.labelingInfo = [statesLabelClass];
                        }
                    }
                }
            }
        });
    };
    Map.prototype.updatefeature = function (overlayers) {
        var _this = this;
        load(['esri/layers/FeatureLayer', 'esri/layers/support/LabelClass', 'esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol',
            "esri/geometry/Polyline", "esri/geometry/Polygon"])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var FeatureLayer = _a[0], LabelClass = _a[1], Graphic = _a[2], Point = _a[3], PictureMarkerSymbol = _a[4], ArcGISPolyline = _a[5], ArcGISPolygon = _a[6];
            if (overlayers instanceof Array) {
                overlayers.forEach(function (overelemnt) {
                    if (overelemnt.overlaytype.toLowerCase() === 'marker') {
                        var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                            return item[1] === overelemnt.uuid;
                        });
                        graphiclist.forEach(function (item) {
                            var upFeatures = [];
                            var point = new Point({
                                x: overelemnt.position[0],
                                y: overelemnt.position[1],
                                z: overelemnt.position[2] === undefined ? 0 :
                                    overelemnt.position[2],
                                spatialReference: _this.view.spatialReference
                            });
                            item[2].geometry = point;
                            var keys = Object.keys(overelemnt.attributes);
                            keys.map(function (attributeitem) {
                                if (attributeitem !== 'objectId') {
                                    item[2].setAttribute(attributeitem, overelemnt.attributes[attributeitem]);
                                }
                            });
                            upFeatures.push(item[2]);
                            var flayer = _this.view.map.findLayerById(item[0]);
                            if (flayer !== null) {
                                flayer.applyEdits({
                                    updateFeatures: upFeatures
                                    // tslint:disable-next-line:no-empty
                                }).then(function (editsResult) {
                                    var markrenderer;
                                    if (!overelemnt.renderer) {
                                        if (_this.viewMode === '3D') {
                                            markrenderer = {
                                                type: "simple",
                                                symbol: {
                                                    type: "point-3d",
                                                    symbolLayers: [{
                                                            type: "icon",
                                                            size: overelemnt.icon.size.width,
                                                            resource: {
                                                                href: overelemnt.icon.image
                                                            }
                                                        }]
                                                }
                                            };
                                        }
                                        else {
                                            markrenderer = {
                                                type: "simple",
                                                symbol: {
                                                    type: "picture-marker",
                                                    url: overelemnt.icon.image,
                                                    width: overelemnt.icon.size.width,
                                                    height: overelemnt.icon.size.height
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        markrenderer = overelemnt.renderer;
                                    }
                                    if (overelemnt.label.visible) {
                                        var labelsymbol = void 0;
                                        if (!overelemnt.label.labelingInfo) {
                                            if (_this.viewMode === '2D') {
                                                labelsymbol = {
                                                    type: overelemnt.label.type,
                                                    text: overelemnt.label.text,
                                                    color: overelemnt.label.color,
                                                    angle: overelemnt.label.angle,
                                                    backgroundColor: overelemnt.label.backgroundColor,
                                                    borderLineColor: overelemnt.label.borderLineColor,
                                                    borderLineSize: overelemnt.label.borderLineSize,
                                                    kerning: overelemnt.label.kerning,
                                                    lineHeight: overelemnt.label.lineHeight,
                                                    lineWidth: overelemnt.label.lineWidth,
                                                    rotated: overelemnt.label.rotated,
                                                    haloColor: overelemnt.label.haloColor,
                                                    haloSize: overelemnt.label.haloSize,
                                                    xoffset: overelemnt.label.xoffset,
                                                    yoffset: overelemnt.label.yoffset,
                                                    verticalAlignment: overelemnt.label.verticalAlignment,
                                                    horizontalAlignment: overelemnt.label.horizontalAlignment,
                                                    font: {
                                                        size: overelemnt.label.size,
                                                        family: "Josefin Slab",
                                                        weight: overelemnt.label.weight
                                                    }
                                                };
                                            }
                                            else {
                                                labelsymbol = {
                                                    type: "label-3d",
                                                    symbolLayers: [{
                                                            type: "text",
                                                            material: { color: overelemnt.label.color },
                                                            size: overelemnt.label.size,
                                                            halo: {
                                                                color: overelemnt.label.haloColor,
                                                                size: overelemnt.label.haloSize
                                                            }
                                                        }]
                                                };
                                            }
                                            var statesLabelClass = new LabelClass({
                                                labelExpressionInfo: {
                                                    expression: '$feature.NAME'
                                                },
                                                symbol: labelsymbol,
                                                labelPlacement: overelemnt.label.placement,
                                                minScale: overelemnt.label.minScale,
                                                maxScale: overelemnt.label.maxScale
                                            });
                                            flayer.labelingInfo = [statesLabelClass];
                                        }
                                        else {
                                            labelsymbol = overelemnt.label.labelingInfo;
                                            flayer.labelingInfo = labelsymbol;
                                        }
                                    }
                                    flayer.renderer = markrenderer;
                                    flayer.refresh();
                                });
                            }
                        });
                    }
                });
            }
            else if (overlayers.type === 'group') {
                var upFeatures_1 = [];
                overlayers.overlayers.forEach(function (overelement) {
                    var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                        return item[1] === overelement.uuid;
                    });
                    if (graphiclist.length === 1) {
                        var dataattributes = overelement.attributes;
                        dataattributes['uuid'] = overelement.uuid;
                        var point = new Point({
                            x: overelement.position[0],
                            y: overelement.position[1],
                            z: overelement.position[2] === undefined ? 0 :
                                overelement.position[2],
                            spatialReference: _this.view.spatialReference
                        });
                        graphiclist[0][2].geometry = point;
                        var keys = Object.keys(overelement.attributes);
                        keys.map(function (attributeitem) {
                            if (attributeitem !== 'objectId') {
                                graphiclist[0][2].setAttribute(attributeitem, overelement.attributes[attributeitem]);
                            }
                        });
                        upFeatures_1.push(graphiclist[0][2]);
                    }
                });
                var flayer_1 = _this.view.map.findLayerById(overlayers.uuid);
                if (flayer_1 !== null) {
                    flayer_1.applyEdits({
                        updateFeatures: upFeatures_1
                        // tslint:disable-next-line:no-empty
                    }).then(function (editsResult) {
                        var symbolrenderer;
                        if (!overlayers.renderer) {
                            symbolrenderer = {
                                type: 'unique-value',
                                field: 'style',
                                uniqueValueInfos: []
                            };
                            overlayers.style.forEach(function (styleelement) {
                                if (_this.viewMode === '3D') {
                                    symbolrenderer.uniqueValueInfos.push({
                                        value: styleelement.style,
                                        label: styleelement.style,
                                        symbol: {
                                            type: "point-3d",
                                            symbolLayers: [{
                                                    type: "icon",
                                                    size: styleelement.size.height,
                                                    resource: {
                                                        href: styleelement.url
                                                    }
                                                }]
                                        }
                                    });
                                }
                                else {
                                    symbolrenderer.uniqueValueInfos.push({
                                        value: styleelement.style,
                                        label: styleelement.style,
                                        symbol: {
                                            type: "picture-marker",
                                            url: styleelement.url,
                                            width: styleelement.size.width,
                                            height: styleelement.size.height
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            symbolrenderer = overlayers.renderer;
                        }
                        flayer_1.renderer = symbolrenderer;
                        if (flayer_1.source.items.length > 100) {
                            if (overlayers.frreduction != null) {
                                flayer_1.featureReduction = {
                                    type: overlayers.frreduction.type,
                                    clusterRadius: overlayers.frreduction.clusterRadius
                                };
                            }
                        }
                        if (overlayers.label.visible) {
                            var labelsymbol = void 0;
                            if (!overlayers.label.labelingInfo) {
                                if (_this.viewMode === '2D') {
                                    labelsymbol = {
                                        type: overlayers.label.type,
                                        text: overlayers.label.text,
                                        color: overlayers.label.color,
                                        angle: overlayers.label.angle,
                                        backgroundColor: overlayers.label.backgroundColor,
                                        borderLineColor: overlayers.label.borderLineColor,
                                        borderLineSize: overlayers.label.borderLineSize,
                                        kerning: overlayers.label.kerning,
                                        lineHeight: overlayers.label.lineHeight,
                                        lineWidth: overlayers.label.lineWidth,
                                        rotated: overlayers.label.rotated,
                                        haloColor: overlayers.label.haloColor,
                                        haloSize: overlayers.label.haloSize,
                                        xoffset: overlayers.label.xoffset,
                                        yoffset: overlayers.label.yoffset,
                                        verticalAlignment: overlayers.label.verticalAlignment,
                                        horizontalAlignment: overlayers.label.horizontalAlignment,
                                        font: {
                                            size: overlayers.label.size,
                                            family: "Josefin Slab",
                                            weight: overlayers.label.weight
                                        }
                                    };
                                }
                                else {
                                    labelsymbol = {
                                        type: "label-3d",
                                        symbolLayers: [{
                                                type: "text",
                                                material: { color: overlayers.label.color },
                                                size: overlayers.label.size,
                                                halo: {
                                                    color: overlayers.label.haloColor,
                                                    size: overlayers.label.haloSize
                                                }
                                            }]
                                    };
                                }
                                var statesLabelClass = new LabelClass({
                                    labelExpressionInfo: {
                                        expression: '$feature.NAME'
                                    },
                                    symbol: labelsymbol,
                                    labelPlacement: overlayers.label.placement,
                                    minScale: overlayers.label.minScale,
                                    maxScale: overlayers.label.maxScale
                                });
                                flayer_1.labelingInfo = [statesLabelClass];
                            }
                            else {
                                labelsymbol = overlayers.label.labelingInfo;
                            }
                        }
                        flayer_1.refresh();
                    });
                }
            }
            else if (overlayers.type === 'element') {
                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                    return item[1] === overlayers.uuid;
                });
                graphiclist.forEach(function (item) {
                    var upFeatures = [];
                    var dataattributes = overlayers.attributes;
                    dataattributes['uuid'] = overlayers.uuid;
                    var point = new Point({
                        x: overlayers.position[0],
                        y: overlayers.position[1],
                        z: overlayers.position[2] === undefined ? 0 :
                            overlayers.position[2],
                        spatialReference: _this.view.spatialReference
                    });
                    item[2].geometry = point;
                    var keys = Object.keys(overlayers.attributes);
                    keys.map(function (attributeitem) {
                        if (attributeitem !== 'objectId') {
                            item[2].setAttribute(attributeitem, overlayers.attributes[attributeitem]);
                        }
                    });
                    upFeatures.push(item[2]);
                    var flayer = _this.view.map.findLayerById(item[0]);
                    if (flayer !== null) {
                        flayer.applyEdits({
                            updateFeatures: upFeatures
                            // tslint:disable-next-line:no-empty
                        }).then(function (editsResult) {
                            if (item[0] !== item[1]) {
                                return;
                            }
                            var markrenderer;
                            if (overlayers.renderer) {
                                if (_this.viewMode === '3D') {
                                    markrenderer = {
                                        type: "simple",
                                        symbol: {
                                            type: "point-3d",
                                            symbolLayers: [{
                                                    type: "icon",
                                                    size: overlayers.icon.size.width,
                                                    resource: {
                                                        href: overlayers.icon.image
                                                    }
                                                }]
                                        }
                                    };
                                }
                                else {
                                    markrenderer = {
                                        type: "simple",
                                        symbol: {
                                            type: "picture-marker",
                                            url: overlayers.icon.image,
                                            width: overlayers.icon.size.width,
                                            height: overlayers.icon.size.height
                                        }
                                    };
                                }
                            }
                            else {
                                markrenderer = overlayers.renderer;
                            }
                            flayer.renderer = markrenderer;
                            if (overlayers.label.visible) {
                                var labelsymbol = void 0;
                                if (!overlayers.label.labelingInfo) {
                                    if (_this.viewMode === '2D') {
                                        labelsymbol = {
                                            type: overlayers.label.type,
                                            text: overlayers.label.text,
                                            color: overlayers.label.color,
                                            angle: overlayers.label.angle,
                                            backgroundColor: overlayers.label.backgroundColor,
                                            borderLineColor: overlayers.label.borderLineColor,
                                            borderLineSize: overlayers.label.borderLineSize,
                                            kerning: overlayers.label.kerning,
                                            lineHeight: overlayers.label.lineHeight,
                                            lineWidth: overlayers.label.lineWidth,
                                            rotated: overlayers.label.rotated,
                                            haloColor: overlayers.label.haloColor,
                                            haloSize: overlayers.label.haloSize,
                                            xoffset: overlayers.label.xoffset,
                                            yoffset: overlayers.label.yoffset,
                                            verticalAlignment: overlayers.label.verticalAlignment,
                                            horizontalAlignment: overlayers.label.horizontalAlignment,
                                            font: {
                                                size: overlayers.label.size,
                                                family: "Josefin Slab",
                                                weight: overlayers.label.weight
                                            }
                                        };
                                    }
                                    else {
                                        labelsymbol = {
                                            type: "label-3d",
                                            symbolLayers: [{
                                                    type: "text",
                                                    material: { color: overlayers.label.color },
                                                    size: overlayers.label.size,
                                                    halo: {
                                                        color: overlayers.label.haloColor,
                                                        size: overlayers.label.haloSize
                                                    }
                                                }]
                                        };
                                    }
                                    var statesLabelClass = new LabelClass({
                                        labelExpressionInfo: {
                                            expression: '$feature.NAME'
                                        },
                                        symbol: labelsymbol,
                                        labelPlacement: overlayers.label.placement,
                                        minScale: overlayers.label.minScale,
                                        maxScale: overlayers.label.maxScale
                                    });
                                    flayer.labelingInfo = [statesLabelClass];
                                }
                                else {
                                    labelsymbol = overlayers.label.labelingInfo;
                                    flayer.labelingInfo = labelsymbol;
                                }
                                flayer.refresh();
                            }
                        });
                    }
                });
            }
        });
    };
    Map.prototype.removefeature = function (overlayers) {
        var _this = this;
        if (overlayers instanceof Array) {
            overlayers.forEach(function (overelemnt) {
                var graphiclist = _this.mapoverlayersflayer.filter(function (item) {
                    return item[1] === overelemnt.uuid;
                });
                graphiclist.forEach(function (item) {
                    var flayer = _this.view.map.findLayerById(item[0]);
                    if (flayer !== null) {
                        flayer.applyEdits({
                            deleteFeatures: [item[2]]
                        }).then(function (editsResult) {
                            flayer.queryFeatures().then(function (results) {
                                if (results.features.length === 0) {
                                    _this.view.map.remove(flayer);
                                }
                            });
                        });
                    }
                });
                _this.mapoverlayersflayer = _this.mapoverlayersflayer.filter(function (item) { return item[1] !==
                    overelemnt.uuid; });
            });
        }
        else if (overlayers.type === 'group') {
            var flayer = this.view.map.findLayerById(overlayers.uuid);
            if (flayer !== null) {
                this.view.map.remove(flayer);
            }
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[0] !==
                overlayers.uuid; });
        }
        else if (overlayers.type === 'element') {
            var graphiclist = this.mapoverlayersflayer.filter(function (item) {
                return item[1] === overlayers.uuid;
            });
            graphiclist.forEach(function (item) {
                var flayer = _this.view.map.findLayerById(item[0]);
                if (flayer !== null) {
                    flayer.applyEdits({
                        deleteFeatures: [item[2]]
                    }).then(function (editsResult) {
                        flayer.queryFeatures().then(function (results) {
                            if (results.features.length === 0) {
                                _this.view.map.remove(flayer);
                            }
                        });
                    });
                }
            });
            this.mapoverlayersflayer = this.mapoverlayersflayer.filter(function (item) { return item[1] !== overlayers.uuid; });
        }
    };
    Map.prototype.clearMap = function () {
        this.view.graphics.removeAll();
        this.mapoverlayers = [];
    };
    Map.prototype.setExtentConstrain = function (leftbottom, righttop) {
        var _this = this;
        load(['esri/geometry/Extent', 'esri/geometry/geometryEngine', 'esri/core/watchUtils'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Extent = _a[0], geometryEngine = _a[1], watchUtils = _a[2];
            var cextent = new Extent({
                xmin: leftbottom[0],
                ymin: leftbottom[1],
                xmax: righttop[0],
                ymax: righttop[1],
                spatialReference: _this.view.spatialReference
            });
            _this.view.extent = cextent;
            var extentconstraintshander = watchUtils.whenTrue(_this.view, "stationary", function () {
                var iscontainer = geometryEngine.contains(cextent, _this.view.extent);
                if (!iscontainer) {
                    _this.view.extent = cextent;
                }
            });
            _this.watchHandles.push(['extentcontrain', extentconstraintshander]);
        });
    };
    Map.prototype.removeExtentConstrain = function () {
        var watchextentHandles = this.watchHandles.filter(function (item) {
            return item[0] === 'extentcontrain';
        });
        watchextentHandles.forEach(function (handle) {
            handle[1].remove();
        });
        this.watchHandles = this.watchHandles.filter(function (item) {
            return item[0] !== 'extentcontrain';
        });
    };
    Map.prototype.setmaskboundary = function (maskOptions) {
        var _this = this;
        load(['esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/geometry/geometryEngineAsync',
            'esri/geometry/SpatialReference', 'esri/Color'])
            // tslint:disable-next-line:variable-name
            .then(function (_a) {
            var Graphic = _a[0], GraphicsLayer = _a[1], ArcPolygon = _a[2], geometryEngineAsync = _a[3], SpatialReference = _a[4], Color = _a[5];
            var boundaryLayer = null;
            if (maskOptions.boundaryType === "qx_boundary") {
                boundaryLayer = _this.view.map.findLayerById('qx_boundary');
            }
            else if (maskOptions.boundaryType === "jd_boundary") {
                boundaryLayer = _this.view.map.findLayerById('jd_boundary');
            }
            else if (maskOptions.boundaryType === "jwh_boundary") {
                boundaryLayer = _this.view.map.findLayerById('jwh_boundary');
            }
            var maskgraphiclayer = _this.view.map.findLayerById('mask_boundary_graphiclayer');
            if (maskgraphiclayer == null) {
                maskgraphiclayer = new GraphicsLayer({
                    id: 'mask_boundary_graphiclayer',
                    title: '遮罩层',
                    listMode: 'hide'
                });
                _this.view.map.add(maskgraphiclayer);
            }
            maskgraphiclayer.removeAll();
            if (maskOptions.inputgeometry) {
                boundaryLayer = _this.view.map.findLayerById('qx_boundary');
                if (boundaryLayer === null) {
                    return;
                }
                var pgon = new ArcPolygon({
                    rings: maskOptions.inputgeometry,
                    spatialReference: _this.view.spatialReference
                });
                var fullgeometry_1 = boundaryLayer.fullExtent;
                fullgeometry_1.spatialReference = _this.view.spatialReference;
                var geomtry_1 = pgon;
                geomtry_1.spatialReference = _this.view.spatialReference;
                geometryEngineAsync.buffer(geomtry_1, maskOptions.boundarydistance, 'meters').
                    then(function (targetGeometry) {
                    geometryEngineAsync.difference(fullgeometry_1, targetGeometry).then(function (outermask) {
                        var masksymbol;
                        if (_this.viewMode === '3D') {
                            if (maskOptions.symbol) {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'extrude',
                                            material: { color: maskOptions.maskColor },
                                            size: maskOptions.symbol.size,
                                            edges: {
                                                type: "solid",
                                                color: maskOptions.maskColor
                                            }
                                        }]
                                };
                            }
                            else {
                                masksymbol = {
                                    type: 'polygon-3d',
                                    symbolLayers: [{
                                            type: 'fill',
                                            material: { color: maskOptions.maskColor },
                                            outline: {
                                                color: 'white',
                                                size: '0px'
                                            }
                                        }]
                                };
                            }
                        }
                        else {
                            masksymbol = {
                                type: "simple-fill",
                                color: maskOptions.maskColor,
                                style: "solid",
                                outline: {
                                    color: maskOptions.maskColor,
                                    width: 1
                                }
                            };
                        }
                        var outermaskGraphic = new Graphic({
                            geometry: outermask,
                            symbol: masksymbol
                        });
                        maskgraphiclayer.add(outermaskGraphic);
                        var length = maskOptions.bounarycount === undefined ? 30 : maskOptions.bounarycount;
                        var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                        var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                        var _loop_1 = function (j) {
                            geometryEngineAsync.buffer(geomtry_1, j * length, 'meters').
                                then(function (resgeometryouter) {
                                geometryEngineAsync.buffer(geomtry_1, (j - 1) * length, 'meters').
                                    then(function (resgeometryinner) {
                                    geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                        then(function (clipgeometry) {
                                        setingcolor[3] = (1 / maskgcount) * j;
                                        var maskroundsymbol;
                                        if (_this.viewMode === '3D') {
                                            if (maskOptions.symbol) {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'extrude',
                                                            material: { color: setingcolor },
                                                            size: maskOptions.symbol.size,
                                                            edges: {
                                                                type: "solid",
                                                                color: setingcolor
                                                            }
                                                        }]
                                                };
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: 'polygon-3d',
                                                    symbolLayers: [{
                                                            type: 'fill',
                                                            material: { color: setingcolor },
                                                            outline: {
                                                                color: 'white',
                                                                size: '0px'
                                                            }
                                                        }]
                                                };
                                            }
                                        }
                                        else {
                                            maskroundsymbol = {
                                                type: "simple-fill",
                                                color: setingcolor,
                                                style: "solid",
                                                outline: {
                                                    color: setingcolor,
                                                    width: 1
                                                }
                                            };
                                        }
                                        var maskroundGraphic = new Graphic({
                                            geometry: clipgeometry,
                                            symbol: maskroundsymbol
                                        });
                                        maskgraphiclayer.add(maskroundGraphic);
                                    });
                                });
                            });
                        };
                        for (var j = 1; j <= maskgcount; j++) {
                            _loop_1(j);
                        }
                    });
                });
            }
            else {
                if (boundaryLayer === null) {
                    return;
                }
                var queryParams = boundaryLayer.createQuery();
                queryParams.where = maskOptions.boundaryDefinition;
                boundaryLayer.queryFeatures(queryParams).then(function (results) {
                    if (!results.features.length) {
                        return;
                    }
                    var fullgeometry = boundaryLayer.fullExtent;
                    fullgeometry.spatialReference = _this.view.spatialReference;
                    var geomtry = results.features[0].geometry;
                    geomtry.spatialReference = _this.view.spatialReference;
                    geometryEngineAsync.buffer(geomtry, maskOptions.boundarydistance, 'meters').
                        then(function (targetGeometry) {
                        geometryEngineAsync.difference(fullgeometry, targetGeometry).then(function (outermask) {
                            var masksymbol;
                            if (_this.viewMode === '3D') {
                                if (maskOptions.symbol) {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'extrude',
                                                material: { color: maskOptions.maskColor },
                                                size: maskOptions.symbol.size,
                                                edges: {
                                                    type: "solid",
                                                    color: maskOptions.maskColor
                                                }
                                            }]
                                    };
                                }
                                else {
                                    masksymbol = {
                                        type: 'polygon-3d',
                                        symbolLayers: [{
                                                type: 'fill',
                                                material: { color: maskOptions.maskColor },
                                                outline: {
                                                    color: 'white',
                                                    size: '0px'
                                                }
                                            }]
                                    };
                                }
                            }
                            else {
                                masksymbol = {
                                    type: "simple-fill",
                                    color: maskOptions.maskColor,
                                    style: "solid",
                                    outline: {
                                        color: maskOptions.maskColor,
                                        width: 1
                                    }
                                };
                            }
                            var outermaskGraphic = new Graphic({
                                geometry: outermask,
                                symbol: masksymbol
                            });
                            maskgraphiclayer.add(outermaskGraphic);
                            var length = maskOptions.bounarycount === undefined ? 30
                                : maskOptions.bounarycount;
                            var maskgcount = Math.ceil(maskOptions.boundarydistance / length);
                            //  let calgeometry = geomtry;
                            var setingcolor = new Color(maskOptions.boundaryColor).toRgba();
                            var _loop_2 = function (j) {
                                geometryEngineAsync.buffer(geomtry, j * length, 'meters').
                                    then(function (resgeometryouter) {
                                    geometryEngineAsync.buffer(geomtry, (j - 1) * length, 'meters').
                                        then(function (resgeometryinner) {
                                        geometryEngineAsync.difference(resgeometryouter, resgeometryinner).
                                            then(function (clipgeometry) {
                                            setingcolor[3] = (1 / maskgcount) * j;
                                            var maskroundsymbol;
                                            if (_this.viewMode === '3D') {
                                                if (maskOptions.symbol) {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'extrude',
                                                                material: { color: setingcolor },
                                                                size: maskOptions.symbol.size,
                                                                edges: {
                                                                    type: "solid",
                                                                    color: setingcolor
                                                                }
                                                            }]
                                                    };
                                                }
                                                else {
                                                    maskroundsymbol = {
                                                        type: 'polygon-3d',
                                                        symbolLayers: [{
                                                                type: 'fill',
                                                                material: { color: setingcolor },
                                                                outline: {
                                                                    color: 'white',
                                                                    size: '0px'
                                                                }
                                                            }]
                                                    };
                                                }
                                            }
                                            else {
                                                maskroundsymbol = {
                                                    type: "simple-fill",
                                                    color: setingcolor,
                                                    style: "solid",
                                                    outline: {
                                                        color: setingcolor,
                                                        width: 1
                                                    }
                                                };
                                            }
                                            var maskroundGraphic = new Graphic({
                                                geometry: clipgeometry,
                                                symbol: maskroundsymbol
                                            });
                                            maskgraphiclayer.add(maskroundGraphic);
                                        });
                                    });
                                });
                            };
                            for (var j = 1; j <= maskgcount; j++) {
                                _loop_2(j);
                            }
                        });
                    });
                });
            }
        }).catch(function (err) {
            console.error(err);
        });
    };
    Map.prototype.init = function (container, viewMode, mapoptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.maplayers = Mapcofig.gisService;
                load(['smiapi/utils/xhrutils'])
                    // tslint:disable-next-line:no-shadowed-variable
                    .then(function (_a) {
                    var xhrutils = _a[0];
                    return __awaiter(_this, void 0, void 0, function () {
                        var tokenconfigname, domainName, maptokenrequesturl, response, response, fronttokenUrl, user, password;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(Mapcofig.tokenserver.tokenType === 'back')) return [3 /*break*/, 1];
                                    tokenconfigname = mapoptions.tokenconfigname === undefined ?
                                        Mapcofig.tokenserver.token_black.tokenconfigname : mapoptions.tokenconfigname;
                                    domainName = window.location.host;
                                    maptokenrequesturl = Mapcofig.tokenserver.token_black.url;
                                    xhrutils.maptoken_backend(Mapcofig.proxyConifg.url, maptokenrequesturl, tokenconfigname, domainName)
                                        .then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                        var response, response;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.maptoken = JSON.parse(maptokenResult.data).token;
                                                    if (!(this.viewMode === '3D')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, init3Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, this.maptoken, mapoptions)];
                                                case 1:
                                                    response = _a.sent();
                                                    this.view = response.sceneView;
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, init2Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, this.maptoken, mapoptions)];
                                                case 3:
                                                    response = _a.sent();
                                                    this.view = response.mapView;
                                                    _a.label = 4;
                                                case 4:
                                                    this.initEvent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [3 /*break*/, 7];
                                case 1:
                                    if (!(Mapcofig.tokenserver.tokenType === 'free')) return [3 /*break*/, 6];
                                    if (!(this.viewMode === '3D')) return [3 /*break*/, 3];
                                    return [4 /*yield*/, init3Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, '', mapoptions)];
                                case 2:
                                    response = _b.sent();
                                    this.view = response.sceneView;
                                    return [3 /*break*/, 5];
                                case 3: return [4 /*yield*/, init2Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, '', mapoptions)];
                                case 4:
                                    response = _b.sent();
                                    this.view = response.mapView;
                                    _b.label = 5;
                                case 5:
                                    this.initEvent();
                                    return [3 /*break*/, 7];
                                case 6:
                                    fronttokenUrl = Mapcofig.tokenserver.token_front.url;
                                    user = Mapcofig.tokenserver.token_front.user;
                                    password = Mapcofig.tokenserver.token_front.password;
                                    xhrutils.maptoken_front(fronttokenUrl, user, password)
                                        .then(function (maptokenResult) { return __awaiter(_this, void 0, void 0, function () {
                                        var response, response;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.maptoken = maptokenResult.token;
                                                    if (!(viewMode === '3D')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, init3Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, this.maptoken, mapoptions)];
                                                case 1:
                                                    response = _a.sent();
                                                    this.view = response.sceneView;
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, init2Dmap(container, Mapcofig.gisService, Mapcofig.proxyConifg, this.maptoken, mapoptions)];
                                                case 3:
                                                    response = _a.sent();
                                                    this.view = response.mapView;
                                                    _a.label = 4;
                                                case 4:
                                                    this.initEvent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    _b.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Map.prototype.initEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                load(['esri/core/watchUtils'])
                    // tslint:disable-next-line:variable-name
                    .then(function (_a) {
                    var watchUtils = _a[0];
                    _this.view.when(function () {
                        watchUtils.whenTrueOnce(_this.view, 'ready', function () {
                            _this.emit(MapEvent.maploaded, _this.view);
                        });
                        watchUtils.whenTrue(_this.view, 'stationary', function () {
                            if (_this.view.extent) {
                                {
                                    var mapextent = {
                                        xmin: _this.view.extent.xmin.toFixed(6),
                                        ymin: _this.view.extent.ymin.toFixed(6),
                                        xmax: _this.view.extent.xmax.toFixed(6),
                                        ymax: _this.view.extent.ymax.toFixed(6)
                                    };
                                    if (_this.viewMode === '2D') {
                                        _this.emit(MapEvent.extentchanged, mapextent);
                                    }
                                    else {
                                        var mapextent3d = {
                                            xmin: _this.view.extent.xmin.toFixed(6),
                                            ymin: _this.view.extent.ymin.toFixed(6),
                                            xmax: _this.view.extent.xmax.toFixed(6),
                                            ymax: _this.view.extent.ymax.toFixed(6),
                                            zmin: _this.view.extent.zmin,
                                            zmax: _this.view.extent.zmax
                                        };
                                        _this.emit(MapEvent.extentchanged, mapextent3d);
                                    }
                                }
                                if (_this.view.center) {
                                    if (_this.viewMode === '2D') {
                                        _this.emit(MapEvent.centerchanged, {
                                            x: _this.view.center.x.toFixed(6),
                                            y: _this.view.center.y.toFixed(6)
                                        });
                                    }
                                    else {
                                        _this.emit(MapEvent.centerchanged, {
                                            x: _this.view.center.x.toFixed(6),
                                            y: _this.view.center.y.toFixed(6),
                                            z: _this.view.center.z
                                        });
                                    }
                                }
                                if (_this.view.zoom) {
                                    _this.emit(MapEvent.zoomchanged, _this.view.zoom);
                                }
                            }
                        });
                        _this.view.popup.watch("visible", function (visible) {
                            _this.emit(MapEvent.popupvisible, visible);
                        });
                        _this.view.on("blur", function (event) {
                            _this.emit(MapEvent.blur, _this.view, event);
                        });
                        _this.view.on("click", function (event) {
                            _this.emit(MapEvent.click, _this.view, event);
                        });
                        _this.view.on("double-click", function (event) {
                            _this.emit(MapEvent.doubleclick, _this.view, event);
                        });
                        _this.view.on("drag", function (event) {
                            _this.emit(MapEvent.drag, _this.view, event);
                        });
                        _this.view.on("focus", function (event) {
                            _this.emit(MapEvent.focus, _this.view, event);
                        });
                        _this.view.on("hold", function (event) {
                            _this.emit(MapEvent.hold, _this.view, event);
                        });
                        _this.view.on("key-down", function (event) {
                            _this.emit(MapEvent.keydown, _this.view, event);
                        });
                        _this.view.on("key-up", function (event) {
                            _this.emit(MapEvent.keyup, _this.view, event);
                        });
                        _this.view.on("mouse-wheel", function (event) {
                            _this.emit(MapEvent.mousewheel, _this.view, event);
                        });
                        _this.view.on("pointer-down", function (event) {
                            _this.emit(MapEvent.pointerdown, _this.view, event);
                        });
                        _this.view.on("pointer-enter", function (event) {
                            _this.emit(MapEvent.pointerenter, _this.view, event);
                        });
                        _this.view.on("pointer-leave", function (event) {
                            _this.emit(MapEvent.pointerleave, _this.view, event);
                        });
                        _this.view.on("pointer-move", function (event) {
                            _this.emit(MapEvent.pointermove, _this.view, event);
                        });
                        _this.view.on("pointer-up", function (event) {
                            _this.emit(MapEvent.pointerup, _this.view, event);
                        });
                        _this.view.on("resize", function (event) {
                            _this.emit(MapEvent.resize, _this.view, event);
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return Map;
}(EventEmitter$1));

var Label = /** @class */ (function () {
    function Label(labeloption) {
        this.type = 'text';
        this.color = 'white';
        this.visible = true;
        this.size = 12;
        this.weight = 'normal';
        this.angle = 0;
        this.backgroundColor = 'red';
        this.borderLineColor = 'blue';
        this.borderLineSize = 200;
        this.haloColor = 'yellow';
        this.haloSize = 20;
        this.horizontalAlignment = 'right';
        this.verticalAlignment = 'top';
        this.kerning = true;
        this.lineHeight = 25;
        this.lineWidth = 200;
        this.rotated = false;
        this.xoffset = 0;
        this.yoffset = 0;
        this.zoffset = 0;
        this.placement = "above-right";
        this.maxScale = 0;
        this.minScale = 0;
        this.labelingInfo = null; // new
        this.text = labeloption.text === undefined ? '标注' : labeloption.text;
        this.color = labeloption.color === undefined ? 'white' : labeloption.color;
        this.visible = labeloption.visible === undefined ? true : labeloption.visible;
        this.size = labeloption.size === undefined ? 12 : labeloption.size;
        this.weight = labeloption.weight === undefined ? 'normal' : labeloption.weight;
        this.angle = labeloption.angle === undefined ? 0 : labeloption.angle;
        this.backgroundColor = labeloption.backgroundColor === undefined ? 'red' : labeloption.backgroundColor;
        this.borderLineColor = labeloption.borderLineColor === undefined ? 'blue' : labeloption.borderLineColor;
        this.borderLineSize = labeloption.borderLineSize === undefined ? 200 : labeloption.borderLineSize;
        this.haloColor = labeloption.haloColor === undefined ? 'yellow' : labeloption.haloColor;
        this.haloSize = labeloption.haloSize === undefined ? 0 : labeloption.haloSize;
        this.horizontalAlignment = labeloption.horizontalAlignment === undefined ? 'right' :
            labeloption.horizontalAlignment;
        this.verticalAlignment = labeloption.verticalAlignment === undefined ? 'top' :
            labeloption.verticalAlignment;
        this.kerning = labeloption.kerning === undefined ? true : labeloption.kerning;
        this.lineHeight = labeloption.lineHeight === undefined ? 25 : labeloption.lineHeight;
        this.lineWidth = labeloption.lineWidth === undefined ? 200 : labeloption.lineWidth;
        this.rotated = labeloption.rotated === undefined ? false : labeloption.rotated;
        this.xoffset = labeloption.xoffset === undefined ? 0 : labeloption.xoffset;
        this.yoffset = labeloption.yoffset === undefined ? 0 : labeloption.yoffset;
        this.zoffset = labeloption.zoffset === undefined ? 0 : labeloption.zoffset;
        this.placement = labeloption.placement === undefined ? "center-right" : labeloption.placement;
        this.maxScale = labeloption.maxScale === undefined ? 0 : labeloption.maxScale;
        this.minScale = labeloption.minScale === undefined ? 0 : labeloption.minScale;
        this.labelingInfo = labeloption.labelingInfo;
    }
    return Label;
}());

var Guid = /** @class */ (function () {
    function Guid() {
        this.uuid = this.get_uuid();
    }
    Guid.prototype.S4 = function () {
        // tslint:disable-next-line:no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    Guid.prototype.get_uuid = function () {
        return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() +
            "-" + this.S4() + this.S4() + this.S4());
    };
    return Guid;
}());

var Overlayerbase = /** @class */ (function () {
    function Overlayerbase(overlayeroption) {
        this.uuid = new Guid().uuid;
        this.label = overlayeroption.label !== undefined ? overlayeroption.label : new Label({ visible: false });
        this.attributes = overlayeroption.attributes === undefined ? {} : overlayeroption.attributes;
        this.type = "element";
        this.renderer = overlayeroption.renderer;
        this.elevationInfo = overlayeroption.elevationInfo;
        this.symbol = overlayeroption.symbol;
    }
    return Overlayerbase;
}());

var __extends$16 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polygon = /** @class */ (function (_super) {
    __extends$16(Polygon, _super);
    function Polygon(ploption) {
        var _this = _super.call(this, ploption) || this;
        _this.overlaytype = 'polygon';
        _this.paths = ploption.paths;
        _this.symboltype = ploption.symboltype === undefined ? 'simple' : ploption.symboltype;
        _this.fillColor = ploption.fillColor === undefined ? 'white' : ploption.fillColor;
        _this.style = ploption.style === undefined ? 'solid' : ploption.style;
        _this.strokeColor = ploption.strokeColor === undefined ? 'red' : ploption.strokeColor;
        _this.strokestyle = ploption.strokestyle === undefined ? 'solid' : ploption.strokestyle;
        _this.strokeWeight = ploption.strokeWeight === undefined ? 2 : ploption.strokeWeight;
        _this.url = ploption.url === undefined ? '' : ploption.url;
        _this.picwidth = ploption.picwidth === undefined ? 20 : ploption.picwidth;
        _this.picheight = ploption.picheight === undefined ? 20 : ploption.picheight;
        return _this;
    }
    return Polygon;
}(Overlayerbase));

var __extends$15 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function (_super) {
    __extends$15(Circle, _super);
    function Circle(ploption) {
        var _this = _super.call(this, ploption) || this;
        _this.overlaytype = 'circle';
        _this.center = ploption.center;
        _this.radius = ploption.radius;
        _this.radiusUnit = ploption.radiusUnit === undefined ? 'meters' : ploption.radiusUnit;
        return _this;
        // this.paths = ploption.paths;
        // this.symboltype = ploption.symboltype === undefined ? 'simple' : ploption.symboltype;
        // this.fillColor = ploption.fillColor === undefined ? 'white' : ploption.fillColor;
        // this.style = ploption.style === undefined ? 'solid' : ploption.style;
        // this.strokeColor = ploption.strokeColor === undefined ? 'red' : ploption.strokeColor;
        // this.strokestyle = ploption.strokestyle === undefined ? 'solid' : ploption.strokestyle;
        // this.strokeWeight = ploption.strokeWeight === undefined ? 2 : ploption.strokeWeight;
        // this.url = ploption.url === undefined ? '' : ploption.url;
        // this.picwidth = ploption.picwidth === undefined ? 20 : ploption.picwidth;
        // this.picheight = ploption.picheight === undefined ? 20 : ploption.picheight;
    }
    return Circle;
}(Polygon));

var FeatureReduction = /** @class */ (function () {
    function FeatureReduction(froption) {
        this.type = 'text';
        this.type = froption.type === undefined ? 'cluster' : froption.type;
        this.clusterRadius = froption.clusterRadius === undefined ? 100 : froption.clusterRadius;
        this.clusterConfig = froption.clusterConfig === undefined ? null : froption.clusterConfig;
    }
    return FeatureReduction;
}());

var Icon = /** @class */ (function () {
    function Icon(iconOption) {
        this.size = iconOption.size;
        this.image = iconOption.image;
    }
    return Icon;
}());

var __extends$17 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Marker = /** @class */ (function (_super) {
    __extends$17(Marker, _super);
    function Marker(markeroption) {
        var _this = _super.call(this, markeroption) || this;
        _this.overlaytype = 'Marker';
        _this.icon = markeroption.icon;
        _this.position = markeroption.position;
        return _this;
    }
    return Marker;
}(Overlayerbase));

var OverlayGroup = /** @class */ (function () {
    function OverlayGroup(olayers, overLayerGroupOption) {
        this.uuid = new Guid().uuid;
        this.overlayers = olayers;
        this.type = "group";
        this.overlaytype = overLayerGroupOption.overlaytype === undefined ? 'marker' : overLayerGroupOption.overlaytype;
        this.datafiled = overLayerGroupOption.datafiled === undefined ? [] : overLayerGroupOption.datafiled;
        this.style = overLayerGroupOption.style === undefined ? [] : overLayerGroupOption.style;
        this.label = overLayerGroupOption.label === undefined ?
            new Label({ visible: false }) : overLayerGroupOption.label;
        this.frreduction = overLayerGroupOption.frreduction === undefined ? null : overLayerGroupOption.frreduction;
        this.renderer = overLayerGroupOption.renderer === undefined ? null : overLayerGroupOption.renderer;
        this.elevationInfo = overLayerGroupOption.elevationInfo;
        this.visible = overLayerGroupOption.visible === undefined ? true : overLayerGroupOption.visible;
    }
    return OverlayGroup;
}());

var __extends$18 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polyline = /** @class */ (function (_super) {
    __extends$18(Polyline, _super);
    function Polyline(ploption) {
        var _this = _super.call(this, ploption) || this;
        _this.overlaytype = 'Polyline';
        _this.path = ploption.path;
        _this.cap = ploption.cap === undefined ? 'square' : ploption.cap;
        _this.strokeColor = ploption.strokeColor === undefined ? 'red' : ploption.strokeColor;
        _this.style = ploption.style === undefined ? 'solid' : ploption.style;
        _this.lineJoin = ploption.lineJoin === undefined ? 'round' : ploption.lineJoin;
        _this.width = ploption.width === undefined ? 5 : ploption.width;
        return _this;
    }
    return Polyline;
}(Overlayerbase));

var Size = /** @class */ (function () {
    function Size(wth, ht) {
        this.width = wth;
        this.height = ht;
    }
    return Size;
}());

var SMap = {
    load: load,
    Bounds: Bounds,
    LayerListControl: LayerListControl,
    PerformanceInfoControl: PerformanceInfoControl,
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
    Circle: Circle,
    Icon: Icon,
    Size: Size,
    Label: Label,
    LayerGroup: LayerGroup,
    Layer: Layer,
    FeatureReduction: FeatureReduction,
    OverlayGroup: OverlayGroup,
    LngLat: LngLat,
    Polyline: Polyline,
    Polygon: Polygon,
    MapEvent: MapEvent,
    Map: Map$1
};

return SMap;

})));
//# sourceMappingURL=SMap.js.map
