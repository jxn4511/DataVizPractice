let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "line+ markers";
trace1.type = "scatter";
trace1.name = "OECD";
trace1.marker = {
    size: 12
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom centet";
trace1.textfont = {
    family: "Raleway, sans-serif",
    size: 10
};

trace1.visible = true;

for (let i = 0; i < set1.length; i++) {
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}




let trace2 = {};
trace2.mode = "line+ markers";
trace2.type = "scatter";
trace2.name = "US";
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.visible = false;
trace2.marker = {
    size:8
};
trace2.line = {
    color: 'red'
};

for (let i = 0; i < set2.length; i++) {
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}



let trace3 = {};
trace3.mode = "lines + markers";
trace3.type = "scatter";
trace3.name = "TurKiye";
trace3.maker = {
    size: 11
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.visible = false;
trace3.line = {
    color: 'green',
    shape: 'spline'
};


for (let i = 0; i < set3.length; i++) {
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}



let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);





let layout = {
    margin: {
        t: 50

    },
    xaxis: {
        // range: [2017, 2022]
    },
    yaxis: {
        // range: [0, 20]
    },
    title: '2018-21國家失業率比較',
    updatemenus: [
        {
            y: 1.25,
            x: .125,
            yanchor: 'top',
            buttons: [
                {
                    method: 'restyle',
                    args: ['visible', [true, false, false]],
                    label: 'OCDE'
                },

                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: 'US'
                },

                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: 'TurKiye'
                },

                {
                    method: 'restyle',
                    args: ['visible', [true, true, true]],
                    label: 'Display All'
                }
            ]
        }
    ]
};





Plotly.newPlot(myGraph, data, layout);
