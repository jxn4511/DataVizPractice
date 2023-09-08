let myGraph = document.getElementById('myGraph');
d3.csv(dataURL).then(getCSV_Data);



// d3.csv('harry_potter.csv').then(
//     // #function definition
//     res => {
//         console.log('Local CSV:', res);
//         drawBarChart(res);
//     }

// );

function unpack(rows, key) {
    //Element-wised
    return rows.map(function (row) {
        return row[key];
    });
}


function getCSV_Data(rows) {
    console.log(rows);
    let trace1 = {};
    trace1.type = "choropleth";
    trace1.locationmode = "country names";
    trace1.locations = unpack(rows, 'location');
    trace1.z = unpack(rows, 'alcohol');
    // trace1.text = unpack(rows, 'location');
    trace1.autocolorscale = true;

    trace1.locations.push('Taiwan');
    trace1.z.push(15);




    let data = [];
    data.push(trace1);
    let layout = {
        title:'Pure alcohol consumption<br>among adults (age 15+) in 2010',
        margin: {
            t: 50,
            l:0,
        },
        geo:{
            protection:{
                type:'robinson'
            }
        }
    };

    Plotly.newPlot(myGraph, data, layout);


}






