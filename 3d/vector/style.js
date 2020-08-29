var vstyle = {
 "version": 8,
 "sprite": "../sprites/sprite",
 "glyphs": "../fonts/{fontstack}/{range}.pbf",
 "sources": {
  "esri": {
   "type": "vector",
   "url": "../../"
  }
 },
 "layers": [
  {
   "id": "background",
   "type": "background",
   "paint": {
    "background-color": "#A20055"
   }
  },
  {
   "id": "面/岛屿",
   "type": "fill",
   "source": "esri",
   "source-layer": "岛屿",
   "layout": {
    
   },
   "paint": {
    "fill-color": "#2A2A28",
    "fill-outline-color": "#6E6E6E"
   }
  },
  {
   "id": "面/区县面",
   "type": "fill",
   "source": "esri",
   "source-layer": "区县面",
   "layout": {
    
   },
   "paint": {
    "fill-color": "#363531",
    "fill-outline-color": "#9C9C9C"
   }
  },
  {
   "id": "面/Building1/≤7",
   "type": "fill",
   "source": "esri",
   "source-layer": "Building1",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 8,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#686868",
    "fill-outline-color": "#F0EEEB"
   }
  },
  {
   "id": "面/Building1/≤100",
   "type": "fill",
   "source": "esri",
   "source-layer": "Building1",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 8,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#828282",
    "fill-outline-color": "#6E6E6E"
   }
  },
  {
   "id": "面/湖泊/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "湖泊",
   "layout": {
    
   },
   "paint": {
    "fill-color": "#002F47"
   }
  },
  {
   "id": "面/海部/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "海部",
   "layout": {
    
   },
   "paint": {
    "fill-color": "#09192B"
   }
  },
  {
   "id": "面/内部道路/NBDL",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-width": 2.66667
   }
  },
  {
   "id": "面/内部道路/NBDL_2",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-width": 1.33333
   }
  },
  {
   "id": "面/内部道路/NBDL_1",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-width": 2
   }
  },
  {
   "id": "面/内部道路/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "面/Road_Polygon/<all other values>/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "Road_Polygon",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#282E33"
   }
  },
  {
   "id": "面/河流面/HA0101/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "河流面",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "layout": {
    
   },
   "paint": {
    "fill-color": "#002F47"
   }
  },
  {
   "id": "面/河流面/<all other values>",
   "type": "fill",
   "source": "esri",
   "source-layer": "河流面",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    
   },
   "paint": {
    "fill-color": "#828282",
    "fill-outline-color": "#6E6E6E"
   }
  },
  {
   "id": "面/River/河流/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "River",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#002F47"
   }
  },
  {
   "id": "面/River/<all other values>",
   "type": "fill",
   "source": "esri",
   "source-layer": "River",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    
   },
   "paint": {
    "fill-color": "#828282",
    "fill-outline-color": "#6E6E6E"
   }
  },
  {
   "id": "面/公园绿地面/EA0002/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "公园绿地面",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 0,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#263323"
   }
  },
  {
   "id": "面/公园绿地面/<all other values>/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "公园绿地面",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 0,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#263323"
   }
  },
  {
   "id": "线/省直辖市界线",
   "type": "line",
   "source": "esri",
   "source-layer": "省直辖市界线",
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#242B38",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/区县界线",
   "type": "line",
   "source": "esri",
   "source-layer": "区县界线",
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#343434",
    "line-width": 0.533333
   }
  },
  {
   "id": "线/隧道/LL0401/1",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/LL0401/0",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/LL0401_3/1",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     10,
     10
    ],
    "line-width": 0.533333
   }
  },
  {
   "id": "线/隧道/LL0401_3/0",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     10,
     10
    ],
    "line-width": 0.533333
   }
  },
  {
   "id": "线/隧道/LL0401_2/1",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/LL0401_2/0",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/LL0401_1/1",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/LL0401_1/0",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     4,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/隧道/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "隧道",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0201",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 3.33333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0201_4",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0201_3",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.73333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0201_2",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0201_1",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0202",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2.26667
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0202_1",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.6
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0203",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0203_1",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0204",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 7,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.73333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0204_1",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/LL0205",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 7,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 0.8
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 4.66667
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501_5",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501_4",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501_3",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501_2",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 3.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0501_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 4
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0502",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 4
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0502_4",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0502_3",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0502_2",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0502_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 3.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0503",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 2.4
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0503_2",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0503_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.73333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0504",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282B38",
    "line-width": 2
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0504_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0505",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.73333
   }
  },
  {
   "id": "线/公路_dissolve_mege/LL0505_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#282E33",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/公路_dissolve_mege/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "公路_dissolve_mege",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/国道_Dissolve/LL0510",
   "type": "line",
   "source": "esri",
   "source-layer": "国道_Dissolve",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 4
   }
  },
  {
   "id": "线/国道_Dissolve/LL0510_2",
   "type": "line",
   "source": "esri",
   "source-layer": "国道_Dissolve",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 2
   }
  },
  {
   "id": "线/国道_Dissolve/LL0510_1",
   "type": "line",
   "source": "esri",
   "source-layer": "国道_Dissolve",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/国道_Dissolve/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "国道_Dissolve",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 20
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210_5",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "maxzoom": 1,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210_4",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 2
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210_3",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210_2",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 7,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 4
   }
  },
  {
   "id": "线/公开版城市快速路/LL0210_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 13.3333
   }
  },
  {
   "id": "线/公开版城市快速路/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版城市快速路",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公开版高速公路标注/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路标注",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公开版高速公路/LL0511",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 20
   }
  },
  {
   "id": "线/公开版高速公路/LL0511_5",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 0,
   "maxzoom": 1,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/公开版高速公路/LL0511_4",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 2
   }
  },
  {
   "id": "线/公开版高速公路/LL0511_3",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/公开版高速公路/LL0511_2",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 7,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 4
   }
  },
  {
   "id": "线/公开版高速公路/LL0511_1",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 13.3333
   }
  },
  {
   "id": "线/公开版高速公路/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "公开版高速公路",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/匝道/LL0403",
   "type": "line",
   "source": "esri",
   "source-layer": "匝道",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 1,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#3C444D",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/匝道/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "匝道",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/桥梁/LL0402/1",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     8,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/桥梁/LL0402/0",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     8,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/桥梁/LL0402_2/1",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 6,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     20,
     10
    ],
    "line-width": 0.533333
   }
  },
  {
   "id": "线/桥梁/LL0402_2/0",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     20,
     10
    ],
    "line-width": 0.533333
   }
  },
  {
   "id": "线/桥梁/LL0402_1/1",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 8,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     8,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/桥梁/LL0402_1/0",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#4E4E4E",
    "line-dasharray": [
     8,
     4
    ],
    "line-width": 1.33333
   }
  },
  {
   "id": "线/桥梁/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "桥梁",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/磁浮/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7E597F",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/磁浮/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7E597F",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/磁浮_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7E597F",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/磁浮_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7E597F",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通10号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#C7AFD3",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通10号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#C7AFD3",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通10号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#C7AFD3",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通10号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#C7AFD3",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通11号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#871B2B",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通11号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#871B2B",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通11号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#871B2B",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通11号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    2
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#871B2B",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通12号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#00A884",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通12号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#00A884",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通12号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#00A884",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通12号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    3
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#00A884",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通13号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#F4B8D2",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通13号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#F4B8D2",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通13号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#F4B8D2",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通13号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    4
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#F4B8D2",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通16号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7AF5D2",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通16号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7AF5F0",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通16号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7AF5D2",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通16号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    5
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7AF5D2",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通17号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    6
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#B9B7FE",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通17号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    6
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#B9B7FE",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通17号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    6
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#B9B7FE",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通17号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    6
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#B9B7FE",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通1号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    7
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E70012",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通1号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    7
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E70012",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通1号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    7
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E70012",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通1号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    7
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E70012",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通2号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    8
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#8DC11F",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通2号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    8
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#8DC11F",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通2号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    8
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#8DC11F",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通2号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    8
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#8DC11F",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通3号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    9
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#FED700",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通3号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    9
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#FED700",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通3号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    9
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#FED700",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通3号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    9
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#FED700",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通4号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    10
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#471E84",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通4号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    10
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#471E84",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通4号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    10
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#471E84",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通4号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    10
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#471E84",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通5号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    11
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#944B9A",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通5号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    11
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#944B9A",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通5号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    11
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#944B9A",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通5号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    11
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#944B9A",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通6号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    12
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#D300A3",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通6号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    12
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#D300A3",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通6号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    12
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#D300A3",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通6号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    12
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#D300A3",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通7号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    13
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#ED6D00",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通7号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    13
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#ED6D00",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通7号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    13
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#ED6D00",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通7号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    13
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#ED6D00",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通8号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    14
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E0B5FD",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通8号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    14
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E0B5FD",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通8号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    14
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E0B5FD",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通8号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    14
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#E0B5FD",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通9号线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    15
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7ACDF5",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通9号线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    15
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7ACDF5",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通9号线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    15
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7ACDF5",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通9号线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    15
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#7ACDF5",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通浦江线/1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    16
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#CACDFF",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通浦江线/0",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    16
   ],
   "minzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#CACDFF",
    "line-dasharray": [
     2,
     1
    ],
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/轨道交通浦江线_2",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    16
   ],
   "minzoom": 4,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#CACDFF",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/轨道交通线/轨道交通浦江线_1",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    16
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#CACDFF",
    "line-width": 4
   }
  },
  {
   "id": "线/轨道交通线/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "轨道交通线",
   "filter": [
    "==",
    "_symbol",
    17
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/铁路/LL0301/1",
   "type": "line",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#686868",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/铁路/LL0301/0",
   "type": "symbol",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "icon-image": "线/铁路/LL0301/0",
    "icon-rotate": -90,
    "symbol-spacing": 20,
    "icon-rotation-alignment": "map",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#9C9C9C"
   }
  },
  {
   "id": "线/铁路/LL0301_2/1",
   "type": "line",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 6,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#686868",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/铁路/LL0301_2/0",
   "type": "symbol",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "icon-image": "线/铁路/LL0301_2/0",
    "icon-rotate": -90,
    "symbol-spacing": 20,
    "icon-rotation-alignment": "map",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#9C9C9C"
   }
  },
  {
   "id": "线/铁路/LL0301_1/1",
   "type": "line",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 9,
   "layout": {
    "line-join": "round"
   },
   "paint": {
    "line-color": "#686868",
    "line-width": 1.06667
   }
  },
  {
   "id": "线/铁路/LL0301_1/0",
   "type": "symbol",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "icon-image": "线/铁路/LL0301_1/0",
    "icon-rotate": -90,
    "symbol-spacing": 20,
    "icon-rotation-alignment": "map",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#9C9C9C"
   }
  },
  {
   "id": "线/铁路/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "铁路",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/内部道路bu/NBDL",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路bu",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 4
   }
  },
  {
   "id": "线/内部道路bu/NBDL_2",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路bu",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/内部道路bu/NBDL_1",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路bu",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/内部道路bu/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "内部道路bu",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "minzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#272B30",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/单线河流三级/HL0101",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流三级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#002F47",
    "line-width": 13.3333
   }
  },
  {
   "id": "线/单线河流三级/HL0101_3",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流三级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#002F47",
    "line-width": 2.4
   }
  },
  {
   "id": "线/单线河流三级/HL0101_2",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流三级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#002F47",
    "line-width": 3.73333
   }
  },
  {
   "id": "线/单线河流三级/HL0101_1",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流三级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#002F47",
    "line-width": 4.8
   }
  },
  {
   "id": "线/单线河流三级/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流三级",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/单线河流二级/HL0101",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#0D2647",
    "line-width": 13.3333
   }
  },
  {
   "id": "线/单线河流二级/HL0101_4",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#0D2647",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/单线河流二级/HL0101_3",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#0D2647",
    "line-width": 2.66667
   }
  },
  {
   "id": "线/单线河流二级/HL0101_2",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#0D2647",
    "line-width": 4
   }
  },
  {
   "id": "线/单线河流二级/HL0101_1",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 8,
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#0D2647",
    "line-width": 5.33333
   }
  },
  {
   "id": "线/单线河流二级/<all other values>",
   "type": "line",
   "source": "esri",
   "source-layer": "单线河流二级",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#828282",
    "line-width": 1.33333
   }
  },
  {
   "id": "线/堤",
   "type": "line",
   "source": "esri",
   "source-layer": "堤",
   "layout": {
    "line-cap": "round",
    "line-join": "round"
   },
   "paint": {
    "line-color": "#00142E",
    "line-width": 1.33333
   }
  },
  {
   "id": "boundary/<all other values>/1",
   "type": "fill",
   "source": "esri",
   "source-layer": "boundary",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "layout": {
    
   },
   "paint": {
    "fill-color": "#00FFC5",
    "fill-opacity": {
     "property": "opacity",
     "default": 1,
     "stops": [
      [
       3,
       1
      ],
      [
       90,
       0
      ]
     ]
    }
   }
  },
  {
   "id": "点/轨道交通站/450105",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 10,
   "layout": {
    "icon-image": "点/轨道交通站/450105",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_6",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "icon-image": "点/轨道交通站/450105_6",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_5",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "icon-image": "点/轨道交通站/450105_5",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_4",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "icon-image": "点/轨道交通站/450105_4",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_3",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "icon-image": "点/轨道交通站/450105_3",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_2",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "icon-image": "点/轨道交通站/450105_2",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/450105_1",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "icon-image": "点/轨道交通站/450105_1",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/轨道交通站/<all other values>",
   "type": "circle",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.2,
    "circle-color": "#828282",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0.933333
   }
  },
  {
   "id": "点/火车站/450102",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "layout": {
    "icon-image": "点/火车站/450102",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_6",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "icon-image": "点/火车站/450102_6",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_5",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "icon-image": "点/火车站/450102_5",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_4",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "icon-image": "点/火车站/450102_4",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_3",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "icon-image": "点/火车站/450102_3",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_2",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "icon-image": "点/火车站/450102_2",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/450102_1",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "icon-image": "点/火车站/450102_1",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/火车站/<all other values>",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    "icon-image": "点/火车站/<all other values>",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/一般集镇",
   "type": "circle",
   "source": "esri",
   "source-layer": "一般集镇",
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.66667,
    "circle-color": "rgba(115,135,36,0)",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0
   }
  },
  {
   "id": "点/主要集镇",
   "type": "circle",
   "source": "esri",
   "source-layer": "主要集镇",
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.66667,
    "circle-color": "rgba(135,43,57,0)",
    "circle-stroke-color": "rgba(0,0,0,0)",
    "circle-stroke-width": 0
   }
  },
  {
   "id": "点/街道办事处",
   "type": "circle",
   "source": "esri",
   "source-layer": "街道办事处",
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.66667,
    "circle-color": "rgba(42,135,156,0)",
    "circle-stroke-color": "rgba(0,0,0,0)",
    "circle-stroke-width": 0
   }
  },
  {
   "id": "点/镇政府",
   "type": "circle",
   "source": "esri",
   "source-layer": "镇政府",
   "layout": {
    
   },
   "paint": {
    "circle-radius": 0.666667,
    "circle-color": "rgba(67,79,168,0)",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0
   }
  },
  {
   "id": "点/市区政府",
   "type": "circle",
   "source": "esri",
   "source-layer": "市区政府",
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.66667,
    "circle-color": "rgba(173,62,133,0)",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0
   }
  },
  {
   "id": "点/机场/450101",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 10,
   "layout": {
    "icon-image": "点/机场/450101",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_7",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "icon-image": "点/机场/450101_7",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_6",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "icon-image": "点/机场/450101_6",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_5",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "icon-image": "点/机场/450101_5",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_4",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "icon-image": "点/机场/450101_4",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_3",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "icon-image": "点/机场/450101_3",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_2",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "icon-image": "点/机场/450101_2",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/450101_1",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    0
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "icon-image": "点/机场/450101_1",
    "icon-allow-overlap": true
   },
   "paint": {
    "icon-color": "#FFFFFF"
   }
  },
  {
   "id": "点/机场/<all other values>",
   "type": "circle",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.2,
    "circle-color": "#828282",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0.933333
   }
  },
  {
   "id": "点/中型居住区/<all other values>",
   "type": "circle",
   "source": "esri",
   "source-layer": "中型居住区",
   "filter": [
    "==",
    "_symbol",
    1
   ],
   "layout": {
    
   },
   "paint": {
    "circle-radius": 2.2,
    "circle-color": "#828282",
    "circle-stroke-color": "#000000",
    "circle-stroke-width": 0.933333
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0205-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    25
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0205-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    24
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0205-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    23
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0204-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    22
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0204-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    21
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0204-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    20
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0204-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    19
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0203-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    18
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0203-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    17
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0203-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    16
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0203-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    15
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0203-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    14
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    13
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    12
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    11
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    10
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    9
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0202-32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    8
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.1
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/街道_Dissolve_Merge/label/LL0201-128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道_Dissolve_Merge/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL505-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    29
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL505-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    28
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL505-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    27
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL505-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    26
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL504-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    25
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL504-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    24
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL504-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    23
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL504-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    22
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL504-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    21
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-1000-5000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    20
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    19
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    18
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    17
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    16
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL503-32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    15
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    14
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#000000"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    13
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    12
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    11
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    10
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    9
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL502-64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    8
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/公路_dissolve_mege/label/LL501-128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公路_dissolve_mege/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#686868"
   }
  },
  {
   "id": "线/国道_Dissolve/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0416667
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0454545
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.05
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0555556
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/国道_Dissolve/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "国道_Dissolve/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.1
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0416667
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0454545
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.05
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0555556
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版城市快速路/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版城市快速路/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.1
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    9
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 37.3333,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/1000-500/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    8
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 34.6667,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/2000-1000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/4000-2000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/8000-4000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/16000-8000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/32000-16000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/64000-32000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/128000-64000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/256000-128000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/256000-128000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路标注/label/512000-256000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路标注/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-field": "{_name}",
    "icon-image": "线/公开版高速公路标注/512000-256000/{_len}"
   },
   "paint": {
    "text-color": "#C8C8C8"
   }
  },
  {
   "id": "线/公开版高速公路/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    9
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 37.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0357143
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    8
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 34.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0384615
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    7
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0416667
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    6
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0454545
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.05
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0555556
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/256000-128000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/公开版高速公路/label/512000-256000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "公开版高速公路/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.1
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "线/河流结构线/label/1000-0",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "Microsoft YaHei Regular"
    ],
    "text-size": 48,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0277778
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#5C9BD9"
   }
  },
  {
   "id": "线/河流结构线/label/4000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 8,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 37.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0357143
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#5C9BD9"
   }
  },
  {
   "id": "线/河流结构线/label/32000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 5,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0416667
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#5C9BD9"
   }
  },
  {
   "id": "线/河流结构线/label/128000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 3,
   "maxzoom": 5,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#5C9BD9"
   }
  },
  {
   "id": "线/河流结构线/label/512000-128000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 1,
   "maxzoom": 3,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "Microsoft YaHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#5C9BD9"
   }
  },
  {
   "id": "线/河流结构线/label/-512000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "河流结构线/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "maxzoom": 1,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "Microsoft YaHei Bold"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#678EC2"
   }
  },
  {
   "id": "线/单线河流三级/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.05
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流三级/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0555556
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流三级/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流三级/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流三级/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流三级/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流三级/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.1
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    5
   ],
   "minzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0454545
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.05
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0555556
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0625
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0714286
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "线/单线河流二级/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "单线河流二级/label",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "symbol-placement": "line",
    "symbol-spacing": 1000,
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#4C698F"
   }
  },
  {
   "id": "点/轨道交通站/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0392837,
      0.260716
     ],
     "stops": [
      [
       0,
       [
        0.428173,
        -0.128173
       ]
      ],
      [
       1,
       [
        0.169839,
        0.130161
       ]
      ]
     ]
    },
    "text-field": "{_name5}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/轨道交通站/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0441942,
      0.255806
     ],
     "stops": [
      [
       0,
       [
        0.481694,
        -0.181694
       ]
      ],
      [
       1,
       [
        0.191069,
        0.108931
       ]
      ]
     ]
    },
    "text-field": "{_name4}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/轨道交通站/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0505076,
      0.249492
     ],
     "stops": [
      [
       0,
       [
        0.550508,
        -0.250508
       ]
      ],
      [
       1,
       [
        0.218365,
        0.0816352
       ]
      ]
     ]
    },
    "text-field": "{_name3}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/轨道交通站/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0589256,
      0.241074
     ],
     "stops": [
      [
       0,
       [
        0.642259,
        -0.342259
       ]
      ],
      [
       1,
       [
        0.254759,
        0.0452411
       ]
      ]
     ]
    },
    "text-field": "{_name2}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/轨道交通站/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0707107,
      0.229289
     ],
     "stops": [
      [
       0,
       [
        0.770711,
        -0.470711
       ]
      ],
      [
       1,
       [
        0.305711,
        -0.00571068
       ]
      ]
     ]
    },
    "text-field": "{_name1}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/轨道交通站/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "轨道交通站",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 10.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0883883,
      0.211612
     ],
     "stops": [
      [
       0,
       [
        0.963388,
        -0.663388
       ]
      ],
      [
       1,
       [
        0.382138,
        -0.0821383
       ]
      ]
     ]
    },
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class7",
    7
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0321412,
      0.267859
     ],
     "stops": [
      [
       0,
       [
        0.441232,
        -0.141232
       ]
      ],
      [
       1,
       [
        0.12305,
        0.17695
       ]
      ]
     ]
    },
    "text-field": "{_name7}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class6",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0353553,
      0.264645
     ],
     "stops": [
      [
       0,
       [
        0.485355,
        -0.185355
       ]
      ],
      [
       1,
       [
        0.135355,
        0.164645
       ]
      ]
     ]
    },
    "text-field": "{_name6}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0353553,
      0.264645
     ],
     "stops": [
      [
       0,
       [
        0.485355,
        -0.185355
       ]
      ],
      [
       1,
       [
        0.135355,
        0.164645
       ]
      ]
     ]
    },
    "text-field": "{_name5}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0392837,
      0.260716
     ],
     "stops": [
      [
       0,
       [
        0.539284,
        -0.239284
       ]
      ],
      [
       1,
       [
        0.150395,
        0.149605
       ]
      ]
     ]
    },
    "text-field": "{_name4}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0441942,
      0.255806
     ],
     "stops": [
      [
       0,
       [
        0.606694,
        -0.306694
       ]
      ],
      [
       1,
       [
        0.169194,
        0.130806
       ]
      ]
     ]
    },
    "text-field": "{_name3}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0505076,
      0.249492
     ],
     "stops": [
      [
       0,
       [
        0.693365,
        -0.393365
       ]
      ],
      [
       1,
       [
        0.193365,
        0.106635
       ]
      ]
     ]
    },
    "text-field": "{_name2}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0589256,
      0.241074
     ],
     "stops": [
      [
       0,
       [
        0.808926,
        -0.508926
       ]
      ],
      [
       1,
       [
        0.225592,
        0.0744078
       ]
      ]
     ]
    },
    "text-field": "{_name1}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/火车站/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "火车站",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0.0707107,
      0.229289
     ],
     "stops": [
      [
       0,
       [
        0.970711,
        -0.670711
       ]
      ],
      [
       1,
       [
        0.270711,
        0.0292893
       ]
      ]
     ]
    },
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/一般集镇/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0353553,
     0.264645
    ],
    "text-field": "{_name5}",
    "icon-image": "点/一般集镇/1000-500/{_len5}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/一般集镇/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0392837,
     0.260716
    ],
    "text-field": "{_name4}",
    "icon-image": "点/一般集镇/2000-1000/{_len4}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/一般集镇/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name3}",
    "icon-image": "点/一般集镇/4000-2000/{_len3}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/一般集镇/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0505076,
     0.249492
    ],
    "text-field": "{_name2}",
    "icon-image": "点/一般集镇/8000-4000/{_len2}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/一般集镇/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name1}",
    "icon-image": "点/一般集镇/16000-8000/{_len1}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/一般集镇/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "一般集镇",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0707107,
     0.229289
    ],
    "text-field": "{_name}",
    "icon-image": "点/一般集镇/32000-16000/{_len}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/主要集镇/label/1000-5000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0321412,
     0.267859
    ],
    "text-field": "{_name5}",
    "icon-image": "点/主要集镇/1000-5000/{_len5}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/主要集镇/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0353553,
     0.264645
    ],
    "text-field": "{_name4}",
    "icon-image": "点/主要集镇/2000-1000/{_len4}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/主要集镇/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0392837,
     0.260716
    ],
    "text-field": "{_name3}",
    "icon-image": "点/主要集镇/4000-2000/{_len3}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/主要集镇/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name2}",
    "icon-image": "点/主要集镇/8000-4000/{_len2}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/主要集镇/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0505076,
     0.249492
    ],
    "text-field": "{_name1}",
    "icon-image": "点/主要集镇/16000-8000/{_len1}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/主要集镇/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "主要集镇",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name}",
    "icon-image": "点/主要集镇/32000-16000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/街道办事处/label/1000-5000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0353553,
     0.264645
    ],
    "text-field": "{_name5}",
    "icon-image": "点/街道办事处/1000-5000/{_len5}"
   },
   "paint": {
    "text-color": "#4E4E4E"
   }
  },
  {
   "id": "点/街道办事处/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0392837,
     0.260716
    ],
    "text-field": "{_name4}",
    "icon-image": "点/街道办事处/2000-1000/{_len4}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/街道办事处/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name3}",
    "icon-image": "点/街道办事处/4000-2000/{_len3}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/街道办事处/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0505076,
     0.249492
    ],
    "text-field": "{_name2}",
    "icon-image": "点/街道办事处/8000-4000/{_len2}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/街道办事处/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name1}",
    "icon-image": "点/街道办事处/16000-8000/{_len1}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/街道办事处/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "街道办事处",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0707107,
     0.229289
    ],
    "text-field": "{_name}",
    "icon-image": "点/街道办事处/32000-16000/{_len}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/镇政府/label/1000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class7",
    7
   ],
   "minzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0321412,
     0.267859
    ],
    "text-field": "{_name7}",
    "icon-image": "点/镇政府/1000-500/{_len7}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/镇政府/label/2000-1000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class6",
    6
   ],
   "minzoom": 9,
   "maxzoom": 10,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0321412,
     0.267859
    ],
    "text-field": "{_name6}",
    "icon-image": "点/镇政府/2000-1000/{_len6}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/镇政府/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0353553,
     0.264645
    ],
    "text-field": "{_name5}",
    "icon-image": "点/镇政府/4000-2000/{_len5}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/镇政府/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0392837,
     0.260716
    ],
    "text-field": "{_name4}",
    "icon-image": "点/镇政府/8000-4000/{_len4}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/镇政府/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name3}",
    "icon-image": "点/镇政府/16000-8000/{_len3}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/镇政府/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name2}",
    "icon-image": "点/镇政府/32000-16000/{_len2}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/镇政府/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name1}",
    "icon-image": "点/镇政府/64000-32000/{_len1}"
   },
   "paint": {
    "text-color": "#9E9E9E"
   }
  },
  {
   "id": "点/镇政府/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "镇政府",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0707107,
     0.229289
    ],
    "text-field": "{_name}",
    "icon-image": "点/镇政府/128000-64000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/2000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class8",
    8
   ],
   "minzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0294628,
     0.270537
    ],
    "text-field": "{_name8}",
    "icon-image": "点/市区政府/2000-500/{_len8}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class7",
    7
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 32,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0294628,
     0.270537
    ],
    "text-field": "{_name7}",
    "icon-image": "点/市区政府/4000-2000/{_len7}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class6",
    6
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0321412,
     0.267859
    ],
    "text-field": "{_name6}",
    "icon-image": "点/市区政府/8000-4000/{_len6}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0353553,
     0.264645
    ],
    "text-field": "{_name5}",
    "icon-image": "点/市区政府/16000-8000/{_len5}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0392837,
     0.260716
    ],
    "text-field": "{_name4}",
    "icon-image": "点/市区政府/32000-16000/{_len4}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0441942,
     0.255806
    ],
    "text-field": "{_name3}",
    "icon-image": "点/市区政府/64000-32000/{_len3}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0505076,
     0.249492
    ],
    "text-field": "{_name2}",
    "icon-image": "点/市区政府/128000-64000/{_len2}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/256000-128000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 2,
   "maxzoom": 3,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name1}",
    "icon-image": "点/市区政府/256000-128000/{_len1}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/市区政府/label/512000-256000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "市区政府",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 1,
   "maxzoom": 2,
   "layout": {
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0707107,
     0.229289
    ],
    "text-field": "{_name}",
    "icon-image": "点/市区政府/512000-256000/{_len}"
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/2000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class6",
    6
   ],
   "minzoom": 9,
   "layout": {
    "text-font": [
     "SimSun Regular"
    ],
    "text-size": 29.3333,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.0454545
     ],
     "stops": [
      [
       0,
       [
        0,
        0.545455
       ]
      ],
      [
       1,
       [
        0,
        0.152273
       ]
      ]
     ]
    },
    "text-field": "{_name6}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class5",
    5
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 26.6667,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.05
     ],
     "stops": [
      [
       0,
       [
        0,
        0.6
       ]
      ],
      [
       1,
       [
        0,
        0.1675
       ]
      ]
     ]
    },
    "text-field": "{_name5}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class4",
    4
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 24,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.0555556
     ],
     "stops": [
      [
       0,
       [
        0,
        0.666667
       ]
      ],
      [
       1,
       [
        0,
        0.186111
       ]
      ]
     ]
    },
    "text-field": "{_name4}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/16000-8000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class3",
    3
   ],
   "minzoom": 6,
   "maxzoom": 7,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.0625
     ],
     "stops": [
      [
       0,
       [
        0,
        0.75
       ]
      ],
      [
       1,
       [
        0,
        0.209375
       ]
      ]
     ]
    },
    "text-field": "{_name3}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/32000-16000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 5,
   "maxzoom": 6,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.0714286
     ],
     "stops": [
      [
       0,
       [
        0,
        0.857143
       ]
      ],
      [
       1,
       [
        0,
        0.239286
       ]
      ]
     ]
    },
    "text-field": "{_name2}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/64000-32000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 4,
   "maxzoom": 5,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.0833333
     ],
     "stops": [
      [
       0,
       [
        0,
        1
       ]
      ],
      [
       1,
       [
        0,
        0.279167
       ]
      ]
     ]
    },
    "text-field": "{_name1}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/机场/label/128000-64000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "机场",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 3,
   "maxzoom": 4,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 13.3333,
    "text-anchor": "top",
    "text-offset": {
     "property": "_symbol",
     "type": "categorical",
     "default": [
      0,
      0.1
     ],
     "stops": [
      [
       0,
       [
        0,
        1.2
       ]
      ],
      [
       1,
       [
        0,
        0.335
       ]
      ]
     ]
    },
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#9C9C9C"
   }
  },
  {
   "id": "点/中型居住区/label/2000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "中型居住区",
   "filter": [
    "==",
    "_label_class2",
    2
   ],
   "minzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 21.3333,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.191069,
     0.108931
    ],
    "text-field": "{_name2}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#828282"
   }
  },
  {
   "id": "点/中型居住区/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "中型居住区",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.218365,
     0.0816352
    ],
    "text-field": "{_name1}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#828282"
   }
  },
  {
   "id": "点/中型居住区/label/8000-4000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "中型居住区",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 7,
   "maxzoom": 8,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.254759,
     0.0452411
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#828282"
   }
  },
  {
   "id": "点/小型居住区/label/2000-500",
   "type": "symbol",
   "source": "esri",
   "source-layer": "小型居住区",
   "filter": [
    "==",
    "_label_class1",
    1
   ],
   "minzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 18.6667,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0505076,
     0.249492
    ],
    "text-field": "{_name1}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#828282"
   }
  },
  {
   "id": "点/小型居住区/label/4000-2000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "小型居住区",
   "filter": [
    "==",
    "_label_class",
    0
   ],
   "minzoom": 8,
   "maxzoom": 9,
   "layout": {
    "text-font": [
     "SimHei Regular"
    ],
    "text-size": 16,
    "text-anchor": "bottom-left",
    "text-justify": "left",
    "text-offset": [
     0.0589256,
     0.241074
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#828282"
   }
  },
  {
   "id": "点/上海市/label/1024000-512000",
   "type": "symbol",
   "source": "esri",
   "source-layer": "上海市",
   "minzoom": 0,
   "maxzoom": 1,
   "layout": {
    "text-font": [
     "Microsoft YaHei Bold"
    ],
    "text-size": 16,
    "text-anchor": "bottom",
    "text-offset": [
     0,
     -0.0833333
    ],
    "text-field": "{_name}",
    "text-optional": true
   },
   "paint": {
    "text-color": "#688EC2"
   }
  }
 ]
}