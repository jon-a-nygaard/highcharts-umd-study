var React = require('react'),
    Chart = require('./Highcharts.react'),
    data = require('../data/aapl-c.json'),
    options = {
        rangeSelector : {
            selected : 1
        },
        title : {
            text : 'AAPL Stock Price'
        },
        series : [{
            name : 'AAPL',
            data : data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    };

module.exports = React.createClass({
    render: function () {
        return <Chart container={this.props.container} options={options} type="StockChart" />;
    }
});