var Adapter = window.HighchartsAdapter = require('highcharts-release/adapters/standalone-framework.src'),
    Highcharts = require('highcharts-release/highcharts.src');
require('highcharts-release/modules/treemap.src');
new Highcharts.Chart({
    chart: {
        renderTo: 'chart-container'
    },
    title: {
        text: 'Monthly Average Temperature',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});

new Highcharts.Chart({
    chart: {
        renderTo: 'treemap-container'
    },
    series: [{

        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Apples',
            color: "#EC2500"
        }, {
            id: 'B',
            name: 'Bananas',
            color: "#ECE100"
        }, {
            id: 'O',
            name: 'Oranges',
            color: '#EC9800'
        }, {
            name: 'Anne',
            parent: 'A',
            value: 5
        }, {
            name: 'Rick',
            parent: 'A',
            value: 3
        }, {
            name: 'Peter',
            parent: 'A',
            value: 4
        }, {
            name: 'Anne',
            parent: 'B',
            value: 4
        }, {
            name: 'Rick',
            parent: 'B',
            value: 10
        }, {
            name: 'Peter',
            parent: 'B',
            value: 1
        }, {
            name: 'Anne',
            parent: 'O',
            value: 1
        }, {
            name: 'Rick',
            parent: 'O',
            value: 3
        }, {
            name: 'Peter',
            parent: 'O',
            value: 3
        }, {
            name: 'Susanne',
            parent: 'Kiwi',
            value: 2,
            color: '#9EDE00'
        }]
    }],
    title: {
        text: 'Fruit consumption'
    }
});
