var React = require('react'),
    Highcharts = require('../../../highcharts/js/highcharts.src');

module.exports = React.createClass({
    /**
     * When the DOM is ready, create the chart.
     */
    componentDidMount: function () {
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.container, 
            this.props.options
        );
    },

    /**
     * Destroy chart before unmount.
     */
    componentWillUnmount: function () {
        this.chart.destroy();
    },

    /**
     * Highcharts create its own container, thus our render method returns null. 
     */
    render: function () {
        this.container = this.container || this.props.container || 'chart-' + Math.random().toString(36).substr(2, 5);
        return React.createElement('div', { id: this.container });
    }
});
