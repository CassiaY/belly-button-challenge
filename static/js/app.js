// use D3 library to read in samples.json from the below url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(url).then(function(data) {
    console.log(data);
});

// create horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// let title = 'Belly Button Biodiversity: OTU Species Colonies'
// let sample_values = []//bar chart values
// let otu_ids = [] //bar chart labels 
// let otu_labels = [] //hovertext for the chart

// let trace1 = {
//   x: ,
//   y: ,
//   type: 'bar',
//   orientation: 'h'
// };

// let data = [trace1];

// let layout = {
//   title: title
// };

// Plotly.newPlot("plot", data, layout);