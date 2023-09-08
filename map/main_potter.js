d3.csv('harry_potter.csv').then(
    // #function definition
    res => {
        console.log('Local CSV:', res);
        drawBarChart(res);
    }

);

function drawBarChart(res) {

    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type = "bar";
    trace1.name = "收益";
    trace1.x = [];
    trace1.y = [];

    for (let i = 0; i < res.length; i++) {
        trace1.x.push(res[i].title.slice(20));
        trace1.y.push(res[i].revenue);
    }

    let data = [];
    data.push(trace1);

    let layout = {
        margin: {
            t: 50
        },
        barmode: 'stack',
        title: ''
    };

    Plotly.newPlot(myGraph, data, layout);

};