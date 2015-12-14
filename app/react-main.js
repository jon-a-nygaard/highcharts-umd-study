var React = require('react'),
    ReactDOM = require('react-dom'),
    Chart = require('./components/Highcharts.react'),
    // StockChart = require('./components/StockChart.react'),
    // Treemap = require('./components/Treemap.react'),
    element,
    options = {
        chart: {
            height: 400
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };

// Step 1 
// element = <div className="container"><Chart container="chart" options={options} /></div> 
// ReactDOM.render(element, document.getElementById('react-application'));

var div = React.createFactory('div');
var childs = [
    div({ className: 'row' }, React.createElement(Chart, { container: 'chart1', options: options })),
    div({ className: 'row' }, React.createElement(Chart, { container: 'chart2', options: options })),
    div({ className: 'row' }, React.createElement(Chart, { container: 'chart3', options: options })),
]
// Step 2 Reusable charts and modules
var element = div({ className: 'container' }, childs);
ReactDOM.render(element, document.getElementById('react-app'));
