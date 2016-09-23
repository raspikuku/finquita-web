// Create thermometer gauge

var Thermometer = $('#thermometer').SonicGauge ({
    diameter: 200,
    label	: '\u00B0C',
    start	: {angle: -225, num: -40},
    end		: {angle: 45, num: 60},
    digital	: {
        "width"				: "26%",
        "font-size"			: 15,
        "color"				: '#333',
        "text-align"		: "center",
        "border-radius"		: 25,
        "padding"			: 5,
        "background-color"	: "#e6f0f8",
        "margin-top"		: 40
    },
    digital_toFixed	: 1,
    markers	: [
        {
            gap: 20,
            line: {"width": 10, "stroke": "none", "fill": "#eeeeee"},
            text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 16}
        },{
            gap: 10,
            line: {"width": 10, "stroke": "none", "fill": "#aaaaaa"},
            text: {"space": 18, "text-anchor": "middle", "fill": "#333333", "font-size": 12}
        },{
            gap: 5,
            line: {"width": 8, "stroke": "none", "fill": "#999999"}
        }
    ],
    sectors : [
        {
            start: -40,
            end: -25,
            radius: 60,
            style: {fill: "rgba(0,0,255,.5)", stroke: "blue", "stroke-width": 0}
        },{
            start: -30,
            end: -20,
            radius: 60,
            style: {fill: "rgba(90,200,220,.5)", stroke: "cyan", "stroke-width": 0}
        },{
            start: 10,
            end: 20,
            radius: 60,
            style: {fill: "rgba(50,220,50,.5)", stroke: "cyan", "stroke-width": 0}
        },{
            start: 30,
            end: 50,
            radius: 60,
            style: {fill: "rgba(250,230,70,.5)", stroke: "yellow", "stroke-width": 0}
        },{
            start: 40,
            end: 60,
            radius: 60,
            style: {fill: "rgba(255,0,0,.5)", stroke: "red", "stroke-width": 0}
        }
    ],
    style	: {
        "outline"	: {"fill": "", "stroke": "#333", "stroke-width": 2},
        "center"	: {"fill": "#000", "diameter": 8, "stroke": "#590303", "stroke-width": 1},
        "needle"	: {"fill": "#ae1e1e"},
        "label"		: {"fill": "#000", "font-size": 12}
    }
});

// Create hygrometer gauge

var Hygrometer = $('#hygrometer').SonicGauge ({
    diameter: 200,
    label	: '%',
    start	: {angle: -225, num: 0},
    end		: {angle: 45, num: 100},
    digital	: {
        "width"				: "26%",
        "font-size"			: 15,
        "color"				: '#333',
        "text-align"		: "center",
        "border-radius"		: 25,
        "padding"			: 5,
        "background-color"	: "#e6f0f8",
        "margin-top"		: 40
    },
    digital_toFixed	: 1,
    markers	: [
        {
            gap: 10,
            line: {"width": 10, "stroke": "none", "fill": "#eeeeee"},
            text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 16}
        }
    ],
    sectors : [
        {
            start: -68,
            end: -58,
            radius: 60,
            style: {fill: "rgba(0,0,255,.5)", stroke: "blue", "stroke-width": 0}
        },{
            start: -73,
            end: -53,
            radius: 60,
            style: {fill: "rgba(90,200,220,.5)", stroke: "cyan", "stroke-width": 0}
        }
    ],

    style	: {
        "outline"	: {"fill": "", "stroke": "#333", "stroke-width": 2},
        "center"	: {"fill": "#000", "diameter": 8, "stroke": "#590303", "stroke-width": 1},
        "needle"	: {"fill": "#ae1e1e"},
        "label"		: {"fill": "#000", "font-size": 12}
    }
});

// Create pressuremeter gauge

var Pressuremeter = $('#pressuremeter').SonicGauge ({
    diameter: 200,
    label	: 'hPa',
    start	: {angle: -225, num: 970},
    end		: {angle: 45, num: 1040},
    max     : 1040,
    digital	: {
        "width"				: "30%",
        "font-size"			: 13,
        "color"				: '#333',
        "text-align"		: "center",
        "padding"			: 5,
        "background-color"	: "#e6f0f8",
        "margin-top"		: 40
    },
    digital_toFixed	: 1,
    markers	: [
        {
            gap: 10,
            line: {"width": 10, "stroke": "none", "fill": "#eeeeee"},
            text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 14}
        }
    ],
    style	: {
        "outline"	: {"fill": "", "stroke": "#333", "stroke-width": 2},
        "center"	: {"fill": "#000", "diameter": 8, "stroke": "#590303", "stroke-width": 1},
        "needle"	: {"fill": "#ae1e1e"},
        "label"		: {"fill": "#000", "font-size": 12}
    }
});

// Create lightmeter gauge

var Lightmeter = $('#lightmeter').SonicGauge ({
    diameter: 200,
    label	: 'lx',
    start	: {angle: -225, num: 0},
    end		: {angle: 45, num: 2000},
    max     : 2000,
    digital	: {
        "width"				: "30%",
        "font-size"			: 13,
        "color"				: '#333',
        "text-align"		: "center",
        "padding"			: 5,
        "background-color"	: "#e6f0f8",
        "margin-top"		: 40
    },
    digital_toFixed	: 1,
    markers	: [
        {
            gap: 250,
            line: {"width": 10, "stroke": "none", "fill": "#eeeeee"},
            text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 14}
        },{
            gap: 100,
            line: {"width": 5, "stroke": "none", "fill": "#000000"},
        }
    ],
    style	: {
        "outline"	: {"fill": "", "stroke": "#333", "stroke-width": 2},
        "center"	: {"fill": "#000", "diameter": 8, "stroke": "#590303", "stroke-width": 1},
        "needle"	: {"fill": "#ae1e1e"},
        "label"		: {"fill": "#000", "font-size": 12}
    }
});
