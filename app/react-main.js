var React = require('react'),
    ReactDOM = require('react-dom'),
    App = React.createFactory(require('./react-app.js'));
ReactDOM.render(new App(), document.getElementById('react-app'));