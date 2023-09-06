let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "火力";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "year2021";
trace1.y[0] =
    power_2021[0]['count'];
trace1.x[1] = "year2022";
trace1.y[1] =
    power_2022[0]['count'];
trace1.text = trace1.y;
trace1.textfont = {
    color: 'yellow',
    size: 20
}
trace1.marker = {
    color: 'red',
}


let trace2 = {};
trace2.type = "bar";
trace2.name = "核能";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "year2021";
trace2.y[0] =
    power_2021[1]['count'];
trace2.x[1] = "year2022";
trace2.y[1] =
    power_2022[1]['count'];
trace2.text = trace2.y;
trace2.textfont = {
    color: 'yellow',
    size: 20
}
trace2.marker = {
    color: 'orange',
}


let trace3 = {};
trace3.type = "bar";
trace3.name = "再生能源";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "year2021";
trace3.y[0] =
    power_2021[2]['count'];
trace3.x[1] = "year2022";
trace3.y[1] =
    power_2022[2]['count'];
trace3.text = trace3.y;
trace3.textfont = {
    color: 'yellow',
    size: 20
}
trace3.marker = {
    color: 'green',
}







// for (let i = 0; i <animals_TP_Zoo.length; i++) {
//     trace1.x[i] = animals_TP_Zoo[i]['name'];
//     trace1.y[i] = animals_TP_Zoo[i]['count'];
// }


// let trace2 = {};
// trace2.type = "bar";
// trace2.name = "TY_Zoo";
// trace2.x = [];
// trace2.y = [];



// for (let i = 0; i <animals_TY_Zoo.length; i++) {
//     trace2.x[i] = animals_TY_Zoo[i]['name'];
//     trace2.y[i] = animals_TY_Zoo[i]['count'];
// }



let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);





let layout = {
    margin: {
        t: 60

    },
    barmode: 'stack',
    title:'2021,2022年自行發電成本（分類，元/度電）'
};





Plotly.newPlot(myGraph, data, layout);
