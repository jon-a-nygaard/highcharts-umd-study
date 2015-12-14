var React = require('react'),
    Chart = require('./Highcharts.react'),
    options = {
        chart: {
            type: 'bar',
            renderTo: 'react-application'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit 1'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    };

module.exports = React.createClass({
    render: function () {
        return <Chart container={this.props.container} options={options} />
    }
})