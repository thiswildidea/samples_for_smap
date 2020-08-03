var Mapcofig = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Mapcofig() {
    }
    Mapcofig.jsapi = 'http://10.201.37.225:8080/smiapi/arcgis';
    Mapcofig.jsapiversion4X = '4.15';
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
        httpsDomains: [{
                proxyUrl: 'http://10.201.37.225:8080/mapkProx/proxy.jsp',
                domainName: 'http://hostserver.xhbd.local'
            }, {
                proxyUrl: 'http://10.201.37.225:8080/mapkProx/proxy.jsp',
                domainName: 'http://hostserver2.xhbd.local'
            }]
    };
    Mapcofig.fonts = {
        url: 'http://10.201.37.225:8080/smiapi/arcgis/4.15/fonts'
    };
    Mapcofig.gisService = {
        geometryServiceUrl: 'http:///mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Geometry/GeometryServer',
        serverurl: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services',
        baseMapServices: {
            isToken: true,
            tokenType: 'OneMap',
            layers: [{
                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/Air2020/MapServer',
                    layerEName: 'basemap_air',
                    isToken: false,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '影像底图',
                    layerCName: '影像底图',
                    type: 'basemap_air'
                }, {
                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/BaseMap/MapServer',
                    layerEName: 'basemap_zw',
                    isToken: false,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '政务底图',
                    layerCName: '政务底图',
                    type: 'basemap_zw'
                }, {
                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/MarkerMap/MapServer',
                    layerEName: 'basemap_as',
                    isToken: false,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'TileLayer',
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
                    layerGroups: [{
                            id: "QXCH_XH",
                            title: "徐汇全息测绘数据",
                            tag: "QXCH_XH",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Hosted/longhua0116/SceneServer",
                                    id: "LONGHUA",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "longhua",
                                    popupEnabled: true,
                                    title: "全息测绘龙华",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -0.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/hengfu0612/SceneServer",
                                    id: "HENGFU",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "hengfu",
                                    popupEnabled: true,
                                    title: "全息测绘衡复",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -0.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }]
                        }, {
                            id: "BIM_XH",
                            title: "徐汇BIM数据",
                            tag: "BIM_XH",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/mxqyBim/SceneServer",
                                    id: "mxqyBim",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "BuildingSceneLayer",
                                    tag: "mxqyBim",
                                    popupEnabled: true,
                                    title: "徐汇滨江模型",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/xjhzxBim/SceneServer',
                                    id: 'xjhzxBim',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'BuildingSceneLayer',
                                    tag: 'xjhzxBim',
                                    popupEnabled: true,
                                    title: '徐家汇中心',
                                    type: 'image',
                                    listMode: 'show'
                                }]
                        }],
                    layers: [{
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/Hosted/XuHuiJingMo/SceneServer',
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
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/Hosted/XuHuiQuBaiMo/SceneServer',
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
                                                color: [0, 0, 0, 0.6],
                                                size: 1
                                            }
                                        }]
                                }
                            }
                        },
                        {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/Hosted/XuHuiQuBaiMo/SceneServer',
                            id: 'model_white_as',
                            isToken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '暗色白模型',
                            title: '暗色白模型',
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
                                                color: [77, 126, 176, 1],
                                                colorMixMode: 'replace'
                                            },
                                            edges: {
                                                type: 'solid',
                                                color: [0, 0, 0, 0.6],
                                                size: 1
                                            }
                                        }]
                                }
                            }
                        }, {
                            url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/xh_xaBuilding/SceneServer',
                            id: 'xa_model_real',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '西岸精模',
                            title: '西岸精模',
                            type: 'xa_model_real',
                            popupEnabled: true,
                            listMode: 'hide'
                        }, {
                            url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/xh_xaSimpleBuilding/SceneServer',
                            id: 'xa_model_white',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '西岸白模',
                            title: '西岸白模',
                            type: 'xa_model_white',
                            popupEnabled: true,
                            listMode: 'hide'
                        }, {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/Hosted/LBJZ/SceneServer',
                            id: 'LBJZ',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '历史保护建筑',
                            title: '历史保护建筑',
                            type: 'LBJZ',
                            elevationInfo: {
                                mode: 'absolute-height',
                                offset: -3.5
                            },
                            popupEnabled: true
                        },
                        {
                            url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/LBJZ_ORIGIN/SceneServer',
                            id: 'LBJZ_ORIGIN',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '历保建筑原貌',
                            title: '历保建筑原貌',
                            type: 'LBJZ_ORIGIN',
                            elevationInfo: {
                                mode: 'absolute-height',
                                offset: -2.5
                            },
                            popupEnabled: true
                        },
                        {
                            url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/LBJZ_NEW/SceneServer',
                            id: 'LBJZ_NEW',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '历保建筑',
                            title: '历保建筑',
                            type: 'LBJZ_NEW',
                            elevationInfo: {
                                mode: 'absolute-height',
                                offset: -2.5
                            },
                            popupEnabled: true
                        }
                    ]
                }, {
                    id: "buildings_3d_belove_layers",
                    title: "地下",
                    tag: "buildings_3d_belove_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [{
                            id: "RQFJ_XH",
                            title: "三维燃气管线",
                            tag: "RQFJ_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/RQFJ/SceneServer",
                                    id: "RQFJ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "RQFJ",
                                    popupEnabled: true,
                                    title: "燃气管线FJ",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/RQGX/SceneServer",
                                    id: "RQGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "RQGX",
                                    popupEnabled: true,
                                    title: "燃气管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/RQJS/SceneServer",
                                    id: "RQJS",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "RQJS",
                                    popupEnabled: true,
                                    title: "燃气管线JS",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: 'http://hostserver2.xhbd.local/server/rest/services/Hosted/RQTZ/SceneServer',
                                    id: 'RQTZ',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'SceneLayer',
                                    tag: 'RQTZ',
                                    popupEnabled: true,
                                    title: '燃气管线TZ',
                                    elevationInfo: {
                                        mode: 'absolute-height',
                                        offset: -4.5
                                    },
                                    type: 'image',
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "DLGX_XH",
                            title: "三维电力管线",
                            tag: "DLGX_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DLGX/SceneServer",
                                    id: "DLGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DLGX",
                                    popupEnabled: true,
                                    title: "电力管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DLFJ/SceneServer",
                                    id: "DLFJ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DLFJ",
                                    popupEnabled: true,
                                    title: "电力管线FJ",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DLJS/SceneServer",
                                    id: "DLJS",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DLJS",
                                    popupEnabled: true,
                                    title: "电力管线JS",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "DXGX_XH",
                            title: "三维电信管线",
                            tag: "DXGX_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DXGX/SceneServer",
                                    id: "DXGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DXGX",
                                    popupEnabled: true,
                                    title: "电信管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -10
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DXFJ/SceneServer",
                                    id: "DXFJ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DXFJ",
                                    popupEnabled: true,
                                    title: "电信管线FJ",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -10
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/DXJS/SceneServer",
                                    id: "DXJS",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "DXJS",
                                    popupEnabled: true,
                                    title: "电信管线JS",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -10
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "PSGX_XH",
                            title: "三维排水管线",
                            tag: "PSGX_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/PSGX/SceneServer",
                                    id: "PSGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "PSGX",
                                    popupEnabled: true,
                                    title: "排水管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/PSFJ/SceneServer",
                                    id: "PSFJ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "PSFJ",
                                    popupEnabled: true,
                                    title: "排水管线FJ",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/PSTZ/SceneServer",
                                    id: "PSTZ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "PSTZ",
                                    popupEnabled: true,
                                    title: "排水管线TZ",
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "JSGX_XH",
                            title: "三维给水管线",
                            tag: "JSGX_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/JSGX/SceneServer",
                                    id: "JSGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "JSGX",
                                    popupEnabled: true,
                                    title: "给水管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/JSJS/SceneServer",
                                    id: "JSJS",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "JSJS",
                                    popupEnabled: true,
                                    title: "给水管线JS",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/JSTZ/SceneServer",
                                    id: "JSTZ",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "JSTZ",
                                    popupEnabled: true,
                                    title: "给水管线TZ",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "QTGX_XH",
                            title: "三维其他管线",
                            tag: "QTGX_XH",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/QTGX/SceneServer",
                                    id: "QTGX",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "QTGX",
                                    popupEnabled: true,
                                    title: "其他管线GX",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/QTJS/SceneServer",
                                    id: "QTJS",
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: "SceneLayer",
                                    tag: "QTJS",
                                    popupEnabled: true,
                                    title: "其他管线JS",
                                    elevationInfo: {
                                        mode: "absolute-height",
                                        offset: -4.5
                                    },
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }],
                    layers: []
                }]
        },
        smapbussinessLayers: {
            serverurl: "http://hostserver.xhbd.local/arcgis/rest/services",
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
                    layers: []
                }, {
                    id: "smap_2D_layers",
                    title: "二维业务组",
                    grouptype: '2D',
                    tag: "smap_2D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [{
                            id: "history_images",
                            title: "历史影像数据",
                            tag: "history_images",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air1948/MapServer",
                                    id: "Air1948",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1948",
                                    title: "影像1948",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air1979/MapServer",
                                    id: "Air1979",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1979",
                                    title: "影像1979",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air1994/MapServer",
                                    id: "Air1994",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1994",
                                    title: "影像1994",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2006/MapServer",
                                    id: "Air2006",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2006",
                                    title: "影像2006",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2008/MapServer",
                                    id: "Air2008",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2008",
                                    title: "影像2008",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2010/MapServer",
                                    id: "Air2010",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2010",
                                    title: "影像2010",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2011/MapServer",
                                    id: "Air2011",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2011",
                                    title: "影像2011",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2012/MapServer",
                                    id: "Air2012",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2012",
                                    title: "影像2012",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2013/MapServer",
                                    id: "Air2013",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2013",
                                    title: "影像2013",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2014/MapServer",
                                    id: "Air2014",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2014",
                                    title: "影像2014",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2015/MapServer",
                                    id: "Air2015",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2015",
                                    title: "影像2015",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2016/MapServer",
                                    id: "Air2016",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2016",
                                    title: "影像2016",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local2/arcgis/rest/services/Air2017/MapServer",
                                    id: "Air2017",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2017",
                                    title: "影像2017",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2018/MapServer",
                                    id: "Air2018",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2018",
                                    title: "影像2018",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/Air2019/MapServer",
                                    id: "Air2019",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2019",
                                    title: "影像2019",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/Air2020/MapServer',
                                    id: 'Air2020',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'SHCTiledMapServiceLayer',
                                    tag: '影像2020',
                                    title: '影像2020',
                                    type: 'image',
                                    listMode: 'show'
                                }]
                        }, {
                            id: "xh_allboundary",
                            title: "徐汇分区描边",
                            tag: "xh_allboundary",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ/MapServer",
                                    id: "XH_boundarymask_xuhui",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "XH_boundarymask_xuhui",
                                    popupEnabled: true,
                                    title: "徐汇区分区描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0403/MapServer",
                                    id: "XH_boundarymask_0403",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "天平街道描边",
                                    title: "天平街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0404/MapServer",
                                    id: "XH_boundarymask_0404",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "湖南街道描边",
                                    title: "湖南街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0407/MapServer",
                                    id: "XH_boundarymask_0407",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "斜土街道描边",
                                    title: "斜土街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0408/MapServer",
                                    id: "XH_boundarymask_0408",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "枫林街道描边",
                                    title: "枫林街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0410/MapServer",
                                    id: "XH_boundarymask_0410",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "长桥街道描边",
                                    title: "长桥街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0411/MapServer",
                                    id: "XH_boundarymask_0411",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "田林街道描边",
                                    title: "田林街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0412/MapServer",
                                    id: "XH_boundarymask_0412",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "红梅街道描边",
                                    title: "红梅街道描边",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0413/MapServer",
                                    id: "XH_boundarymask_0413",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "康健街道描边",
                                    title: "康健街道描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0414/MapServer",
                                    id: "XH_boundarymask_0414",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "徐家汇街道描边",
                                    title: "徐家汇街道描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0415/MapServer",
                                    id: "XH_boundarymask_0415",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "凌云街道描边",
                                    title: "凌云街道描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0416/MapServer",
                                    id: "XH_boundarymask_0416",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "龙华街道描边",
                                    title: "龙华街道描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0417/MapServer",
                                    id: "XH_boundarymask_0417",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "漕河泾街道描边",
                                    title: "漕河泾街道描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0418/MapServer",
                                    id: "XH_boundarymask_0418",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "华泾镇描边",
                                    title: "华泾镇描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0419/MapServer",
                                    id: "XH_boundarymask_0419",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "南站管委会描边",
                                    title: "南站管委会描边",
                                    type: "image",
                                    listMode: 'show'
                                },
                                {
                                    url: "http://hostserver.xhbd.local/arcgis/rest/services/XHGQ_0420/MapServer",
                                    id: "XH_boundarymask_0420",
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "TileLayer",
                                    tag: "滨江描边",
                                    title: "滨江描边",
                                    type: "image",
                                    listMode: 'show'
                                }
                            ]
                        }, {
                            id: "XH_PIPELINE",
                            title: "雨污管线",
                            tag: "XH_PIPELINE",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/0',
                                    id: 'XH_PIPELINE_WSGD',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '污水管点',
                                    title: '污水管点',
                                    popupTemplate: {
                                        title: '{exp_no}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 'exp_no',
                                                        label: '物探点号'
                                                    },
                                                    {
                                                        fieldName: 'feature',
                                                        label: '特征'
                                                    },
                                                    {
                                                        fieldName: 'subsid',
                                                        label: '附属物'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    },
                                                    {
                                                        fieldName: 'jjcc',
                                                        label: '窨井尺寸'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                }, {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/1',
                                    id: 'XH_PIPELINE_YSGD',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '雨水管点',
                                    title: '雨水管点',
                                    popupTemplate: {
                                        title: '{exp_no}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 'exp_no',
                                                        label: '物探点号'
                                                    },
                                                    {
                                                        fieldName: 'feature',
                                                        label: '特征'
                                                    },
                                                    {
                                                        fieldName: 'subsid',
                                                        label: '附属物'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    },
                                                    {
                                                        fieldName: 'jjcc',
                                                        label: '窨井尺寸'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/2',
                                    id: 'XH_PIPELINE_HLGD',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '污水管点',
                                    title: '污水管点',
                                    popupTemplate: {
                                        title: '{exp_no}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 'exp_no',
                                                        label: '物探点号'
                                                    },
                                                    {
                                                        fieldName: 'feature',
                                                        label: '特征'
                                                    },
                                                    {
                                                        fieldName: 'subsid',
                                                        label: '附属物'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    },
                                                    {
                                                        fieldName: 'jjcc',
                                                        label: '窨井尺寸'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                }, {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/3',
                                    id: 'XH_PIPELINE_YSGX',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '雨水管线',
                                    title: '雨水管线',
                                    popupTemplate: {
                                        title: '{s_point}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 's_point',
                                                        label: '起点编号'
                                                    },
                                                    {
                                                        fieldName: 'e_point',
                                                        label: '终点编号'
                                                    },
                                                    {
                                                        fieldName: 'material',
                                                        label: '材质'
                                                    },
                                                    {
                                                        fieldName: 'pipe_size',
                                                        label: '管径(mm)'
                                                    },
                                                    {
                                                        fieldName: 's_deep',
                                                        label: '起点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_deep',
                                                        label: '终点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 's_h',
                                                        label: '起点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_h',
                                                        label: '终点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/4',
                                    id: 'XH_PIPELINE_WSGX',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '污水管线',
                                    title: '污水管线',
                                    popupTemplate: {
                                        title: '{s_point}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 's_point',
                                                        label: '起点编号'
                                                    },
                                                    {
                                                        fieldName: 'e_point',
                                                        label: '终点编号'
                                                    },
                                                    {
                                                        fieldName: 'material',
                                                        label: '材质'
                                                    },
                                                    {
                                                        fieldName: 'pipe_size',
                                                        label: '管径(mm)'
                                                    },
                                                    {
                                                        fieldName: 's_deep',
                                                        label: '起点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_deep',
                                                        label: '终点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 's_h',
                                                        label: '起点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_h',
                                                        label: '终点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PIPELINE/FeatureServer/5',
                                    id: 'XH_PIPELINE_HLGX',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '合流管线',
                                    title: '合流管线',
                                    popupTemplate: {
                                        title: '{s_point}',
                                        content: [{
                                                type: 'fields',
                                                fieldInfos: [{
                                                        fieldName: 's_point',
                                                        label: '起点编号'
                                                    },
                                                    {
                                                        fieldName: 'e_point',
                                                        label: '终点编号'
                                                    },
                                                    {
                                                        fieldName: 'material',
                                                        label: '材质'
                                                    },
                                                    {
                                                        fieldName: 'pipe_size',
                                                        label: '管径(mm)'
                                                    },
                                                    {
                                                        fieldName: 's_deep',
                                                        label: '起点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_deep',
                                                        label: '终点埋深(m)'
                                                    },
                                                    {
                                                        fieldName: 's_h',
                                                        label: '起点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'e_h',
                                                        label: '终点高程(m)'
                                                    },
                                                    {
                                                        fieldName: 'dlmc',
                                                        label: '道路名称'
                                                    }
                                                ]
                                            }]
                                    },
                                    elevationInfo: 'relative-to-ground',
                                    type: 'image',
                                    listMode: 'show',
                                    popupEnabled: true
                                }
                            ]
                        }, {
                            id: "XH_PONDING",
                            title: "积水区域",
                            tag: "XH_PONDING",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_ROADPONDING/MapServer/0',
                                    id: 'XH_ROADPONDING_JDSB',
                                    istoken: false,
                                    visible: false,
                                    opacity: 0.8,
                                    maptype: 'FeatureLayer',
                                    tag: '积水道路街道上报',
                                    title: '积水道路街道上报',
                                    // sublayers: [{ id: 5 }],
                                    type: 'image',
                                    renderer: {
                                        type: 'simple',
                                        symbol: {
                                            type: 'simple-fill',
                                            color: [0, 222, 255, 0.5],
                                            outline: {
                                                color: [0, 222, 255, 0],
                                                width: '0px'
                                            }
                                        }
                                    },
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_ROADPONDING/MapServer/1',
                                    id: 'XH_ROADPONDING_LQM',
                                    istoken: false,
                                    visible: false,
                                    opacity: 0.8,
                                    maptype: 'FeatureLayer',
                                    tag: '积水道路利奇马',
                                    title: '积水道路利奇马',
                                    type: 'image',
                                    renderer: {
                                        type: 'simple',
                                        symbol: {
                                            type: 'simple-fill',
                                            color: [0, 222, 255, 0.5],
                                            outline: {
                                                color: [0, 222, 255, 0],
                                                width: '0px'
                                            }
                                        }
                                    },
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_ROADPONDING/MapServer/2',
                                    id: 'XH_ROADPONDING_2018',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: 'T2018年常发积水点',
                                    title: 'T2018年常发积水点',
                                    type: 'image',
                                    renderer: {
                                        type: 'simple',
                                        symbol: {
                                            type: 'simple-fill',
                                            color: [0, 222, 255, 0.5],
                                            outline: {
                                                color: [0, 222, 255, 0],
                                                width: '0px'
                                            }
                                        }
                                    },
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_ROADPONDING/FeatureServer/3',
                                    id: 'XH_ROADPONDING_2017',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: 'T2017年常发积水点',
                                    title: 'T2017年常发积水点',
                                    type: 'image',
                                    renderer: {
                                        type: 'simple',
                                        symbol: {
                                            type: 'simple-fill',
                                            color: [0, 222, 255, 0.5],
                                            outline: {
                                                color: [0, 222, 255, 0],
                                                width: '0px'
                                            }
                                        }
                                    },
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_ROADPONDING/FeatureServer/4',
                                    id: 'XH_BLOCKPONDING_LQM',
                                    istoken: false,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '积水小区利奇马',
                                    title: '积水小区利奇马',
                                    type: 'image',
                                    renderer: {
                                        type: 'simple',
                                        symbol: {
                                            type: 'simple-fill',
                                            color: [86, 180, 252, 0.5],
                                            outline: {
                                                color: [86, 180, 252, 0],
                                                width: '0px'
                                            }
                                        }
                                    },
                                    listMode: 'hide'
                                }
                            ]
                        }, {
                            id: "XH_RIVERLINE",
                            title: "徐汇河网",
                            tag: "XH_RIVERLINE",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RiverLine/FeatureServer/0',
                                    id: 'XH_RIVERLINE_2',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '二级河流',
                                    title: '二级河流',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RiverLine/FeatureServer/1',
                                    id: 'XH_RIVERLINE_3',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '三级河流',
                                    title: '三级河流',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RiverLine/FeatureServer/2',
                                    id: 'XH_RIVERLINE_BOUND',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '河流边线',
                                    title: '河流边线',
                                    type: 'image',
                                    listMode: 'hide'
                                }
                            ]
                        }, {
                            id: "XH_ROADLINE",
                            title: "徐汇道路",
                            tag: "XH_ROADLINE",
                            visible: false,
                            listMode: 'show',
                            layers: [{
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/0',
                                    id: 'XH_STREETLINE_3',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '三级街道',
                                    title: '三级街道',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/1',
                                    id: 'XH_ROADLINE_4',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '四级公路',
                                    title: '四级公路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/2',
                                    id: 'XH_STREETLINE_4',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '四级街道',
                                    title: '四级街道',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/3',
                                    id: 'XH_ROADLINE_3',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '三级公路',
                                    title: '三级公路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/4',
                                    id: 'XH_HIGHWAY',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '高速公路',
                                    title: '高速公路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/5',
                                    id: 'XH_STREETLINE_1',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '一级街道',
                                    title: '一级街道',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/6',
                                    id: 'XH_STREETLINE_2',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '二级街道',
                                    title: '二级街道',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/7',
                                    id: 'XH_ROADLINE_1',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '一级公路',
                                    title: '一级公路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/8',
                                    id: 'XH_ROADLINE_2',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '二级公路',
                                    title: '二级公路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/9',
                                    id: 'XH_STREETLINE_5',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '五级街道',
                                    title: '五级街道',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/10',
                                    id: 'XH_EXPRESSWAY',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '城市快速路',
                                    title: '城市快速路',
                                    type: 'image',
                                    listMode: 'hide'
                                },
                                {
                                    url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_RoadLine/FeatureServer/11',
                                    id: 'XH_ROADLINE_5',
                                    istoken: false,
                                    visible: true,
                                    opacity: 1.0,
                                    maptype: 'FeatureLayer',
                                    tag: '五级公路',
                                    title: '五级公路',
                                    type: 'image',
                                    listMode: 'hide'
                                }
                            ]
                        },
                        {
                            id: "XH_PONDING",
                            title: "上海边界范围数据",
                            tag: "shanghaiboundary",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/sh_qx_boundary/FeatureServer",
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
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/sh_jd_boundary/FeatureServer",
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
                                    url: "http://hostserver2.xhbd.local/server/rest/services/Hosted/sh_jwh_boundary/FeatureServer",
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
                    layers: [{
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XU_WG/FeatureServer",
                            id: "XH_WG",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "网格",
                            title: "网格",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false,
                            renderer: {
                                type: "simple",
                                symbol: {
                                    type: "simple-fill",
                                    color: [0, 227, 229, 0],
                                    outline: {
                                        color: [20, 227, 229, 1],
                                        width: "2px"
                                    }
                                }
                            }
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XU_JD/FeatureServer",
                            id: "XH_JD",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇区街道",
                            title: "徐汇区街道",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_JD_V2/FeatureServer',
                            id: 'XH_JD_V2',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '徐汇区街道V2',
                            title: '徐汇区街道V2',
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: [205, 102, 102, 255]
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 25
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.jd_name'
                                    }
                                }],
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_GNQ/FeatureServer",
                            id: "XH_GNQ",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇功能区",
                            title: "徐汇功能区",
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: [0, 230, 169, 255]
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 22
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.gnqname'
                                    }
                                }],
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: 'http://31.0.37.222/arcgis/rest/services/XH_GNQ2/FeatureServer',
                            id: 'XH_GNQ2',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '徐汇功能区2',
                            title: '徐汇功能区2',
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: [0, 230, 169, 255]
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 25
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.gnqname'
                                    }
                                }],
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_ZDGNQ/FeatureServer",
                            id: "XH_ZDGNQ",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇4新功能区",
                            title: "徐汇4新功能区",
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: [0, 230, 169, 255]
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 25
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.name'
                                    }
                                }],
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_ZJGD/MapServer",
                            id: "XH_ZJGD",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "在建工地",
                            title: "在建工地",
                            type: "image",
                            listMode: 'show',
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: 'white'
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 25
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.地图上'
                                    }
                                }],
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_JWH/FeatureServer",
                            id: "XH_JWH",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇居委会",
                            title: "徐汇居委会",
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: [84, 212, 223, 255]
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 20
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.jwhname'
                                    }
                                }],
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_XQ_Polygon/FeatureServer",
                            id: "XH_XQ_Polygon",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇小区面",
                            title: "徐汇小区面",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false,
                            renderer: {
                                type: "simple",
                                symbol: {
                                    type: "simple-fill",
                                    color: [255, 235, 175, 0.1],
                                    outline: {
                                        color: [255, 235, 175, 1],
                                        width: "1.5px"
                                    }
                                }
                            }
                        }, {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_FMQ_XQ/FeatureServer',
                            id: 'XH_FMQ_XQ',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '徐汇风貌小区',
                            title: '徐汇风貌小区',
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: false,
                            renderer: {
                                type: 'simple',
                                symbol: {
                                    type: 'simple-fill',
                                    color: [255, 235, 175, 0.1],
                                    outline: {
                                        color: [255, 235, 175, 1],
                                        width: '1.5px'
                                    }
                                }
                            }
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_GJCRK/MapServer",
                            id: "XH_GJCRK",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "MapImageLayer",
                            tag: "徐汇轨交出入口",
                            title: "徐汇轨交出入口",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        },
                        {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/Hosted/cameraPoint/FeatureServer",
                            id: "XH_VideoCamera",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇区摄像头",
                            title: "徐汇区摄像头",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        },
                        {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_XQ_CenterPoint/FeatureServer",
                            id: "XH_XQ_CenterPoint",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇区小区中心点",
                            title: "徐汇区小区中心点",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XU_GJZD/FeatureServer",
                            id: "XH_GJZD",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇轨交站点",
                            title: "徐汇轨交站点",
                            elevationInfo: "relative-to-ground",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        }, {
                            url: "http://hostserver.xhbd.local/arcgis/rest/services/XH_GJXL/FeatureServer",
                            id: "XH_GJXL",
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: "FeatureLayer",
                            tag: "徐汇轨交线路",
                            title: "徐汇轨交线路",
                            elevationInfo: "relative-to-ground",
                            type: "image",
                            listMode: 'show',
                            popupEnabled: false
                        },
                        {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_XIAN_REGION/FeatureServer/1',
                            id: 'XH_XIAN_REIGON',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '徐汇西岸范围',
                            title: '徐汇西岸范围',
                            elevationInfo: 'relative-to-ground',
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: true,
                        },
                        {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_XIAN_REGION/FeatureServer/0',
                            id: 'XH_BINJIANG_REIGON',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '徐汇滨江范围',
                            title: '徐汇滨江范围',
                            elevationInfo: 'relative-to-ground',
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: true,
                            renderer: {
                                type: 'simple',
                                symbol: {
                                    type: 'line-3d',
                                    symbolLayers: [{
                                            type: 'path',
                                            profile: 'quad',
                                            material: {
                                                // color: [131, 78, 229, 0.6]
                                                // color: [171, 251, 248, 0.4]
                                                color: [0, 254, 255, 0.4]
                                            },
                                            width: 6,
                                            height: 0.5,
                                            join: 'miter',
                                            cap: 'round',
                                            anchor: 'bottom',
                                            profileRotation: 'heading'
                                        }]
                                }
                            }
                        },
                        {
                            url: 'http://hostserver.xhbd.local/arcgis/rest/services/XH_PSXT/FeatureServer/0',
                            id: 'XH_PSXT',
                            istoken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'FeatureLayer',
                            tag: '排水系统',
                            title: '排水系统',
                            renderer: {
                                type: 'simple',
                                symbol: {
                                    type: 'simple-fill',
                                    color: [36, 241, 254, 0.1],
                                    outline: {
                                        color: [36, 241, 254, 1],
                                        width: 4
                                    }
                                }
                            },
                            labelingInfo: [{
                                    symbol: {
                                        type: 'label-3d',
                                        symbolLayers: [{
                                                type: 'text',
                                                material: {
                                                    color: 'white'
                                                },
                                                halo: {
                                                    color: [0, 0, 0, 0.7],
                                                    size: 3
                                                },
                                                size: 20
                                            }]
                                    },
                                    labelPlacement: 'above-center',
                                    labelExpressionInfo: {
                                        expression: '$feature.排水系'
                                    }
                                }],
                            elevationInfo: 'relative-to-ground',
                            type: 'image',
                            listMode: 'show',
                            popupEnabled: true
                        },
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
        }
    };
    return Mapcofig;
}());
export default Mapcofig;
