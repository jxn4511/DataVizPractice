let myGraph = document.getElementById('myGraph');
let trace1 = {};
trace1.type = "pie";
trace1.title = "公路碳排放量比例";
trace1.labels = [];
trace1.values = [];
trace1.domain = {
    row:0,
    column:0
};

for (let x = 0; x <emission_ratio_1.length; x++) {
    trace1.labels[x] = emission_ratio_1[x]['name'];
    trace1.values[x] = emission_ratio_1[x]['count'];
}


let trace2 = {};
trace2.type = "pie";
trace2.title = "陸水空運輸碳排比例";
trace2.labels = [];
trace2.values = [];
trace2.domain = {
    row:0,
    column:1
};

for (let x = 0; x <emission_ratio_2.length; x++) {
    trace2.labels[x] = emission_ratio_2[x]['name'];
    trace2.values[x] = emission_ratio_2[x]['count'];
}




// let trace3 = {};
// trace3.type = "pie";
// trace3.title = "人工智慧與永續發展";
// trace3.labels = [];
// trace3.values = [];
// trace3.domain = {
//     row:1,
//     column:0
// };

// for (let x = 0; x <evaluation_ratio_3.length; x++) {
//     trace3.labels[x] = evaluation_ratio_3[x]['name'];
//     trace3.values[x] = evaluation_ratio_3[x]['count'];
// }



// let trace4 = {};
// trace4.type = "pie";
// trace4.title = "Python程式設計";
// trace4.labels = [];
// trace4.values = [];
// trace4.domain = {
//     row:1,
//     column:1
// };

// for (let x = 0; x <evaluation_ratio_4.length; x++) {
//     trace4.labels[x] = evaluation_ratio_4[x]['name'];
//     trace4.values[x] = evaluation_ratio_4[x]['count'];
// }




trace1.hole = 0.5;
trace2.hole = 0.5;
// trace3.hole = 0.5;
// trace4.hole = 0.5;





let data = [];
data.push(trace1);
data.push(trace2);
// data.push(trace3);
// data.push(trace4);

let layout = {
    margin: {
        t: 60,
        l:0,

    },
    grid:{
        rows:2,
        columns:2,
    },
    title:'2021年各交通工具＆運輸類探排放量比例圖',

};
Plotly.newPlot(myGraph, data, layout);






// trace1.x[0] = "TP_Zoo";
// trace1.y[0] =
//     animals_TP_Zoo[0]['count'];
// trace1.x[1] = "TY_Zoo";
// trace1.y[1] =
//     animals_TY_Zoo[0]['count'];
// trace1.text = trace1.y;
// trace1.textfont = {
//     color: 'yellow',
//     size: 20
// }
// trace1.marker = {
//     color: 'blue',
// }


// let trace2 = {};
// trace2.type = "bar";
// trace2.name = "tiger";
// trace2.x = [];
// trace2.y = [];
// trace2.x[0] = "TP_Zoo";
// trace2.y[0] =
//     animals_TP_Zoo[1]['count'];
// trace2.x[1] = "TY_Zoo";
// trace2.y[1] =
//     animals_TY_Zoo[1]['count'];
// trace2.text = trace2.y;
// trace2.textfont = {
//     color: 'yellow',
//     size: 20
// }
// trace2.marker = {
//     color: 'purple',
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




// data.push(trace2);
// data.push(trace3);





