export default class Mapcofig {
    static jsapi: string;
    static jsapiversion4X: string;
    static tokenserver: {
        tokenType: string;
        token_front: {
            url: string;
            user: string;
            password: string;
        };
        token_black: {
            url: string;
            tokenconfigname: string;
        };
    };
    static proxyConifg: {
        useProxy: boolean;
        url: string;
        httpsDomains: {
            proxyUrl: string;
            domainName: string;
        }[];
    };
    static fonts: {
        url: string;
    };
    static gisService: {
        geometryServiceUrl: string;
        serverurl: string;
        baseMapServices: {
            isToken: boolean;
            tokenType: string;
            layers: {
                url: string;
                layerEName: string;
                isToken: boolean;
                visible: boolean;
                opacity: number;
                mapType: string;
                tag: string;
                layerCName: string;
                type: string;
            }[];
        };
        buildingsLayers: {
            id: string;
            title: string;
            tag: string;
            listMode: string;
            visible: boolean;
            layerGroups: ({
                id: string;
                title: string;
                tag: string;
                visible: boolean;
                listMode: string;
                layerGroups: ({
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        popupEnabled: boolean;
                        title: string;
                        elevationInfo: {
                            mode: string;
                            offset: number;
                        };
                        type: string;
                        listMode: string;
                    }[];
                } | {
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        popupEnabled: boolean;
                        title: string;
                        type: string;
                        listMode: string;
                    }[];
                })[];
                layers: ({
                    url: string;
                    id: string;
                    isToken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    elevationInfo: {
                        mode: string;
                        offset: number;
                    };
                    type: string;
                    popupEnabled: boolean;
                    listMode: string;
                    renderer?: undefined;
                    istoken?: undefined;
                } | {
                    url: string;
                    id: string;
                    isToken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    popupEnabled: boolean;
                    listMode: string;
                    renderer: {
                        type: string;
                        symbol: {
                            type: string;
                            symbolLayers: {
                                type: string;
                                material: {
                                    color: number[];
                                    colorMixMode: string;
                                };
                                edges: {
                                    type: string;
                                    color: number[];
                                    size: number;
                                };
                            }[];
                        };
                    };
                    elevationInfo?: undefined;
                    istoken?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    popupEnabled: boolean;
                    listMode: string;
                    isToken?: undefined;
                    elevationInfo?: undefined;
                    renderer?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    elevationInfo: {
                        mode: string;
                        offset: number;
                    };
                    popupEnabled: boolean;
                    isToken?: undefined;
                    listMode?: undefined;
                    renderer?: undefined;
                })[];
            } | {
                id: string;
                title: string;
                tag: string;
                visible: boolean;
                listMode: string;
                layerGroups: {
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: ({
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        popupEnabled: boolean;
                        title: string;
                        elevationInfo: {
                            mode: string;
                            offset: number;
                        };
                        type: string;
                        listMode: string;
                    } | {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        popupEnabled: boolean;
                        title: string;
                        type: string;
                        listMode: string;
                        elevationInfo?: undefined;
                    })[];
                }[];
                layers: any[];
            })[];
        };
        smapbussinessLayers: {
            serverurl: string;
            istoken: boolean;
            tokenType: string;
            layerGroups: {
                id: string;
                title: string;
                grouptype: string;
                tag: string;
                visible: boolean;
                listMode: string;
                layerGroups: ({
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: ({
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        popupEnabled: boolean;
                        title: string;
                        type: string;
                        listMode: string;
                    } | {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        title: string;
                        type: string;
                        listMode: string;
                        popupEnabled?: undefined;
                    })[];
                } | {
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        title: string;
                        popupTemplate: {
                            title: string;
                            content: {
                                type: string;
                                fieldInfos: {
                                    fieldName: string;
                                    label: string;
                                }[];
                            }[];
                        };
                        elevationInfo: string;
                        type: string;
                        listMode: string;
                        popupEnabled: boolean;
                    }[];
                } | {
                    id: string;
                    title: string;
                    tag: string;
                    visible: boolean;
                    listMode: string;
                    layers: {
                        url: string;
                        id: string;
                        istoken: boolean;
                        visible: boolean;
                        opacity: number;
                        maptype: string;
                        tag: string;
                        title: string;
                        type: string;
                        renderer: {
                            type: string;
                            symbol: {
                                type: string;
                                color: number[];
                                outline: {
                                    color: number[];
                                    width: string;
                                };
                            };
                        };
                        listMode: string;
                    }[];
                })[];
                layers: ({
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                    renderer: {
                        type: string;
                        symbol: {
                            type: string;
                            color: number[];
                            outline: {
                                color: number[];
                                width: string;
                            };
                            symbolLayers?: undefined;
                        };
                    };
                    labelingInfo?: undefined;
                    elevationInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                    renderer?: undefined;
                    labelingInfo?: undefined;
                    elevationInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    labelingInfo: {
                        symbol: {
                            type: string;
                            symbolLayers: {
                                type: string;
                                material: {
                                    color: number[];
                                };
                                halo: {
                                    color: number[];
                                    size: number;
                                };
                                size: number;
                            }[];
                        };
                        labelPlacement: string;
                        labelExpressionInfo: {
                            expression: string;
                        };
                    }[];
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                    renderer?: undefined;
                    elevationInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    labelingInfo: {
                        symbol: {
                            type: string;
                            symbolLayers: {
                                type: string;
                                material: {
                                    color: string;
                                };
                                halo: {
                                    color: number[];
                                    size: number;
                                };
                                size: number;
                            }[];
                        };
                        labelPlacement: string;
                        labelExpressionInfo: {
                            expression: string;
                        };
                    }[];
                    popupEnabled: boolean;
                    renderer?: undefined;
                    elevationInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    elevationInfo: string;
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                    renderer?: undefined;
                    labelingInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    elevationInfo: string;
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                    renderer: {
                        type: string;
                        symbol: {
                            type: string;
                            symbolLayers: {
                                type: string;
                                profile: string;
                                material: {
                                    color: number[];
                                };
                                width: number;
                                height: number;
                                join: string;
                                cap: string;
                                anchor: string;
                                profileRotation: string;
                            }[];
                            color?: undefined;
                            outline?: undefined;
                        };
                    };
                    labelingInfo?: undefined;
                } | {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    renderer: {
                        type: string;
                        symbol: {
                            type: string;
                            color: number[];
                            outline: {
                                color: number[];
                                width: number;
                            };
                            symbolLayers?: undefined;
                        };
                    };
                    labelingInfo: {
                        symbol: {
                            type: string;
                            symbolLayers: {
                                type: string;
                                material: {
                                    color: string;
                                };
                                halo: {
                                    color: number[];
                                    size: number;
                                };
                                size: number;
                            }[];
                        };
                        labelPlacement: string;
                        labelExpressionInfo: {
                            expression: string;
                        };
                    }[];
                    elevationInfo: string;
                    type: string;
                    listMode: string;
                    popupEnabled: boolean;
                } | {
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    url?: undefined;
                    popupEnabled?: undefined;
                    renderer?: undefined;
                    labelingInfo?: undefined;
                    elevationInfo?: undefined;
                })[];
            }[];
        };
    };
    constructor();
}
