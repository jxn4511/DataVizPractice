d3.csv('1131845784304619520.csv').then(
    // #function definition
    res => {
        console.log('Local CSV:', res);
        drawBarChart(res);
    }

);

function drawBarChart(res) {
    console.log(res);
    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type = "histogram";
    trace1.opacity = 0.5;
    trace1.x = [];

    for (let i = 0; i < res.length; i++) {
        trace1.x.push(res[i]["小客車"]);
    }
    console.log(trace1.x);

    let trace2 = {};
    trace2.type = "histogram";
    trace2.opacity = 0.8;
    trace2.x = [];

    for (let i = 0; i < res.length; i++) {
        trace2.x.push(res[i]["公路總計"]);
    }
    console.log(trace2.x);

    let data = [];
    data.push(trace1);
    data.push(trace2);



    let layout = {
        margin: {
            t: 50

        },
        barmode: "overlay"
        // barmode: "stack"
        //大n case中分group顯示
    };




    Plotly.newPlot(myGraph, data, layout);

};