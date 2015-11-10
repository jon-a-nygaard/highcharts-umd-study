var ReactDOMServer = require('react-dom/server'),
    React = require('react'),
    ReactApp = React.createFactory(require('./react-app'));

module.exports = function(app) {

	app.get('/', function(req, res) {
		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = ReactDOMServer.renderToString(ReactApp({}));

        // Output html rendered by react
        res.render('index', { reactOutput: reactHtml });
    });
};
