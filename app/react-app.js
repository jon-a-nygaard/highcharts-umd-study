var React = require('react'),
	Adapter = require('highcharts-release/adapters/standalone-framework.src'),
	Highcharts = require('highcharts-release/highcharts.src');
	console.log(Highcharts);

var App = React.createClass({
	componentDidMount: function () {
		window.HighchartsAdapter = Adapter;
		var chart = new Highcharts.Chart({
			chart: {
				renderTo: 'chart-container',
				height: 400
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			series: [{
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
			}]
		});
	},
	render: function () {
		return React.createElement('div', { id: 'chart-container'});
	}
});

module.exports = App;
